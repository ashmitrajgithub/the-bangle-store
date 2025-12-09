const testimonials = [
  {
    name: "Priya Sharma",
    location: "New Delhi, India",
    text: "The quality and craftsmanship are exceptional. My bridal bangles were absolutely stunning and arrived beautifully packaged.",
  },
  {
    name: "Anjali Patel",
    location: "London, UK",
    text: "I was thrilled to find authentic, handcrafted bangles in the UK. The attention to detail is remarkable.",
  },
  {
    name: "Maya Desai",
    location: "New York, USA",
    text: "These bangles are not just beautiful – they carry the heritage and story of Indian artistry. Highly recommend!",
  },
  {
    name: "Neha Singh",
    location: "Toronto, Canada",
    text: "Customer service was wonderful, and the delivery was faster than expected. Truly impressed with everything.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Loved by Customers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful reviews from customers around the world who cherish our bangles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-start gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
