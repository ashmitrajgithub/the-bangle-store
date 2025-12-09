const steps = [
  {
    number: "01",
    title: "Design & Selection",
    description: "Artisans sketch intricate patterns, inspired by Mithila art and tradition.",
  },
  {
    number: "02",
    title: "Preparation",
    description: "Fine lac and materials are carefully prepared and mixed to perfection.",
  },
  {
    number: "03",
    title: "Hand-Molding",
    description: "Each bangle is individually shaped and molded by skilled hands.",
  },
  {
    number: "04",
    title: "Decoration",
    description: "Artisans apply intricate details, colors, and embellishments.",
  },
  {
    number: "05",
    title: "Finishing",
    description: "Final polish and quality check ensure perfection.",
  },
  {
    number: "06",
    title: "Packaging",
    description: "Carefully packed with care for global delivery.",
  },
]

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">How We Create</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our traditional process combines centuries-old techniques with contemporary design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-serif font-bold text-primary opacity-50">{step.number}</span>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Craftsmanship Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="relative h-64 rounded-xl overflow-hidden bg-muted">
            <img src="/artisan-hands-crafting-lac-bangles-close-up.jpg" alt="Artisan crafting" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-muted">
            <img src="/lac-materials-colors-traditional-crafting.jpg" alt="Materials preparation" className="w-full h-full object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden bg-muted">
            <img src="/finished-decorated-bangles-display.jpg" alt="Finished bangles" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
