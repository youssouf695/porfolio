import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import IndexProjects from "./indexProjects";
import Experiences from "./experiences";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Youssouf |</title>
        <meta name="description" content="Portfolio de Youssouf, développeur web passionné." />
      </Head>
      <main className="min-h-screen bg-transparent text-white dark:text-white px-4 pt-20 flex flex-col items-center">
        <div className="container mx-auto md:mt-36 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <section className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              YOUSSOUFA <span className="text-blue-600 dark:text-blue-700 font-medium">NJUPUEN</span>
            </h1>
            <h2 className="text-gray-300 text-xl md:text-2xl font-medium">
              UI/UX Designer | Web & Mobile Developper | Freelance
            </h2>
            <p className="text-gray-400 dark:text-gray-400 max-w-md mx-auto md:mx-0">
              En tant qu'étudiant freelance, je combine mes compétences en design sur Figma avec le développement d'applications modernes en utilisant React, Next.js et Flutter.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="/cv_NjupuenYoussoufa.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition"
              >
                Télécharger mon CV
              </a>
              <a
                href="/projects"
                className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium py-2 px-6 rounded-xl transition"
              >
                Voir mes projets
              </a>
            </div>
          </section>

          {/* Image / Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/avatar_profil.png"
              alt="Photo de Youssouf"
              width={300}
              height={300}
              className="rounded-[500px] md:w-h-[300] shadow-xl border border-gray-700 bg-gray-800 dark:bg-gray-300 opacity-90 hover:scale-110 duration-500"
              priority
            />
          </div>
        </div>

      <IndexProjects />
      </main>
      <Experiences/>
      <Footer/>
    </>
  );
}
