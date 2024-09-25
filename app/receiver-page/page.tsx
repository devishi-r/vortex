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
import { Bell, Settings, LogOut, Plus, MapPin, Phone, Mail, Search } from 'lucide-react'
import Link from 'next/link'

export default function ReceiverPageComponent() {
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
              <AvatarFallback>LF</AvatarFallback>
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
            <Button variant={activeTab === 'requests' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('requests')}>
              My Requests
            </Button>
            <Button variant={activeTab === 'search' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('search')}>
              Search Donations
            </Button>
            <Button variant={activeTab === 'profile' ? 'secondary' : 'ghost'} className="justify-start" onClick={() => setActiveTab('profile')}>
              Profile
            </Button>
          </nav>
        </aside>
        <main className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Welcome, Local Food Bank</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="md:hidden">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="requests">My Requests</TabsTrigger>
              <TabsTrigger value="search">Search</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Received</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">50</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">People Served</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1000</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Available Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Create New Request</CardTitle>
                  <CardDescription>Specify your food needs for potential donors.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="food-needed">Food Needed</Label>
                        <Textarea id="food-needed" placeholder="Describe the type of food you need" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="quantity-needed">Quantity Needed (servings)</Label>
                        <Input id="quantity-needed" type="number" min="1" placeholder="Enter number of servings" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="needed-by">Needed By</Label>
                        <Input id="needed-by" type="date" />
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
                    <Plus className="mr-2 h-4 w-4" /> Create Request
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="requests" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Requests</CardTitle>
                  <CardDescription>View and manage your food requests.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Food Needed</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Needed By</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Non-perishable items</TableCell>
                        <TableCell>100 servings</TableCell>
                        <TableCell>2023-07-15</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fresh produce</TableCell>
                        <TableCell>50 servings</TableCell>
                        <TableCell>2023-07-10</TableCell>
                        <TableCell><Badge variant="secondary">Fulfilled</Badge></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Canned goods</TableCell>
                        <TableCell>200 servings</TableCell>
                        <TableCell>2023-07-20</TableCell>
                        <TableCell><Badge>Active</Badge></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="search" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Search Available Donations</CardTitle>
                  <CardDescription>Find food donations that match your needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="flex gap-4">
                        <div className="grid gap-2 flex-1">
                          <Label htmlFor="search-term">Search Term</Label>
                          <Input id="search-term" placeholder="Enter food type, donor name, etc." />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="distance">Distance</Label>
                          <Select>
                            <SelectTrigger id="distance">
                              <SelectValue placeholder="Select distance" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5">Within 5 miles</SelectItem>
                              <SelectItem value="10">Within 10 miles</SelectItem>
                              <SelectItem value="25">Within 25 miles</SelectItem>
                              <SelectItem value="50">Within 50 miles</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button type="submit">
                        <Search className="mr-2 h-4 w-4" /> Search Donations
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Search Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Food Description</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Expiry Date</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Assorted vegetables</TableCell>
                        <TableCell>30 servings</TableCell>
                        <TableCell>2023-07-05</TableCell>
                        <TableCell>2.5 miles</TableCell>
                        <TableCell>
                          <Button size="sm">Request</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Canned soups</TableCell>
                        <TableCell>50 servings</TableCell>
                        <TableCell>2023-08-15</TableCell>
                        <TableCell>4.7 miles</TableCell>
                        <TableCell>
                          <Button size="sm">Request</Button>
                        </TableCell>
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
                  <CardDescription>Manage your receiver profile details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Local Food Bank" />
                          <AvatarFallback>LF</AvatarFallback>
                        </Avatar>
                        <Button>Change Avatar</Button>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="organization-name">Organization Name</Label>
                        <Input id="organization-name" value="Local Food Bank" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="organization-type">Organization Type</Label>
                        <Select>
                          <SelectTrigger id="organization-type">
                            <SelectValue placeholder="Select organization type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="food-bank">Food Bank</SelectItem>
                            <SelectItem value="shelter">Shelter</SelectItem>
                            <SelectItem value="community-center">Community Center</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="contact@localfoodbank.org" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" value="+1 (555) 987-6543" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" value="456 Charity Lane, Helptown, USA" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="description">Organization Description</Label>
                        <Textarea id="description" value="We are dedicated to eliminating hunger in our local community by providing nutritious meals to those in need." />
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