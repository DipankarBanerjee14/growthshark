import React from 'react';
import { FaArrowAltCircleLeft, FaCheck } from 'react-icons/fa';

const Why = () => {
    return (
        <section className="relative bg-black text-white px-6 py-16 overflow-hidden">
            {/* Center Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold">
                    Why Do You Need To Be{' '}
                    <span className="text-[#2ea9ff]">‘Aggressive’</span>?
                </h1>
                <p className="text-xl text-[#2ea9ff] mt-4">
                    Because it couldn't have been said better:
                    <br />
                    <em>
                        "In marketing, speed and aggression win the market share battle every time."
                    </em>
                </p>
                <p className="text-gray-300 mt-4">
                    Businesses trying to just go with ‘in-house’ growth hit the ceiling sooner or later.
                </p>
            </div>

            {/* Comparison Cards */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* In-House */}
                <div className="rounded-xl p-6 shadow-lg backdrop-blur-md bg-white/5 border border-white/10">
                    <h2 className="text-2xl font-semibold text-gray-200 px-16 mb-4">Doing It In-House</h2>
                    <ul className="space-y-3 text-gray-300 text-lg px-10">
                        <li><FaArrowAltCircleLeft className="inline mr-2 text-red-600" />Higher Overhead Costs</li>
                        <li><FaArrowAltCircleLeft className="inline mr-2 text-red-600" />Lengthy Entry And Exit Formality</li>
                        <li><FaArrowAltCircleLeft className="inline mr-2 text-red-600" />Too Many Layers Of Approval And No Freehand</li>
                        <li><FaArrowAltCircleLeft className="inline mr-2 text-red-600" />Often Missed Or Forgot Due To Client Urgency</li>
                        <li><FaArrowAltCircleLeft className="inline mr-2 text-red-600" />Lesser Focus Due To Several Matters In Hand</li>
                    </ul>
                </div>

                {/* GrowthShark */}
                <div className="rounded-xl p-6 shadow-lg backdrop-blur-md bg-white/5 border border-white/10">
                    <h2 className="text-2xl font-semibold px-16 text-[#2ea9ff] mb-4">With GrowthShark</h2>
                    <ul className="space-y-3 px-10 text-[#8cd2fc] text-lg">
                        <li><FaCheck className="inline mr-2 text-green-600" />Lesser Cost, Based On Service Not Headcount</li>
                        <li><FaCheck className="inline mr-2 text-green-600" />Quick Deal, And Quick Exit If Not Working</li>
                        <li><FaCheck className="inline mr-2 text-green-600" />Only One POC Is Enough To Take The Call</li>
                        <li><FaCheck className="inline mr-2 text-green-600" />Proactive Management & Updates</li>
                        <li><FaCheck className="inline mr-2 text-green-600" />Focused Team, Doing Marketing & Marketing Only</li>
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 mt-12 text-center">
                <button className="bg-[#2ea9ff] hover:bg-[#1e8bd8] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300">
                    Get A Free Consultation On How To Be Aggressive
                </button>
            </div>
        </section>
    );
};

export default Why;
