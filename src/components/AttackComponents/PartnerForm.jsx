function PartnerForm() {
  return (
    <div className="max-w-6xl mx-auto relative bg-black text-white px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[450px] h-[450px] bg-[#2ea9ff]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
          Are You Ready For A <br />
          <span className="text-[#2ea9ff]">Hunting Partner?</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          <span className="text-[#2ea9ff] font-semibold">
            “Attack isn't about being aggressive; it's about being relentlessly strategic.”
          </span>{" "}
          Companies <br/> like that of yours need to be extremely agile and aggressive with their Organic Marketing to <br/>
          be able to overpower the SERP.
        </p>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          But, not everyone is ready to start hunting with us. Find out if you're ready <br/> for the hunt or still in hustle mode:
        </p>

        {/* Form Box */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 mt-8 p-6 rounded-2xl shadow-xl max-w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">What's your Name?</h2>

          <input
            type="text"
            placeholder="Write your name here..."
            className="w-full px-6 py-4 rounded-full bg-[#1e3a47] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49b9ff] transition text-base"
          />

          <div className="flex justify-center mt-6">
            <button className="bg-[#49b9ff] hover:bg-[#3aa8e8] text-black font-semibold px-8 py-3 rounded-full transition text-base">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerForm;
