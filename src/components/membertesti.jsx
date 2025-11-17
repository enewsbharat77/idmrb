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
      name: 'Arvind Sharma',
      designation: 'CEO, Bharat Digital Media Network',
      image: '/images/testi1.jpg',
      quote:
        '“In an era where digital content travels faster than facts, IDMRB has become the much–needed balancing force. Their guidance helps us maintain accountability, accuracy, and compliance without compromising innovation.IDMRB provides the clarity that every responsible digital publisher expects today.”',
    },
    {
      name: 'Riya Malhotra',
      designation: 'Chief Compliance Officer – NextWave Media Group',
      image: '/images/test2.jpg',
      quote:
        'For digital publishers like us, IDMRB acts as a lighthouse — guiding us through policy updates, regulatory frameworks, and ethical best practices.Their support enables media houses to grow fearlessly while staying aligned with IT Rules 2021.It feels less like a regulator and more like a responsible partner working for the future of digital news.',
    },
    {
      name: 'Meenakshi Singh',
      designation: 'Head of Regulatory Affairs — StreamBox OTT',
      image: '/images/testi3.jpg',
      quote:
        'In the fast-evolving OTT landscape, IDMRB has been a steady and reliable guide.Their clear standards and supportive approach help platforms like ours stay compliant without compromising creativity.We value IDMRB’s balanced, modern, and industry-friendly framework.',
    },
    {
      name: 'Karan Choudhary',
      designation: `Managing Director, Janta's News Network`,
      image: '/images/testi4.jpg',
      quote:
        '“IDMRB’s biggest strength is its neutrality and professionalism.Their guidelines have helped our newsroom improve transparency, fact-checking discipline, and grievance handling.For us, IDMRB is not just a regulatory board — it’s an ecosystem partner ensuring that digital news remains credible, responsible, and people-centric.”',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
          className="pb-12 shadow shadow-blue-200 border border-blue-200 rounded-2xl"
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
                    className="rounded-2xl h-96 object-cover shadow-md"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <p className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "{t.quote}"
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

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
