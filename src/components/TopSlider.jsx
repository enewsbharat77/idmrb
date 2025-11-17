'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider() {
  const images = [
    '/images/photo1.png',
    '/images/photo2.png',
    '/images/photo3.png',
    '/images/photo4.png',
    '/images/photo5.png',
    '/images/photo6.png',
    '/images/photo7.png',
    '/images/photo8.png',
    '/images/photo9.png'
  ];

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="w-[100%] ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          className=" shadow-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[600px] object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
