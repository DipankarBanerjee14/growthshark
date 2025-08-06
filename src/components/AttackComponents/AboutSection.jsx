import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '..//../assets/1.png';
import img2 from '..//../assets/2.png';
import img3 from '..//../assets/3.png';

import tempcon from '..//../assets/tempcon.png';
import Solinas from '..//../assets/Solinas.png';
import sofyrus from '..//../assets/sofyrus.png';
import Sidepath from '..//../assets/Sidepath.png';
import Scoop from '..//../assets/Scoop.png';
import S_IB from '..//../assets/S_IB.png';
import roshni_sanghvi from '..//../assets/roshni_sanghvi.png';
import Rise_hydroponics from '..//../assets/Rise_hydroponics.png';
import rentpost from '..//../assets/rentpost.png';
import quodeck from '..//../assets/quodeck.png';

const logos = [
    tempcon,
    Solinas,
    sofyrus,
    Sidepath,
    Scoop,
    S_IB,
    roshni_sanghvi,
    Rise_hydroponics,
    rentpost,
    quodeck
];

const AboutSection = () => {
    return (
        <section className="relative bg-black text-white px-6 py-6 overflow-hidden">
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
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  gap-8 relative z-10">
                <div className="lg:w-1/2 space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Know Your Territory <br /> Before The Hunt</h1>
                    <p className="text-gray-300">
                        Be aware of other 'predators' & your strategy for a strike. <br /> Organize, strategize, and delegate with precision.
                    </p>
                    <p className="text-gray-300">
                        Fill the form below and let our Marketing team identify <br /> your blue ocean strategy for a perfect take down.
                    </p>
                </div>

                <div className="lg:w-1/2">
                    <div className="bg-gray-900 bg-opacity-80 rounded-xl p-6 sm:p-8 shadow-lg text-white ">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="email" placeholder="Work Email" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="email" placeholder="Contact No" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                                <input type="url" placeholder="Website URL" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">Service you're interested in</label>
                                <select className="w-full p-3 rounded bg-gray-800 text-white">
                                    <option>Social Media Marketing</option>
                                    <option>SEO</option>
                                    <option>Forum Marketing</option>
                                    <option>Linkedin Personal Branding</option>
                                    <option>Community Marketing</option>
                                    <option>Content Marketing Strategy</option>
                                    <option>Video Editing & Graphics Designing</option>
                                    <option>YouTube SEO</option>
                                    <option>Voice-over and Scripting</option>
                                    <option>Photo and Videography</option>
                                    <option>Translation & Transcription</option>
                                </select>
                            </div>

                            <div>
                                
                                <textarea rows="4"
                                 className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
                                  placeholder="Briefly discuss your requirement">
                                  </textarea>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm text-gray-400">What's your monthly recurring revenue?</label>
                                <select className="w-full p-3 rounded bg-gray-800 text-white">
                                    <option>Less than $5,000</option>
                                    <option>$5,000 - $10,000</option>
                                    <option>More than $10,000</option>
                                </select>
                            </div>

                           <div className="flex items-center justify-center">
                           <button className="py-2 px-6 bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold rounded-full shadow-md transition duration-300">
                          Submit
                         </button>
                         </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Logos Slider */}
            <div className="mt-20 relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>
              {/* Left fade */}
              <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-black to-transparent z-10"></div>

             {/* Right fade */}
             <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-black to-transparent z-10"></div>

             <Swiper
  slidesPerView="auto"
  spaceBetween={50}
  loop={true}
  speed={3000} // higher = slower scroll
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  freeMode={true}
  freeModeMomentum={false}
  modules={[Autoplay]}
  className="px-6"
>
  {logos.map((logo, i) => (
    <SwiperSlide
      key={i}
      className="!w-auto flex justify-center items-center mt-10 mb-10"
    >
      <img
        src={logo}
        alt={`Logo ${i + 1}`}
        className="h-12 grayscale hover:grayscale-0 transition duration-300"
      />
    </SwiperSlide>
      ))}
     </Swiper>

            </div>

            {/* Cards Section */}
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-24 mb-5">
    {/* Text Section */}
    <div className="space-y-6 ">
        <h1 className="text-4xl font-bold">How We Do It.</h1>
        <ul className="list-none space-y-2 text-lg text-gray-300">
            <li>→ Gain Digital Advantage</li>
            <li>→ Results-Oriented Solutions</li>
            <li>→ From Art To Science</li>
        </ul>
    </div>

    {/* Cards Section */}
    <div className="relative lg:h-[500px] flex flex-col items-center gap-12 lg:mb-25 lg:block">
        {/* Card 1 */}
        <div
            className="lg:absolute lg:left-[-20px] lg:top-[110px] w-[280px] h-[320px] z-[30] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img1})` }}
        >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <h2 className="text-xl font-semibold text-blue-500">Strategic Insights</h2>
                <p className="text-sm font-medium text-black">
                    Explore data-driven perspectives to navigate competitive landscapes effectively.
                </p>
            </div>
        </div>

        {/* Card 2 */}
        <div
            className="lg:absolute lg:left-[270px] lg:top-[0px] w-[280px] h-[320px] z-[20] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img2})` }}
        >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <h2 className="text-xl font-semibold text-blue-500">Innovative Strategies</h2>
                <p className="text-sm font-medium text-black">
                    Unlock unconventional methods to achieve high-growth outcomes.
                </p>
            </div>
        </div>

        {/* Card 3 */}
        <div
            className="lg:absolute lg:left-[270px] lg:top-[330px] w-[280px] h-[320px] z-[10] bg-cover bg-center p-6 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] flex flex-col justify-end"
            style={{ backgroundImage: `url(${img3})` }}
        >
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl border border-white/30">
                <h2 className="text-xl font-semibold text-blue-500">Personalized Tactics</h2>
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
