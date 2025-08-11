"use client";

import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        { icon: FaTwitter, color: "bg-blue-400 hover:bg-blue-500" },
        { icon: FaFacebookF, color: "bg-blue-600 hover:bg-blue-700" },
        { icon: FaLinkedinIn, color: "bg-blue-500 hover:bg-blue-600" },
        { icon: FaInstagram, color: "bg-gradient-to-tr from-pink-500 to-yellow-500 hover:opacity-90" },
        { icon: FaYoutube, color: "bg-red-500 hover:bg-red-600" },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-50 to-white border-t border-slate-200/60">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 mx-auto">
                        Get started <br /> for free
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <p className="text-slate-600 mb-6 max-w-lg leading-relaxed">
                        Experience the power of AI to Create and Schedule ad creatives, social media content, videos. <br />
                        Ideate, Create and Schedule with Socialoop.ai
                    </p>
                    <button className="px-8 py-4 w-fit rounded-xl text-white font-medium bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Generate your first post
                    </button>
                </div>
            </div>

            <hr className="border-slate-200/60" />

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
                {[
                    {
                        title: "Use Cases",
                        links: [
                            "E-Commerce Product Videos",
                            "Instagram Post Maker",
                            "Text to Social Media Posts",
                            "Scheduling and Publishing",
                            "Social media Autopost",
                            "AI Ad Generator",
                        ]
                    },
                    {
                        title: "Free AI Tools",
                        links: [
                            "Hashtag Generator",
                            "Color Palette Generator",
                            "Best Photo Picker",
                            "Video Thumbnail Picker",
                        ]
                    },
                    {
                        title: "Company",
                        links: [
                            "About Us",
                            "Pricing",
                            "Blogs",
                            "Contact Us",
                            "Privacy Policy",
                            "Terms & Conditions",
                        ]
                    },
                    {
                        title: "Compare",
                        links: [
                            "Image & Video Editors",
                            "GPT-3 Copy Generators",
                            "Scheduling Tools",
                        ],
                        storeImages: true
                    }
                ].map((col, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-slate-900 mb-4">{col.title}</h3>
                        <ul className="space-y-3 text-slate-600">
                            {col.links.map((link, idx) => (
                                <li
                                    key={idx}
                                    className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer relative group"
                                >
                                    <span className="relative inline-block">
                                        {link}
                                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </li>
                            ))}
                        </ul>


                    </div>
                ))}
            </div>

            <hr className="border-slate-200/60" />

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 text-center">
                <p>©2025  Socialoop.AI Pvt. Ltd. All Rights Reserved.</p>

                {/* Social Links */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                    {socialLinks.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={idx}
                                href="#"
                                className={`p-3 rounded-xl text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl ${s.color}`}
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
