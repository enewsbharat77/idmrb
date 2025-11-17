"use client";
import Image from "next/image";

export default function Members() {
  const members = [
    {
      name: "Santosh Sharma",
      designation: "Executive Member",
      position: "Editor, Voice of India",
      image: "/images/member (0).png",
    },
    {
      name: "Pawan Gupta",
      designation: "President",
      position: "Chief Editor, The News Times",
      image: "/images/member (4).png",
    },
    {
      name: "Raghav Vaishnav",
      designation: "Vice President",
      position: "Managing Director, Digital Express",
      image: "/images/member (2).png",
    },
    {
      name: "Sanjay Gupta",
      designation: "Secretary",
      position: "Editor-in-Chief, Media Insight",
      image: "/images/member (3).png",
    },
    {
      name: "Dhiraj Agarwal",
      designation: "Treasurer",
      position: "Head of Operations, NewsNow",
      image: "/images/member (1).png",
    },
    {
      name: "Diksha Hembro",
      designation: "Executive Member",
      position: "CEO, Digital Bharat",
      image: "/images/member (5).png",
    },

  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Members
        </h1>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition duration-300"
            >
              {/* Member Image */}
              <div className="w-full h-96 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Member Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-sm mt-2">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
