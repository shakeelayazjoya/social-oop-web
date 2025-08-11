import React from "react";

export default function HomSection() {
    return (
        <div>
            {/* Statistics Section */}
            <section className="mt-20 mb-16 px-4">
                <div className="mx-auto bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

                        {/* 1. Savings in Cost */}
                        <div className="flex items-start space-x-3">
                            <svg className="w-8 h-8 flex-shrink-0 pt-3" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.5">
                                <defs>
                                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" />
                                        <stop offset="100%" stopColor="#0d9488" />
                                    </linearGradient>
                                </defs>
                                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <div className="text-[20px] sm:text-[22px] font-bold text-indigo-600">40%</div>
                                <div className="text-sm sm:text-[15px] text-slate-700 font-medium">Savings in Cost</div>
                            </div>
                        </div>

                        {/* 2. Reduction in Hours Spent */}
                        <div className="flex items-start space-x-3">
                            <svg className="w-8 h-8 flex-shrink-0 pt-3" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="1.5">
                                <defs>
                                    <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" />
                                        <stop offset="100%" stopColor="#0d9488" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <div className="text-[20px] sm:text-[22px] font-bold text-indigo-600">70%</div>
                                <div className="text-sm sm:text-[15px] text-slate-700 font-medium">Reduction in Hours Spent</div>
                            </div>
                        </div>

                        {/* 3. Users Across Countries */}
                        <div className="flex items-start space-x-3">
                            <svg className="w-8 h-8 flex-shrink-0 pt-3" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="1.5">
                                <defs>
                                    <linearGradient id="grad3" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" />
                                        <stop offset="100%" stopColor="#0d9488" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            <div>
                                <div className="text-[20px] sm:text-[22px] font-bold text-indigo-600">500K+</div>
                                <div className="text-sm sm:text-[15px] text-slate-700 font-medium">Users Across Countries</div>
                            </div>
                        </div>

                        {/* 4. Content Generated */}
                        <div className="flex items-start space-x-3">
                            <svg className="w-8 h-8 flex-shrink-0 pt-3" viewBox="0 0 24 24" fill="none" stroke="url(#grad4)" strokeWidth="1.5">
                                <defs>
                                    <linearGradient id="grad4" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" />
                                        <stop offset="100%" stopColor="#0d9488" />
                                    </linearGradient>
                                </defs>
                                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                                <div className="text-[20px] sm:text-[22px] font-bold text-indigo-600">200M+</div>
                                <div className="text-sm sm:text-[15px] text-slate-700 font-medium">Content Generated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Companies */}
            <section className="mt-10 px-4">
                <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-4 opacity-70 text-center sm:text-left">
                    {[
                        { name: "SEMRUSH", style: "font-semibold tracking-wide" },
                        { name: "ICICI Bank", style: "font-semibold italic" },
                        { name: "HYATT", style: "font-semibold tracking-wide" },
                        { name: "indegene", style: "font-light" },
                        { name: "dentsu", style: "font-light" },
                        { name: "TCS", style: "font-semibold tracking-wide" },
                        { name: "WIPRO", style: "font-semibold tracking-wide" },
                        { name: "HDFC", style: "font-semibold tracking-wide" },
                    ].map((brand, idx) => (
                        <span
                            key={idx}
                            className={`text-lg sm:text-xl text-slate-500 ${brand.style} transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text`}
                        >
                            {brand.name}
                        </span>
                    ))}
                </div>
            </section>


        </div>
    );
}
