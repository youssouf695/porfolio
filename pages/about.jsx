export  default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center px-4">
        Je suis un développeur passionné par la création d'applications web et mobiles. J'aime relever des défis techniques et apprendre de nouvelles technologies.
      </p>
      <img src="/images/profile.jpg" alt="Mon profil" className="mt-6 rounded-full w-48 h-48 object-cover" />
    </div>
  );
}