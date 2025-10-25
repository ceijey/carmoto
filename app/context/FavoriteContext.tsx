"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface Car {
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
  removeFromFavorites: (carId: number) => void
  isFavorite: (carId: number) => boolean // Add this line
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined)

export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Car[]>([])

  const addToFavorites = (car: Car) => {
    setFavorites(prev => {
      if (!prev.some(fav => fav.id === car.id)) {
        return [...prev, car]
      }
      return prev
    })
  }

  const removeFromFavorites = (carId: number) => {
    setFavorites(prev => prev.filter(car => car.id !== carId))
  }

  const isFavorite = (carId: number) => {
    return favorites.some(car => car.id === carId)
  }

  return (
    <FavoriteContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite // Add this to the context value
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoriteContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider')
  }
  return context
}