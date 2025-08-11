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
        <footer className="bg-white border-t border-gray-200">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center text-center lg:text-left">
                <div>
                    <h2 className="text-5xl font-semibold text-gray-900 leading-tight">
                        Get started <br /> for free
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center lg:items-start">
                    <p className="text-gray-600 mb-4 max-w-lg">
                        Experience the power of AI to Create and Schedule ad creatives, social media content, videos. <br />
                        Ideate, Create and Schedule with Socialoop.ai
                    </p>
                    <button className="px-6 py-3 w-fit rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Generate your first post
                    </button>
                </div>
            </div>

            <hr className="border-gray-200" />

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
                {[
                    {
                        title: "Use Cases",
                        links: [
                            "Reels, TikToks and Video Ads",
                            "E-Commerce Product Videos",
                            "Instagram Post Maker",
                            "Text to Social Media Posts",
                            "Shopify Products to Posts",
                            "Scheduling and Publishing",
                            "Social media Autopost",
                            "AI Ad Generator",
                            "Social OOP for Enterprise"
                        ]
                    },
                    {
                        title: "Free AI Tools",
                        links: [
                            "Hashtag Generator",
                            "Color Palette Generator",
                            "Best Photo Picker",
                            "Video Thumbnail Picker",
                            "Stock Image Search",
                            "Background Color Changer"
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
                            "Become an Affiliate",
                            "Success Stories",
                            "API Documentation"
                        ]
                    },
                    {
                        title: "Compare",
                        links: [
                            "Image & Video Editors",
                            "GPT-3 Copy Generators",
                            "Scheduling Tools",
                            "Hashtags Generators"
                        ],
                        storeImages: true
                    }
                ].map((col, i) => (
                    <div key={i}>
                        <h3 className="font-semibold text-gray-900 mb-3">{col.title}</h3>
                        <ul className="space-y-2 text-gray-600">
                            {col.links.map((link, idx) => (
                                <li
                                    key={idx}
                                    className="hover:text-purple-500 transition-colors duration-300 cursor-pointer relative group"
                                >
                                    <span className="relative inline-block">
                                        {link}
                                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {col.storeImages && (
                            <div className="space-y-3 mt-4 flex flex-col items-center md:items-start">
                                <img
                                    src="/appstore.svg"
                                    alt="Download on App Store"
                                    className="w-36 cursor-pointer hover:scale-105 transition-transform duration-300"
                                />
                                <img
                                    src="/googleplay.svg"
                                    alt="Download on Google Play"
                                    className="w-36 cursor-pointer hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <hr className="border-gray-200" />

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 text-center">
                <p>©2025 EZML Technologies Pvt. Ltd. All Rights Reserved.</p>

                {/* Social Links */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                    {socialLinks.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={idx}
                                href="#"
                                className={`p-2 rounded-full text-white transition-all duration-300 transform hover:scale-110 shadow-md ${s.color}`}
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
