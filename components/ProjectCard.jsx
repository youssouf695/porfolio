import Image from "next/image";
import { ExternalLink, Github, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  image,
  demoLink,
  codeLink,
  demoDisabled = false,
  githDisabled = false,
  screenshots = [],
}) {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="bg-gray-800 dark:bg-black dark:border dark:border-gray-600 rounded-2xl shadow-md overflow-hidden flex flex-col">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-56"
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 dark:text-gray-300 text-sm">{description}</p>

          {/* Mini Galerie */}
          {screenshots.length > 0 && (
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {screenshots.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`screenshot-${i}`}
                  width={100}
                  height={70}
                  className="rounded-md border hover:scale-105 transition"
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={` ${demoDisabled ? "cursor-not-allowed" : "dark:hover:bg-gray-500 hover:bg-blue-700"} bg-gray-600 text-gray-100 px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition`}
          >
            <ExternalLink size={16} /> Démo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={` ${githDisabled ? "cursor-not-allowed" : "hover:bg-gray-700 hover:text-white"} border border-gray-300 text-blue-400 dark:text-blue-400 px-4 py-2 rounded-lg flex items-center gap-2 text-sm transition`}
          >
            <Github size={16} /> Code
          </a>

          {!demoDisabled && demoLink && (
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-600 transition"
            >
              {showDemo ? <EyeOff size={16} /> : <Eye size={16} />}
              {showDemo ? "Masquer Démo" : "Afficher Démo"}
            </button>
          )}
        </div>

        {/* Iframe Démo */}
        {showDemo && demoLink && (
          <div className="mt-4">
            <iframe
              src={demoLink}
              title={`Demo ${title}`}
              className="w-full h-[400px] rounded-lg border"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
