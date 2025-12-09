"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Trash2, Edit, Plus } from "lucide-react"

interface Address {
  id: string
  type: "home" | "work" | "other"
  name: string
  phone: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
  isDefault: boolean
}

const mockAddresses: Address[] = [
  {
    id: "1",
    type: "home",
    name: "Priya Sharma",
    phone: "9876543210",
    addressLine1: "123 Main Street",
    addressLine2: "Apt 4B",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    isDefault: true,
  },
  {
    id: "2",
    type: "work",
    name: "Priya Sharma",
    phone: "9876543210",
    addressLine1: "456 Office Plaza",
    addressLine2: "Floor 5",
    city: "Delhi",
    state: "Delhi",
    pincode: "110002",
    isDefault: false,
  },
]

export default function AddressesTab() {
  const [addresses] = useState<Address[]>(mockAddresses)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">My Addresses</h2>
          <p className="text-muted-foreground">Manage your delivery addresses</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </Button>
      </div>

      {showForm && (
        <Card className="p-6 bg-muted/50">
          <h3 className="text-lg font-semibold text-foreground mb-4">Add New Address</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 border border-border rounded-lg" />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full px-4 py-2 border border-border rounded-lg"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full px-4 py-2 border border-border rounded-lg"
            />
            <div className="grid grid-cols-3 gap-4">
              <input type="text" placeholder="City" className="px-4 py-2 border border-border rounded-lg" />
              <input type="text" placeholder="State" className="px-4 py-2 border border-border rounded-lg" />
              <input type="text" placeholder="Pincode" className="px-4 py-2 border border-border rounded-lg" />
            </div>
            <div className="flex gap-3">
              <Button className="flex-1">Save Address</Button>
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className={`p-6 relative ${address.isDefault ? "border-primary border-2" : ""}`}>
            {address.isDefault && (
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                Default
              </span>
            )}

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground capitalize">{address.type}</h3>
                <p className="text-sm text-muted-foreground">{address.name}</p>
              </div>
            </div>

            <p className="text-sm text-foreground mb-1">{address.addressLine1}</p>
            {address.addressLine2 && <p className="text-sm text-foreground mb-1">{address.addressLine2}</p>}
            <p className="text-sm text-foreground mb-3">
              {address.city}, {address.state} {address.pincode}
            </p>
            <p className="text-sm text-muted-foreground mb-4">Phone: {address.phone}</p>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive bg-transparent">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
