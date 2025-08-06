export default function Automation() {
  const highlight = "text-sky-400";
  const subheading = "text-xl sm:text-2xl font-semibold text-sky-300 mb-4";
  const text = "text-gray-300 text-sm";

  return (
    <section className="bg-gradient-to-br from-black via-[#0b223f] to-[#06263f] text-white px-6 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            The Power of Copywriting in 2025
          </h2>
          <h3 className="text-2xl font-semibold text-sky-400 mb-6">Did You Know?</h3>
          <p className="text-gray-300 text-lg">
            Businesses using automation tools for marketing can see a{" "}
            <span className="font-bold text-white">14.5% increase in sales productivity</span>, and
            personalized emails deliver{" "}
            <span className="font-bold text-white">6x higher transaction rates</span> than generic ones!
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-4 leading-snug">
              At <span className={highlight}>ProRiterz</span>, we help businesses leverage automation and personalization to build stronger connections and boost conversions.
            </h3>
            <h4 className={subheading}>Why Automation & Personalization Matter</h4>
          </div>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              Automation streamlines repetitive tasks, freeing up your team to focus on high-value activities. Personalization ensures every interaction feels tailored to the individual, making your audience feel valued and understood. Together, they create seamless, impactful experiences that drive engagement and loyalty.
              At ProRiterz, we combine the power of automation with the art of personalization. Whether it’s automated email campaigns, personalized product recommendations, or dynamic website experiences, we craft solutions that deliver measurable results.
            </p>
            <p>
              In today’s competitive landscape, customers expect experiences that are not only efficient but also deeply relevant to them. Here’s why automation and personalization are game-changers:
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["Save Time and Resources", "Automation reduces manual work, allowing your team to focus on strategy."],
            ["Increase Customer Satisfaction", "Personalization makes your audience feel valued, boosting loyalty."],
            ["Improve Conversion Rates", "Tailored experiences significantly increase the chances of conversion."],
            ["Maximize ROI", "Target the right people with the right message—efficiently."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition shadow-lg backdrop-blur"
            >
              <h5 className="font-bold text-xl text-sky-300 mb-2">{title}</h5>
              <p className={text}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Services */}

          <div className="text-white px-4 sm:px-6 lg:px-8 py-6">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 leading-tight">
    ProRiterz Automation & Personalization <br/> Services
  </h2>

  {/* Grid Wrapper */}
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
    {[
      ["📩 Marketing Automation", "We design and implement automation workflows for email marketing, social media scheduling, lead nurturing, and more. This ensures consistent and timely engagement with your audience."],
      ["🧠 CRM Integration", "We integrate your CRM system with marketing platforms, enabling personalized communication based on customer data, purchase history, and behavior."],
      ["⚙️ Dynamic Content Creation", "Our team creates content that dynamically adjusts based on user preferences, location, and behavior, ensuring relevance at every touchpoint."],
      ["✉️ Personalized Email Campaigns", "Using advanced segmentation and data-driven insights, we craft emails tailored to individual recipients, improving open rates, click-through rates, and conversions."],
      ["🤖 Chatbot Implementation", "We design AI-powered chatbots that provide personalized responses to user queries, enhancing customer support and engagement."],
      ["📊 Data-Driven Personalization", "We analyze customer data to identify patterns and preferences, enabling highly targeted recommendations and offers."],
      ["🛒 E-Commerce Personalization", "From personalized product recommendations to targeted retargeting ads, we ensure every interaction reflects your audience’s preferences."],
      ["📈 Real-Time Analytics", "We provide detailed reports on automation and personalization efforts, helping you track performance and refine strategies for continuous improvement."],
    ].map(([title, desc], i) => (
      <div
        key={i}
        className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col"
      >
        <h4 className="text-xl font-semibold text-sky-300 mb-3 leading-snug">
          {title}
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
          {desc}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* Benefits Block */}
 
<div className="text-white px-4 sm:px-6 lg:px-8 py-6">
  <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
    Benefits of Automation & Personalization
  </h3>

  <div className="max-w-6xl mx-auto space-y-10">
    {/* Large Screen: 3 Cards Row | Tablet: 2 Cards | Mobile: 1 Card */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        ["Stronger Customer Connections", "Tailored interactions build trust and turn buyers into loyal advocates."],
        ["Increased Efficiency", "Automation reduces errors and accelerates workflows."],
        ["Higher Engagement Rates", "Personalized content inspires more clicks and responses."],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <h5 className="font-bold text-xl text-sky-300 mb-2">{title}</h5>
          <p className="text-gray-300">{desc}</p>
        </div>
      ))}
    </div>

    {/* Second Row: 2 Cards — Centered on large, stacked/tablet responsive */}
    <div className="flex flex-wrap justify-center gap-8">
      {[
        ["Enhanced Customer Retention", "Satisfied customers return more often."],
        ["Scalability", "Reach large audiences while maintaining quality experiences."],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300"
        >
          <h5 className="font-bold text-xl text-sky-300 mb-2">{title}</h5>
          <p className="text-gray-300">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* How ProRiterz Stands Out */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">How ProRiterz Stands Out</h2>
          <p>
            At ProRiterz, we’re experts in combining technology and creativity to deliver impactful automation and personalization solutions. Here’s what makes us unique:
          </p>
          </div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-10">
            <li><strong>Customized Strategies:</strong> We design solutions tailored to your business goals and audience needs.</li>
            <li><strong>Advanced Tools:</strong> We use cutting-edge platforms to ensure seamless automation and effective personalization.</li>
            <li><strong>Data-Driven Decisions:</strong> Our strategies are backed by in-depth analysis and real-time insights.</li>
            <li><strong>Expert Support:</strong> Our team of experts guides you through every step of the process, from implementation to optimization.</li>
          </ul>
        </div>

        {/* Success Stories */}
       <div className="max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold mb-8 text-center">Examples of Success</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
    {[
      ["Retail Personalization", "A clothing retailer implemented dynamic product recommendations based on browsing history. This resulted in a 30% increase in average order value."],
      ["Automated Lead Nurturing", "A SaaS company used automated email workflows to nurture leads, shortening the sales cycle and achieving a 20% boost in conversions."],
      ["Behavioral Email Campaigns", "An e-commerce brand personalized email campaigns based on customer behavior, improving click-through rates by 25%."],
    ].map(([title, desc], i) => (
      <div
        key={i}
        className={`
          bg-gradient-to-br from-[#0b223f]/60 to-[#06263f]/40 p-6 rounded-xl shadow-md border border-white/10 backdrop-blur hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300
          ${i === 2 ? 'md:col-span-2 lg:col-span-2 lg:mx-auto lg:w-1/2' : ''}
        `}
      >
        <h4 className="text-2xl font-bold text-sky-300 mb-2">{title}</h4>
        <p className="text-gray-300">{desc}</p>
      </div>
    ))}
  </div>
</div>


        {/* Final CTA */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mt-12">
          <h3 className="text-3xl font-bold">Why Your Business Needs Automation & Personalization</h3>
          <p>
            Customers today expect brands to understand their needs and preferences. Automation and personalization not only meet these expectations but exceed them, creating experiences that set you apart from the competition. By investing in these tools, you can: Improve operational efficiency.Deliver relevant, engaging content.Strengthen customer relationships.Stay competitive in a crowded market.
          </p>
          </div>
         <div className="text-center max-w-3xl mx-auto space-y-4 mt-12">
          <h3 className="text-3xl font-bold">Start Automating and Personalizing Today</h3>
          <p>
            Your customers deserve experiences that feel seamless and personal. At ProRiterz, we help businesses of all sizes implement automation and personalization strategies that drive growth and loyalty. Let us handle the complexities so you can focus on what you do best.Contact us today to learn more about how we can transform your customer interactions through automation and personalization.
          </p>
          </div>
        
      </div>
    </section>
  );
}
