"use client"; // si tu utilises App Router

import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Competences() {
  return (
    <main className="min-h-screen bg-gray-900 dark:bg-black text-white dark:text-white px-4 pt-20">
      <div className="container mx-auto">
        <h1 className="bg-gray-300 rounded text-gray-900 dark:text-black w-full flex items-center justify-center h-20 text-4xl font-bold mb-12 text-center">
          Mes Compétences
        </h1>

        {/* UI/UX Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">🎨 UI/UX Design</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Figma", "Photoshop", "Illustrator"].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-blue-600 transition">
                <CheckCircle className="text-green-400 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Développement Web/Mobile */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Développement Web/Mobile</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "React Native",
              "Flutter",
              "HTML, CSS",
              "PHP",
              "Tailwind CSS",
              "JavaScript",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-blue-600 transition">
                <CheckCircle className="text-green-400 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outils & Soft Skills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Outils & Autres</h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Git / GitHub",
              "Vercel",
              "Sentry (gestion des erreurs)",
              "Gestion de projets",
              "Travail en équipe",
              "Ponctualité",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-blue-600 transition">
                <CheckCircle className="text-green-400 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer/>
    </main>
  );
}
