import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-white py-6 flex flex-col items-center px-6 md:px-16">
      {/* Top Section - Navigation and Socials */}
      <div className="bg-black/30 text-white w-full max-w-7xl mx-auto p-4 rounded-2xl flex flex-wrap items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex space-x-3 sm:space-x-6 text-sm sm:text-lg font-medium p-3">
          <a href="#home" className="hover:text-customGreen">
            Home
          </a>
          <a href="#work" className="hover:text-customGreen">
            Work
          </a>
          <a href="#contact" className="hover:text-customGreen">
            Contact
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1wkrzG7mANIdg9tzJ4GB1eOoYdFKeSJrY"
            className="hover:text-customGreen flex items-center"
            download
          >
            Download CV <span className="ml-2">⬇️</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end space-x-4 text-lg sm:text-xl mt-2 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/premal-kadam/"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/Premal2002"
            className="hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <Github size={24} />
          </a>

          <a
            href="mailto:premkasdam@143@gmail.com"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
            title="Gmail"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Section - Credit */}
      <div className="mt-4">
  <p className="text-white text-xs sm:text-sm md:text-base lg:text-md">
    Developed and Designed by Premal Kadam
  </p>
</div>

    </footer>
  );
}
