"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Bell, Mail, MessageSquare } from "lucide-react"

interface NotificationSetting {
  id: string
  title: string
  description: string
  enabled: boolean
  icon: React.ReactNode
}

export default function NotificationsTab() {
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "1",
      title: "Order Updates",
      description: "Get notified about order status, delivery, and tracking",
      enabled: true,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: "2",
      title: "Wishlist Alerts",
      description: "Be notified when items in your wishlist go on sale",
      enabled: true,
      icon: <Bell className="w-5 h-5" />,
    },
    {
      id: "3",
      title: "Promotional Offers",
      description: "Receive emails about exclusive deals and promotions",
      enabled: false,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      id: "4",
      title: "New Arrivals",
      description: "Get notified when new bangles collections are added",
      enabled: true,
      icon: <Bell className="w-5 h-5" />,
    },
    {
      id: "5",
      title: "Product Reviews",
      description: "Reminders to review products you've purchased",
      enabled: false,
      icon: <MessageSquare className="w-5 h-5" />,
    },
  ])

  const toggleSetting = (id: string) => {
    setSettings(settings.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Notification Preferences</h2>
        <p className="text-muted-foreground">Manage how and when you receive notifications</p>
      </div>

      <div className="space-y-3">
        {settings.map((setting) => (
          <Card key={setting.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="text-primary mt-1">{setting.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground">{setting.title}</h3>
                  <p className="text-sm text-muted-foreground">{setting.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={setting.enabled}
                  onChange={() => toggleSetting(setting.id)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
