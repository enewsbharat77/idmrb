import Head from "next/head";

export const metadata = {
    title: "Contact Us | Indian Digital Media Regulatory Board (IDMRB)",
    description:
        "Get in touch with the Indian Digital Media Regulatory Board (IDMRB) for membership, compliance, media queries, or general information related to IT Rules 2021 and digital self-regulation.",
    keywords:
        "IDMRB contact, digital media regulation, IT Rules 2021, Indian Digital Media Regulatory Board, OTT compliance, media ethics, self-regulatory body India",
};

export default function ContactPage() {
    return (
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-6">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
                    Contact Us | Indian Digital Media Regulatory Board (IDMRB)
                </h1>

                {/* Intro */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-sm mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Get in Touch
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        The Indian Digital Media Regulatory Board (IDMRB) welcomes
                        communication from digital publishers, OTT platforms, and
                        individuals seeking clarity or collaboration regarding the{" "}
                        <strong>IT Rules, 2021</strong> and principles of self-regulation in
                        the digital media ecosystem.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Whether you’re a digital content platform looking to align with
                        compliance standards, or a citizen wishing to share suggestions for
                        responsible media practices — we value your voice and your
                        participation.
                    </p>
                </section>

                {/* Contact Info */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-sm mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Reach Us At
                    </h2>
                    <p className="mb-2 font-medium text-gray-800">
                       📍 <strong>Head Office</strong>
                    </p>
                    <p className="text-gray-700 mb-4">
                        Corporate Office: 91, C Block Sector 10, Nodia - 201301 (Uttar Pradesh), India
                    </p>


                    <p className="mb-2 font-medium text-gray-800">
                        📍 <strong>Regional Office:</strong>
                    </p>
                    <p className="text-gray-700 mb-4">
                        Indian Digital Media Regulatory Board (IDMRB) <br />
                        70, Near RIICO Flyover, Sanganer, Jaipur - 302029 (Rajasthan), India
                    </p>

                    <div className="mb-4">
                        <p className="font-medium text-gray-800">📧 <strong>Email:</strong></p>
                        <ul className="text-gray-700 mt-1 space-y-1">
                            <li>
                                General Queries:{" "}
                                <a
                                    href="mailto:info@idmrb.in"
                                    className="text-blue-800 hover:underline"
                                >
                                    info@idmrb.in
                                </a>
                            </li>
                            <li>
                                Membership & Compliance:{" "}
                                <a
                                    href="mailto:admin@idmrb.in"
                                    className="text-blue-800 hover:underline"
                                >
                                    admin@idmrb.in
                                </a>
                            </li>
                            <li>
                                Media & Outreach:{" "}
                                <a
                                    href="mailto:press@idmrb.in"
                                    className="text-blue-800 hover:underline"
                                >
                                    press@idmrb.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-800">
                        📞 <strong>Phone:</strong> 0141-3510746, 3523689 &nbsp;|&nbsp;
                        <strong>Helpline:</strong> +91 9024209393
                    </p>
                </section>

                {/* Office Hours */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-sm mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Office Hours
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Monday to Friday: <strong>10:00 AM – 6:00 PM</strong> <br />
                        (Closed on Government Holidays)
                    </p>
                </section>

                {/* Contact Form */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-sm mb-10">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Write to Us
                    </h2>
                    <p className="text-gray-700 mb-6">
                        You can use the form below to send us your message. Our team will
                        get back to you within 48 working hours.
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">
                                Full Name*
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded-md outline-0 p-2 focus:ring-2 focus:ring-blue-800"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">
                                Organization / Media House
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 outline-0 focus:ring-2 focus:ring-blue-800"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">
                                Email Address*
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full border border-gray-300 rounded-md p-2 outline-0 focus:ring-2 focus:ring-blue-800"
                            />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded-md p-2 outline-0 focus:ring-2 focus:ring-blue-800"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium text-gray-700 mb-1">
                                Message / Query*
                            </label>
                            <textarea
                                required
                                rows="5"
                                className="w-full border border-gray-300 rounded-md p-2 outline-0 focus:ring-2 focus:ring-blue-800"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-blue-800 text-white px-6 py-2 rounded-md outline-0 hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>

                {/* Social Links */}
                <section className="bg-white p-6 md:p-10 rounded-2xl shadow-sm mb-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Connect With Us
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Stay updated with our latest initiatives, policy updates, and
                        workshops:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            ["Facebook", "#"],
                            ["X (Twitter)", "#"],
                            ["LinkedIn", "#"],
                            ["Instagram", "#"],
                        ].map(([name, link]) => (
                            <a
                                key={name}
                                href={link}
                                className="text-blue-800 font-medium hover:underline"
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </section>


            </div>
        </main>
    );
}
