"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Link from 'next/link' // Add this import

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-left md:flex md:justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">c</span>
                </div>
                <span className="text-xl font-bold">Carmoto</span>
              </div>
              <p className="text-sm opacity-80">Premium automotive excellence since 2010.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="/#models" className="hover:text-accent transition-colors">Our Models</a></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/favorites" className="hover:text-accent transition-colors">Favorites</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (0918) 607-9858
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@carmoto.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Auto Drive
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <p className="text-sm opacity-80">Stay connected with our latest updates</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Carmoto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}