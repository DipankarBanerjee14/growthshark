import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img4 from '..//../assets/4.png';
import img5 from '..//../assets/5.png';
import img6 from '..//../assets/6.png';

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
  quodeck,
];

const AboutSection = () => {
  return (
    <section className="text-white px-6 py-6 overflow-hidden">
      {/* Header + Form */}
      <div className="max-w-6xl mx-auto flex gap-8 relative z-10 flex-col lg:flex-row">
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold mb-4">
            Before You Hunt, Get <br /> In <span className="text-[#74c0f4]">Stealth Mode</span>
          </h1>
          <p className="text-gray-300">
            Successful companies never hunt blind— they organize, <br /> strategize, and delegate
            with precision. Our Executive <br /> Assistants streamline your operations
            behind-the-scenes, <br /> prepping you for the perfect strike.
          </p>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-[#141f3a] bg-opacity-80 rounded-xl p-6 sm:p-8 shadow-lg text-white ">
            <form className='space-y-6'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
              <input type="text" placeholder="Work Email" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
              <input type="text" placeholder="Contact No" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
              <input type="text" placeholder="Website URL" className="p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-400">Service you're interested in:</label>
              <select className="w-full p-3 rounded bg-gray-800 text-white">
                <option>Email Gatekeeping</option>
                <option>Calendar Coordination</option>
                <option>Call Gatekeeping</option>
                <option>Market Research</option>
                <option>Client Intelligence</option>
                <option>Social Media Management</option>
                <option>Manual Outreach</option>
                <option>Document Preparation</option>
                <option>Task Delegation</option>
              </select>
            </div>


            <textarea rows="4"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              placeholder="Briefly discuss your requirement">
            </textarea>

            <div>
              <label className="block mb-1 text-sm text-gray-400">
                What's your monthly recurring revenue?
              </label>
              <select className="w-full p-3 rounded bg-gray-800 text-white">
                <option>Less than $5,000</option>
                <option>$5,000-$10,000</option>
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

      {/* Auto Slider for Logos */}
                  <div className="mt-20 relative z-10">
                      <h2 className="text-4xl font-bold mb-6 text-center text-[#2ea9ff]">Those Who Hunted With Us</h2>
      
                      {/* Side Blur */}
                      <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34  bg-gradient-to-r from-[#0b223f] to-transparent z-20 "></div>
                      <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-[#0b223f] to-transparent z-20 "></div>
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
      {/* Cards Section Heading */}
<div className="text-center max-w-6xl mx-auto mt-24 mb-5 ">
  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
    The <span className="text-[#49b9ff]">Stealth Formula</span> Of Ours,
    <br /> Is Based On
  </h2>
</div>

{/* Cards Grid */}
   {/* Cards Grid */}
<div className="relative lg:h-[500px]  flex flex-col lg:flex-row items-center justify-center gap-12 ">

  {/* Card 1 */}
  <div
    className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
    style={{ backgroundImage: `url(${img4})` }}
  >
    <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
      <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Strategic Insights</h3>
      <p className="text-sm font-medium text-black">
        Explore data-driven perspectives to navigate competitive landscapes effectively.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div
    className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
    style={{ backgroundImage: `url(${img5})` }}
  >
    <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
      <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Innovative Strategies</h3>
      <p className="text-sm font-medium text-black">
        Unlock unconventional methods to achieve high-growth outcomes.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div
    className="w-full max-w-xs h-[350px] rounded-2xl shadow-lg bg-cover bg-center flex items-end p-6"
    style={{ backgroundImage: `url(${img6})` }}
  >
    <div className="w-full bg-white/20 backdrop-blur-md p-5 rounded-xl border border-white/30">
      <h3 className="text-xl font-semibold text-[#2ea9ff] mb-2">Personalized Tactics</h3>
      <p className="text-sm font-medium text-black">
        Customize your execution playbook based on industry and user behavior.
      </p>
    </div>
  </div>

</div>
                         
    </section>
  );
};

export default AboutSection;
