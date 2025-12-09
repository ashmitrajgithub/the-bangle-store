import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Truck, Globe, Clock, PackageCheck } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-serif font-bold mb-4">Global Shipping</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              We deliver handcrafted bangles to lovers of tradition worldwide
            </p>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-8 text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Free Shipping India</h3>
                <p className="text-sm text-muted-foreground">Free delivery for orders above ₹999</p>
              </Card>
              <Card className="p-8 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">International Delivery</h3>
                <p className="text-sm text-muted-foreground">We ship to 150+ countries worldwide</p>
              </Card>
              <Card className="p-8 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">2-3 days within India, 7-10 days international</p>
              </Card>
              <Card className="p-8 text-center">
                <PackageCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground">Carefully packaged to reach in perfect condition</p>
              </Card>
            </div>

            {/* Shipping Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Domestic Shipping (India)</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-1">Standard Delivery</h3>
                    <p className="text-sm text-muted-foreground">2-3 business days</p>
                    <p className="text-sm text-muted-foreground">₹50 for orders below ₹999 | Free above ₹999</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-1">Express Delivery</h3>
                    <p className="text-sm text-muted-foreground">Next day delivery (selected cities)</p>
                    <p className="text-sm text-muted-foreground">₹200</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">
                      Orders placed before 2 PM are processed same day
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">International Shipping</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-1">Standard International</h3>
                    <p className="text-sm text-muted-foreground">7-10 business days</p>
                    <p className="text-sm text-muted-foreground">Shipping cost calculated at checkout</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-1">Priority International</h3>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                    <p className="text-sm text-muted-foreground">Expedited handling available</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-900">
                      All international shipments include tracking and insurance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries Map */}
        <section className="bg-muted py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">We Ship Worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "USA",
                "Canada",
                "UK",
                "France",
                "Germany",
                "Australia",
                "Japan",
                "Singapore",
                "UAE",
                "Saudi Arabia",
                "South Africa",
                "Brazil",
              ].map((country) => (
                <div key={country} className="text-center p-4 bg-white rounded-lg">
                  <p className="font-medium">{country}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              And 140+ more countries! Contact us if your country isn't listed.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do you offer cash on delivery?",
                  a: "Yes, COD is available for orders within India. Please select this option at checkout.",
                },
                {
                  q: "Can I track my order?",
                  a: "Yes, you'll receive a tracking number via email once your order ships. International orders include real-time tracking.",
                },
                {
                  q: "What's your return policy?",
                  a: "We offer 30-day returns for unused items in original packaging. Return shipping is free within India for defective items.",
                },
                {
                  q: "Do you ship on weekends?",
                  a: "Orders are processed Monday-Saturday. Sunday holidays may affect delivery times.",
                },
                {
                  q: "Is insurance included?",
                  a: "Yes, all international shipments include insurance. Domestic shipments for orders above ₹5000 are automatically insured.",
                },
                {
                  q: "Can I change my address after ordering?",
                  a: "You can change your address within 2 hours of placing the order. Contact us immediately at hello@banglestore.com.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="font-semibold text-lg mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
