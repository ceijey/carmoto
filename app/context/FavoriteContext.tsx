"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface Car {
  id: number
  name: string
  price: string
  image: string
  specs: string
  description: string
}

interface FavoriteContextType {
  favorites: Car[]
  addToFavorites: (car: Car) => void
  removeFromFavorites: (id: number) => void
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined)

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Car[]>([])

  const addToFavorites = (car: Car) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === car.id)) return prev // prevent duplicates
      return [...prev, car]
    })
  }

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((car) => car.id !== id))
  }

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider")
  }
  return context
}
