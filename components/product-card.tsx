"use client"

import Link from "next/link"
import { Star, ShoppingBag } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="group cursor-pointer h-full flex flex-col">
        <div className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square flex-shrink-0">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <button
            className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <ShoppingBag className="w-5 h-5 text-primary" aria-hidden="true" />
          </button>
        </div>
        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 my-2">
          <div className="flex items-center gap-1" aria-label={`${product.rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="text-lg font-bold text-primary mt-auto">₹{product.price}</p>
      </div>
    </Link>
  )
}
