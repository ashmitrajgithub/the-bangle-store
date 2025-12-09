"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Zap, TrendingUp } from "lucide-react"

export default function LoyaltyTab() {
  const totalPoints = 1250
  const memberSince = "March 2023"
  const tier = "Silver"

  const rewards = [
    {
      id: "1",
      title: "₹500 Off",
      description: "On your next purchase above ₹3000",
      pointsRequired: 500,
      pointsEarned: 250,
      available: true,
    },
    {
      id: "2",
      title: "Free Shipping",
      description: "On all orders for 30 days",
      pointsRequired: 300,
      pointsEarned: 150,
      available: false,
    },
    {
      id: "3",
      title: "Exclusive Bangle Set",
      description: "Limited edition collection",
      pointsRequired: 1000,
      pointsEarned: 200,
      available: false,
    },
    {
      id: "4",
      title: "Birthday Special - 15% Off",
      description: "During your birthday month",
      pointsRequired: 200,
      pointsEarned: 100,
      available: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Loyalty Program</h2>
        <p className="text-muted-foreground">Earn points on every purchase and redeem amazing rewards</p>
      </div>

      {/* Points Card */}
      <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Total Points</p>
            <p className="text-4xl font-bold text-primary">{totalPoints}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Membership Tier</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🥈</span>
              <p className="text-2xl font-bold text-foreground">{tier}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Member Since</p>
            <p className="text-lg font-semibold text-foreground">{memberSince}</p>
          </div>
        </div>
      </Card>

      {/* Tier Benefits */}
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Your Tier Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium text-foreground mb-1">5% Points</p>
            <p className="text-xs text-muted-foreground">On every purchase</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium text-foreground mb-1">Free Shipping</p>
            <p className="text-xs text-muted-foreground">On orders above ₹500</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium text-foreground mb-1">Early Access</p>
            <p className="text-xs text-muted-foreground">To new collections</p>
          </div>
        </div>
      </Card>

      {/* Available Rewards */}
      <div>
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Gift className="w-5 h-5 text-primary" />
          Available Rewards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className="p-4 relative">
              {!reward.available && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">Coming Soon</span>
                </div>
              )}
              <h4 className="font-semibold text-foreground mb-1">{reward.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">{reward.description}</p>
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">
                    {reward.pointsEarned} / {reward.pointsRequired} points
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(reward.pointsEarned / reward.pointsRequired) * 100}%` }}
                  ></div>
                </div>
              </div>
              <Button
                className="w-full text-xs"
                disabled={!reward.available || reward.pointsEarned < reward.pointsRequired}
              >
                <Zap className="w-3 h-3 mr-1" />
                Redeem
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* How to Earn Points */}
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4">How to Earn Points</h3>
        <div className="space-y-3">
          <PointsRule icon="🛍️" description="Earn 5 points for every ₹100 spent on bangles" />
          <PointsRule icon="⭐" description="Earn 50 bonus points when you write a product review" />
          <PointsRule icon="👥" description="Earn 100 points when you refer a friend who makes a purchase" />
          <PointsRule icon="🎂" description="Earn 200 bonus points on your birthday month" />
        </div>
      </Card>
    </div>
  )
}

function PointsRule({ icon, description }: { icon: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <p className="text-sm text-foreground">{description}</p>
    </div>
  )
}
