import { useState } from "react";
import Head from "next/head";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const categories = ["Tous", "Web", "Design", "IA", "Mobile"];

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
    //   demoLink: "",
      demoDisabled: true,
      codeLink: "https://github.com/RuthDinDev/Gestion_Emploi_Du_Temps",
      category: "Web",
      screenshots: [
        "/images/fs/fs2.png",
        "/images/fs/fs3.png",
        "/images/fs/fs4.png",
      ]
    },
    {
      title: "Porfolio",
      description: "Un site de porfolio conçu de façon dynamique pour etre adapter à des clients particuliers",
      image: "/images/porfolio/porf1.png",
      demoLink: "https://njupuen.vercel.app",
      codeLink: "https://github.com/youssouf695/porfolio",
      // githDisabled: true,
      category: "Design",
      screenshots: [
        "/images/porfolio/porf1.png",
        "/images/porfolio/porf2.png",
        "/images/porfolio/porf1.png",
      ]
    },
    {
      title: "Coporate-SimTrack",
      description: "Une application mobile de gestion de commandes, ventes et rapports des agents activateurs des cartes sims à orange Cameroun pour le compte de INGOSEN",
      image: "/images/sim/sim0.png",
    //   demoLink: "#",
      codeLink: "#",
      demoDisabled: true,
      githDisabled: false,
      category: "Mobile",
      screenshots: [
        "/images/sim/sim1.jpg",
        "/images/sim/sim2.jpg",
        "/images/sim/sim3.jpg",
      ]
    },
    {
        title: "Agent AI",
        description: "Un Agent AI local implémentée pour l'aide à la bibliothèque, permet de faciliter la synthèse, le résumé, la recherche sur un thème, un document,...",
        image: "/images/ia/ia1.png",
      //   demoLink: "#",
        codeLink: "#",
        githDisabled: false,
        category: "IA",
        screenshots: [
          "/images/ia/ia4.png",
          "/images/ia/ia2.png",
          "/images/ia/ia3.png",
        ]
      }
  ];
  

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Head><title>Mes Projets | Youssouf</title></Head>

      <main className="min-h-screen bg-gray-900 dark:bg-black px-4 pt-20 text-white dark:text-white">
        <div className="container mx-auto">
          <h1 className="bg-gray-300 rounded text-gray-900 dark:text-black w-full flex items-center justify-center h-20 text-4xl font-bold mb-8 text-center">Mes Projets</h1>

          {/* FILTRE */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-white text-gray-900"
                    : "border-gray-700 text-gray-600 dark:text-gray-00"
                } hover:bg-gray-700 hover:text-white`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GRILLE */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
