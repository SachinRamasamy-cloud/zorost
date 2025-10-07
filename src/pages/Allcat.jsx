import { useNavigate } from 'react-router-dom';

export default function Allcat() {
    const navigate = useNavigate();

    const categories = [
        { name: "Cars", img: "/public/download.jpeg" },
        { name: "Mobiles", img: "/public/mobile.jpeg" },
        { name: "Fashion", img: "/public/download (1).jpeg" },
        { name: "Electronics", img: "/public/download (2).jpeg" },
        { name: "Houses", img: "/public/images.jpeg" },
        { name: "Furniture", img: "/public/download (3).jpeg" },
        { name: "Pets", img: "/public/download (4).jpeg" },
        { name: "Books", img: "/public/images (1).jpeg" },
        { name: "Sports", img: "/public/download (5).jpeg" },
        { name: "LandMark", img: "/public/download (6).jpeg" },
    ];

       return (
    <div className="px-4 py-6">
        <h2 className="text-2xl font-bold text-white mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {categories.map((cat, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center cursor-pointer transform transition duration-300 hover:scale-105"
                    onClick={() => navigate(`/category/${cat.name}`)}
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                        {cat.name}
                    </h3>
                </div>
            ))}
        </div>
    </div>

);
}
