"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-store"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-background border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="The Bangle Store home">
            <h1 className="text-2xl font-serif font-bold text-primary">The Bangle Store</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/craftsmanship" className="text-sm font-medium hover:text-primary transition-colors">
              Craftsmanship
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/shipping" className="text-sm font-medium hover:text-primary transition-colors">
              Shipping
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="p-2 hover:bg-muted rounded-lg transition-colors relative"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="false" />
              {itemCount > 0 && (
                <span
                  className="absolute top-0 right-0 -mt-1 -mr-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold"
                  aria-label={`${itemCount} items in cart`}
                >
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border" id="mobile-menu">
            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/shop"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link
                href="/craftsmanship"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Craftsmanship
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/shipping"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Shipping
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
