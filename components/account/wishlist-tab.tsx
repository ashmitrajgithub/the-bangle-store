"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag, Trash2, Share2 } from "lucide-react"

const wishlistItems = [
  {
    id: 1,
    name: "Traditional Gold Bridal Set",
    price: "₹4,999",
    originalPrice: "₹6,999",
    discount: "29%",
    image: "/gold-bridal-bangles.jpg",
    inStock: true,
    sizes: ["2.2", "2.4", "2.6", "2.8"],
  },
  {
    id: 2,
    name: "Lac Bangles with Stones",
    price: "₹1,299",
    originalPrice: "₹1,899",
    discount: "32%",
    image: "/lac-bangles-with-stones.jpg",
    inStock: true,
    sizes: ["2.2", "2.4", "2.6", "2.8"],
  },
]

export default function WishlistTab() {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({})

  const handleSizeSelect = (itemId: number, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: size,
    }))
  }

  return (
    <div className="pb-6 sm:pb-8">
      <div className="mb-4 sm:mb-6 flex justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">My Wishlist</h2>
          <p className="text-xs sm:text-sm text-muted-foreground">{wishlistItems.length} items saved</p>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Heart className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">Your wishlist is empty</p>
            <p className="text-muted-foreground text-sm">Add items you love to your wishlist</p>
            <Button className="mt-6" asChild>
              <a href="/shop">Start Shopping</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.svg?height=300&width=300&query=bangle"}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {item.discount && (
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {item.discount} OFF
                    </div>
                  )}
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm sm:text-base">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 line-clamp-2">{item.name}</h3>
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="text-primary font-bold text-lg sm:text-xl">{item.price}</p>
                      <p className="text-muted-foreground line-through text-xs sm:text-sm">{item.originalPrice}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.inStock ? "In Stock" : "Out of Stock"}</p>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <label className="text-xs sm:text-sm font-medium text-foreground mb-2 block">
                      Select Size (inches)
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(item.id, size)}
                          className={`py-1.5 sm:py-2 px-1 sm:px-2 rounded text-xs sm:text-sm font-medium transition-colors border ${
                            selectedSizes[item.id] === size
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted text-foreground border-border hover:border-primary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
                      disabled={!item.inStock || !selectedSizes[item.id]}
                    >
                      <ShoppingBag className="w-4 h-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" title="Share" className="h-9 sm:h-10">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Remove" className="h-9 sm:h-10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
