import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, EyeOff, X } from "lucide-react"; // Ajout de l'icône X pour le bouton de fermeture

export default function ProjectCard({
  title,
  description,
  image, // L'URL de l'image
  demoLink,
  codeLink,
  demoDisabled = false,
  githDisabled = false,
  screenshots = [], // Tableau d'URLs d'images
}) {
  const [showDemo, setShowDemo] = useState(false);

  // Cet useEffect gère le défilement du corps (body) de la page.
  // Lorsque la démo est affichée, il désactive le défilement de la page principale
  // pour une meilleure expérience, et le réactive quand la démo est masquée.
  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = 'hidden'; // Empêche le défilement du corps
    } else {
      document.body.style.overflow = 'unset'; // Rétablit le défilement normal
    }
    // Fonction de nettoyage: s'assure que le défilement est réactivé si le composant est démonté
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDemo]); // Se déclenche quand 'showDemo' change

  return (
    // Conteneur principal de la carte de projet
    <div className="bg-gray-800 dark:bg-black dark:border dark:border-gray-600 rounded-2xl shadow-md overflow-hidden flex flex-col">
      {/* Image principale du projet, remplacée par <img> */}
      <img
        src={image}
        alt={title}
        // Utilisation de classes Tailwind pour la taille et le positionnement de l'image
        className="object-cover w-full h-56"
        // Pour les balises <img>, il est bon de fournir des dimensions intrinsèques
        // même si les classes Tailwind gèrent le responsive. Ici, des valeurs arbitraires
        // pour aider le navigateur à réserver l'espace avant le chargement.
        width={600}
        height={400}
      />
      {/* Contenu textuel et boutons de la carte */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 dark:text-gray-300 text-sm">{description}</p>

          {/* Mini Galerie d'images (captures d'écran), remplacée par <img> */}
          {screenshots.length > 0 && (
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`screenshot-${i}`}
                  width={100} // Dimensions fixes pour les vignettes
                  height={70} // Dimensions fixes pour les vignettes
                  className="rounded-md border object-cover h-12 transition"
                  // Note: 'w-full' a été retiré ici pour éviter que chaque vignette ne prenne 100% de la largeur du conteneur flex.
                  // Si vous souhaitez une largeur fixe, 'w-[100px]' ou juste laisser 'width' suffirait.
                  // 'h-12' est conservé comme dans votre version originale.
                />
              ))}
            </div>
          )}
        </div>

        {/* Section des Boutons (Démo, Code, Afficher/Masquer Démo) */}
        <div className="mt-4 flex flex-wrap gap-3">
          {/* Bouton Lien Démo (ouvert dans un nouvel onglet) */}
          <a
            href={demoDisabled ? undefined : demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition ${
              demoDisabled
                ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50 pointer-events-none" // Style si désactivé
                : "bg-gray-600 text-gray-100 hover:bg-blue-700" // Style si activé
            }`}
          >
            <ExternalLink size={16} /> Démo
          </a>

          {/* Bouton Lien Code (vers GitHub) */}
          <a
            href={githDisabled ? undefined : codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition border ${
              githDisabled
                ? "border-gray-600 text-gray-400 cursor-not-allowed opacity-50 pointer-events-none" // Style si désactivé
                : "border-gray-300 text-blue-400 hover:bg-gray-700 hover:text-white" // Style si activé
            }`}
          >
            <Github size={16} /> Code
          </a>

          {/* Bouton pour Basculer l'affichage de l'Iframe Démo (le nouveau panneau) */}
          {!demoDisabled && demoLink && (
            <button
              onClick={() => setShowDemo(!showDemo)} // Inverse l'état 'showDemo'
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-600 transition"
            >
              {showDemo ? <EyeOff size={16} /> : <Eye size={16} />} {/* Icône change selon l'état */}
              {showDemo ? "Masquer Démo" : "Afficher Démo"} {/* Texte du bouton change selon l'état */}
            </button>
          )}
        </div>
      </div>

      {/* PANNEAU FLOTTANT DE DÉMO
        Ceci est le nouveau panneau qui s'affiche sur le côté droit de l'écran.
        Il est positionné de manière fixe pour flotter au-dessus du contenu de la page.
      */}
      {showDemo && demoLink && (
        <div className="fixed inset-0 z-[100] bg- bg-opacity-70 flex justify-end">
          {/* Conteneur principal du panneau de démo */}
          <div className="relative w-full h-full md:w-2/3 lg:w-1/2 xl:w-2/5 bg-gray-900 dark:bg-zinc-800 shadow-lg flex flex-col rounded-l-lg overflow-hidden">
            {/* En-tête du panneau avec le titre de la démo et le bouton de fermeture */}
            <div className="p-4 bg-gray-800 dark:bg-zinc-900 flex items-center justify-between">
              <h4 className="text-xl font-semibold text-white">Démo: {title}</h4>
              <button
                onClick={() => setShowDemo(false)} // Ferme le panneau en masquant la démo
                className="text-gray-400 hover:text-white transition"
                aria-label="Fermer la démo"
              >
                <X size={24} /> {/* Icône de croix pour fermer */}
              </button>
            </div>
            {/* Iframe qui affiche la démo du projet */}
            <iframe
              src={demoLink}
              title={`Demo ${title}`}
              className="flex-1 w-full h-full border-none" // 'flex-1' permet à l'iframe de prendre tout l'espace disponible
              allowFullScreen // Permet le mode plein écran pour l'iframe
            />
          </div>
        </div>
      )}
    </div>
  );
}