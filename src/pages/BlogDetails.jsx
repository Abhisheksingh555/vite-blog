import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog)
    return (
      <p className="text-center mt-24 text-gray-600 dark:text-gray-300 text-xl animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="container mx-auto py-16 px-6">
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mb-10 px-7 py-3 font-semibold rounded-full 
                   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                   text-white shadow-lg hover:shadow-2xl transition"
      >
        ← Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 
                   dark:from-gray-800 dark:via-gray-900 dark:to-black p-10 
                   rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/20 via-pink-100/10 to-transparent 
                        dark:from-purple-900/10 dark:via-pink-800/10 dark:to-transparent 
                        backdrop-blur-md rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 
                         text-gray-900 dark:text-gray-100 leading-snug">
            {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            {blog.body}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-indigo-100 to-purple-100 
                       dark:from-gray-700 dark:to-gray-800 shadow-lg"
          >
            <p className="text-indigo-700 dark:text-indigo-300 font-medium text-lg md:text-xl">
              💡 Insight: Great blogs don’t just share ideas — they spark new ones.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
