"use client";
import Image from "next/image";

export default function Secretariat() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                    IDMRB Secretariat
                </h1>
                <h2 className="text-center text-lg text-blue-800 font-medium mb-12">
                    Leadership | Integrity | Coordination | Vision
                </h2>

                {/* Main Content */}
                <div className="bg-white flex flex-col md:flex-row items-center md:items-start p-8 rounded-2xl shadow-lg gap-10">
                    {/* Left Section - Image & Basic Info */}
                    <div className="md:w-1/2 flex flex-col items-center text-center">
                        <Image
                            src="/images/sec2.png"
                            alt="Ms. Arpna Badagna - Secretary General"
                            width={500}
                            height={600}
                            className="w-full h-auto max-w-md rounded-md object-cover shadow-md"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                            Ms. Arpna Badagna
                        </h2>
                        <p className="text-blue-800 text-sm font-medium">
                            Secretary General – IDMRB
                        </p>
                    </div>

                    {/* Right Section - Description */}
                    <div className="md:w-1/2 text-gray-700">
                        <p className="text-lg leading-relaxed mb-5">
                            The <span className="font-semibold">Secretariat of the Indian Digital Media Regulatory Board (IDMRB)</span>{" "}
                            functions as the nerve centre of the organization — driving
                            strategy, coordination, and execution across all national-level
                            initiatives.
                        </p>

                        <p className="text-lg leading-relaxed mb-5">
                            Under the visionary leadership of{" "}
                            <span className="font-semibold">Ms. Arpna Badagna, Secretary General</span>,
                            the Secretariat ensures the effective implementation of IDMRB’s mission to uphold
                            transparency, accountability, and ethical governance within India’s rapidly evolving
                            digital media landscape.
                        </p>

                        <p className="text-lg leading-relaxed mb-5">
                            As the operational and strategic backbone of the Board, the Secretariat plays a pivotal role in:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Implementing policy and regulatory frameworks</strong> that align with
                                national digital media standards.
                            </li>
                            <li>
                                <strong>Facilitating communication and coordination</strong> between member publishers,
                                regulatory bodies, and government institutions.
                            </li>
                            <li>
                                <strong>Leading strategic initiatives</strong> that promote self-regulation, innovation,
                                and sustainable growth in the digital news ecosystem.
                            </li>
                            <li>
                                <strong>Organizing knowledge sessions, consultations, and stakeholder dialogues</strong>
                                to strengthen collaboration and trust within the media industry.
                            </li>
                        </ul>

                        <p className="text-lg leading-relaxed mt-5">
                            Ms. Arpna Badagna dynamic leadership is characterized by her commitment to building a{" "}
                            <span className="font-semibold">transparent, inclusive, and forward-looking digital media environment</span>{" "}
                            that encourages responsible journalism and industry harmony.
                        </p>

                        <p className="text-lg leading-relaxed mt-5">
                            With extensive experience in media governance and institutional coordination, she ensures that
                            IDMRB’s initiatives are executed with precision, professionalism, and a people-first approach.
                        </p>

                        <p className="text-lg leading-relaxed mt-5">
                            The Secretariat continues to serve as the{" "}
                            <span className="font-semibold">foundation of IDMRB’s vision</span> — fostering cooperation among members,
                            guiding regulatory compliance, and shaping the future of India’s digital media with integrity and purpose.
                        </p>
                    </div>
                </div>

                {/* At a Glance Section */}
                <div className="bg-blue-50 mt-16 p-8 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        At a Glance
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
                        <p><strong>Name:</strong> Ms. Arpna Badagna</p>
                        <p><strong>Designation:</strong> Secretary General</p>
                        <p><strong>Division:</strong> IDMRB Secretariat, New Delhi</p>
                        <p>
                            <strong>Core Functions:</strong> Strategic Operations | Policy
                            Implementation | Member Coordination | Institutional Liaison
                        </p>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-700">
                            📧 <a href="mailto:secretariat@idmrb.org" className="text-blue-800 underline">
                                secretariat@idmrb.in
                            </a>
                        </p>
                        <p className="text-gray-700">📞 +91 9024209393</p>
                        <p className="text-gray-700 font-medium mt-1">
                            🌐 Indian Digital Media Regulatory Board (IDMRB)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
