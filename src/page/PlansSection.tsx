"use client";

import { useState } from "react";
import { FaCheck, FaCalendarAlt } from "react-icons/fa";

const monthlyPlans = [
    {
        name: "Starter",
        price: "$19",
        period: "per month",
        features: ["1 Project", "Basic Support", "Community Access"],
    },
    {
        name: "Pro",
        price: "$49",
        period: "per month",
        features: ["10 Projects", "Priority Support", "Advanced Analytics"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$99",
        period: "per month",
        features: ["Unlimited Projects", "Dedicated Manager", "Custom Solutions"],
    },
];

const yearlyPlans = [
    {
        name: "Starter",
        price: "$190",
        period: "per year",
        features: ["1 Project", "Basic Support", "Community Access"],
    },
    {
        name: "Pro",
        price: "$490",
        period: "per year",
        features: ["10 Projects", "Priority Support", "Advanced Analytics"],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$990",
        period: "per year",
        features: ["Unlimited Projects", "Dedicated Manager", "Custom Solutions"],
    },
];

export default function PlansSection() {
    const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

    const plans = activeTab === "monthly" ? monthlyPlans : yearlyPlans;

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-4xl font-bold mb-3">A Plan for Every Need 🚀</h2>
                <p className="text-gray-600 text-lg">
                    Start with a Free trial and upgrade later
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-gray-100 rounded-full p-1 flex shadow-inner">
                    <button
                        onClick={() => setActiveTab("monthly")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "monthly"
                            ? "bg-white shadow text-blue-600"
                            : "text-gray-600 hover:text-blue-500"
                            }`}
                    >
                        <FaCalendarAlt /> Monthly
                    </button>
                    <button
                        onClick={() => setActiveTab("yearly")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === "yearly"
                            ? "bg-white shadow text-blue-600"
                            : "text-gray-600 hover:text-blue-500"
                            }`}
                    >
                        <FaCalendarAlt /> Yearly
                    </button>
                </div>
            </div>

            {/* Plans */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${plan.popular ? "ring-2 ring-blue-500" : ""
                            }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-2">{plan.price}</p>
                        <p className="text-gray-500 mb-6">{plan.period}</p>

                        <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                    <FaCheck className="text-green-500" /> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
