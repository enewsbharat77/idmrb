"use client";
import Image from "next/image";

export default function AICouncil() {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Page Header */}
                <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
                    AI & Digital Intelligence Council — IDMRB
                </h1>
                <p className="text-center text-lg text-gray-600 italic mb-12">
                    Innovation | Ethics | Intelligence | Transformation
                </p>

                {/* About Section */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        About the Council
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The <strong>AI & Digital Intelligence Council</strong> of the Indian
                        Digital Media Regulatory Board (IDMRB) is a forward-looking forum
                        that brings together digital publishers, technologists, and
                        innovators to harness the transformative potential of Artificial
                        Intelligence in digital journalism and media operations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        In an age where algorithms shape attention and automation powers
                        content, this council acts as a{" "}
                        <em>knowledge and collaboration hub</em> — helping members adopt AI
                        tools responsibly while balancing innovation with journalistic
                        ethics.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        The Council’s mission is to enable media organizations to integrate
                        AI in <em>editorial workflows, audience engagement, content
                            curation, revenue models, and operational efficiency</em>, while
                        ensuring transparency, fairness, and human oversight remain central
                        to journalism.
                    </p>
                </div>

                {/* Key Focus Areas */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Key Focus Areas
                    </h2>

                    {/* AI for Editorial Innovation */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 AI for Editorial Innovation
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>
                            Exploring AI-assisted writing, translation, and fact-checking tools
                            to improve newsroom speed, accuracy, and reach.
                        </li>
                        <li>
                            Integrating generative AI responsibly to enhance creativity while
                            protecting journalistic integrity.
                        </li>
                        <li>
                            Developing internal ethical frameworks for the use of AI in
                            content generation.
                        </li>
                    </ul>

                    {/* AI in Operations */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 AI in Operations & Efficiency
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>
                            Identifying automation opportunities in news production, analytics,
                            and multimedia processing.
                        </li>
                        <li>
                            Improving workflow efficiency through AI-based content management
                            and personalization systems.
                        </li>
                        <li>
                            Leveraging predictive analytics for smarter newsroom
                            decision-making.
                        </li>
                    </ul>

                    {/* AI for Business */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 AI for Business & Audience Insights
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
                        <li>
                            Using machine learning to strengthen advertising strategies,
                            optimize pricing, and forecast audience behavior.
                        </li>
                        <li>
                            Supporting publishers in monetization through AI-led
                            recommendation engines and contextual ad tools.
                        </li>
                        <li>
                            Exploring new frontiers like AI-driven audience segmentation and
                            sentiment tracking.
                        </li>
                    </ul>

                    {/* Ethics */}
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                        🔹 Ethics, Governance & Awareness
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            Developing responsible use policies and ethical guidelines for AI
                            adoption in media.
                        </li>
                        <li>
                            Promoting awareness about AI bias, misinformation detection, and
                            transparency in algorithmic processes.
                        </li>
                        <li>
                            Building literacy through workshops, research papers, and case
                            studies.
                        </li>
                    </ul>
                </div>

                {/* Structure Section */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Structure</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            <strong>Chairperson & Co-Chairperson:</strong> Elected from IDMRB
                            member organizations.
                        </li>
                        <li>
                            <strong>Core Members:</strong> Experts from editorial, product,
                            technology, and business development teams.
                        </li>
                        <li>
                            <strong>Advisory Experts:</strong> Specialists from AI research
                            labs, universities, and think-tanks.
                        </li>
                        <li>
                            <strong>Working Groups:</strong> Taskforces on Editorial AI Tools,
                            Automation, Audience Intelligence, and Monetization Models.
                        </li>
                        <li>
                            <strong>Secretariat:</strong> Coordinated by IDMRB’s Digital
                            Policy Division.
                        </li>
                    </ul>
                </div>

                {/* Objectives */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Council Objectives
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            Foster <em>responsible AI adoption</em> across India’s digital
                            media landscape.
                        </li>
                        <li>
                            Serve as a platform for <em>ethical innovation and capacity
                                building</em> in AI-driven journalism.
                        </li>
                        <li>
                            Empower members to <em>develop, deploy, and govern</em> AI systems
                            that enhance content quality and sustainability.
                        </li>
                        <li>
                            Align with India’s vision for an{" "}
                            <em>AI-enabled, transparent, and inclusive digital ecosystem.</em>
                        </li>
                    </ul>
                </div>

                {/* Expected Outcomes */}
                <div className="bg-white p-8 rounded-2xl shadow-md mb-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Expected Outcomes
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>
                            Improved newsroom productivity and smarter content distribution
                            using AI tools.
                        </li>
                        <li>
                            Ethical AI frameworks recognized across digital publishers.
                        </li>
                        <li>
                            Development of open learning resources and knowledge-sharing
                            programs.
                        </li>
                        <li>
                            Strengthened collaboration between media houses, academia, and AI
                            innovators.
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
                    <p className="text-gray-700">
                        For membership and collaboration opportunities:
                    </p>
                    <p className="text-blue-700 font-medium mt-2">
                        📧 <a href="mailto:ai.committee@idmrb.org">ai.committee@idmrb.org</a>
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
