"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCart()
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [orderComplete, setOrderComplete] = useState(false)

  const total = getTotal()
  const tax = Math.round(total * 0.18)
  const shipping = total >= 999 ? 0 : 50
  const grandTotal = total + tax + shipping

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = () => {
    if (formData.firstName && formData.email && formData.address && formData.city && formData.zipCode) {
      setStep("payment")
    }
  }

  const handlePaymentSubmit = () => {
    setOrderComplete(true)
    clearCart()
    setStep("confirmation")
  }

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h1>
            <Link href="/shop">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-4">
              Thank you for your purchase. You'll receive an order confirmation email shortly.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 text-left">
              <p className="text-sm text-muted-foreground mb-2">Order Details:</p>
              <p className="font-semibold">Order ID: #ORD{Math.floor(100000 + Math.random() * 900000)}</p>
              <p className="text-sm text-muted-foreground mt-2">Total: ₹{grandTotal}</p>
              <p className="text-sm text-muted-foreground">Estimated delivery: 2-3 business days</p>
            </div>
            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/shop" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full">Back to Home</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                {/* Steps */}
                <div className="flex gap-4 mb-8">
                  {["shipping", "payment", "confirmation"].map((s, idx) => (
                    <div
                      key={s}
                      className={`flex-1 h-2 rounded-full ${
                        step === s || (step === "payment" && idx === 0) || (step === "confirmation" && idx <= 1)
                          ? "bg-primary"
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Shipping Information */}
                {step === "shipping" && (
                  <Card className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-6">Shipping Information</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <Input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <Textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          rows={3}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <Input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="New Delhi"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State</label>
                          <Input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Delhi"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Zip Code</label>
                          <Input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="110001"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Country</label>
                          <Input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            disabled
                          />
                        </div>
                      </div>

                      <Button onClick={handleShippingSubmit} className="w-full h-12">
                        Continue to Payment
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Payment Information */}
                {step === "payment" && (
                  <Card className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-6">Payment Method</h2>
                    <div className="space-y-4 mb-8">
                      {[
                        { id: "card", label: "Credit/Debit Card", icon: "💳" },
                        { id: "upi", label: "UPI", icon: "📱" },
                        { id: "cod", label: "Cash on Delivery", icon: "💵" },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors"
                          style={{
                            borderColor: paymentMethod === method.id ? "var(--primary)" : "var(--border)",
                            backgroundColor: paymentMethod === method.id ? "rgba(var(--primary), 0.05)" : "transparent",
                          }}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4"
                          />
                          <span className="ml-4 text-lg">{method.icon}</span>
                          <span className="ml-2 font-semibold">{method.label}</span>
                        </label>
                      ))}
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 mb-8 p-4 bg-muted rounded-lg">
                        <Input placeholder="Card Number" />
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="MM/YY" />
                          <Input placeholder="CVV" />
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setStep("shipping")} className="flex-1 h-12">
                        Back
                      </Button>
                      <Button onClick={handlePaymentSubmit} className="flex-1 h-12">
                        Place Order
                      </Button>
                    </div>
                  </Card>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h2 className="font-semibold text-lg mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.name} x{item.quantity}
                        </span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (18%)</span>
                      <span>₹{tax}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                    </div>
                  </div>

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
