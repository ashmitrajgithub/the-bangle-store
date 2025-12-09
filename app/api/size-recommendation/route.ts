// app/api/size-recommendation/route.ts

type AgeGroup = "child" | "adult" | "senior"
type FitPreference = "snug" | "regular" | "loose"

interface SizeRequestBody {
  handCircumference: number | string
  handWidth?: number | string
  age?: AgeGroup
  fitPreference?: FitPreference
}

function toInches(raw: number | string) {
  const v = typeof raw === "string" ? parseFloat(raw) : raw
  if (!v || v <= 0) throw new Error("Invalid measurement")

  if (v <= 4) return v // inches
  if (v <= 30) return v / 2.54 // cm → inches
  return v / 25.4 // mm → inches
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SizeRequestBody
    const { handCircumference, handWidth, age = "adult", fitPreference = "regular" } = body

    if (!handCircumference)
      return Response.json({ error: "handCircumference required" }, { status: 400 })

    let circum = toInches(handCircumference)
    let width = handWidth ? toInches(handWidth) : undefined

    let minD = 1.8, maxD = 2.0 // default bracket
    if (circum >= 5.5 && circum < 7.0) [minD, maxD] = [2.13, 2.25]
    else if (circum >= 7.0 && circum < 8.0) [minD, maxD] = [2.38, 2.50]
    else if (circum >= 8.5) [minD, maxD] = [2.63, 2.63] // fixed size bracket

    // Base sizing inside bracket using geometry
    let diameter = circum / Math.PI

    // Ease for putting it through knuckles
    diameter += 0.08

    // Age factor
    if (age === "child") diameter -= 0.05
    if (age === "senior") diameter += 0.05

    // Hand width influence
    if (width) {
      if (width > 3.0 && width <= 3.3) diameter += 0.05
      else if (width > 3.3) diameter += 0.10
    }

    // Fit preference
    if (fitPreference === "snug") diameter -= 0.05
    if (fitPreference === "loose") diameter += 0.05

    // Final clamp inside that official bracket
    diameter = clamp(diameter, minD, maxD)
    const sizeInches = Number(diameter.toFixed(2))
    const sizeMM = Math.round(sizeInches * 25.4)

    return Response.json({
      recommendedSize: sizeInches,
      sizeMM,
      range: { minD, maxD },
      input: {
        circumInches: Number(circum.toFixed(2)),
        widthInches: width ? Number(width.toFixed(2)) : null,
      },
    })
  } catch (err) {
    console.error(err)
    return Response.json({ error: "Failed to calculate size" }, { status: 500 })
  }
}
