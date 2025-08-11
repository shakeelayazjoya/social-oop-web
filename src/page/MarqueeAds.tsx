"use client";

import React, { useEffect, useRef, useState } from "react";

const items = [
    { type: "image", src: "https://picsum.photos/seed/pic1/400/250", alt: "Ad Image 1" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://picsum.photos/seed/pic2/400/250", alt: "Ad Image 2" },
    { type: "video", src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
    { type: "image", src: "https://picsum.photos/seed/pic3/400/250", alt: "Ad Image 3" },
    { type: "image", src: "https://picsum.photos/seed/pic4/400/250", alt: "Ad Image 4" },
    { type: "video", src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4" },
    { type: "image", src: "https://picsum.photos/seed/pic5/400/250", alt: "Ad Image 5" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://picsum.photos/seed/pic6/400/250", alt: "Ad Image 6" },
    { type: "video", src: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4" },
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
            <div className="absolute top-0 left-0 h-full  w-44 z-10 pointer-events-none bg-gradient-to-r from-slate-50 via-slate-50/80 via-slate-50/40 to-transparent" />

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
