"use client"

import { use } from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-store"
import { Star, Heart, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const products: Record<string, any> = {
  "1": {
    id: 1,
    name: "Classic Bridal Gold Bangles",
    category: "bridal",
    price: 2499,
    originalPrice: 2999,
    image: "/gold-bridal-bangles-set-premium.jpg",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description:
      "Handcrafted with pure lacquer and traditional techniques from Sitamarhi. This classic bridal set features elegant gold work perfect for wedding ceremonies and celebrations.",
    details: [
      "Material: Traditional Lac with gold foil",
      "Size: Available in 2.2, 2.4, 2.6, 2.8, 2.10",
      "Weight: Approximately 250g per set",
      "Handmade with traditional Sitamarhi techniques",
      "Perfect for bridal wear and special occasions",
    ],
    colors: ["Gold", "Red", "Maroon"],
    sizes: ["2.2", "2.4", "2.6", "2.8", "2.10"],
    images: ["/gold-bridal-bangles.jpg", "/bridal-bangles-detail.jpg", "/bangle-craftsmanship.jpg"],
  },
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products[id] || products["1"]
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size before adding to cart.",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor,
      size: selectedSize,
      image: product.image,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}") has been added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === idx ? "border-primary" : "border-transparent hover:border-muted"
                      }`}
                    >
                      <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                    <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {discount.toFixed(0)}% OFF
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Options */}
                <div className="space-y-6">
                  {/* Color Selection */}
                  <div>
                    <h3 className="font-semibold mb-3">Color</h3>
                    <div className="flex gap-3 flex-wrap">
                      {product.colors.map((color: string) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                            selectedColor === color
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Size (inches)</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {product.sizes.map((size: string) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-3 py-2 rounded-lg border-2 transition-colors font-medium ${
                            selectedSize === size
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {!selectedSize && <p className="text-sm text-orange-600 mt-2">Size is required to proceed</p>}
                  </div>

                  {/* Quantity */}
                  <div>
                    <h3 className="font-semibold mb-3">Quantity</h3>
                    <div className="flex items-center border border-border rounded-lg w-fit">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-muted"
                      >
                        −
                      </button>
                      <span className="px-6 py-2 border-l border-r border-border">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-muted">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="flex gap-4">
                    <Button onClick={handleAddToCart} className="flex-1 h-12 text-base">
                      Add to Cart
                    </Button>
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`px-6 py-3 border rounded-lg transition-colors ${
                        isWishlisted ? "border-primary text-primary" : "border-border hover:border-primary"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-3">Product Details</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {product.details.map((detail: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stock Status */}
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Only a few left in stock - order soon
                  </p>
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
