'use client';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-10 text-center md:text-left relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Who We Are & Our Members
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The <span className="font-bold text-blue-800">
                        Indian Digital Media Regulatory Board (IDMRB)
                    </span>{" "}
                    is a self-regulatory body formed under the framework of the{" "}
                    <span className="font-semibold">
                        Information Technology (Intermediary Guidelines and Digital Media
                        Ethics Code) Rules, 2021
                    </span>
                    , with the vision to ensure transparency, accountability, and ethical
                    journalism in India's growing digital media ecosystem.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In an era where information travels faster than ever, IDMRB stands as
                    a credible and responsible institution that bridges the gap between
                    digital content creators, regulatory authorities, and the audience.
                    The board works to uphold the integrity of online journalism while
                    supporting innovation, creative freedom, and the highest standards of
                    public trust.
                </p>

                <Link
                    href="/about"
                    className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    About Us →
                </Link>
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
