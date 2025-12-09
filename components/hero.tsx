import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-14 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground text-pretty">
                Timeless Elegance, Handcrafted Heritage
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Discover the artistry of Sitamarhi. Each bangle tells a story of tradition, skill, and dedication passed
                down through generations. Our handcrafted lac and bridal bangles celebrate the beauty of Mithila
                heritage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Explore Collections
                <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                Learn Our Story
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 bg-muted rounded-2xl overflow-hidden">
            <img
              src="/gold-bridal-bangles-set.jpg"
              alt="Handcrafted lac bangles showcasing traditional Indian artistry"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
