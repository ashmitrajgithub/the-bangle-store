"use client"

import { create } from "zustand"

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
  color?: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (id: number) => void
  isInWishlist: (id: number) => boolean
  getCount: () => number
}

export const useWishlist = create<WishlistStore>((set, get) => ({
  items: [],

  addItem: (newItem: WishlistItem) => {
    set((state) => {
      const exists = state.items.find((item) => item.id === newItem.id)
      if (exists) return state
      return { items: [...state.items, newItem] }
    })
  },

  removeItem: (id: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },

  isInWishlist: (id: number) => {
    return get().items.some((item) => item.id === id)
  },

  getCount: () => {
    return get().items.length
  },
}))
