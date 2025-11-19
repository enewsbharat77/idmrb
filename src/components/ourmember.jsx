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
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Trusted Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Members</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Proud to collaborate with industry-leading organizations
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1280: { slidesPerView: 6, spaceBetween: 35 },
          }}
          className="member-swiper"
        >
          {members.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="group relative">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-36 flex items-center justify-center overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-2xl transition-all duration-300"></div>
                  
                  <img
                    src={logo}
                    alt={`Member ${index + 1}`}
                    className="relative w-full h-full object-contain filter  transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          33% { 
            transform: translate(30px, -50px) scale(1.1); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.9); 
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
