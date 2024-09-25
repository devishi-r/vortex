'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Search, Users } from "lucide-react"
import Link from "next/link"

export default function SearchReceivers() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Receivers</h1>
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="location" placeholder="Enter your location" className="pl-8" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radius">Search Radius (km)</Label>
            <Slider
              id="radius"
              min={1}
              max={50}
              step={1}
              defaultValue={[10]}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization-type">Organization Type</Label>
            <Select>
              <SelectTrigger id="organization-type">
                <SelectValue placeholder="Select organization type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="shelter">Homeless Shelter</SelectItem>
                <SelectItem value="foodbank">Food Bank</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="community">Community Center</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Capacity</Label>
            <Select>
              <SelectTrigger id="capacity">
                <SelectValue placeholder="Select capacity range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="small">Small (1-50 people)</SelectItem>
                <SelectItem value="medium">Medium (51-200 people)</SelectItem>
                <SelectItem value="large">Large (200+ people)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full">Apply Filters</Button>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search receivers" className="pl-8" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">Community Food Center</h3>
                <p className="text-sm text-muted-foreground">Type: Food Bank</p>
                <p className="text-sm flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Capacity: 100-150 people
                </p>
                <p className="text-sm flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  3.2 km away
                </p>
                <Button asChild className="w-full mt-2">
                  <Link href="#">View Details</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}