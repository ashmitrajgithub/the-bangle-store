import Link from "next/link"

const collections = [
  {
    id: 1,
    name: "Bridal Bangles",
    description: "Elaborate designs perfect for weddings and special ceremonies",
    image: "/bridal-bangles-red-gold-traditional-indian-wedding.jpg",
  },
  {
    id: 2,
    name: "Festive Collection",
    description: "Vibrant colors and patterns for celebrations and festivals",
    image: "/festive-colorful-bangles-indian-festivals.jpg",
  },
  {
    id: 3,
    name: "Party Wear",
    description: "Elegant designs for evening occasions and special events",
    image: "/party-wear-elegant-bangles.jpg",
  },
  {
    id: 4,
    name: "Kids Collection",
    description: "Playful and safe designs for children",
    image: "/colorful-kids-children-bangles-safe-playful.jpg",
  },
]

export default function Collections() {
  return (
    <section id="collections" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Collections</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selections, each designed to celebrate moments of beauty and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.id}`} className="group cursor-pointer">
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl bg-muted">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{collection.name}</h3>
              <p className="text-muted-foreground text-sm">{collection.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
