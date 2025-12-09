"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ShoppingBag, User, Heart, Search } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import SearchBar from "@/components/search-bar";
import { cn } from "@/lib/utils"; // Ensure you have a standard cn utility

// Animation Variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const mobileMenuVariants = {
  closed: { opacity: 0, y: "-100%" },
  open: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const linkContainerVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkItemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  
  const { items } = useCart();
  const { getCount: getWishlistCount } = useWishlist();
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = getWishlistCount();

  // Handle Scroll Transparency
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/size-finder", label: "Size Finder" },
    { href: "/craftsmanship", label: "Craftsmanship" },
    { href: "/about", label: "About" },
    { href: "/shipping", label: "Shipping" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b",
          scrolled 
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-sm py-2" 
            : "bg-background border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-4">
            
            {/* --- LOGO --- */}
            <Link href="/" className="flex items-center gap-2 group z-50 relative">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/icoo.png"
                  alt="Banglerd logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
                anglerd
              </span>
            </Link>

            {/* --- DESKTOP FLUID NAV --- */}
            <div className="hidden lg:flex items-center bg-muted/30 px-2 py-1.5 rounded-full border border-border/40 backdrop-blur-sm">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 z-10",
                    pathname === link.href ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {/* The "Sliding Pill" Background */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* --- ICONS & ACTIONS --- */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block w-full max-w-[200px]">
                  <SearchBar />
              </div>

              {/* Wishlist */}
              <Link href="/account?tab=wishlist" className="relative p-2.5 hover:bg-muted rounded-full transition-colors hidden sm:flex group">
                 <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                 <AnimatePresence>
                   {wishlistCount > 0 && (
                     <motion.span 
                       key="wishlist-badge"
                       initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                       className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold"
                     >
                       {wishlistCount}
                     </motion.span>
                   )}
                 </AnimatePresence>
              </Link>

              {/* Account */}
              <Link href="/account" className="p-2.5 hover:bg-muted rounded-full transition-colors hidden sm:flex">
                <User className="w-5 h-5" />
              </Link>

              {/* Cart with "Pop" Effect */}
              <Link href="/cart" className="relative p-2.5 hover:bg-muted rounded-full transition-colors group">
                <ShoppingBag className="w-5 h-5 group-hover:text-primary transition-colors" />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      key={itemCount} // Triggers animation on change
                      initial={{ scale: 0.5, y: -5 }}
                      animate={{ scale: 1, y: 0 }}
                      className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold"
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Mobile Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground z-50 relative"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
          
          {/* Mobile Search - Visible only on small screens */}
          <div className="sm:hidden pt-2 pb-1">
             <SearchBar />
          </div>
        </div>
      </motion.nav>

      {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-32 px-6"
          >
            {/* Background pattern for texture (optional) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <motion.div 
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-6 relative z-10"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={linkItemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4 text-3xl font-serif font-medium hover:text-primary transition-colors"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 h-0.5 bg-primary" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkItemVariants} className="h-px w-full bg-border my-4" />

              <motion.div variants={linkItemVariants} className="flex gap-4">
                 <Link href="/account" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg font-medium hover:text-primary">
                    <User className="w-5 h-5" /> Account
                 </Link>
                 <Link href="/account?tab=wishlist" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg font-medium hover:text-primary">
                    <Heart className="w-5 h-5" /> Wishlist
                 </Link>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1, transition: { delay: 0.5 } }}
               className="absolute bottom-10 left-0 w-full text-center text-muted-foreground text-sm"
            >
               Banglerd &copy; {new Date().getFullYear()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}