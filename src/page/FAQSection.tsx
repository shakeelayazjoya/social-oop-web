"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
    {
        question: "What is your refund policy?",
        answer:
            "We offer a 30-day money-back guarantee. If you’re not satisfied with our product, simply contact us within 30 days for a full refund.",
    },
    {
        question: "Do you offer technical support?",
        answer:
            "Yes! We provide 24/7 technical support via email and live chat to assist you with any issues or questions.",
    },
    {
        question: "Is there a free trial available?",
        answer:
            "Absolutely! You can sign up for a 14-day free trial to explore all features before committing to a plan.",
    },
    {
        question: "Can I upgrade or downgrade my plan later?",
        answer:
            "Yes, you can change your subscription plan anytime from your account settings without any penalties.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Everything you need to know about our services.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FiChevronUp className="text-gray-500 text-2xl" />
                                ) : (
                                    <FiChevronDown className="text-gray-500 text-2xl" />
                                )}
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden px-6 pb-4 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
