import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Collections from "@/components/collections"
import Craftsmanship from "@/components/craftsmanship"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Collections />
      <Craftsmanship />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
