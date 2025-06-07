import React, { useEffect, useRef, useState, useCallback } from 'react';

function Layout({ children }) {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    const particles = useRef([]);
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

    // Constants for the animation
    const PARTICLE_COUNT = 150; // Increased number of particles for more visibility
    const PARTICLE_SIZE_MIN = 1.5;
    const PARTICLE_SIZE_MAX = 4; // Slightly larger particles
    const PARTICLE_SPEED_MIN = 0.2;
    const PARTICLE_SPEED_MAX = 0.8; // Slightly faster movement
    const CONNECTION_DISTANCE = 120; // Max distance for particles to connect (increased)
    const PARTICLE_LIFESPAN = 400; // Frames before a particle starts fading out (longer lifespan)

    // Function to create a new particle
    const createParticle = useCallback((width, height) => {
        return {
            id: Math.random(), // Unique ID for tracking
            x: Math.random() * width,
            y: Math.random() * height,
            // Random velocity, ensuring some movement
            vx: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
            vy: (Math.random() - 0.5) * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN * (Math.random() > 0.5 ? 1 : -1),
            size: Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN) + PARTICLE_SIZE_MIN,
            opacity: 0.1, // Start with a small initial opacity to be visible immediately
            life: 0, // Current life counter
            maxLife: PARTICLE_LIFESPAN + Math.random() * PARTICLE_LIFESPAN * 0.5, // Random lifespan
        };
    }, []);

    // Handle canvas resizing: Update canvas dimensions when the window resizes
    useEffect(() => {
        const handleResize = () => {
            const container = canvasRef.current?.parentElement;
            if (container) {
                // Set canvas dimensions to match its parent container
                setCanvasDimensions({
                    width: container.clientWidth,
                    height: container.clientHeight,
                });
            }
        };

        handleResize(); // Initial sizing when component mounts
        window.addEventListener('resize', handleResize); // Listen for window resize events
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener
    }, []);

    // Animation loop: Draws particles and connections on the canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Exit if canvas element is not available

        const ctx = canvas.getContext('2d');
        const { width, height } = canvasDimensions;

        // Important: Set canvas attributes to match actual dimensions for proper scaling
        canvas.width = width;
        canvas.height = height;

        // If dimensions are zero, don't start animation (canvas not ready)
        if (width === 0 || height === 0) return;

        const animate = () => {
            // Clear the entire canvas for the new frame
            ctx.clearRect(0, 0, width, height);

            // Add new particles if the current count is below the limit
            // and a random condition is met (to gradually add particles)
            if (particles.current.length < PARTICLE_COUNT && Math.random() < 0.2) {
                particles.current.push(createParticle(width, height));
            }

            // Update particle positions, opacity, and filter out dead/out-of-bounds particles
            particles.current = particles.current.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                // Fade in phase
                if (p.life < PARTICLE_LIFESPAN / 2) {
                    p.opacity = Math.min(1, p.opacity + 0.01); // Slower fade in
                } else { // Fade out phase
                    p.opacity = Math.max(0, p.opacity - 0.002); // Slower fade out
                }

                // Check if particle is out of bounds or fully faded
                const isOutOfBounds = p.x < -p.size || p.x > width + p.size || p.y < -p.size || p.y > height + p.size;
                return p.opacity > 0 && !isOutOfBounds; // Keep particle if still visible and in bounds
            });

            // Draw each particle as a circle
            particles.current.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 180, 255, ${p.opacity})`; // Blue particles
                ctx.fill();
            });

            // Draw connections (synapses) between nearby particles
            for (let i = 0; i < particles.current.length; i++) {
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p1 = particles.current[i];
                    const p2 = particles.current[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // If particles are within connection distance, draw a line
                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        // Calculate line opacity based on distance and particle opacities
                        const lineOpacity = (1 - (distance / CONNECTION_DISTANCE)) * Math.min(p1.opacity, p2.opacity);
                        ctx.strokeStyle = `rgba(100, 180, 255, ${lineOpacity * 0.5})`; // Lines are slightly less opaque
                        ctx.lineWidth = 0.7; // Slightly thicker lines
                        ctx.stroke();
                    }
                }
            }

            // Request the next animation frame
            animationFrameId.current = requestAnimationFrame(animate);
        };

        // Start the animation loop
        animationFrameId.current = requestAnimationFrame(animate);

        // Cleanup function: Cancel the animation frame when component unmounts or dependencies change
        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [canvasDimensions, createParticle]); // Dependencies: Re-run effect if canvas dimensions or createParticle function changes

    return (
        <div className="relative overflow-hidden bg-gray-900 text-gray-800 dark:bg-black dark:text-white min-h-screen">
            {/* Canvas element for the background animation */}
            <canvas
                ref={canvasRef}
                // Tailwind classes for positioning and z-index
                className="absolute inset-0 z-0"
                // Inline style to ensure canvas takes full width/height of its parent
                style={{ width: '100%', height: '100%' }}
            ></canvas>

            {/* Content of the layout, placed above the canvas */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default Layout;
