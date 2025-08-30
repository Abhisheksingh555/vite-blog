import { motion } from "framer-motion";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      <section
        className="relative h-[80vh] flex items-center bg-cover bg-center px-6 md:px-20"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcuo79DicfKz2Fa8NcJ0DRfEUqbcj1cWvZA&s')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-2xl text-left"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Learn, Build & Share with <span className="text-indigo-400">My Blog</span>
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl">
            Dive into tutorials, explore UI/UX design, and stay ahead with the latest in tech.
          </p>
          <div className="mt-8">
            <button className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg transition">
              Start Reading
            </button>
          </div>
        </motion.div>
      </section>
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 mt-[-4rem] rounded-t-3xl shadow-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-white"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white/90 max-w-2xl mx-auto mb-12"
        >
          From building responsive web apps to crafting stunning user experiences, our blog covers it all.
        </motion.p>
        <Cards />
      </section>
      <section className="container mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
        >
          Latest Blogs
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={`https://imageio.forbes.com/specials-images/imageserve/64c2d5d97f8b3786fc03e3c3/AI-Technology-Innovation-concept/960x0.jpg?height=399&width=711&fit=bounds`}
                alt="Blog Thumbnail"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Blog Title {index + 1}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  How artificial intelligence is transforming coding, design, and automation in modern web apps.
                </p>
                <button className="text-indigo-500 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
