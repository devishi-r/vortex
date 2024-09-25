'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Alex has a background in non-profit management and is passionate about leveraging technology to solve social issues.",
      image: "/placeholder.svg",
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
    },
    {
      name: "Samantha Lee",
      role: "CTO",
      bio: "Samantha is a full-stack developer with experience in building scalable web applications for social good.",
      image: "/placeholder.svg",
      github: "https://github.com/samanthalee",
      linkedin: "https://linkedin.com/in/samanthalee",
      twitter: "https://twitter.com/samanthalee",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Michael has extensive experience in logistics and supply chain management in the food industry.",
      image: "/placeholder.svg",
      github: "https://github.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      bio: "Emily is a social media expert with a passion for community building and volunteer coordination.",
      image: "/placeholder.svg",
      github: "https://github.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About FoodShare</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're on a mission to eliminate food waste and hunger by connecting food donors with those in need.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            To create a world where no food goes to waste and no one goes hungry, by leveraging technology to connect
            food donors with recipients efficiently and effectively.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            A future where surplus food is seamlessly redistributed to those who need it most, fostering stronger
            communities and a more sustainable planet.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Over 1 million meals donated</li>
              <li>5,000+ active donors</li>
              <li>500+ receiving organizations</li>
              <li>Presence in 20 cities worldwide</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <p className="mb-4">
              FoodShare was born out of a simple observation: while millions go hungry every day, tons of perfectly good
              food is wasted. Our founders, Alex and Samantha, witnessed this paradox firsthand while volunteering at a
              local food bank.
            </p>
            <p className="mb-4">
              Determined to bridge this gap, they combined their expertise in non-profit management and technology to
              create a platform that would make food donation as easy as possible. What started as a small local
              initiative has now grown into a global movement.
            </p>
            <p>
              Today, FoodShare is more than just an app - it's a community of passionate individuals and organizations
              working together to make a difference, one meal at a time.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="FoodShare team working together"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.github}>
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.linkedin}>
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={member.twitter}>
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}