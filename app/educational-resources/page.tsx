'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle2, HelpCircle, Leaf, ShieldCheck, Thermometer } from "lucide-react"

export default function EducationalResources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Educational Resources</h1>
      <Tabs defaultValue="safety" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="safety">Food Safety Guidelines</TabsTrigger>
          <TabsTrigger value="best-practices">Best Practices for Donation</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="safety">
          <Card>
            <CardHeader>
              <CardTitle>Food Safety Guidelines</CardTitle>
              <CardDescription>
                Ensure the safety and quality of donated food with these important guidelines.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-2">
                  <Thermometer className="h-5 w-5 mt-0.5 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Temperature Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep hot foods above 140°F (60°C) and cold foods below 40°F (4°C).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <ShieldCheck className="h-5 w-5 mt-0.5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Packaging Integrity</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure all packaging is sealed and undamaged to prevent contamination.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 mt-0.5 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold">Allergen Labeling</h3>
                    <p className="text-sm text-muted-foreground">
                      Clearly label all known allergens in donated food items.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Leaf className="h-5 w-5 mt-0.5 text-emerald-500" />
                  <div>
                    <h3 className="font-semibold">Fresh Produce Handling</h3>
                    <p className="text-sm text-muted-foreground">
                      Wash all fruits and vegetables thoroughly before donation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Remember:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Always check expiration dates before donating</li>
                  <li>Do not donate food that has been previously served</li>
                  <li>Transport food in clean, sanitized containers</li>
                  <li>When in doubt about food safety, it's best not to donate</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="best-practices">
          <Card>
            <CardHeader>
              <CardTitle>Best Practices for Donation</CardTitle>
              <CardDescription>
                Follow these guidelines to make your food donations more effective and impactful.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Quality Check</h3>
                    <p className="text-sm text-muted-foreground">
                      Donate food that you would be willing to eat yourself.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Nutritional Value</h3>
                    <p className="text-sm text-muted-foreground">
                      Focus on donating nutrient-rich, wholesome foods when possible.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Proper Packaging</h3>
                    <p className="text-sm text-muted-foreground">
                      Use clean, sturdy containers that protect food during transport.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Clear Labeling</h3>
                    <p className="text-sm text-muted-foreground">
                      Label all items with contents and expiration dates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Tips for Effective Donations:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Coordinate with receiving organizations to understand their needs</li>
                  <li>Consider donating a variety of food groups for balanced nutrition</li>
                  <li>Be mindful of cultural preferences and dietary restrictions</li>
                  <li>Donate non-perishable items with longer shelf lives when possible</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions about food donation and our platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of food can I donate?</AccordionTrigger>
                  <AccordionContent>
                    You can donate a wide variety of foods, including non-perishable items, fresh produce, baked goods,
                    and prepared meals. The key is to ensure that all donated food is safe for consumption and properly
                    packaged. Avoid donating food that is past its expiration date or has been previously served.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I ensure my donation reaches those in need?</AccordionTrigger>
                  <AccordionContent>
                    Our platform connects donors directly with verified receiving organizations. When you list a
                    donation, nearby receivers will be notified based on their needs and capacity. You can also choose
                    to deliver the donation yourself or opt for our volunteer network to assist with transportation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any tax benefits for donating food?</AccordionTrigger>
                  <AccordionContent>
                    In many cases, food donations can be tax-deductible. However, tax laws vary by country and region.
                    We recommend consulting with a tax professional or referring to your local tax authority's guidelines
                    for specific information on potential tax benefits related to food donations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How can I become a volunteer?</AccordionTrigger>
                  <AccordionContent>
                    To become a volunteer, simply update your profile settings and opt-in to volunteer opportunities.
                    You'll then be notified of nearby donation requests that need assistance with transportation or
                    distribution. You can choose which opportunities to accept based on your availability and preferences.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What safety measures are in place for food handling?</AccordionTrigger>
                  <AccordionContent>
                    We provide comprehensive food safety guidelines for all users of our platform. Donors are required to
                    follow these guidelines when preparing and packaging food for donation. Receiving organizations are
                    also trained in proper food handling and storage practices. Additionally, our volunteer network
                    receives basic food safety training to ensure proper handling during transportation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}