"use client";
import { useState } from "react";
import { ChevronRight, User, Briefcase, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MembershipForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        fatherFirst: "",
        fatherLast: "",
        fullAddress: "",
        email: "",
        mobile: "",
        experience: "",
        workingWith: [],
        channelName: "",
        totalExp: "",
        joiningFee: "",
        txnNumber: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setForm((prev) => ({
                ...prev,
                workingWith: checked
                    ? [...prev.workingWith, value]
                    : prev.workingWith.filter((v) => v !== value),
            }));
            return;
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in">
                    <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200 shadow-sm">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-purple-800 text-sm font-bold tracking-wide">JOIN OUR COMMUNITY</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tight">
                        Professional Membership
                    </h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
                        Complete your profile to join our exclusive network of media professionals
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-center justify-between max-w-2xl mx-auto">
                        {[
                            { num: 1, label: "Personal", icon: User },
                            { num: 2, label: "Professional", icon: Briefcase },
                            { num: 3, label: "Payment", icon: CreditCard }
                        ].map((step, idx) => (
                            <div key={step.num} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${currentStep >= step.num
                                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg scale-110'
                                        : 'bg-gray-200 text-gray-500'
                                        }`}>
                                        {currentStep > step.num ? (
                                            <CheckCircle2 className="w-6 h-6" />
                                        ) : (
                                            <step.icon className="w-5 h-5" />
                                        )}
                                    </div>
                                    <span className={`text-xs font-semibold mt-2 ${currentStep >= step.num ? 'text-purple-600' : 'text-gray-500'}`}>
                                        {step.label}
                                    </span>
                                </div>
                                {idx < 2 && (
                                    <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${currentStep > step.num ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-200'
                                        }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl shadow-purple-200/50 overflow-hidden border border-white/50 transform transition-all duration-500 hover:shadow-purple-300/60">
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">

                        {/* Personal Information Section */}
                        <div className="animate-slide-up">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg">
                                    <User className="w-5 h-5" />
                                </span>
                                Personal Information
                            </h2>

                            <div className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <p className="text-xs text-slate-500 mb-3">(As shown on Aadhar Card)</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={form.firstName}
                                            onChange={(e) => { handleChange(e); setCurrentStep(1); }}
                                            required
                                            className="px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                    </div>
                                </div>

                                {/* Father Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Father's Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="fatherFirst"
                                            placeholder="First Name"
                                            value={form.fatherFirst}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                        <input
                                            type="text"
                                            name="fatherLast"
                                            placeholder="Last Name"
                                            value={form.fatherLast}
                                            onChange={handleChange}
                                            required
                                            className="px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Full Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        name="fullAddress"
                                        value={form.fullAddress}
                                        onChange={handleChange}
                                        placeholder="Enter your complete address"
                                        rows={3}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 resize-none"
                                    />
                                </div>

                                {/* Contact Information */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-3">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            placeholder="your@email.com"
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-900 mb-3">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            required
                                            value={form.mobile}
                                            placeholder="10-digit number"
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t-2 border-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-sm text-purple-600 font-semibold">✦</span>
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div className="animate-slide-up">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg">
                                    <Briefcase className="w-5 h-5" />
                                </span>
                                Professional Details
                            </h2>

                            <div className="space-y-6">
                                {/* Experience */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Total Experience <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="experience"
                                        required
                                        value={form.experience}
                                        placeholder="Years of experience"
                                        onChange={(e) => { handleChange(e); setCurrentStep(2); }}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                    />
                                </div>

                                {/* Working With */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-4">
                                        Media Experience <span className="text-red-500">*</span>
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {["Electronic Media", "Print Media", "Web Media", "Social Media"].map((item) => (
                                            <label key={item} className="relative flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 hover:border-purple-300 cursor-pointer transition-all duration-300 group">
                                                <input
                                                    type="checkbox"
                                                    value={item}
                                                    onChange={handleChange}
                                                    checked={form.workingWith.includes(item)}
                                                    className="w-5 h-5 rounded-lg border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer transition-all"
                                                />
                                                <span className="text-sm text-slate-700 font-semibold group-hover:text-purple-700 transition-colors">{item}</span>
                                                {form.workingWith.includes(item) && (
                                                    <CheckCircle2 className="absolute top-1 right-1 w-4 h-4 text-purple-600" />
                                                )}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Channel Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Channel / Publication Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="channelName"
                                        required
                                        value={form.channelName}
                                        placeholder="Your current channel or publication"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t-2 border-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-sm text-purple-600 font-semibold">✦</span>
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div className="animate-slide-up">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-sm shadow-lg">
                                    <CreditCard className="w-5 h-5" />
                                </span>
                                Payment Details
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-5 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                            <Sparkles className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-purple-900 font-semibold mb-1">Payment Instructions</p>
                                            <p className="text-sm text-purple-800">
                                                Send joining fee via Paytm/Google Pay to <span className="font-mono font-bold text-purple-900 bg-white px-2 py-1 rounded">9024209393</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Joining Fee */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Amount Paid <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600 font-bold text-lg">₹</span>
                                        <input
                                            type="text"
                                            required
                                            name="joiningFee"
                                            value={form.joiningFee}
                                            placeholder="0.00"
                                            onChange={(e) => { handleChange(e); setCurrentStep(3); }}
                                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 font-semibold"
                                        />
                                    </div>
                                </div>

                                {/* Transaction Number */}
                                <div>
                                    <label className="block text-sm font-semibold text-slate-900 mb-3">
                                        Transaction ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name="txnNumber"
                                        value={form.txnNumber}
                                        placeholder="Enter transaction reference ID"
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 hover:border-purple-300 font-mono"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="group relative w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-purple-500/40 hover:shadow-purple-600/50 hover:scale-[1.02] transform overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                {submitted ? (
                                    <>
                                        <CheckCircle2 className="w-6 h-6 animate-bounce" />
                                        <span className="relative z-10">Submitted Successfully!</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10">Complete Registration</span>
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                                    </>
                                )}
                            </button>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-600 mt-5">
                                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <p>Your information is secure and will be kept confidential</p>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Trust Badge */}
                <div className="mt-10 flex items-center justify-center gap-8 text-center">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-semibold text-slate-700">Trusted by 500+ professionals</span>
                    </div>
                </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>
        </section>
    );
}
