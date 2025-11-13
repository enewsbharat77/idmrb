'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function MemberTestimonialSlider() {
  // Testimonial Data
  const testimonials = [
    {
      name: 'Senthil Chengalvarayan',
      designation: 'Executive Director (NDTV)',
      image: '/images/senthil-chengalvarayan.jpg',
      quote:
        'We are pleased to be a member of the Digital News Publication Association. As a platform dedicated to promoting the voices and interests of digital news publishers, DNPA helps to shape a fair, transparent, and ethical digital landscape. Its commitment to advocating for positive industry standards around issues like misinformation and brand safety is quite essential.',
    },
    {
      name: 'Ritu Sharma',
      designation: 'Editor-in-Chief (Times Digital)',
      image: '/images/ritu-sharma.jpg',
      quote:
        'DNPA plays a crucial role in uniting digital publishers under a common vision. Its efforts towards sustainable digital journalism and ethical practices are helping the entire industry move forward.',
    },
    {
      name: 'Amit Verma',
      designation: 'Managing Director (The Indian Express)',
      image: '/images/amit-verma.jpg',
      quote:
        'As a member of DNPA, we appreciate its initiatives to engage with regulators and promote fair digital advertising ecosystems. It’s an important step toward ensuring growth for digital journalism in India.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Members Have To Say About Us
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl p-8 md:p-12 gap-8 hover:shadow-lg transition-all duration-300">
                {/* Member Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={300}
                    height={300}
                    className="rounded-2xl object-cover shadow-md"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-blue-800 font-medium">{t.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
