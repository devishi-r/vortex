'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, LogOut, Plus, MapPin, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function DonorPageComponent() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">FoodShare</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>
      <div className="flex-1 container px-4 py-6 grid gap-6 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:block">
          <nav className="flex flex-col gap-2">
            <Button variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('dashboard')}>
              Dashboard
            </Button>
            <Button variant={activeTab === 'donations' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('donations')}>
              My Donations
            </Button>
            <Button variant={activeTab === 'profile' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('profile')}>
              Profile
            </Button>
          </nav>
        </aside>
        <main className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Welcome, John Doe</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="md:hidden">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="donations">My Donations</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">25</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">People Helped</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">500</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Donation Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Create New Donation</CardTitle>
                  <CardDescription>List a new food donation for those in need.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="food-description">Food Description</Label>
                        <Textarea id="food-description" placeholder="Describe the food you're donating" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="quantity">Quantity (servings)</Label>
                        <Input id="quantity" type="number" min="1" placeholder="Enter number of servings" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="Enter pickup address" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Create Donation
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="donations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Donations</CardTitle>
                  <CardDescription>View and manage your food donations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Food Description</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Expiry Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Assorted sandwiches</TableCell>
                        <TableCell>50 servings</TableCell>
                        <TableCell>2023-06-30</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fresh vegetables</TableCell>
                        <TableCell>30 servings</TableCell>
                        <TableCell>2023-06-28</TableCell>
                        <TableCell><Badge variant="secondary">Claimed</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Canned goods</TableCell>
                        <TableCell>100 servings</TableCell>
                        <TableCell>2023-07-15</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Manage your donor profile details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="John Doe" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button>Change Avatar</Button>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="full-name">Full Name</Label>
                        <Input id="full-name" value="John Doe" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="john.doe@example.com" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" value="+1 (555) 123-4567" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" value="123 Main St, Anytown, USA" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        © 2023 FoodShare. All rights reserved.
      </footer>
    </div>
  )
}