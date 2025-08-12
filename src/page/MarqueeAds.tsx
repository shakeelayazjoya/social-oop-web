"use client";

import React, { useEffect, useRef, useState } from "react";

const items = [
    { type: "image", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=250&q=80", alt: "AI Robotics" },
    { type: "image", src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&h=250&q=80", alt: "Social Media Marketing" },
    { type: "image", src: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=400&h=250&q=80", alt: "Influencer Content" },
    { type: "image", src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&h=250&q=80", alt: "Digital Networking" },
    { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=250&q=80", alt: "Futuristic AI" },
    { type: "image", src: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=400&h=250&q=80", alt: "Smartphone Social Apps" },
    { type: "image", src: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=400&h=250&q=80", alt: "Machine Learning" },
    { type: "image", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=250&q=80", alt: "Augmented Reality" },
    { type: "image", src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&h=250&q=80", alt: "Tech Innovation" },
];




const MarqueeAds = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number | null>(null);
    const positionRef = useRef(0);
    const speed = 1;

    // Card width is based on responsive breakpoints
    const getCardWidth = () => {
        if (typeof window === "undefined") return 300;
        if (window.innerWidth < 640) return 180; // Mobile
        if (window.innerWidth < 1024) return 250; // Tablet
        return 330; // Desktop
    };

    const itemGap = 24;

    useEffect(() => {
        const animate = () => {
            if (!marqueeRef.current || isPaused) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            positionRef.current -= speed;
            const totalWidth = items.length * (getCardWidth() + itemGap);

            if (Math.abs(positionRef.current) >= totalWidth) {
                positionRef.current += totalWidth;
            }

            marqueeRef.current.style.transform = `translateX(${positionRef.current}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isPaused]);

    return (
        <div className="relative overflow-hidden w-full">
            {/* Left Fade Layer */}
            <div className="absolute top-0 left-0 h-full w-44 z-10 pointer-events-none bg-gradient-to-r from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent" />

            {/* Right Fade Layer */}
            <div className="absolute top-0 right-0 h-full w-44 z-10 pointer-events-none bg-gradient-to-l from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent" />

            <div
                ref={marqueeRef}
                className="flex gap-6"
                style={{ width: "max-content" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="
              rounded-2xl overflow-hidden shadow-lg hover:shadow-xl bg-white border border-slate-200/60
              aspect-[9/13]
              w-[180px] sm:w-[250px] lg:w-[300px]
              flex-shrink-0 transition-all duration-300 hover:scale-105
            "
                    >
                        {item.type === "image" ? (
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        ) : (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeAds;
