"use client";
import Image from "next/image";

export default function DigitalGrowthCouncil() {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    Digital Growth & Technology Partnerships Council — IDMRB
                </h1>
                <p className="text-center text-lg text-gray-600 italic mb-12">
                    Accelerating Innovation | Empowering Publishers | Driving Growth
                </p>

                {/* About Section */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        About the Council
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>Digital Growth & Technology Partnerships Council</strong> of the
                        Indian Digital Media Regulatory Board (IDMRB) acts as a collaborative
                        innovation platform that connects digital publishers, technology leaders,
                        and strategy professionals to accelerate the evolution of India’s digital
                        media ecosystem.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        This Council focuses on three core pillars —{" "}
                        <em>technology integration, new business opportunities, and sustainable
                            audience growth.</em> It enables member organizations to identify futuristic
                        tech solutions, discover emerging content opportunities, and adopt audience
                        strategies that align with modern consumption behavior.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        The Council encourages digital-first thinking, promotes experimentation,
                        and nurtures partnerships that empower publishers to reach, retain, and
                        engage their audiences more effectively.
                    </p>
                </div>

                {/* Key Focus Areas */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Key Focus Areas
                    </h2>

                    {/* Technology Collaborations */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 Technology Collaborations
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>
                            Identifying and integrating cutting-edge CMS, analytics, automation,
                            and distribution platforms that enhance workflow and efficiency.
                        </li>
                        <li>
                            Exploring AI-driven personalization, audience segmentation, and smart
                            monetization solutions for digital publishers.
                        </li>
                        <li>
                            Creating a collaborative ecosystem between media-tech companies and
                            publishers to drive growth, data transparency, and innovation.
                        </li>
                    </ul>

                    {/* Emerging Opportunities */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 Emerging Opportunities
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>
                            Tracking new business models including immersive storytelling,
                            video-first content, and regional expansions.
                        </li>
                        <li>
                            Supporting publishers in exploring affiliate marketing, influencer-led
                            outreach, and commerce integration.
                        </li>
                        <li>
                            Encouraging experimentation through pilot projects and innovation
                            showcases among members.
                        </li>
                    </ul>

                    {/* Audience Reach */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 Audience Reach & Engagement
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            Sharing best practices for SEO, app engagement, and direct traffic
                            expansion.
                        </li>
                        <li>
                            Facilitating platform-neutral audience strategies to reduce dependency
                            on intermediaries.
                        </li>
                        <li>
                            Promoting content authenticity, optimization, and reader retention
                            models.
                        </li>
                    </ul>
                </div>

                {/* Structure */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Structure</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            <strong>Chairperson & Co-Chairperson:</strong> Nominated from among IDMRB
                            member organizations.
                        </li>
                        <li>
                            <strong>Core Members:</strong> Senior professionals from product,
                            technology, editorial, and audience teams.
                        </li>
                        <li>
                            <strong>Advisory Partners:</strong> Experts from media-tech, analytics,
                            AI, and content strategy sectors.
                        </li>
                        <li>
                            <strong>Working Format:</strong> Monthly meetings, vendor demos,
                            workshops, and reports.
                        </li>
                    </ul>
                </div>

                {/* Council Objectives */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Council Objectives
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            Create an ecosystem that connects <em>technology, journalism, and
                                audience growth.</em>
                        </li>
                        <li>
                            Identify and implement <em>new revenue and engagement opportunities</em>{" "}
                            for digital publishers.
                        </li>
                        <li>
                            Strengthen India’s digital publishing infrastructure through
                            collaboration and standardization.
                        </li>
                        <li>
                            Empower members to innovate responsibly while maintaining editorial
                            integrity.
                        </li>
                    </ul>
                </div>

                {/* Expected Outcomes */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Expected Outcomes
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Stronger integration of technology in publishing workflows.</li>
                        <li>Sustainable growth in audience engagement and reach.</li>
                        <li>
                            Development of partnerships with credible technology providers.
                        </li>
                        <li>
                            Enhanced digital competitiveness of Indian publishers nationally and
                            globally.
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
                    <p className="text-gray-700">
                        For membership or partnership opportunities:
                    </p>
                    <p className="text-blue-700 font-medium mt-2">
                        📧 <a href="mailto:growth@idmrb.org">growth@idmrb.org</a>
                    </p>
                    <p className="text-gray-700 mt-1">📞 +91 9024209393</p>
                    <p className="text-gray-700 mt-1">
                        🌐 Indian Digital Media Regulatory Board (IDMRB)
                    </p>
                </div>
            </div>
        </section>
    );
}
