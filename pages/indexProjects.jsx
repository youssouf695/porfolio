import { useState } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";

export default function IndexProjects() {
  const projects = [
    {
      title: "Site de vente de moutons",
      description: "Un site vitrine de vente de mouton directement avec contact WhatsApp du vendeur intégré.",
      image: "/images/ferme/image.png",
      demoLink: "https://la-ferme-rust.vercel.app/",
      codeLink: "https://github.com/youssouf695/la-ferme",
      category: "Web",
      screenshots: [
        "/images/ferme/ferme0.png",
        "/images/ferme/ferme2.png",
        "/images/ferme/ferme1.png",
      ]
    },
    {
      title: "FS Schedule",
      description: "Un système de Gestion des Emploi de Temps à la FS de Ngaoundéré.",
      image: "/images/fs/fs1.png",
      demoDisabled: true,
      codeLink: "https://github.com/RuthDinDev/Gestion_Emploi_Du_Temps",
      category: "Web",
      screenshots: [
        "/images/fs/fs2.png",
        "/images/fs/fs3.png",
        "/images/fs/fs4.png"
      ]
    },
    {
      title: "Coporate-SimTrack",
      description: "Une application mobile de gestion de commandes, ventes et rapports des agents activateurs des cartes sims à orange Cameroun pour le compte de INGOSEN",
      image: "/images/sim/sim0.png",
      codeLink: "#",
      githDisabled: false,
      category: "Mobile",
      screenshots: [
        "/images/sim/sim1.jpg",
        "/images/sim/sim2.jpg",
        "/images/sim/sim3.jpg",
      ]
    },
  ];

  return (
    <>
      <Head><title>Mes Projets | Youssouf</title></Head>

      <main className="min-h-screen bg-gray-900 dark:bg-black px-4 pt-20 text-white dark:text-white">
        <div className="container mx-auto">
          <h1 className="bg-gray-300 rounded text-gray-900 dark:text-black w-full flex items-center justify-center h-20 text-4xl font-bold mb-8 text-center">
            Mes Projets
          </h1>

          {/* GRILLE DES PROJETS */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
            ))}
            </div>

            {/* BOUTON VOIR PLUS */}
            {/* <div className="flex justify-end mt-2"> */}
            <a
                className="flex justify-end mt-2 px-4 py-2 text-white font-medium rounded shadow hover:scale-105 hover:font-bold duration-1000 transition"
                href="/projects"
            >
                Voir plus →
            </a>
            {/* </div> */}

        </div>
      </main>
    </>
  );
}
