"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPinterestP } from "react-icons/fa";

const tabs = [
    {
        name: "Display Ads",
        images: [
            "https://picsum.photos/id/1015/400/300",
            "https://picsum.photos/id/1016/400/300",
            "https://picsum.photos/id/1021/400/300",
            "https://picsum.photos/id/1025/400/300",
        ],
        features: [
            { title: "Text to Ads with AI Ad Maker", desc: "Turn text into custom ad creatives with engaging visuals." },
            { title: "Multi Language Ads", desc: "Make creatives in 19+ languages easily." },
            { title: "A/B Tests", desc: "Create multiple ad variations for testing." },
        ],
    },
    {
        name: "Creatives",
        images: [
            "https://picsum.photos/id/1031/400/300",
            "https://picsum.photos/id/1033/400/300",
            "https://picsum.photos/id/1035/400/300",
            "https://picsum.photos/id/1037/400/300",
        ],
        features: [
            { title: "Creative Templates", desc: "Access ready-to-use templates for quick designs." },
            { title: "Custom Layouts", desc: "Drag & drop editor for creative freedom." },
            { title: "Brand Kit", desc: "Apply your brand style instantly." },
        ],
    },
    {
        name: "Integrations",
        icons: [
            { icon: <FaFacebookF />, color: "bg-blue-600" },
            { icon: <FaTwitter />, color: "bg-sky-400" },
            { icon: <FaInstagram />, color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
            { icon: <FaLinkedinIn />, color: "bg-blue-700" },
            { icon: <FaYoutube />, color: "bg-red-600" },
            { icon: <FaPinterestP />, color: "bg-red-500" },


        ],
        features: [
            { title: "Social Media APIs", desc: "Connect directly to Facebook, Instagram, LinkedIn." },
            { title: "Analytics Tools", desc: "Track and measure ad performance." },
            { title: "Automation", desc: "Post & manage campaigns automatically." },
        ],
    },
];

export default function SocialMediaSuite() {
    const [activeTab, setActiveTab] = useState(0);

    const isTextLeft = activeTab % 2 === 0; // Alternate layout

    return (
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-slate-900">
                Complete Suite for your Social Media Needs
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-8 space-x-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 sm:px-8 py-3 rounded-md font-medium transition-all duration-300 ${activeTab === index
                            ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
                            : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400"
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div
                className={`px-8 mx-auto grid md:grid-cols-2 gap-10 items-center`}
            >
                {/* Text Section */}
                <div
                    className={`space-y-4 ${isTextLeft ? "order-1 animate-slideInLeft" : "order-2 animate-slideInRight"
                        }`}
                    key={`text-${activeTab}`}
                >
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">{tabs[activeTab].name}</h3>
                    {tabs[activeTab].features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/60"
                        >
                            <h4 className="text-lg font-semibold text-slate-800">
                                {feature.title}
                            </h4>
                            <p className="text-base text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Images / Icons Section */}
                <div
                    className={`${isTextLeft ? "order-2 animate-slideInRight" : "order-1 animate-slideInLeft"
                        }`}
                    key={`images-${activeTab}`}
                >
                    {activeTab === 2 ? (
                        // Social Media Icons with random placement
                        <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-50 to-white rounded-2xl">
                            {tabs[activeTab].icons?.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute w-20 h-20 flex items-center justify-center rounded-2xl ${item.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                                    style={{
                                        top: `${Math.random() * 80 + 10}%`, // Random top position between 10% and 90%
                                        left: `${Math.random() * 80 + 10}%`, // Random left position between 10% and 90%
                                        transform: `translate(-50%, -50%)`, // Center the icon
                                    }}
                                >
                                    <span className="text-white text-2xl">{item.icon}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Image Grid for other tabs
                        <div className="grid grid-cols-2 gap-4">
                            {tabs[activeTab].images?.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/60"
                                >
                                    <Image
                                        src={src}
                                        alt={`Image ${idx}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-in-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-in-out;
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(30px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
        </section>
    );
}