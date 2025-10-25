"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Carmoto</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#featured" className="text-foreground hover:text-accent transition">
              Featured
            </a>
            <a href="#models" className="text-foreground hover:text-accent transition">
              Models
            </a>
            <a href="/favorites" className="text-foreground hover:text-accent transition">
              Favorites
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#featured" className="text-foreground hover:text-accent transition">
              Featured
            </a>
            <a href="#models" className="text-foreground hover:text-accent transition">
              Models
            </a>
            <a href="/favorites" className="text-foreground hover:text-accent transition">
              Favorites
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
