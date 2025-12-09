"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

interface SearchProduct {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

const allProducts: SearchProduct[] = [
  {
    id: 1,
    name: "Classic Bridal Gold Bangles",
    price: 2499,
    image: "/gold-bridal-bangles-set-premium.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Festive Red Bangles Set",
    price: 899,
    image: "/red-festive-bangles.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Party Wear Embellished Bangles",
    price: 1299,
    image: "/embellished-party-bangles.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Kids Colorful Bangles",
    price: 399,
    image: "/colorful-kids-bangles.jpg",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Premium Maroon Bridal Set",
    price: 3499,
    image: "/maroon-bridal-bangles-luxury.jpg",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Custom Design Bangles",
    price: 1999,
    image: "/custom-designed-bangles.jpg",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Traditional Mithila Bangles",
    price: 749,
    image: "/traditional-mithila-pattern-bangles.jpg",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Mirror Work Party Set",
    price: 1599,
    image: "/mirror-work-party-bangles.jpg",
    rating: 4.6,
  },
]

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchProduct[]>([])

  useEffect(() => {
    if (query.trim()) {
      const filtered = allProducts.filter(
        (product) => product.name.toLowerCase().includes(query.toLowerCase()) || product.id.toString().includes(query),
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <div className="relative hidden md:block flex-1 mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search bangles, designs, colors..."
          className="pl-9 pr-4 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>

      {isOpen && (query || results.length > 0) && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="divide-y">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    onClick={() => {
                      setQuery("")
                      setIsOpen(false)
                    }}
                    className="flex gap-3 p-3 hover:bg-muted transition-colors"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-1">{product.name}</p>
                      <p className="text-primary font-semibold text-sm">₹{product.price}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>★ {product.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : query ? (
              <div className="p-6 text-center text-muted-foreground">
                <p>No products found for "{query}"</p>
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}
