'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

export default function LeaveFeedback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leave Feedback</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Donation Feedback</CardTitle>
          <CardDescription>Share your experience about the recent donation you received</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="donation-id">Donation ID</Label>
            <Input id="donation-id" placeholder="Enter the donation ID" />
          </div>
          <div className="space-y-2">
            <Label>Overall Rating</Label>
            <RadioGroup defaultValue="3" className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <Label
                  key={value}
                  className="cursor-pointer p-2 rounded-full hover:bg-muted"
                  htmlFor={`rating-${value}`}
                >
                  <RadioGroupItem
                    value={value.toString()}
                    id={`rating-${value}`}
                    className="sr-only"
                  />
                  <Star
                    className={`h-6 w-6 ${
                      value <= 3 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="food-quality">Food Quality</Label>
            <RadioGroup defaultValue="good" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="poor" id="food-quality-poor" />
                <Label htmlFor="food-quality-poor">Poor</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fair" id="food-quality-fair" />
                <Label htmlFor="food-quality-fair">Fair</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="good" id="food-quality-good" />
                <Label htmlFor="food-quality-good">Good</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excellent" id="food-quality-excellent" />
                <Label htmlFor="food-quality-excellent">Excellent</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Additional Comments</Label>
            <Textarea id="comments" placeholder="Share your thoughts about the donation" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit Feedback</Button>
        </CardFooter>
      </Card>
    </div>
  )
}