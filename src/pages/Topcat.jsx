import { useNavigate } from 'react-router-dom';
export default function Topcat() {
  const navigate = useNavigate();

  // const categories = [
  //   { name: "Cars", img: "../assets/download.jpeg" },
  //   { name: "Mobiles", img: "/public/mobile.jpeg" },
  //   { name: "Fashion", img: "/public/download (1).jpeg" },
  //   { name: "Electronics", img: "/public/download (2).jpeg" },
  //   { name: "Houses", img: "/public/images.jpeg" },
  //   { name: "Furniture", img: "/public/download (3).jpeg" },
  //   { name: "Pets", img: "/public/download (4).jpeg" },
  //   { name: "Books", img: "/public/images (1).jpeg" },
  //   { name: "Sports", img: "/public/download (5).jpeg" },
  //   { name: "LandMark", img: "/public/download (6).jpeg" },
  // ];

  const categories = [
    { name: "Cars", img: `${import.meta.env.BASE_URL}download.jpeg` },
    { name: "Mobiles", img: `${import.meta.env.BASE_URL}mobile.jpeg` },
    { name: "Fashion", img: `${import.meta.env.BASE_URL}download (1).jpeg` },
    { name: "Electronics", img: `${import.meta.env.BASE_URL}download (2).jpeg` },
    { name: "Houses", img: `${import.meta.env.BASE_URL}images.jpeg` },
    { name: "Furniture", img: `${import.meta.env.BASE_URL}download (3).jpeg` },
    { name: "Pets", img: `${import.meta.env.BASE_URL}download (4).jpeg` },
    { name: "Books", img: `${import.meta.env.BASE_URL}images (1).jpeg` },
    { name: "Sports", img: `${import.meta.env.BASE_URL}download (5).jpeg` },
    { name: "LandMark", img: `${import.meta.env.BASE_URL}download (6).jpeg` },
  ];
  return (
    <div className="px-4 my-4">
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center min-w-[80px] cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => navigate(`/category/${cat.name}`)}
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover"
            />
            <h1 className="text-sm md:text-lg mt-2">{cat.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
