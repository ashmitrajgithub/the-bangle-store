import ProductCard from "@/components/product-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Classic Bridal Gold Bangles",
    category: "bridal",
    price: 2499,
    image: "/gold-bridal-bangles.jpg",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 4,
    name: "Kids Colorful Bangles",
    category: "kids",
    price: 399,
    image: "/kids-colorful-bangles.jpg",
    rating: 4.9,
    reviews: 201,
  },
  {
    id: 5,
    name: "Premium Maroon Bridal Set",
    category: "bridal",
    price: 3499,
    image: "/premium-maroon-bridal-bangles.jpg",
    rating: 4.9,
    reviews: 98,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Creations</h2>
            <p className="text-muted-foreground mt-2">Handpicked designs for every celebration</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            Shop All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
