"use client";
import Image from "next/image";

export default function Members() {
  const members = [
    {
      name: "Santosh Sharma",
      designation: "National General Secretary – IDMRB",
      image: "/images/member (0).png",
    },
    {
      name: "Sanjay Gupta",
      designation: "National Treasurer – IDMRB",
      image: "/images/member3.png",
    },
    {
      name: "Dhiraj Agarwal",
      designation: "Chairperson – Membership & Accreditation Committee",
      image: "/images/member1.png",
    },
    {
      name: "Pawan Gupta",
      designation: "Vice President (North Zone)",
      image: "/images/member (7).png",
    },
    {
      name: "Raghav Vaishnav",
      designation: "Director – Digital Standards & Compliance",
      image: "/images/member2.png",
    },
    {
      name: "Diksha Hembro",
      designation: "National Coordinator – Training & Innovation Programs",
      image: "/images/member5.png",
    },
  ];

  const data = {
    North_India: [
      { id: 7, name: "Arvind Chauhan", state: "Uttar Pradesh", designation: "Regional Director – OTT Content Regulation (North)" },
      { id: 8, name: "Mehak Sandhu", state: "Punjab", designation: "State Secretary – Ethical Journalism Cell" }
    ],
    West_India: [
      { id: 9, name: "Jayesh Parmar", state: "Gujarat", designation: "Director – Publisher Support & Grievance Redressal" },
      { id: 10, name: "Prathmesh Kulkarni", state: "Maharashtra", designation: "State Head – Digital Publisher Development" }
    ],
    East_India: [
      { id: 11, name: "Suryakant Mishra", state: "West Bengal", designation: "National Advisor – AI & Future Media Technology" },
      { id: 12, name: "Ritam Das", state: "Assam", designation: "State Chair – Digital Safety & Verification Committee" }
    ],
    South_India: [
      { id: 13, name: "Harini Vedantham", state: "Tamil Nadu", designation: "Director – Content Ethics & Standards (South Zone)" },
      { id: 14, name: "Aditya Prakash", state: "Karnataka", designation: "National Joint Secretary – Digital Media Policy" }
    ],
    Central_India: [
      { id: 15, name: "Nilesh Verma", state: "Madhya Pradesh", designation: "Regional Coordinator – Publisher Outreach Program" }
    ],
    North_East_India: [
      { id: 16, name: "Renuka Lisham", state: "Manipur", designation: "State Executive – Women in Digital Media Wing" }
    ],
    Additional_Executive_Positions: [
      { id: 1, name: "Aarav Sen Gupta", designation: "National Joint Treasurer – IDMRB" },
      { id: 2, name: "Samridhi Talwar", designation: "Chief Spokesperson – IDMRB" },
      { id: 3, name: "Dr. Pranay Vardhan", designation: "Head, Research & Policy Affairs" },
      { id: 4, name: "Varun Rishidev", designation: "Director, Digital Awareness & Capacity Building" },
      { id: 5, name: "Charudutt Shekhawat", designation: "State President – Rajasthan" },
      { id: 6, name: "Rudraksh Malik", designation: "State President – Haryana" },
      { id: 7, name: "Nityanand Priyesh", designation: "State President – Bihar" },
      { id: 8, name: "Arvind Vishwak Menon", designation: "State President – Kerala" }
    ]
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Our Members
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition duration-300 p-6"
            >
              {/* Premium Frame */}
              <div className="
                relative 
                w-full 
                h-[300px] 
                rounded-2xl 
                p-3 
                bg-white 
                border border-gray-300
                shadow-[0_0_20px_rgba(0,0,0,0.07)]
                before:absolute before:inset-0 before:rounded-2xl before:border before:border-gray-200 before:pointer-events-none
                after:absolute after:inset-0 after:rounded-2xl after:shadow-inner after:pointer-events-none
              ">

                {/* Glass Top Shine */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/60 to-transparent rounded-t-2xl pointer-events-none"></div>

                {/* Image */}
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mt-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Members Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Regional & Executive Members
        </h2>

        <div className="space-y-8">
          {Object.entries(data).map(([section, members]) => (
            <div 
              key={section} 
              className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Section Header */}
              <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 px-6 py-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {section.replaceAll("_", " ")}
                </h3>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-blue-900">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-20">
                        ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      {members[0].state && (
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                          State
                        </th>
                      )}
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {members.map((m, idx) => (
                      <tr 
                        key={m.id} 
                        className="hover:bg-blue-50 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-900 font-bold text-sm">
                            {m.id}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-base font-semibold text-gray-900">
                            {m.name}
                          </div>
                        </td>
                        {m.state && (
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                              {m.state}
                            </span>
                          </td>
                        )}
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-700">
                            {m.designation}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden divide-y divide-gray-200">
                {members.map((m, idx) => (
                  <div 
                    key={m.id} 
                    className="p-5 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      {/* ID Badge */}
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-900 font-bold">
                          {m.id}
                        </span>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {m.name}
                        </h4>
                        
                        {m.state && (
                          <div className="mb-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {m.state}
                            </span>
                          </div>
                        )}
                        
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {m.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
