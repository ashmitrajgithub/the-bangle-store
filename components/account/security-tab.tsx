"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Eye, EyeOff } from "lucide-react"

export default function SecurityTab() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Security Settings</h2>
        <p className="text-muted-foreground">Manage your password and security preferences</p>
      </div>

      {/* Change Password */}
      <Card className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Change Password</h3>
            <p className="text-sm text-muted-foreground">Update your password to keep your account secure</p>
          </div>
        </div>

        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter your current password"
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
              <button
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new password"
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-muted-foreground"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button className="w-full">Update Password</Button>
        </div>
      </Card>

      {/* Two-Factor Authentication */}
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Two-Factor Authentication</h3>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account with 2FA</p>
            </div>
          </div>
          <Button>Enable 2FA</Button>
        </div>
      </Card>

      {/* Login Activity */}
      <Card className="p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Login Activity</h3>
        <div className="space-y-3">
          <LoginActivityItem device="Chrome on Windows" location="Delhi, India" time="Today at 2:30 PM" />
          <LoginActivityItem device="Safari on iPhone" location="Delhi, India" time="Yesterday at 9:15 AM" />
          <LoginActivityItem device="Chrome on Windows" location="Delhi, India" time="2 days ago at 5:45 PM" />
        </div>
      </Card>
    </div>
  )
}

function LoginActivityItem({ device, location, time }: { device: string; location: string; time: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
      <div>
        <p className="font-medium text-sm text-foreground">{device}</p>
        <p className="text-xs text-muted-foreground">
          {location} • {time}
        </p>
      </div>
      <button className="text-xs text-destructive hover:underline">Sign Out</button>
    </div>
  )
}
