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
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 px-4">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-slate-900">A Plan for Every Need 🚀</h2>
                <p className="text-base text-slate-600">
                    Start with a Free trial and upgrade later
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-slate-100 rounded-full p-1 flex shadow-lg backdrop-blur-sm">
                    <button
                        onClick={() => setActiveTab("monthly")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === "monthly"
                            ? "bg-white shadow-md text-indigo-600"
                            : "text-slate-600 hover:text-indigo-500"
                            }`}
                    >
                        <FaCalendarAlt /> Monthly
                    </button>
                    <button
                        onClick={() => setActiveTab("yearly")}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === "yearly"
                            ? "bg-white shadow-md text-indigo-600"
                            : "text-slate-600 hover:text-indigo-500"
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
                        className={`relative bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${plan.popular ? "ring-2 ring-indigo-500 shadow-indigo-200/50" : ""
                            }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                                Most Popular
                            </span>
                        )}

                        <h3 className="text-xl font-semibold mb-4 text-slate-900">{plan.name}</h3>
                        <p className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">{plan.price}</p>
                        <p className="text-base text-slate-500 mb-6">{plan.period}</p>

                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-base text-slate-700">
                                    <FaCheck className="text-emerald-500 flex-shrink-0" /> {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-base text-white py-3 rounded-xl font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
