'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function VideoGallerySlider() {
    // Video data
    const videos = [
        {
            title: 'DNPA Conclave 2025: Media Transformations in the AI Age - Short Recording',
            author: 'By DNPA Team',
            date: 'Jul 07, 2025',
            thumbnail: '/images/video1.jpg',
            videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX', // replace with actual video URL
        },
        {
            title: 'DNPA Conclave 2025: Media Transformations in the AI Age - Recording',
            author: 'By Raghav',
            date: 'Jun 20, 2025',
            thumbnail: '/images/video2.jpg',
            videoUrl: 'https://www.youtube.com/embed/YYYYYYYYYYY',
        },
        {
            title: 'DNPA Conclave & Awards 2024: Content | Credibility | Catalyst - Recording',
            author: 'By Raghav',
            date: 'Jun 20, 2025',
            thumbnail: '/images/video3.jpg',
            videoUrl: 'https://www.youtube.com/embed/ZZZZZZZZZZZ',
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Video Gallery
                </h2>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                                <div className="relative w-full h-56">
                                    {/* Thumbnail or Video Embed */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={video.videoUrl}
                                        title={video.title}
                                        className="w-full h-full object-cover"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {video.author} • {video.date}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
