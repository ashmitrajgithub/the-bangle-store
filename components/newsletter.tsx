"use client"

import type React from "react"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Join Our Community</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, craft stories, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {subscribed ? "Subscribed!" : "Subscribe"}
          </button>
        </form>

        <p className="text-sm text-muted-foreground mt-6">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  )
}
