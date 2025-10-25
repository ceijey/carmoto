"use client"

import { useFavorites } from "../../app/context/FavoriteContext"
import { useRouter } from "next/navigation"

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites()
  const router = useRouter()

  if (favorites.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ← Back
        </button>
        <p>No favorites yet 💔</p>
      </div>
    )
  }

  return (
    <div className="p-10">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((car) => (
          <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.specs}</p>
              <p className="text-accent font-semibold mt-2">{car.price}</p>
              <button
                onClick={() => removeFromFavorites(car.id)}
                className="mt-3 text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
