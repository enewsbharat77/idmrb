"use client";

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The <span className="font-semibold text-blue-600">
            Indian Digital Media Regulatory Board (IDMRB)
          </span>{" "}
          is a self-regulatory body formed under the framework of the{" "}
          <span className="font-semibold">
            Information Technology (Intermediary Guidelines and Digital Media
            Ethics Code) Rules, 2021
          </span>
          , with the vision to ensure transparency, accountability, and ethical
          journalism in India’s growing digital media ecosystem.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In an era where information travels faster than ever, IDMRB stands as
          a credible and responsible institution that bridges the gap between
          digital content creators, regulatory authorities, and the audience.
          The board works to uphold the integrity of online journalism while
          supporting innovation, creative freedom, and the highest standards of
          public trust.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          As a collective voice of India’s independent digital publishers, IDMRB
          represents their interests before the Ministry of Information and
          Broadcasting, regulatory authorities, and policy-making institutions.
          Our mission is to build a digital media environment that is{" "}
          <span className="font-semibold">
            responsible, self-disciplined, and people-centric
          </span>
          , ensuring that the rights of both publishers and audiences are
          protected.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Beyond compliance, IDMRB strives to{" "}
          <span className="font-semibold">educate and empower</span> its members
          by spreading awareness about evolving media ethics, technological
          trends, and fact-based reporting practices. The Board also facilitates
          collaboration among news platforms, fostering an environment of mutual
          respect, integrity, and collective growth.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The organization serves as a{" "}
          <span className="font-semibold">
            national umbrella body for digital news and OTT content platforms
          </span>
          , uniting diverse voices across India’s digital space under one
          trusted framework. Through guidance, grievance redressal, and policy
          dialogue, IDMRB aims to strengthen the credibility and long-term
          sustainability of digital journalism in India.
        </p>

        {/* Objectives */}
        <h2 className="text-3xl font-semibold text-gray-800 mt-12 mb-6">
          Objectives of IDMRB
        </h2>

        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li>
            <strong>To Protect and Promote Responsible Journalism:</strong>{" "}
            Safeguard digital news publishers’ interests and ensure compliance
            with IT Rules 2021 while maintaining editorial accountability.
          </li>
          <li>
            <strong>To Represent and Advocate for Digital Media Stakeholders:</strong>{" "}
            Present members’ interests before the Government, MIB, and
            regulators ensuring fair treatment and transparency.
          </li>
          <li>
            <strong>To Build a Trustworthy Digital Ecosystem:</strong> Encourage
            collaboration between publishers, fact-checkers, and tech partners
            to fight misinformation and promote authentic journalism.
          </li>
          <li>
            <strong>To Strengthen Awareness and Capacity Building:</strong>{" "}
            Conduct workshops and awareness programs for journalists and
            creators about digital trends and ethics.
          </li>
          <li>
            <strong>To Encourage Cooperation and Mutual Growth:</strong> Foster
            unity among publishers and OTT platforms to exchange ideas and grow
            collectively.
          </li>
          <li>
            <strong>To Ensure Ethical and Transparent Digital Practices:</strong>{" "}
            Identify and discourage unethical practices while maintaining a fair
            grievance redressal framework.
          </li>
          <li>
            <strong>To Support Government Vision and Public Interest:</strong>{" "}
            Align with national initiatives that promote digital literacy,
            safety, and responsible journalism.
          </li>
        </ul>

        {/* Vision */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To build a{" "}
            <span className="font-semibold">
              responsible, transparent, and self-disciplined digital media
              environment
            </span>{" "}
            that empowers journalists, informs citizens, and strengthens
            democracy in the digital age.
          </p>
        </div>

        {/* Mission */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To ensure that India’s digital media ecosystem grows with{" "}
            <span className="font-semibold">
              credibility, accountability, and creative freedom
            </span>
            , guided by the principles of ethics, innovation, and public trust.
          </p>
        </div>
      </div>
    </section>
  );
}
