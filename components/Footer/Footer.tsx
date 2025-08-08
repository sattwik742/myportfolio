import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-8 bg-gray-900 text-white">
      {/* Left side */}
      <p className="text-sm">&copy; 2025 Sattwik. All rights reserved.</p>

      {/* Right side icons */}
      <div className="flex space-x-6">
        <a href="https://github.com/sattwik742" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/linuxricer" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 hover:text-blue-400" />
        </a>
        <a href="https://www.instagram.com/sattw_ik23" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-6 h-6 hover:text-pink-400" />
        </a>
      </div>
    </footer>
  );
}
