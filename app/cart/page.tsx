"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart()
  const total = getTotal()
  const tax = Math.round(total * 0.18)
  const shipping = items.length > 0 ? (total >= 999 ? 0 : 50) : 0
  const grandTotal = total + tax + shipping

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-8">Shopping Cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-bold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Discover our handcrafted bangles and add some to your cart</p>
                <Link href="/shop">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded"
                        />

                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                          <p className="text-primary font-semibold mt-2">₹{item.price}</p>

                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border border-border rounded-lg w-fit">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="p-2 hover:bg-muted"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-1">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-muted"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">₹{item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="border border-border rounded-lg p-6 sticky top-24">
                    <h2 className="font-semibold text-lg mb-6">Order Summary</h2>

                    <div className="space-y-4 mb-6 pb-6 border-b border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{total}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (18% GST)</span>
                        <span>₹{tax}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping {shipping === 0 ? "(Free)" : ""}</span>
                        <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                      </div>
                    </div>

                    <div className="flex justify-between font-semibold text-lg mb-6">
                      <span>Total</span>
                      <span>₹{grandTotal}</span>
                    </div>

                    {total < 999 && (
                      <div className="bg-blue-50 text-blue-900 text-xs p-3 rounded-lg mb-6">
                        Free shipping on orders above ₹999. Add ₹{999 - total} more!
                      </div>
                    )}

                    <Link href="/checkout">
                      <Button className="w-full h-12 mb-3">Proceed to Checkout</Button>
                    </Link>
                    <Link href="/shop">
                      <Button variant="outline" className="w-full bg-transparent">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
