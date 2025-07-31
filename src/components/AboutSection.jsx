import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';

const AboutSection = () => {
    return (
        <section className="relative bg-black text-white px-6 py-12 overflow-hidden">
            {/* Glow Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div
                    className="w-[900px] h-[700px] rounded-full blur-[160px] opacity-80"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.25) 35%, rgba(59,130,246,0.1) 65%, transparent 100%)',
                    }}
                />
            </div>

            {/* Header + Form */}
            <div className="max-w-6xl mx-auto flex gap-8 relative z-10">
                <div className="w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Know Your Territory Before The Hunt</h1>
                    <p className="text-gray-300">
                        Be aware of other 'predators' & your strategy for a strike. Organize, strategize, and delegate with precision.
                        Fill the form below and let our Marketing team identify your blue ocean strategy for a perfect take down.
                    </p>
                </div>

                <div className="w-1/2">
                    <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="email" placeholder="Work Email" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="email" placeholder="Contact Email" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="url" placeholder="Website URL" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Service you're interested in</label>
                                <select className="w-full p-3 rounded bg-gray-800 text-white">
                                    <option>Social Media Marketing</option>
                                    <option>Email Campaigns</option>
                                    <option>SEO Optimization</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Briefly discuss your requirement</label>
                                <textarea rows="4" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" placeholder="Let us know your goals..."></textarea>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">What's your monthly recurring revenue?</label>
                                <select className="w-full p-3 rounded bg-gray-800 text-white">
                                    <option>Less than $5,000</option>
                                    <option>$5,000 - $20,000</option>
                                    <option>$20,000+</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Logos */}
            <div className="mt-20 relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    {Array.from({ length: 10 }, (_, i) => (
                        <img key={i} src={`logo${i + 1}.png`} alt={`Logo ${i + 1}`} className="h-12 grayscale hover:grayscale-0 transition" />
                    ))}
                </div>
            </div>

            {/* Cards Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-24">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">How We Do It.</h1>
                    <ul className="list-none space-y-2 text-lg text-gray-300">
                        <li>→ Gain Digital Advantage</li>
                        <li>→ Results-Oriented Solutions</li>
                        <li>→ From Art To Science</li>
                    </ul>
                </div>

                {/* Layered Cards with Glassmorphism */}
                <div className="relative h-[500px]">
                    {/* Card 1 */}
                    <div
                        className="absolute left-[-20px] top-[110px] w-[280px] h-[320px] z-[30] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
                        style={{ backgroundImage: `url(${img1})` }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                            <h2 className="text-xl font-semibold text-blue-300">Strategic Insights</h2>
                            <p className="text-sm font-medium text-black">
                                Explore data-driven perspectives to navigate competitive landscapes effectively.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="absolute left-[270px]  w-[280px] h-[320px] z-[20] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
                        style={{ backgroundImage: `url(${img2})` }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                            <h2 className="text-xl font-semibold text-blue-300">Innovative Strategies</h2>
                            <p className="text-sm font-medium text-black">
                                Unlock unconventional methods to achieve high-growth outcomes.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="absolute top-[330px] left-[270px] w-[280px] h-[320px] z-[10] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
                        style={{ backgroundImage: `url(${img3})` }}
                    >
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                            <h2 className="text-xl font-semibold text-blue-300">Personalized Tactics</h2>
                            <p className="text-sm font-medium text-black">
                                Customize your execution playbook based on industry and user behavior.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
