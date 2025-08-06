import { FaArrowRight } from 'react-icons/fa';

const Why = () => {
    return (
        <section className="max-w-6xl mx-auto text-white px-6 overflow-hidden">
           
            {/* Header */}
            <div className=" max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold">
                     Why Do You Need {' '}
                    <span className="text-[#2ea9ff]">Stealth Mode?</span>?
                </h1>
                <p className="text-sm sm:text-base text-gray-300 mt-4">
                    Because it couldn't have been said better:
                  </p>
                    <p className='text-lg sm:text-xl text-[#2ea9ff] mt-1'>
                        “If you're not delegating, you're drowning. Real executives <br />
                        focus on the catch—not on chasing their tails.”
                    </p>
               
                <p className="text-sm sm:text-base text-gray-300 mt-1">
                   Businesses trying to manage everything alone experience predictable chaos:
                </p>
            </div>

            {/* Comparison Cards */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* In-House */}
                <div className="rounded-xl p-5 sm:p-6 shadow-lg backdrop-blur-md bg-[#141f3a] hover:scale-105 transform transition-transform duration-300">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-200 text-center mb-4">Doing It In-House</h2>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base px-4 sm:px-10">
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Missed Reminders & Deadlines</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Overlapping Schedules & Conflicts</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Workflow Disruptions & Confusion</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Client Tantrums & Communication Breakdowns</li>
                        <li><FaArrowRight className="inline mr-2 text-red-600" />Stress-Induced Burnout & Mental Clutter</li>
                    </ul>
                </div>

                {/* GrowthShark */}
                <div className="rounded-xl p-5 sm:p-6 shadow-lg backdrop-blur-md bg-[#141f3a] hover:scale-105 transform transition-transform duration-300">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#2ea9ff] text-center mb-4">With GrowthShark</h2>
                    <ul className="space-y-3 text-gray-300 text-sm sm:text-base px-4 sm:px-10">
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Timely Reminders And Delegated Alerts</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Optimized Scheduling & Clear Calendars</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Seamless Workflow & Structured Processes</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Proactive Client Management & Updates</li>
                        <li><FaArrowRight className="inline mr-2 text-green-600" />Focused Executives, Stress-Free Teams</li>
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 mt-10 sm:mt-12 text-center mb-20 ">
                <button className="bg-[#2ea9ff] hover:bg-[#1e8bd8] text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base">
                    Get A Free Consultation On How To Be Aggressive
                </button>
            </div>
        </section>
    );
};

export default Why;
