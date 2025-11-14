'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function CommitteesSection() {
  const committees = [
    {
      name: 'Publisher Revenue',
      image: '/committees/executive.png',
      url: '/executive-committee',
    },
    {
      name: 'Publisher Traffic, New Opportunities & Partnerships',
      image: '/committees/digitalgrowth.png',
      url: '/digital-committee',
    },
    {
      name: 'Artificial Intelligence',
      image: '/committees/ai.png',
      url: '/ai-committee',
    },
    {
      name: 'Policy Initiatives',
      image: '/committees/policy.png',
      url: '/policy-committee',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Join Our Committees
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {committees.map((committee, index) => (
            <Link
              key={index}
              href={committee.url || '#'}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 block"
            >
              {/* Image */}
              <Image
                src={committee.image}
                alt={committee.name}
                width={400}
                height={350}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold px-3">
                  {committee.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
}
