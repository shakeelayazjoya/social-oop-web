import { Button } from "@/components/ui/button"
import FAQSection from "@/page/FAQSection"
import HomSection from "@/page/HomSection"
import MarqueeAds from "@/page/MarqueeAds"
import PlansSection from "@/page/PlansSection"
import ReviewSection from "@/page/ReviewsPage"
import SocialMediaSuite from "@/page/SocialMediaSuite"
import SocialPostPage from "@/page/SocialPostPage"
import Image from "next/image"
import { FaGoogle, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa"

export default function HomePage() {
  return (
    <>
      <main className="py-6">
        <div className="flex flex-col items-center text-center mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 max-w-[90%] mx-auto">
            Skyrocket Engagement with
          </h1>

          {/* Gradient Text */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-[90%] mx-auto">
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI-Powered Designs
            </span>
            <span className="text-slate-900"> & </span>
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Smart Scheduling
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl px-4">
            Quickly make video ads, product ads & posts. Boost CTRs and ROAS with our AI AD generator.
          </p>

          {/* Platform Logos */}
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons and CTA Button in Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
              {/* Social Icons */}
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaGoogle className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaInstagram className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaYoutube className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaFacebook className="text-white text-xl" />
              </div>

              {/* CTA Button */}
              <Button
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-md hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Generate your Ad!
              </Button>
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-8">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <span className="text-slate-600 font-medium">3k+ Reviews</span>
            </div>
          </div>

          {/* Free Trial Text */}
          <p className="text-slate-600 px-4">
            Try for Free! No credit card required.
          </p>
        </div>
      </main>


      <div className="pt-5">
        <MarqueeAds />
      </div>
      <div className="space-y-2">
        <HomSection />
      </div>

      <div className="space-y-2">
        <ReviewSection />
      </div>
      <div className="space-y-2">
        <SocialMediaSuite />
      </div>
      <div className="space-y-2">
        <PlansSection />
      </div>
      <div className="space-y-2">
        <SocialPostPage />
      </div>
      <div className="space-y-2">
        <FAQSection />
      </div>


    </>
  )
}
