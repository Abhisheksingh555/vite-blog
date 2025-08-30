import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const paginatedBlogs = blogs.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(blogs.length / perPage);

  const gradientColors = [
    "from-[#a1c4fd] to-[#c2e9fb]",
    "from-[#fbc2eb] to-[#a6c1ee]",
    "from-[#84fab0] to-[#8fd3f4]",
    "from-[#ffecd2] to-[#fcb69f]",
    "from-[#cfd9df] to-[#e2ebf0]",
    "from-[#d4fc79] to-[#96e6a1]",
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center 
                   text-gray-900 dark:text-gray-100"
      >
        ✨ Explore Our Blogs
      </motion.h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl shadow-lg 
                       transform transition duration-500 hover:scale-105 
                       hover:shadow-2xl bg-gradient-to-br ${
                         gradientColors[index % gradientColors.length]
                       }`}
          >
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl"></div>

            <div className="relative p-6 sm:p-7">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-900">
                {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                {blog.body.substring(0, 100)}...
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block px-5 sm:px-6 py-2.5 rounded-full font-semibold 
                           text-sm md:text-base bg-gradient-to-r from-indigo-500 to-purple-500 
                           text-white shadow hover:shadow-lg hover:opacity-90 transition"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div
          className="flex space-x-3 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 
                     dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 px-2 py-2 max-w-full"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => setPage(i + 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-semibold transition 
                          ${
                            page === i + 1
                              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                          }`}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
