'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function MemberSlider() {
  const members = [
    '/logos/member1.png',
    '/logos/member2.png',
    '/logos/member3.png',
    '/logos/member4.png',
    '/logos/member5.png',
    '/logos/member6.png',
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Members</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center"
        >
          {members.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`Member ${index + 1}`}
                className="w-32 h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
