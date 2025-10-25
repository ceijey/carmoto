"use client"

import { Heart, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { useFavorites } from "../app/context/FavoriteContext"




interface Car {
  id: number
  name: string
  price: string
  image: string
  specs: string
  description: string
}

export default function CarCard({ car }: { car: Car }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addToFavorites } = useFavorites()
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleFavorite = () => {
    addToFavorites(car)
    setIsFavorite(true)
    router.push("/favorites") // 👈 redirects to favorites page
  }

  return (
    <>
      <div className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={car.image || "/placeholder.svg"}
            alt={car.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-secondary transition"
          >
            <Heart
              size={20}
              className={isFavorite ? "fill-accent text-accent" : "text-foreground"}
            />
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-foreground mb-1">{car.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{car.specs}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-accent">{car.price}</span>
            <button
              onClick={openModal}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={22} />
            </button>

            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h2 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h2>
            <p className="text-gray-600 mb-4">{car.description}</p>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Specifications:</h3>
              <p className="text-gray-700">{car.specs}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-accent">{car.price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
