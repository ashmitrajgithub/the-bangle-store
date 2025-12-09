import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">Our Story</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Preserving the timeless tradition of Sitamarhi bangles with modern craftsmanship
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At The Bangle Store, we are dedicated to preserving the ancient art of lac bangle making while
                  bringing it to the world. We believe in celebrating the craftsmanship of our artisans and providing
                  women everywhere with accessories that tell stories of heritage and tradition.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every bangle we create represents generations of knowledge, skill, and dedication. We work directly
                  with artisan communities in Sitamarhi to ensure fair practices and sustainable growth.
                </p>
              </div>
              <img src="/artisan-crafting-bangles-workshop.jpg" alt="Our artisans at work" className="rounded-lg" />
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-8 text-center">
                  <h3 className="font-semibold text-xl mb-3">Heritage</h3>
                  <p className="text-muted-foreground">
                    Honoring the 1000+ year old tradition of Mithila art and Sitamarhi bangles
                  </p>
                </Card>
                <Card className="p-8 text-center">
                  <h3 className="font-semibold text-xl mb-3">Quality</h3>
                  <p className="text-muted-foreground">
                    Handcrafted with meticulous attention to detail using traditional techniques
                  </p>
                </Card>
                <Card className="p-8 text-center">
                  <h3 className="font-semibold text-xl mb-3">Fairness</h3>
                  <p className="text-muted-foreground">
                    Supporting artisan communities with fair wages and sustainable livelihoods
                  </p>
                </Card>
              </div>
            </div>

            {/* Team */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Meet Our Artisans</h2>
              <p className="text-muted-foreground text-center mb-8">
                Our work is powered by the incredible artisans of Sitamarhi who have mastered the craft over generations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {["Master Craftsman Ram Kumar", "Design Specialist Priya Singh", "Quality Expert Arjun Patel"].map(
                  (name, idx) => (
                    <div key={idx} className="text-center">
                      <img
                        src={`/portrait-artisan-.jpg?height=300&width=300&query=portrait artisan ${idx}`}
                        alt={name}
                        className="rounded-lg mb-4 w-full aspect-square object-cover"
                      />
                      <h3 className="font-semibold text-lg">{name}</h3>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
