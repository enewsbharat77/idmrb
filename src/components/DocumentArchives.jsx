'use client';

import Link from 'next/link';
import { FileText } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function DocumentArchives() {
  const documents = [
    {
      title: 'Advisory Dated 19.02.2025',
      year: '2021',
      link: '/documents/pdf1.pdf',
    },
    {
      title: 'Background Note IT Rules 2021',
      year: '2021',
      link: '/documents/pdf2.pdf',
    },
    {
      title: 'Clarification regarding IT Rules 2021',
      year: '2021',
      link: '/documents/pdf3.pdf',
    },
    {
      title: 'FAQs on Digital Media Ethics Code',
      year: '2021',
      link: '/documents/pdf4.pdf',
    },
    {
      title: 'IT Rules 2021 (English)',
      year: '2021',
      link: '/documents/pdf5.pdf',
    },
    {
      title: 'Letters to DIPR (State Govt)',
      year: '2020',
      link: '/documents/pdf6.pdf',
    },
    {
      title: 'Notification 09.11.2020',
      year: '2020',
      link: '/documents/pdf7.pdf',
    },
    {
      title: 'OM to States regarding Code of Ethics',
      year: '2020',
      link: '/documents/pdf8.pdf',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Document Archives
        </h2>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // navigation={true}      // ⭐ Enable next/prev buttons
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {documents.map((doc, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center gap-2 mb-2 text-blue-800 font-semibold">
                    <FileText className="w-5 h-5" />
                    <span>PDF Preview</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-3">{doc.year}</p>
                </div>

                <Link
                  href={doc.link}
                  target="_blank"
                  className="inline-block bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-all duration-300"
                >
                  View Document →
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
