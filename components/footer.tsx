"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">c</span>
              </div>
              <span className="text-xl font-bold">Carmoto</span>
            </div>
            <p className="text-sm opacity-80">Premium automotive excellence since 2010.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Dealerships
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 AutoLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
