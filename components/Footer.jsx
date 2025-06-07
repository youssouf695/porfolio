export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 dark:bg-black text-gray-300 py-8 mt-20 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {currentYear} Youssoufa NJUPUEN. Tous droits réservés.
          </p>
  
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/youssouf695"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
  
            <a
              href="mailto:youssoufjordannjupuen@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
  
  
            <a
              href="https://www.linkedin.com/in/youssoufa-njupuen-aa566b275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
  
            <a
              href="https://wa.me/237695121070"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <a
              href="/cv_NjupuenYoussoufa.pdf"
              download
              className="hover:text-white transition"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </footer>
    );
  }
  