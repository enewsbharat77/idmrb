export default function CodeOfEthics() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Digital Code of Ethics — IDMRB
      </h1>

      {/* Preamble */}
      <div className="space-y-6 leading-relaxed text-justify">
        <p>
          The <strong>Indian Digital Media Regulatory Board (IDMRB)</strong>, as
          a recognized self-regulatory body, upholds the highest principles of
          responsible digital journalism in India. This{" "}
          <em>Digital Code of Ethics</em> defines the professional, moral, and
          constitutional standards expected from all member organizations and
          digital publishers under the Board’s purview.
        </p>

        <p>
          The Code reflects IDMRB’s unwavering commitment to uphold{" "}
          <em>Article 19(1)(a)</em> of the Constitution of India — protecting
          freedom of speech and expression — while ensuring{" "}
          <strong>responsibility, accuracy, and accountability</strong> in the
          creation and dissemination of digital content.
        </p>

        <p>
          This Code serves as a guiding framework to foster integrity,
          transparency, and self-discipline across the digital media ecosystem
          — without interfering with editorial independence.
        </p>
      </div>

      {/* Core Objectives */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">
          Core Objectives
        </h2>
        <ul className="list-decimal list-inside space-y-3">
          <li>
            Establish high standards of accuracy, fairness, and ethical
            journalism.
          </li>
          <li>Safeguard editorial independence of digital media.</li>
          <li>
            Ensure compliance with the Constitution, IT Act 2000, and media
            laws.
          </li>
          <li>
            Foster public trust through transparency and responsible reporting.
          </li>
        </ul>
      </div>

      {/* Guiding Principles */}
      <div className="mt-12 space-y-10">
        {[
          {
            title: "Accuracy, Fairness & Transparency",
            content: `Content must be factually accurate, verified, and free from distortion. Errors should be corrected promptly and transparently. Sensationalism or deliberate misinformation is strictly discouraged.`,
          },
          {
            title: "Right to Reply",
            content: `All individuals or entities against whom allegations are made must be given a fair opportunity to respond. Their version must be included or updated clearly with a revision date.`,
          },
          {
            title: "Correction, Retraction & Take-down",
            content: `False or misleading reports must be corrected or removed promptly upon verification. In severe cases, an apology or editorial note may be issued.`,
          },
          {
            title: "Intellectual Property & Copyright",
            content: `Members must respect copyrights and trademarks. External content should be credited or used with permission. Infringement claims must be acted upon quickly.`,
          },
          {
            title: "Responsible Reporting & Sensitivity",
            content: `Sensitive issues like sexual crimes, communal incidents, or cases involving minors must be reported with restraint. Identities of victims must never be revealed.`,
          },
          {
            title: "Respect for Privacy",
            content: `Every person’s privacy must be respected, especially non-public figures. Private details should not be published unless of overriding public interest.`,
          },
          {
            title: "Judicial & Legal Reporting",
            content: `Court coverage should be factual and neutral, avoiding commentary that may influence perception. Sub-judice matters must be treated carefully.`,
          },
          {
            title: "Communal & Social Harmony",
            content: `Reports on religion or community issues must promote harmony and national unity. Avoid language or visuals that provoke bias or hostility.`,
          },
          {
            title: "Grievance Redressal Framework",
            content: `Publishers must comply with IT Rules 2021, appoint a Grievance Officer, and resolve complaints within 30 days. Complaints should be acknowledged within 36 hours.`,
          },
          {
            title: "Training & Awareness",
            content: `Editorial teams must undergo periodic training in media law, ethics, and responsible journalism, covering areas like POCSO, IPR, and RTI.`,
          },
        ].map((item, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Ethical Philosophy */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Ethical Philosophy
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          The IDMRB Code of Ethics is built on the belief that freedom of the
          press and accountability to the public are two sides of the same coin.
          By adhering to this Code, members pledge to protect the truth in
          reporting, the dignity of every citizen, and the spirit of a free,
          fair, and fearless digital India.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md border">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          For Compliance & Queries
        </h3>
        <p>📧 <a href="mailto:ethics@idmrb.org" className="text-blue-600">ethics@idmrb.org</a></p>
        <p>📞 +91 9024209393</p>
        <p>🌐 Indian Digital Media Regulatory Board (IDMRB)</p>
      </div>
    </section>
  );
}
