import React from "react";

// Images
import livelihoodImg from "../assets/Livelihood.jpeg";
import agricultureImg from "../assets/Agriculture.jpeg";
import schoolImg from "../assets/SchoolSupport.png";
import elderlyImg from "../assets/ElderlyCare.jpeg";
import childrenImg from "../assets/Child Education.png";

const data = [
  {
    title: "Livelihood Programme",
    img: livelihoodImg,
    text: "NINAD provides skill training programmes for rural youth and women to enhance sustainable economic empowerment.",
    points: [
      "Skill development training",
      "Women empowerment initiatives",
      "Financial independence support"
    ]
  },
  {
    title: "Agriculture Development",
    img: agricultureImg,
    text: "We connect farmers directly to markets ensuring fair pricing and eliminating middlemen.",
    points: [
      "Direct farmer connection",
      "Organic farming promotion",
      "Better income generation"
    ]
  },
  
  {
    title: "School Support Programme",
    img: schoolImg,
    text: "Supporting underprivileged schools with infrastructure, funds and academic resources.",
    points: [
      "Financial support",
      "Infrastructure improvement",
      "Quality education"
    ]
  },
  {
    title: "Elderly Care Programme",
    img: elderlyImg,
    text: "Providing shelter, healthcare and emotional support to elderly people.",
    points: [
      "Medical support",
      "Residential care",
      "Emotional well-being"
    ]
  },
  {
    title: "Child Education Programme",
    img: childrenImg,
    text: "Helping underprivileged children get education and join mainstream schools.",
    points: [
      "Basic education",
      "School enrollment",
      "Awareness programs"
    ]
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-[#fffaf0] via-[#fefce8] to-[#e6f4ea] py-16 px-6">

      {/* HEADING */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#3f6212]">
        Our Projects & Impact 🌿
      </h1>

      <div className="max-w-6xl mx-auto space-y-12">

        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden 
                       flex flex-col md:flex-row hover:shadow-2xl transition duration-300"
          >

            {/* IMAGE */}
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[250px] md:h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center">

              <h2 className="text-2xl md:text-3xl font-bold text-[#365314] mb-3">
                {item.title}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {item.text}
              </p>

              <ul className="space-y-2">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#ca8a04]">●</span>
                    {p}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;