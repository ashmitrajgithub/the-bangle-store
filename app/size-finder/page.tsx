"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2, ArrowRight, Check, Ruler, Hand, Users, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function SizeFinderPage() {
  const [step, setStep] = useState(1)
  const [measurements, setMeasurements] = useState({
    handCircumference: "",
    handWidth: "",
    age: "",
    preference: "",
    fitPreference: "comfortable",
  })
  const [recommendation, setRecommendation] = useState<{ size: string; details: string } | null>(null)
  const [loading, setLoading] = useState(false)

  // Local algorithm for size recommendation
  const calculateSize = (circumference: string, age: string, fitPref: string) => {
    const circumInches =
      Number.parseFloat(circumference) < 20 ? Number.parseFloat(circumference) / 2.54 : Number.parseFloat(circumference)

    let baseSize = 2.2
    if (circumInches >= 18) baseSize = 2.8
    else if (circumInches >= 17) baseSize = 2.6
    else if (circumInches >= 16) baseSize = 2.4
    else if (circumInches >= 15) baseSize = 2.2
    else if (circumInches >= 14) baseSize = 2.0
    else baseSize = 1.8

    // Adjust for age
    if (age === "child") baseSize = Math.max(1.8, baseSize - 0.4)
    else if (age === "senior") baseSize = Math.min(2.8, baseSize + 0.2)

    // Adjust for fit preference
    if (fitPref === "loose") baseSize += 0.2
    else if (fitPref === "snug") baseSize = Math.max(baseSize - 0.2, 1.8)

    return baseSize.toFixed(1)
  }

  const handleInputChange = (field: string, value: string) => {
    setMeasurements((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGetRecommendation = async () => {
    if (!measurements.handCircumference || !measurements.preference) {
      alert("Please fill in all required fields")
      return
    }

    setLoading(true)
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const size = calculateSize(measurements.handCircumference, measurements.age, measurements.fitPreference)

    const details =
      {
        "Regular Wear": "Perfect for everyday elegance and comfort",
        "Festival/Wedding": "Ideal for special occasions with secure fit",
        Bridal: "Stunning for wedding day with premium positioning",
        "Mix & Match": "Versatile size works with multiple styles",
      }[measurements.preference] || "Perfect for your style"

    setRecommendation({ size, details })
    setStep(4)
    setLoading(false)
  }

  const resetForm = () => {
    setStep(1)
    setRecommendation(null)
    setMeasurements({
      handCircumference: "",
      handWidth: "",
      age: "",
      preference: "",
      fitPreference: "comfortable",
    })
  }

  return (
    <main className="w-full">
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Heart className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-semibold text-slate-700">AI-Powered Size Finder</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Bangle Size
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the ideal bangle size for your hand in just 4 simple steps. Our intelligent system analyzes your
              measurements and preferences.
            </p>
          </div>

          {/* Enhanced Progress Steps */}
          <div className="flex items-center justify-between mb-12 px-2">
            {[1, 2, 3, 4].map((s, index) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-all ${
                    step >= s
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {index < 3 && (
                  <div
                    className={`flex-1 h-1 mx-3 transition-all ${step > s ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-slate-200"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Measurement Guide */}
          {step === 1 && (
            <Card className="p-8 md:p-12 shadow-xl border-0">
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Step 1: Take Your Measurements</h2>
              <p className="text-slate-600 mb-8">Accurate measurements ensure the perfect fit</p>

              <div className="space-y-6">
                {/* Hand Circumference */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-200 rounded-lg">
                      <Ruler className="w-6 h-6 text-blue-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Hand Circumference</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Wrap a soft measuring tape around your hand at the widest point (across knuckles). Keep it snug
                        but not tight.
                      </p>
                      <input
                        type="text"
                        placeholder="e.g., 17 cm or 6.7 inches"
                        value={measurements.handCircumference}
                        onChange={(e) => handleInputChange("handCircumference", e.target.value)}
                        className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg bg-white text-slate-900 font-semibold focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Hand Width */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-200 rounded-lg">
                      <Hand className="w-6 h-6 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Hand Width (Optional)</h3>
                      <p className="text-sm text-slate-600 mb-4">
                        Measure from thumb tip to pinky tip when your hand is spread wide. This helps refine our
                        recommendation.
                      </p>
                      <input
                        type="text"
                        placeholder="e.g., 8 cm or 3.1 inches"
                        value={measurements.handWidth}
                        onChange={(e) => handleInputChange("handWidth", e.target.value)}
                        className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg bg-white text-slate-900 font-semibold focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Age Group */}
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-200 rounded-lg">
                      <Users className="w-6 h-6 text-pink-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">Age Group</h3>
                      <p className="text-sm text-slate-600 mb-4">Select your age for personalized recommendations</p>
                      <select
                        value={measurements.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg bg-white text-slate-900 font-semibold focus:outline-none focus:border-pink-500 transition-all"
                      >
                        <option value="">Select age group</option>
                        <option value="child">Child (2-12 years)</option>
                        <option value="teen">Teen (13-18 years)</option>
                        <option value="adult">Adult (19-60 years)</option>
                        <option value="senior">Senior (60+ years)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setStep(2)}
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
                disabled={!measurements.handCircumference || !measurements.age}
              >
                Continue <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          )}

          {/* Step 2: Fit Preference */}
          {step === 2 && (
            <Card className="p-8 md:p-12 shadow-xl border-0">
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Step 2: Choose Your Fit</h2>
              <p className="text-slate-600 mb-8">How do you prefer your bangles to fit?</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { id: "snug", label: "Snug Fit", desc: "Stays in place, no movement" },
                  { id: "comfortable", label: "Comfortable", desc: "Perfect balance (Recommended)" },
                  { id: "loose", label: "Loose Fit", desc: "Easy to slide on and off" },
                ].map((fit) => (
                  <button
                    key={fit.id}
                    onClick={() => handleInputChange("fitPreference", fit.id)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      measurements.fitPreference === fit.id
                        ? "border-gradient-to-r from-purple-600 to-pink-600 bg-gradient-to-br from-purple-50 to-pink-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="font-bold text-lg text-slate-900">{fit.label}</div>
                    <div className="text-sm text-slate-600">{fit.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-6 text-lg">
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Style Preference */}
          {step === 3 && (
            <Card className="p-8 md:p-12 shadow-xl border-0">
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Step 3: Select Your Style</h2>
              <p className="text-slate-600 mb-8">What occasions do you wear bangles for?</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {["Regular Wear", "Festival/Wedding", "Bridal", "Mix & Match"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange("preference", type)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      measurements.preference === type
                        ? "border-gradient-to-r from-purple-600 to-pink-600 bg-gradient-to-br from-purple-50 to-pink-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="font-bold text-lg text-slate-900">{type}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1 py-6 text-lg">
                  Back
                </Button>
                <Button
                  onClick={handleGetRecommendation}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Get Recommendation <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Result */}
          {step === 4 && recommendation && (
            <Card className="p-8 md:p-12 shadow-xl border-0">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900">Your Perfect Size</h2>
                <p className="text-xl text-slate-600">Based on your measurements and preferences</p>
              </div>

              {/* Size Display */}
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-30" />
                <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 p-12 rounded-2xl text-center text-white">
                  <p className="text-lg opacity-90 mb-2">Recommended Bangle Size</p>
                  <h3 className="text-7xl font-bold mb-2">{recommendation.size}</h3>
                  <p className="text-lg opacity-90">diameter (inches)</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-slate-900 mb-3">Perfect For</h4>
                  <p className="text-slate-600">{recommendation.details}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <h4 className="font-bold text-slate-900 mb-3">Size Chart Reference</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>2.0" - Small hands</div>
                    <div>2.2"-2.4" - Average</div>
                    <div>2.6"-2.8" - Larger hands</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 mb-8">
                <h4 className="font-bold text-slate-900 mb-4">Why This Size?</h4>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-600">Comfortable everyday wear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-600">Secure fit without slipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-slate-600">Works with all materials</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button variant="outline" onClick={resetForm} className="flex-1 py-6 text-lg bg-transparent">
                  Try Again
                </Button>
                <Button
                  href="/shop"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg"
                >
                  Shop Bangles
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
