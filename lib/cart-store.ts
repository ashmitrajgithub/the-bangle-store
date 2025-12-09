import { create } from "zustand"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  color: string
  image: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],

  addItem: (newItem: CartItem) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id && item.color === newItem.color)

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === newItem.id && item.color === newItem.color
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          ),
        }
      }

      return { items: [...state.items, newItem] }
    })
  },

  removeItem: (id: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }))
  },

  updateQuantity: (id: number, quantity: number) => {
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    }))
  },

  clearCart: () => {
    set({ items: [] })
  },

  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
}))
