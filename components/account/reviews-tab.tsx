"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare, Trash2 } from "lucide-react"

interface Review {
  id: string
  productName: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
  helpful: number
}

const mockReviews: Review[] = [
  {
    id: "1",
    productName: "Traditional Red Lac Bangles",
    rating: 5,
    title: "Perfect for my wedding!",
    comment: "Absolutely stunning quality. The craftsmanship is exceptional and they arrived in perfect condition.",
    date: "15 days ago",
    verified: true,
    helpful: 24,
  },
  {
    id: "2",
    productName: "Gold Bridal Bangle Set",
    rating: 4,
    title: "Great quality, lovely design",
    comment: "Very happy with my purchase. Beautiful packaging and fast delivery.",
    date: "1 month ago",
    verified: true,
    helpful: 12,
  },
]

export default function ReviewsTab() {
  const [reviews] = useState<Review[]>(mockReviews)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Reviews</h2>
        <p className="text-muted-foreground">Manage and view all your product reviews</p>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <Card className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">You haven't written any reviews yet.</p>
            <Button className="mt-4" asChild>
              <a href="/shop">Browse Products</a>
            </Button>
          </Card>
        ) : (
          reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{review.productName}</h3>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-1 inline-block">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>

              <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
              <p className="text-sm text-foreground mb-4">{review.comment}</p>

              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{review.date}</span>
                <button className="hover:text-primary transition-colors">👍 Helpful ({review.helpful})</button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
