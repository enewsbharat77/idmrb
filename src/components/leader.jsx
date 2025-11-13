'use client';
import Image from 'next/image';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Mr. Mukesh Dadhich',
      designation: 'Founder & President',
      position: 'Leadership & Vision',
      image: '/leaders/j2.jpg',
    },
    {
      name: 'Mrs. Shruti Dadhich',
      designation: 'Vice President',
      position: 'Strategy & Partnerships',
      image: '/leaders/j4.jpg',
    },
    {
      name: 'Mr. Arpit Dadhich',
      designation: 'General Secretary',
      position: 'Operations & Outreach',
      image: '/leaders/leader3.jpg',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Leadership
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="w-40 h-40 mb-4">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-full h-full border-2 border-blue-500"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {leader.name}
              </h3>
              <p className="text-blue-800 font-medium mt-1">
                {leader.designation}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {leader.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
