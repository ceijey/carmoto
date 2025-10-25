"use client"

import { ArrowRight } from "lucide-react"

export default function FeaturedCar() {
  const handleExploreNow = () => {
    // Scroll to the models section
    const modelsSection = document.getElementById("models")
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="featured" className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-red-700 font-semibold text-sm uppercase tracking-wider">Featured Model</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The Ultimate <span className="text-red-700">Performance</span> Machine
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the pinnacle of automotive engineering. With cutting-edge technology, luxurious interiors, and
              breathtaking performance, the Carmoto GT represents the future of driving.
            </p>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div>
                <p className="text-2xl font-bold text-red-700">0-60</p>
                <p className="text-sm text-gray-600">2.8 seconds</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-700">650</p>
                <p className="text-sm text-gray-600">Horsepower</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-700">200</p>
                <p className="text-sm text-gray-600">Top Speed (mph)</p>
              </div>
            </div>

            <button 
              onClick={handleExploreNow}
              className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition hover:scale-105 duration-300"
            >
              Explore Now
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/luxury-sports-car-red-sleek-modern.jpg"
              alt="Featured AutoLux GT"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}