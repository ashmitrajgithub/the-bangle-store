import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function CraftsmanshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">The Art of Bangle Making</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover the intricate process behind our handcrafted bangles
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="/lac-preparation-raw-materials.jpg" alt="Lac preparation" className="rounded-lg" />
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Step 1: Lac Selection & Preparation</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We source premium-grade shellac from sustainable forests. The lac is carefully selected for its
                    purity and quality, then cleaned and refined to remove impurities. This foundational step ensures
                    the durability and beauty of every bangle we create.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Pure shellac from sustainable sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Traditional cleaning methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Quality testing at every stage</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <h2 className="text-3xl font-serif font-bold mb-4">Step 2: Color & Design Mixing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our artisans blend natural and organic dyes with the lac to create vibrant, long-lasting colors.
                    Each color combination is carefully crafted to achieve the perfect hue. Traditional techniques are
                    passed down through generations, ensuring authenticity.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Natural and organic dyes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Generation-old color recipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Vibrant, fade-resistant colors</span>
                    </li>
                  </ul>
                </div>
                <img src="/artisan-mixing-colors-dyes.jpg" alt="Color mixing" className="rounded-lg md:order-1" />
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="/hand-rolling-bangle-shaping.jpg" alt="Bangle rolling" className="rounded-lg" />
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Step 3: Hand Rolling & Shaping</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The colored lac is heated and hand-rolled into smooth, perfect circles. Our artisans use traditional
                    wooden tools and their expert hands to shape each bangle. This crucial step requires years of
                    practice and skill to master.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Hand-rolled using traditional tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Perfect circular shape and thickness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Requires 5+ years of artisan training</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <h2 className="text-3xl font-serif font-bold mb-4">Step 4: Decoration & Embellishment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bangles are decorated with intricate patterns using gold leaf, mirrors, beads, and traditional
                    Mithila art techniques. Each design tells a unique story and celebrates our cultural heritage. This
                    step transforms each bangle into a work of art.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Gold foil and leaf work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Mirror and bead embellishments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Traditional Mithila art patterns</span>
                    </li>
                  </ul>
                </div>
                <img src="/decorating-bangles-with-gold-and-beads.jpg" alt="Decoration" className="rounded-lg md:order-1" />
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <img src="/polishing-and-finishing-bangles.jpg" alt="Polishing" className="rounded-lg" />
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Step 5: Polishing & Quality Check</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Each bangle is carefully polished to a brilliant shine. Our quality control team inspects every
                    piece to ensure it meets our high standards for durability, color, and design. Only perfect bangles
                    reach our customers.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Hand-polished to perfection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Rigorous quality inspection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Only perfect pieces shipped</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">Why Our Craftsmanship Stands Out</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="font-semibold mb-2">Handmade</p>
                <p className="text-sm text-muted-foreground">Every bangle is handcrafted by skilled artisans</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="font-semibold mb-2">Years Heritage</p>
                <p className="text-sm text-muted-foreground">Traditional techniques passed through generations</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Natural</div>
                <p className="font-semibold mb-2">Eco-Friendly</p>
                <p className="text-sm text-muted-foreground">Organic dyes and sustainable sourcing</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">Fair</div>
                <p className="font-semibold mb-2">Trade Practices</p>
                <p className="text-sm text-muted-foreground">Direct support to artisan communities</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
