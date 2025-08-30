import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-700 dark:text-gray-300 mt-16">
      <div className="container mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            My Blog
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A space to share <span className="font-medium">ideas, tutorials,</span> 
            and <span className="font-medium">stories</span>.  
            Stay connected and keep learning 🚀.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-blue-500 hover:translate-x-1 transition-all">Home</Link>
            <Link to="/blog" className="hover:text-blue-500 hover:translate-x-1 transition-all">Blog</Link>
            <Link to="/about" className="hover:text-blue-500 hover:translate-x-1 transition-all">About</Link>
            <Link to="/contact" className="hover:text-blue-500 hover:translate-x-1 transition-all">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Follow Me
          </h3>
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 dark:border-gray-800 py-5">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-blue-500">My Blog</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
