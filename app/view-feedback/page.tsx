'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ThumbsUp } from "lucide-react"

export default function ViewFeedback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Received Feedback</h1>
      <div className="flex justify-between items-center mb-6">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ratings</SelectItem>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Export Feedback</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Donation #{1000 + i}</span>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-5 w-5 ${
                        j < 4 ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </CardTitle>
              <CardDescription>Received on {new Date().toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">
                "The food quality was excellent, and it helped feed many families in need. Thank you for your
                generous donation!"
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Food Quality: Excellent</span>
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>Helpful</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}