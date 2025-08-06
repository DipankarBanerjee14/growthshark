import { useState } from "react";
import career from "../assets/career.png";

export default function Career() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    whatsapp: "",
    resume: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("countryCode", formData.countryCode);
    data.append("whatsapp", formData.whatsapp);
    data.append("resume", formData.resume);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message || "Application submitted successfully!");
        // Optional: Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          whatsapp: "",
          resume: null,
        });
      } else {
        alert(result.error || "Submission failed.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="bg-gradient-to-r from-black via-[#0b223f] to-[#06263f] text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Join <span className="text-sky-400">Proriterz</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Shape the future with us! Explore exciting opportunities and grow your career with a team
            that values innovation, collaboration, and excellence.
          </p>
          <img src={career} alt="career" className="w-64 md:w-80 drop-shadow-lg" />
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/10"
        >
          <h2 className="text-3xl font-semibold mb-2">Application Form</h2>
          <p className="text-gray-400 mb-6">
            Fill in your details and we’ll get back to you soon.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm">
                  Country Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm">
                Upload Resume <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full text-gray-400"
              />
              {formData.resume && (
                <p className="text-sky-400 text-xs mt-1">
                  Selected: <span className="font-semibold">{formData.resume.name}</span>
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-sky-500 hover:bg-sky-400 text-black font-semibold py-3 rounded-lg transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-center">Why Join Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Growth & Learning", text: "We provide continuous opportunities to learn and grow in your career." },
            { title: "Collaborative Culture", text: "Work with a supportive team that values innovation and teamwork." },
            { title: "Impactful Work", text: "Be part of meaningful projects that create real-world impact." },
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center hover:scale-105 transition">
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Process */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-4xl font-bold mb-3 text-center">Interview Process</h3>
        <p className=" text-center mb-10 text-gray-400">At Proriterz, we aim to make the hiring journey smooth and transparent. Here’s a detailed breakdown of our process:</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[
            { title: "Application Review", text: "We carefully evaluate your submitted resume, portfolio, and cover letter to understand your qualifications and how they align with our needs." },
            { title: "Preliminary Interview", text: "This initial conversation is an opportunity for you to share your experience and career goals while learning about our team and company culture." },
            { title: "Skills Assessment", text: "Depending on the role, you may be asked to complete a task or assessment. This allows us to gauge your technical skills, problem-solving abilities, and creativity." },
            { title: "Final Round", text: "Meet with key team members for an in-depth discussion about the role, expectations, and how your unique perspective can contribute to our success. It’s also your chance to ask questions and ensure this is the right fit for you." },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:scale-105 transition"
            >
              <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-400">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur-lg lg:p-10 p-6 rounded-xl border border-white/10 hover:scale-105 transition w-full md:w-1/2 lg:w-1/2">
            <h4 className="text-2xl font-semibold mb-2">Offer Stage</h4>
            <p className="text-gray-400">
              If selected, we’ll provide a detailed offer letter outlining compensation, benefits, and next steps.
              Join us at Proriterz and be part of something exciting!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-gray-300 mb-2">Have questions? We're here to help.</p>
        <p>
          <strong>Call:</strong> +91 8348296083
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:proriterz101@gmail.com" className="text-sky-400 underline">
            proriterz101@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
