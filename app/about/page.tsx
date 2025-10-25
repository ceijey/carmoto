"use client"

import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Carmoto</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Redefining automotive excellence since 2010. Discover our journey, our passion, and our commitment to delivering exceptional driving experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010 by automotive enthusiasts with a vision to revolutionize the car buying experience, Carmoto began as a small boutique dealership in Detroit. Our founder, Misola Cj john  shared a simple belief: everyone deserves access to exceptional vehicles with transparent, hassle-free service.
                </p>
                <p>
                  What started as a single showroom has grown into a premier automotive destination, serving thousands of satisfied customers across the nation. We've maintained our commitment to quality, innovation, and customer satisfaction throughout our journey.
                </p>
                <p>
                  Today, Carmoto stands as a testament to our founding principles - combining cutting-edge technology with old-fashioned customer service to deliver an unparalleled automotive experience.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground text-2xl font-bold">Carmoto Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-foreground font-bold text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide exceptional automotive experiences by offering premium vehicles, transparent pricing, and personalized service that exceeds customer expectations at every touchpoint.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-accent-foreground font-bold text-2xl">🔭</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most trusted and innovative automotive platform, setting new standards for quality, sustainability, and customer satisfaction in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Carmoto, from vehicle selection to customer service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold">✓</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Quality First</h4>
              <p className="text-muted-foreground">
                Every vehicle in our collection undergoes rigorous inspection and meets our strict quality standards before reaching our customers.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Transparency</h4>
              <p className="text-muted-foreground">
                No hidden fees, no surprises. We believe in complete transparency in pricing, vehicle history, and our business practices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-foreground font-bold">❤️</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Customer Focus</h4>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We listen, adapt, and go above and beyond to ensure complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Car?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered their dream vehicle with Carmoto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#models" 
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Browse Our Collection
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}