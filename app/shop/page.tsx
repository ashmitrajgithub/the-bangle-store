"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const products = [
  {
    id: 1,
    name: "Classic Bridal Gold Bangles",
    category: "bridal",
    price: 2499,
    image: "/gold-bridal-bangles-set.jpg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Festive Red Bangles Set",
    category: "festive",
    price: 899,
    image: "/red-festive-bangles.jpg",
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 3,
    name: "Party Wear Embellished Bangles",
    category: "party",
    price: 1299,
    image: "/embellished-party-bangles.jpg",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Kids Colorful Bangles",
    category: "kids",
    price: 399,
    image: "/colorful-kids-bangles.jpg",
    rating: 4.9,
    reviews: 201,
  },
  {
    id: 5,
    name: "Premium Maroon Bridal Set",
    category: "bridal",
    price: 3499,
    image: "/maroon-bridal-bangles-luxury.jpg",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 6,
    name: "Custom Design Bangles",
    category: "custom",
    price: 1999,
    image: "/custom-designed-bangles.jpg",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 7,
    name: "Traditional Mithila Bangles",
    category: "festive",
    price: 749,
    image: "/traditional-mithila-pattern-bangles.jpg",
    rating: 4.7,
    reviews: 112,
  },
  {
    id: 8,
    name: "Mirror Work Party Set",
    category: "party",
    price: 1599,
    image: "/mirror-work-party-bangles.jpg",
    rating: 4.6,
    reviews: 87,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0
  })

  const categories = [
    { id: "all", label: "All Products" },
    { id: "bridal", label: "Bridal Bangles" },
    { id: "festive", label: "Festive Collection" },
    { id: "party", label: "Party Wear" },
    { id: "kids", label: "Kids Collection" },
    { id: "custom", label: "Custom Orders" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-2">Shop Our Collections</h1>
            <p className="text-muted-foreground">Discover handcrafted bangles for every occasion</p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4">Price Range</h3>
                    <div className="space-y-2 text-sm">
                      <button className="block hover:text-primary">Under ₹500</button>
                      <button className="block hover:text-primary">₹500 - ₹1000</button>
                      <button className="block hover:text-primary">₹1000 - ₹2000</button>
                      <button className="block hover:text-primary">Above ₹2000</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {/* Sort Options */}
                <div className="flex justify-between items-center mb-8">
                  <p className="text-muted-foreground">Showing {sortedProducts.length} products</p>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Products */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
