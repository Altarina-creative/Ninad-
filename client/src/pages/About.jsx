import React from "react";

const About = () => {
  return (
    <div className="bg-[#f8fafc] text-gray-800">

      {/* HERO */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-90"></div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative z-10 text-white">
          NINAD
          <span className="block text-yellow-300 mt-2">
            Badlav ka Swar
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-white/90 relative z-10">
          Empowering communities through education, livelihood, and sustainable development across Uttarakhand.
        </p>
      </section>

      {/* ABOUT */}
      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-7xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-green-700">
          About Organization
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">

          {/* LEFT */}
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">

            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              NINAD (Badlav ka Swar), Uttarakhand is a voluntary organization established in the year 2021-22 and registered under the Public Trust Act 1882. It works actively in both rural and urban areas of Chamoli and other districts of Uttarakhand.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              The organization focuses on Education, Livelihood, Agriculture Development, STEM Education, Skill Training, Women Empowerment, Child Protection, Old Age Care, and Health services.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              NINAD works at the grassroots level in villages and urban slums to promote social, economic, technological, and environmental development.
            </p>

          </div>

          {/* RIGHT */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-2xl p-6 shadow-sm flex items-center">

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              The organization envisions itself as an agency dedicated to empowering marginalized communities including poor women, peasants, landless individuals, and unemployed youth. It aims to help them develop resources, gain knowledge, and improve their quality of life within their natural environment.
            </p>

          </div>

        </div>
      </section>

      {/* KEY PERSON */}
      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 sm:p-8 rounded-2xl shadow-lg text-center">

          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Key Person
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Shri Suresh Kumar Bisht
          </h3>

          <p className="text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            The key person of the organization has been closely associated with various social organizations and has deep understanding of issues faced by rural communities, women, and backward areas.
          </p>

        </div>

      </section>

      {/* VISION & MISSION */}
      <section className="px-4 sm:px-6 md:px-10 py-14 max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500">
          <h3 className="text-xl font-bold mb-3 text-green-600">Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            Economic empowerment, education, and health services for communities with focus on participation and development.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-3 text-yellow-600">Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base">
            To support deprived women, children, and elderly by providing access to education, shelter, and a clean environment.
          </p>
        </div>

      </section>

      {/* BELIEFS */}
      <section className="px-4 sm:px-6 md:px-10 py-16 text-center max-w-5xl mx-auto">

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
          Organisational Beliefs
        </h2>

        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          NINAD believes that poverty is interconnected with multiple social and economic challenges which require a holistic approach.
        </p>

        <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
          The organization works across multiple sectors to ensure sustainable and long-term development.
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          It strongly promotes transparency and stands against corruption while encouraging community participation.
        </p>

      </section>

    </div>
  );
};

export default About;