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
      <main className="">
        <div className="flex flex-col items-center text-center mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-4 max-w-[90%] mx-auto">
            Skyrocket Engagement with
          </h1>

          {/* Gradient Text */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-[90%] mx-auto">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Designs
            </span>
            <span className="text-slate-800"> & </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Smart Scheduling
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl px-4">
            Quickly make video ads, product ads & posts. Boost CTRs and ROAS with our AI AD generator.
          </p>

          {/* Platform Logos */}
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons and CTA Button in Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
              {/* Social Icons */}
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <FaGoogle className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaInstagram className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <FaYoutube className="text-white text-xl" />
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaFacebook className="text-white text-xl" />
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg rounded-full"
              >
                Generate your Ad!
              </Button>
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-600 font-medium">3k+ Reviews</span>
            </div>
          </div>

          {/* Free Trial Text */}
          <p className="text-gray-600 px-4">
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
