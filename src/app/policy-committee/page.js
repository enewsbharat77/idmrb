'use client';
import React from 'react';
import Link from 'next/link';

export default function PolicyAffairsCouncil() {
    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                    Policy Affairs & Regulatory Initiatives Council — IDMRB
                </h1>

                <p className="text-lg text-gray-700 text-center mb-12 italic">
                    Shaping balanced, progressive, and transparent digital media policies in India.
                </p>

                {/* About Section */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Council</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The <strong>Policy Affairs & Regulatory Initiatives Council</strong> of the
                        Indian Digital Media Regulatory Board (IDMRB) serves as the principal think tank
                        and policy advisory body for the digital news and content ecosystem in India.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        This Council leads engagement with the Government of India, statutory authorities,
                        and policy-making institutions on matters concerning <em>media regulation, digital governance,
                            data privacy, content ethics, and competition frameworks.</em>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Its purpose is to ensure that the collective voice of responsible digital publishers is
                        heard in every policy dialogue — enabling balanced, progressive, and transparent regulations
                        that support both press freedom and public interest.
                    </p>
                </div>

                {/* Key Focus Areas */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Focus Areas</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                🔹 Policy Monitoring & Research
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Tracking legislative and regulatory developments on digital content and media competition.</li>
                                <li>Conducting policy mapping and publishing updates for members.</li>
                                <li>Supporting members with research-based compliance awareness.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                🔹 Regulatory Consultation & Representation
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Coordinating unified responses to draft policies and government consultations.</li>
                                <li>Preparing evidence-based recommendations for national authorities.</li>
                                <li>Ensuring representation in committees and industry forums.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                🔹 Legal & Compliance Guidance
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Providing training on media laws, data protection, and IT Rules.</li>
                                <li>Developing compliance toolkits for publishers.</li>
                                <li>Facilitating access to regulatory and legal experts.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                🔹 Policy Thought Leadership
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Drafting white papers, position notes, and advocacy documents.</li>
                                <li>Collaborating with think tanks and academic institutions.</li>
                                <li>Promoting balanced policy discourse on media regulation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Structure Section */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Structure</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li><strong>Chairperson & Co-Chairperson:</strong> Elected from IDMRB member organizations.</li>
                        <li><strong>Core Members:</strong> Senior experts from legal, regulatory, and editorial teams.</li>
                        <li><strong>Advisory Network:</strong> Legal scholars and policy professionals.</li>
                        <li><strong>Support Secretariat:</strong> Managed by IDMRB’s Policy Division.</li>
                        <li><strong>Working Groups:</strong> Dedicated teams for Data Governance, IT Rules, and Advertising Standards.</li>
                    </ul>
                </div>

                {/* Council Objectives */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Council Objectives</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Advocate progressive digital media policies.</li>
                        <li>Ensure member participation in national consultations.</li>
                        <li>Build consensus on key regulatory issues.</li>
                        <li>Promote self-regulation and ethical media practices.</li>
                        <li>Strengthen collaboration with policy bodies and legal experts.</li>
                    </ul>
                </div>

                {/* Expected Outcomes */}
                <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Expected Outcomes</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Enhanced policy awareness and compliance across members.</li>
                        <li>Unified policy representations from the digital publishing sector.</li>
                        <li>Improved government-industry dialogue.</li>
                        <li>Transparent and growth-oriented media governance.</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-50 rounded-2xl shadow-md p-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact</h2>
                    <p className="text-gray-700 mb-1">
                        📧 <Link href="mailto:policy.affairs@idmrb.org" className="text-blue-600 hover:underline">
                            policy.affairs@idmrb.org
                        </Link>
                    </p>
                    <p className="text-gray-700 mb-1">📞 +91 9024209393</p>
                    <p className="text-gray-700">
                        🌐 Indian Digital Media Regulatory Board (IDMRB)
                    </p>
                </div>
            </div>
        </section>
    );
}
