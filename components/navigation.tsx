"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, User, Heart } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import SearchBar from "@/components/search-bar";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const { getCount: getWishlistCount } = useWishlist();

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = getWishlistCount();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center gap-0"
            aria-label="Banglerd home"
          >
            <Image
              src="/icoo.png"
              alt="Banglerd logo"
              width={50}
              height={80}
              priority
              className="object-contain"
            />

            {/* Brand Text */}
            <span
              className="font-serif text-2xl tracking-wide font-bold leading-tight 
                   bg-gradient-to-r from-primary to-primary/70 text-gray bg-clip-text"
            >
              anglerd
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/size-finder"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Size Finder
            </Link>
            <Link
              href="/craftsmanship"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Craftsmanship
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/shipping"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Shipping
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Search (hide on very small screens if needed) */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            <SearchBar />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Wishlist */}
            <Link
              href="/account?tab=wishlist"
              className="p-2 hover:bg-muted rounded-lg transition-colors relative hidden sm:flex"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              {wishlistCount > 0 && (
                <span
                  className="absolute top-0 right-0 -mt-1 -mr-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold"
                  aria-label={`${wishlistCount} items in wishlist`}
                >
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/account"
              className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:flex"
              aria-label="Account"
            >
              <User className="w-5 h-5" aria-hidden="true" />
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="p-2 hover:bg-muted rounded-lg transition-colors relative"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5" aria-hidden="true" />
              {itemCount > 0 && (
                <span
                  className="absolute top-0 right-0 -mt-1 -mr-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold"
                  aria-label={`${itemCount} items in cart`}
                >
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-3">
          <SearchBar />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden pb-6 border-t border-border"
            id="mobile-menu"
          >
            <div className="flex flex-col gap-4 pt-6">
              <Link
                href="/shop"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link
                href="/size-finder"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Size Finder
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
              <div className="border-t border-border pt-4 flex flex-col gap-4">
                <Link
                  href="/account?tab=wishlist"
                  className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <Heart className="w-4 h-4" />
                  Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
                </Link>
                <Link
                  href="/account"
                  className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2"
                  onClick={closeMenu}
                >
                  <User className="w-4 h-4" />
                  Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
