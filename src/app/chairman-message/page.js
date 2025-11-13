'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChairmanMessage() {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
                    Chairman’s Message
                </h1>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Mukesh S. Dadhich
                    </h2>
                    <p className="text-gray-600 italic">
                        Chairman, Indian Digital Media Regulatory Board (IDMRB)
                    </p>
                </div>

                {/* Quote Block */}
                <blockquote className="bg-white rounded-2xl shadow-md p-8 mb-10 border-l-4 border-blue-800">
                    <p className="text-lg text-gray-700 italic mb-4">
                        “In every era, there are voices that echo beyond headlines — voices
                        that shape conscience, courage, and change. The future of Indian
                        journalism will belong to those who dare to uphold truth with
                        technology and ethics with innovation.”
                    </p>
                </blockquote>

                {/* Image + Message Section */}
                <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-start gap-8">
                    {/* Left: Chairman Image */}
                    <div className="md:w-1/3 w-full">
                        <Image
                            src="/leaders/j2.jpg"
                            alt="Mukesh S. Dadhich"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-semibold text-gray-900">Mukesh S. Dadhich</h3>
                            <p className="text-gray-600 text-sm italic">
                                Founder & Chairman, IDMRB
                            </p>
                        </div>
                    </div>

                    {/* Right: Message */}
                    <div className="md:w-2/3 w-full">
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                As India stands at the cusp of an unprecedented digital
                                transformation, our media landscape is being rewritten — not
                                just by technology, but by trust.
                            </p>

                            <p>
                                When I founded the <em>Indian Digital Media Regulatory Board
                                    (IDMRB)</em>, my vision was clear: to create a framework where
                                <strong> digital journalism thrives responsibly</strong> — where
                                <em> freedom and fairness walk together</em>, and where
                                technology becomes a tool of truth, not manipulation.
                            </p>

                            <p>
                                Over the years, I have witnessed journalism evolve from ink and
                                paper to screens and code. But while mediums changed, the
                                mission remained the same — <em>to inform, to awaken, and to
                                    empower society.</em>
                            </p>

                            <p>
                                Today, as Artificial Intelligence redefines storytelling and
                                algorithms influence attention, our greatest responsibility as
                                journalists and publishers is to preserve{' '}
                                <strong>human integrity in a machine-driven world.</strong>
                            </p>

                            <p>
                                <em>The Next Media Frontier 2026</em> is not just a conference;
                                it is a collective declaration — that India’s digital media will
                                lead with conscience, creativity, and courage. This conclave
                                will bring together visionaries from technology, governance, and
                                journalism to design the blueprint of{' '}
                                <strong>Media 3.0 — where credibility meets innovation.</strong>
                            </p>

                            <p>
                                Under the banner of IDMRB, we are not just adapting to change —
                                <strong> we are defining it.</strong> We are creating a future
                                where digital platforms are transparent, where content inspires
                                confidence, and where journalism remains the heartbeat of
                                democracy.
                            </p>

                            <p>
                                To every digital publisher, editor, innovator, and policymaker —
                                I say this with conviction: The coming decade will not just test
                                our skills; it will test our soul. And if we stand united on the
                                foundation of ethics, empathy, and excellence —
                                <strong>
                                    {' '}
                                    India will not just be a participant in the global media
                                    revolution; it will lead it.
                                </strong>
                            </p>

                            <p>
                                Let us build together a media ecosystem that is as dynamic as
                                technology, as bold as truth, and as infinite as imagination.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <p className="text-gray-800 font-medium">With gratitude and determination,</p>
                            <p className="font-semibold text-gray-900 mt-2">Mukesh S. Dadhich</p>
                            <p className="text-gray-700 text-sm italic">
                                Founder & Chairman, Indian Digital Media Regulatory Board (IDMRB)
                            </p>
                            <p className="text-gray-700 mt-2">
                                📧{' '}
                                <Link
                                    href="mailto:chairman@idmrb.org"
                                    className="text-blue-800 hover:underline"
                                >
                                    chairman@idmrb.org
                                </Link>
                            </p>
                            <p className="text-gray-700">
                                🌐{' '}
                                <Link
                                    href="https://www.idmrb.in"
                                    className="text-blue-800 hover:underline"
                                >
                                    www.idmrb.org
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Closing Quote */}
                <blockquote className="mt-12 bg-blue-50 border-l-4 border-blue-800 p-6 rounded-xl text-center text-gray-800 italic">
                    “The future of journalism will not be built by algorithms — but by integrity.
                    Technology can amplify voices, but only ethics can make them heard.”
                    <br />
                    <span className="font-semibold text-gray-900">— Mukesh S. Dadhich</span>
                </blockquote>
            </div>
        </section>
    );
}
