import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-white via-gray-50 to-gray-100 
                   dark:from-gray-800 dark:via-gray-900 dark:to-black 
                   p-10 rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 
                       text-gray-900 dark:text-gray-100">
          About This Blog
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-indigo-600 dark:text-indigo-400">My Blog</span>!  
          Here I share insights, ideas, and resources about web development, technology, 
          and personal growth. The goal is to make learning fun, practical, and inspiring.
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
          I believe every line of code tells a story, and blogs help us connect 
          with people who are on the same journey. Stick around, read, and maybe 
          share your thoughts too! 🚀
        </p>
      </motion.div>
    </div>
  );
}
