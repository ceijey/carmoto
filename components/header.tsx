"use client"

import Link from 'next/link'
import { useFavorites } from '../app/context/FavoriteContext'

export default function Navbar() {
  const { favorites } = useFavorites()
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Carmoto
        </Link>
        
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/#models" className="hover:text-blue-600">
            Models
          </Link>
          <Link href="/favorites" className="flex items-center hover:text-blue-600">
            Favorites
            {favorites.length > 0 && (
              <span className="ml-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}