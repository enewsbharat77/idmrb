'use client';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function DocumentArchives() {
  const documents = [
    {
      title: 'Monetizing Digital News',
      year: 'March 2024',
      description: 'Digital News Publishing in India',
      link: '/documents/monetizing-digital-news.pdf',
    },
    {
      title: 'Media Conference Summary 2023',
      year: '2023',
      description: 'Future of Digital Media',
      link: '/documents/media-conference-2023.pdf',
    },
    {
      title: 'Media Conference Summary 2024',
      year: '2024',
      description: 'DNPA Conclave & D.I Awards',
      link: '/documents/media-conference-2024.pdf',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Document Archives
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold">
                  <FileText className="w-5 h-5" />
                  <span>PDF Preview</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{doc.year}</p>
                <p className="text-gray-700 text-base mb-6 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {/* Button */}
              <Link
                href={doc.link}
                target="_blank"
                className="inline-block bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-all duration-300"
              >
                View Document →
              </Link>
            </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
