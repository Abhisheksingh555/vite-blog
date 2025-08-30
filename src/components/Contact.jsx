import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

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
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-7 py-3 w-full font-semibold rounded-full 
                       bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                       text-white shadow-lg hover:shadow-2xl transition"
          >
            Send Message ✉️
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
