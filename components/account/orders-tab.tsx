"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, Download, Eye, RotateCcw, X, Truck, Clock, CheckCircle } from "lucide-react"

interface OrderItem {
  id: string
  name: string
  price: string
  quantity: number
  size: string
  image: string
}

interface Order {
  id: string
  date: string
  status: "Delivered" | "Shipped" | "Processing" | "Cancelled"
  total: string
  items: OrderItem[]
  tracking: string
  deliveryDate?: string
  address: string
}

const orders: Order[] = [
  {
    id: "#TBS-001298",
    date: "November 15, 2024",
    status: "Delivered",
    total: "₹2,499",
    items: [
      {
        id: "1",
        name: "Traditional Red Lac Bangles",
        price: "₹1,299",
        quantity: 1,
        size: "2.6",
        image: "💍",
      },
      {
        id: "2",
        name: "Gold Bridal Set",
        price: "₹1,200",
        quantity: 1,
        size: "2.4",
        image: "✨",
      },
    ],
    tracking: "TRK123456789",
    deliveryDate: "November 18, 2024",
    address: "123 Main Street, Mumbai, 400001",
  },
  {
    id: "#TBS-001297",
    date: "November 8, 2024",
    status: "Shipped",
    total: "₹1,899",
    items: [
      {
        id: "3",
        name: "Festive Collection Bangles",
        price: "₹1,899",
        quantity: 1,
        size: "2.8",
        image: "🎨",
      },
    ],
    tracking: "TRK123456790",
    address: "123 Main Street, Mumbai, 400001",
  },
  {
    id: "#TBS-001296",
    date: "October 28, 2024",
    status: "Delivered",
    total: "₹3,299",
    items: [
      {
        id: "4",
        name: "Premium Glass Bangles",
        price: "₹1,499",
        quantity: 2,
        size: "2.2",
        image: "💎",
      },
    ],
    tracking: "TRK123456791",
    deliveryDate: "November 2, 2024",
    address: "123 Main Street, Mumbai, 400001",
  },
]

export default function OrdersTab() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Shipped":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-5 h-5" />
      case "Shipped":
        return <Truck className="w-5 h-5" />
      case "Processing":
        return <Clock className="w-5 h-5" />
      default:
        return <Package className="w-5 h-5" />
    }
  }

  const OrderDetailsModal = ({ order, onClose }: { order: Order; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
          <h2 className="text-xl sm:text-2xl font-bold truncate">Order {order.id}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="bg-muted/50 rounded-lg p-3 sm:p-4 border border-border">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Status</p>
                <Badge className={`mt-2 text-xs sm:text-sm ${getStatusColor(order.status)}`}>{order.status}</Badge>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Order Date</p>
                <p className="font-semibold text-foreground mt-1 text-sm sm:text-base">{order.date}</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Tracking</p>
                <p className="font-mono font-semibold text-primary mt-1 text-xs sm:text-sm truncate">
                  {order.tracking}
                </p>
              </div>
              {order.deliveryDate && (
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">Delivered</p>
                  <p className="font-semibold text-foreground mt-1 text-sm sm:text-base">{order.deliveryDate}</p>
                </div>
              )}
            </div>
          </div>

          {/* Delivery Address */}
          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Delivery Address</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">{order.address}</p>
          </div>

          <div className="border-b border-border pb-4">
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Items Ordered</h3>
            <div className="space-y-2 sm:space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3 p-2 sm:p-3 bg-muted/30 rounded-lg border border-border">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm sm:text-base truncate">{item.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium">Size: {item.size} inches</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Total */}
          <div className="bg-primary/10 rounded-lg p-3 sm:p-4 border border-primary/20">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-foreground text-sm sm:text-lg">Order Total:</span>
              <span className="text-xl sm:text-2xl font-bold text-primary">{order.total}</span>
            </div>
          </div>

          <div className="flex gap-2 flex-col sm:flex-row">
            <Button variant="outline" className="flex-1 bg-transparent hover:bg-muted/50 text-xs sm:text-sm">
              <Download className="w-4 h-4 mr-2" />
              Invoice
            </Button>
            {order.status === "Delivered" && (
              <Button variant="outline" className="flex-1 bg-transparent hover:bg-muted/50 text-xs sm:text-sm">
                <RotateCcw className="w-4 h-4 mr-2" />
                Return
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <div className="space-y-3 sm:space-y-4 pb-6 sm:pb-8">
      {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}

      {orders.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Package className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-lg font-medium mb-2">No orders yet</p>
            <p className="text-muted-foreground text-sm">Start shopping to see your orders here</p>
            <Button className="mt-6" asChild>
              <a href="/shop">Browse Collection</a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        orders.map((order) => (
          <Card key={order.id} className="overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-0">
              <div className="p-3 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-border">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-semibold text-base sm:text-lg truncate">{order.id}</h3>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <Badge className={`text-xs sm:text-sm ${getStatusColor(order.status)}`}>{order.status}</Badge>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{order.date}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{order.items.length} item(s)</p>
                </div>
                <div className="flex flex-col sm:items-end gap-2 sm:gap-3">
                  <p className="text-lg sm:text-xl font-bold text-primary">{order.total}</p>
                  <Button
                    size="sm"
                    onClick={() => setSelectedOrder(order)}
                    className="gap-2 w-full sm:w-auto text-xs sm:text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
