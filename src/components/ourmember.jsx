'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function MemberSlider() {
  const members = [
    '/logos/logo1.jpeg',
    '/logos/inn.png',
    '/logos/logo3.jpg',
    '/logos/logo4.jpg',
    '/logos/logo5.jpg',
    '/logos/logo6.jpg',
    '/logos/logo7.jpg',
    '/logos/logo8.jpg',
    '/logos/logo9.jpg',
    '/logos/logo10.jpg',
    '/logos/logo11.jpg',
    '/logos/logo12.jpg',
    '/logos/logo13.jpg',
    '/logos/logo14.jpg',
    '/logos/logo16.jpg',
    '/logos/logo17.jpg',
    '/logos/logo18.jpg',
    '/logos/logo19.jpg',
    '/logos/logo20.jpg',
    '/logos/logo21.jpg',
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Members</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {members.map((logo, index) => (
            <SwiperSlide key={index} className="flex gap-4 justify-center items-center">
              <div className="w-52 h-32  rounded-lg p-4 flex justify-center items-center shadow-sm">
                <img
                  src={logo}
                  alt={`Member ${index + 1}`}
                  className="w-full h-full border-b border-r  shadow  shadow-blue-200 border-blue-200 object-contain"
                />
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
