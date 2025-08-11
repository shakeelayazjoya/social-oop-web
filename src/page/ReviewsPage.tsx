"use client";

import { FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "John Doe",
        image: "https://i.pravatar.cc/150?img=32",
        review: "This platform completely transformed my business. Highly recommended!"
    },
    {
        name: "Sarah Smith",
        image: "https://i.pravatar.cc/150?img=45",
        review: "Amazing service! The team is super helpful and friendly."
    },
    {
        name: "Michael Johnson",
        image: "https://i.pravatar.cc/150?img=65",
        review: "Fast, reliable, and exactly what I needed for my project."
    },
    {
        name: "Emma Williams",
        image: "https://i.pravatar.cc/150?img=20",
        review: "Great experience! I’ll definitely be using it again."
    },
    {
        name: "David Brown",
        image: "https://i.pravatar.cc/150?img=12",
        review: "The quality exceeded my expectations. Five stars!"
    },
    {
        name: "Sophia Lee",
        image: "https://i.pravatar.cc/150?img=28",
        review: "Professional and quick service. Couldn’t ask for more!"
    },
    {
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?img=55",
        review: "I was impressed with the attention to detail. Will recommend to others."
    }
];


export default function ReviewSection() {
    return (
        <section className="py-12">
            <div className="w-full mx-auto px-4 text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-2xl" />
                    ))}
                </div>

                {/* Heading */}
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
                    4.9/5 from 3000+ Reviews, check our user success stories!
                </h2>

                {/* Row 1 - Right to Left */}
                <div className="overflow-hidden">
                    <div className="flex animate-marquee gap-6 my-3">
                        {[...reviews, ...reviews].map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-lg p-6 w-72 flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {review.name}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Left to Right */}
                <div className="overflow-hidden mt-6">
                    <div className="flex animate-marquee-reverse gap-6 my-3">
                        {[...reviews, ...reviews].map((review, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-lg p-6 w-72 flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {review.name}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm">{review.review}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
        </section>
    );
}
