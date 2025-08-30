import { useState } from "react";

export default function Cards() {
  const [cards] = useState([
    {
      title: "Web Development",
      description: "Building responsive and modern web applications.",
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences.",
      img: "https://blog.cubos.academy/content/images/2023/02/Designer-UI.jpg",
    },
    {
      title: "Blogging",
      description: "Sharing knowledge and tutorials on latest tech.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fHrOI0cf5uREUHoSnEi9g6pVbO477qV3WPuRp8eNTX4GyaqBsZ5pCrCFOpF1Y4Yi1GY&usqp=CAU",
    },
  ]);

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm opacity-90">{card.description}</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
