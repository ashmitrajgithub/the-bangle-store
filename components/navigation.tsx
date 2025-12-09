"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent 
} from "framer-motion";
import { Menu, X, ShoppingBag, User, Heart, Search, ArrowRight, Loader2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { cn } from "@/lib/utils"; 

// --- ANIMATION VARIANTS ---
const navContainerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

const centerSectionVariants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
};

export default function Navigation() {
  // --- STATE ---
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Search Mode
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false); // Mock loading state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  // --- HOOKS ---
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  
  // --- STORES ---
  const { items } = useCart();
  const { getCount: getWishlistCount } = useWishlist();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = getWishlistCount();

  // --- EFFECTS ---

  // 1. Handle Scroll Transparency
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // 2. Auto-focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      // Small delay ensures animation has started rendering
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  // 3. Close search if clicking outside the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 4. Reset search on route change
  useEffect(() => {
    setIsSearchOpen(false);
    setIsOpen(false);
  }, [pathname]);


  // --- HANDLERS ---
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate loading for UX feel, then push
    setTimeout(() => {
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`);
      setIsSearching(false);
      setIsSearchOpen(false);
    }, 500);
  };

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/size-finder", label: "Size Finder" },
    { href: "/craftsmanship", label: "Craftsmanship" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <motion.nav
        ref={headerRef}
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b",
          scrolled || isSearchOpen
            ? "bg-background/95 backdrop-blur-xl border-border/50 shadow-sm py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 gap-4">
            
            {/* ---------------- LOGO (Always Visible) ---------------- */}
            <Link href="/" className="flex items-center gap-2 group z-50 shrink-0 relative">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/icoo.png"
                  alt="Banglerd logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </motion.div>
              <span className={cn(
                "font-serif text-2xl font-bold bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent hidden sm:block transition-opacity duration-300",
                // On very small screens, hide text if search is open to make room
                isSearchOpen ? "hidden md:block" : "block"
              )}>
                anglerd
              </span>
            </Link>

            {/* ---------------- CENTER STAGE (Switches between Nav & Search) ---------------- */}
            <div className="flex-1 flex justify-center items-center absolute left-0 right-0 pointer-events-none lg:pointer-events-auto">
              <AnimatePresence mode="wait">
                
                {/* STATE 1: NAV LINKS */}
                {!isSearchOpen ? (
                  <motion.div
                    key="nav-links"
                    variants={centerSectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="hidden lg:flex items-center bg-muted/40 px-1.5 py-1.5 rounded-full border border-border/40 backdrop-blur-sm pointer-events-auto"
                  >
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={cn(
                          "relative px-5 py-2 text-sm font-medium transition-colors duration-200 z-10",
                          pathname === link.href ? "text-primary font-semibold" : "text-foreground/80 hover:text-foreground"
                        )}
                      >
                        {hoveredIndex === index && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-background rounded-full shadow-sm border border-border/50"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  
                  /* STATE 2: SEARCH BAR */
                  <motion.div
                    key="search-bar"
                    variants={centerSectionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full max-w-[500px] px-4 pointer-events-auto z-50 flex items-center justify-center"
                  >
                    <form 
                      onSubmit={handleSearchSubmit} 
                      className="relative w-full flex items-center"
                    >
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for jewelry, collections, etc..."
                        className="w-full h-11 pl-12 pr-12 bg-muted/50 border border-primary/20 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-background transition-all shadow-lg"
                      />
                      <Search className="absolute left-4 w-4 h-4 text-muted-foreground" />
                      
                      {/* Loading or Clear Icon */}
                      <div className="absolute right-4 flex items-center">
                        {isSearching ? (
                          <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        ) : searchQuery ? (
                          <button 
                             type="button"
                             onClick={() => setSearchQuery("")}
                             className="text-muted-foreground hover:text-foreground"
                          >
                             <X className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-xs text-muted-foreground hidden sm:inline-block">Enter</span>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ---------------- RIGHT ICONS (Always Visible) ---------------- */}
            <div className="flex items-center gap-1 sm:gap-2 z-50 shrink-0 bg-background/50 backdrop-blur-sm rounded-full pl-2">
              
              {/* Search Toggle Button */}
              <motion.button 
                 whileTap={{ scale: 0.9 }}
                 onClick={() => {
                   setIsSearchOpen(!isSearchOpen);
                   if (!isSearchOpen) setSearchQuery("");
                 }}
                 className={cn(
                   "p-2.5 rounded-full transition-all duration-300 hover:bg-muted group relative",
                   isSearchOpen ? "bg-muted text-foreground" : "text-foreground"
                 )}
                 aria-label="Toggle search"
              >
                 {isSearchOpen ? (
                    <X className="w-5 h-5" />
                 ) : (
                    <Search className="w-5 h-5 group-hover:text-primary transition-colors" />
                 )}
              </motion.button>
              <Link 
                href="/account" 
                className="p-2.5 rounded-full hover:bg-muted transition-colors hidden sm:flex items-center justify-center text-foreground"
                aria-label="Account"
              >
                 <User className="w-5 h-5" />
              </Link>
              

              {/* Wishlist */}
              <Link href="/account?tab=wishlist" className="relative p-2.5 hover:bg-muted rounded-full transition-colors hidden sm:flex group">
                 <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                 {wishlistCount > 0 && (
                   <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                     {wishlistCount}
                   </span>
                 )}
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-2.5 hover:bg-muted rounded-full transition-colors group">
                <ShoppingBag className="w-5 h-5 group-hover:text-primary transition-colors" />
                {itemCount > 0 && (
                   <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                     {itemCount}
                   </span>
                )}
              </Link>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-foreground ml-1"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULL SCREEN MENU (Unchanged logic, just cleanup) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-28 px-6"
          >
             {/* Mobile Search - Visible inside menu */}
             <form onSubmit={(e) => { e.preventDefault(); router.push(`/shop?q=${searchQuery}`); setIsOpen(false); }} className="relative mb-8">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full p-4 bg-muted rounded-xl pl-12 outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
             </form>

             <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                   key={link.href} 
                   href={link.href} 
                   onClick={() => setIsOpen(false)}
                   className="text-3xl font-serif font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border w-full my-2" />
              <Link href="/account" className="flex items-center gap-2 text-lg font-medium"><User className="w-5 h-5" /> Account</Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}