"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, LogOut, User, Package, Heart, Star, MapPin, Gift, Bell, Lock, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import OrdersTab from "@/components/account/orders-tab"
import WishlistTab from "@/components/account/wishlist-tab"
import ReviewsTab from "@/components/account/reviews-tab"
import AddressesTab from "@/components/account/addresses-tab"
import NotificationsTab from "@/components/account/notifications-tab"
import SecurityTab from "@/components/account/security-tab"
import LoyaltyTab from "@/components/account/loyalty-tab"

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [activeTab, setActiveTab] = useState("orders")
  const [userName] = useState("Priya Sharma")
  const [userEmail] = useState("priya.sharma@email.com")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!isLoggedIn) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <Card className="max-w-md mx-auto p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Sign In to Your Account</h2>
                <p className="text-sm text-muted-foreground">Access your orders, wishlist, addresses and more</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full" asChild>
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/signup">Create New Account</Link>
                </Button>
              </div>
            </Card>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const tabItems = [
    { value: "orders", label: "Orders", icon: Package },
    { value: "wishlist", label: "Wishlist", icon: Heart },
    { value: "addresses", label: "Addresses", icon: MapPin },
    { value: "reviews", label: "Reviews", icon: Star },
    { value: "loyalty", label: "Loyalty", icon: Gift },
    { value: "notifications", label: "Alerts", icon: Bell },
    { value: "security", label: "Security", icon: Lock },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-muted/30">
        {/* Mobile Header */}
        <div className="lg:hidden bg-card border-b border-border sticky top-0 z-30">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                {userName.charAt(0)}
              </div>
              <div className="min-w-0">
                <h1 className="font-semibold text-sm text-foreground truncate">{userName}</h1>
                <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-muted rounded-lg transition lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 lg:p-6">
          <div
            className={`fixed lg:static inset-y-0 left-0 w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ease-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 lg:w-64 lg:min-h-[calc(100vh-24px)]`}
          >
            <div className="p-4 lg:p-6 space-y-4 lg:space-y-6 h-screen overflow-y-auto">
              {/* Close button for mobile */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-8 lg:mt-0">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                  {userName.charAt(0)}
                </div>
                <h3 className="font-semibold text-base lg:text-lg text-foreground truncate">{userName}</h3>
                <p className="text-xs text-muted-foreground mt-1 truncate">{userEmail}</p>
                <p className="text-xs text-accent font-medium mt-2">Gold Member</p>
              </div>

              <div className="space-y-1 border-t border-border pt-4 lg:pt-6">
                {tabItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.value}
                      onClick={() => {
                        setActiveTab(item.value)
                        setSidebarOpen(false)
                      }}
                      className={`w-full text-left px-3 lg:px-4 py-3 lg:py-3 rounded-lg flex items-center gap-3 transition-colors text-sm lg:text-base ${
                        activeTab === item.value
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  )
                })}
              </div>

              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent hover:bg-destructive/10 text-destructive hover:text-destructive border-t border-border rounded-none mt-4 lg:mt-6 pt-4 lg:pt-6 text-sm lg:text-base"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            />
          )}

          {/* Main Content */}
          <div className="flex-1 w-full lg:min-h-[calc(100vh-24px)]">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-6 lg:mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {userName.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{userName}</h1>
                  <p className="text-muted-foreground text-sm">{userEmail}</p>
                </div>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Mobile horizontal scroll tabs */}
              <div className="lg:hidden overflow-x-auto bg-card border-b border-border sticky top-14 z-20">
                <TabsList className="flex w-max gap-0 bg-transparent p-0 rounded-none h-auto">
                  {tabItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex flex-col items-center gap-1 px-3 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent text-xs whitespace-nowrap"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="hidden sm:inline text-xs">{item.label}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>
              </div>

              {/* Desktop grid tabs */}
              <div className="hidden lg:block mb-6 lg:mb-8">
                <TabsList className="grid w-full grid-cols-7 gap-2 bg-transparent p-0 rounded-none border-b border-border h-auto">
                  {tabItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex flex-col items-center gap-2 px-3 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{item.label}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>
              </div>

              <div className="px-3 sm:px-4 lg:px-0">
                <TabsContent value="orders" className="mt-4 lg:mt-0">
                  <OrdersTab />
                </TabsContent>
                <TabsContent value="wishlist" className="mt-4 lg:mt-0">
                  <WishlistTab />
                </TabsContent>
                <TabsContent value="addresses" className="mt-4 lg:mt-0">
                  <AddressesTab />
                </TabsContent>
                <TabsContent value="reviews" className="mt-4 lg:mt-0">
                  <ReviewsTab />
                </TabsContent>
                <TabsContent value="security" className="mt-4 lg:mt-0">
                  <SecurityTab setIsLoggedIn={setIsLoggedIn} />
                </TabsContent>
                <TabsContent value="notifications" className="mt-4 lg:mt-0">
                  <NotificationsTab />
                </TabsContent>
                <TabsContent value="loyalty" className="mt-4 lg:mt-0">
                  <LoyaltyTab />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
