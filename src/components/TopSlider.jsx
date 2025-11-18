'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageSlider() {
  // Desktop images
  const desktopImages = [
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/photo5.png',
    '/images/photo6.png',
    '/images/image6.png',
    '/images/image7.png',
 ]
  
  // Mobile images (add your mobile-size images here)
  const mobileImages = [
    '/images/mobile1.jpeg',
    '/images/mobile2.jpeg',
    '/images/mobile3.jpeg',
    '/images/mobile4.jpeg',
  ];

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const finalImages = isMobile ? mobileImages : desktopImages;

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          className="shadow-lg"
        >
          {finalImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={`w-full ${
                  isMobile ? 'h-[240px]' : 'h-[600px]'
                } object-cover`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
