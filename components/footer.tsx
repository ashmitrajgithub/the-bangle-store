import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">The Bangle Store</h3>
            <p className="text-primary-foreground/80 text-sm">
              Handcrafted lac and bridal bangles celebrating Mithila heritage and global artistry.
            </p>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/shop?category=bridal" className="hover:text-primary-foreground transition-colors">
                  Bridal Bangles
                </Link>
              </li>
              <li>
                <Link href="/shop?category=festive" className="hover:text-primary-foreground transition-colors">
                  Festive Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?category=party" className="hover:text-primary-foreground transition-colors">
                  Party Wear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=custom" className="hover:text-primary-foreground transition-colors">
                  Custom Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/craftsmanship" className="hover:text-primary-foreground transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:hello@banglestore.com" className="hover:text-primary-foreground transition-colors">
                  hello@banglestore.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Sitamarhi, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-primary-foreground transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; {currentYear} The Bangle Store. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="hover:text-primary-foreground transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
