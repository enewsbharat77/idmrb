"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your organization?",
      answer:
        "Our association is a collective of leading digital news publishers, representing the digital arms of major print and broadcasting media houses. It works to promote and protect the interests of the digital news industry while fostering innovation, collaboration, and ethical practices.",
    },
    {
      question: "Who are the members?",
      answer:
        "We comprise prominent digital publishers including Lokmat, Free Press Journal, Indian Express, Zee Media, Dainik Jagran, Eenadu, ABP Group, Indian TV, Mathrubhumi, Malayala Manorama, India Today, The Hindu, Dainik Bhaskar, Network 18, Times Internet, HT Digital, NDTV, The New Indian Express, The Mysore Printers, and Amar Ujala.",
    },
    {
      question: "What are your key objectives?",
      answer:
        "Our objective is to represent and empower digital news publishers through collaboration, advocacy, and awareness. We aim to address challenges like monetization, fake news, and digital competition while promoting technological advancement.",
    },
    {
      question: "How do you engage with the government and regulators?",
      answer:
        "We actively engage with regulatory authorities including the Competition Commission, Ministry of Information & Broadcasting, and others to provide insights and policy recommendations related to the digital news ecosystem.",
    },
    {
      question: "How can one become a member?",
      answer:
        "Membership is open to verified digital news publishers who align with our objectives and ethical standards. For details on eligibility and application, please contact us at info@example.com.",
    },
    {
      question: "What initiatives have you undertaken?",
      answer:
        "We have led initiatives such as advocating fair revenue-sharing with Big Tech, promoting industry standards for brand safety, developing playbooks and guidelines, and tackling misinformation and fake news.",
    },
    {
      question: "How do you support your members?",
      answer:
        "We provide a platform for collaboration, offer strategic guidance, conduct research, evaluate vendors, and represent members’ interests before regulators and industry bodies.",
    },
    {
      question: "How is the organization governed?",
      answer:
        "We are governed by a Chairperson, Vice Chairperson, and Treasurer, supported by a Secretariat that manages daily operations, coordinates member activities, and drives strategic initiatives.",
    },
    {
      question: "Can you help address issues related to fake news?",
      answer:
        "Yes, we work closely with members to promote fact-checking standards, raise awareness, and encourage industry-wide collaboration on misinformation challenges.",
    },
    {
      question: "Where can I find the latest updates and reports?",
      answer:
        "You can visit our ‘News and Updates’ page for the latest insights, reports, and announcements from our association.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        General Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-blue-50 transition-all duration-200"
            >
              {faq.question}
              <span className="text-blue-600 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
