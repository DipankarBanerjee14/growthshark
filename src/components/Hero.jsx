import sharkImage from '../assets/shark.png';

export default function Hero() {
    return (
        <section
            className="w-full min-h-screen bg-black bg-cover bg-center flex items-center justify-start text-white px-4"
            style={{ backgroundImage: `url(${sharkImage})` }}
        >
            <div className="max-w-4xl text-left ml-6 sm:ml-12 md:ml-20">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Dominate The <br />
                    <span className="text-[#2ea9ff]">Blue Ocean</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mt-4">
                    Get ready to hunt down your competitors
                </p>
                <button className="mt-8 px-6 py-3 bg-[#8cd2fc] hover:bg-[#6dc8fc] text-black font-semibold rounded-full transition">
                    CHECK YOUR ELIGIBILITY
                </button>
            </div>
        </section>
    );
}
