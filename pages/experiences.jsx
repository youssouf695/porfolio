"use client";

export default function Experiences() {
  const experiences = [
    {
      date: "Octobre 2024 - En cours",
      type: "Développeur Web (temps partiel)",
      entreprise: "DailyLearning",
      theme: "Développement Front-end & Maquettes",
      link: "https://dailylearning.org",
      description:
        "Participation à des projets React/Next.js, développement Python, création de maquettes avec Figma.",
    },
    {
      date: "20 mars – 26 mai 2024",
      type: "Stage académique",
      entreprise: "DailyLearning",
      theme: "Système de gestion de notes",
      link: "https://dailylearning.org",
      description:
        "Conception et implémentation d’un système numérique pour la gestion académique (FS de Ngaoundéré).",
    },
    {
      date: "Janvier – Février 2024",
      type: "Projet freelance",
      entreprise: "Projet personnel / client",
      theme: "Site vitrine de vente de moutons",
      link: "https://la-ferme-rust.vercel.app",
      description:
        "Conception d’un site de vente avec panier, contact WhatsApp, réalisé en React/Next.js.",
    },
    {
      date: "08 avril – 28 juin 2023",
      type: "Stage académique",
      entreprise: "SYGALIN SAS",
      theme: "Gestion d’exceptions avec Sentry",
      link: "https://www.sygalin.com",
      description:
        "Installation et configuration de Sentry pour la collecte des erreurs dans les applications SYGALIN.",
    },
    {
      date: "Décembre 2022 – Février 2023",
      type: "Projet mobile (INGOSEN)",
      entreprise: "Coporate-SimTrack",
      theme: "Gestion de vente et reporting agents",
      link: "#",
      description:
        "Application mobile pour le suivi des ventes, commandes, et rapports d’agents activateurs de SIM.",
    },
    {
      date: "28 juin – 29 juillet 2022",
      type: "Stage ouvrier (initiation)",
      entreprise: "Hôpital Régional de Ngaoundéré",
      theme: "Découverte du monde professionnel",
      link: "",
      description:
        "Stage de niveau DUT 1 pour une première immersion en environnement professionnel.",
    },
    {
      date: "2021 – 2023",
      type: "Agent commercial",
      entreprise: "INGOSEN SARL & Ets ShalomService",
      theme: "Téléphonie mobile & services",
      link: "",
      description:
        "Vente de cartes SIM, crédits, opérations Orange Money / MTN Mobile Money, conseil client.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 dark:bg-black px-4 pt-24 text-white dark:text-white">
        <h1 className="bg-gray-300 rounded text-gray-900 dark:text-black w-full flex items-center justify-center h-20 text-4xl font-bold mb-8 text-center">
          Mon Parcours
        </h1>
      <div className="max-w-4xl mx-auto">

        <div className="relative border-l-4 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-[15px] w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900 dark:border-black"></div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <p className="text-sm text-blue-400 font-semibold">{exp.date}</p>
                <h3 className="text-xl font-bold mt-1 text-white">{exp.type}</h3>
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <p className="text-sm text-gray-300 italic underline hover:text-blue-400 transition">{exp.entreprise}</p>
                  </a>
                ) : (
                  <p className="text-sm text-gray-300 italic">{exp.entreprise}</p>
                )}
                <p className="mt-2 text-sm text-blue-200 font-semibold">{exp.theme}</p>
                <p className="text-sm mt-1 text-gray-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
