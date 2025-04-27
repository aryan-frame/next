import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Choose the plan that works best for your business. All plans include
          our core premium features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.featured ? "border-primary shadow-lg" : ""
            }`}
          >
            <CardHeader>
              {plan.featured && (
                <div className="mb-2 text-sm font-medium text-primary">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid flex-1 gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="grid gap-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                size="lg"
                className="w-full "
                variant={plan.featured ? "default" : "outline"}
              >
                <Link href="#access">Request Access</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto max-w-3xl rounded-lg border bg-muted/50 p-6 text-center">
        <h3 className="text-lg font-medium">Need a custom solution?</h3>
        <p className="mt-2 text-muted-foreground">
          Contact us for custom enterprise plans designed for high-volume
          studios with specific requirements.
        </p>
        <Button variant="link" asChild>
          <Link href="#access">
            Contact Sales
          </Link>
        </Button>
      </div>
    </div>
  );
}

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for new videographers looking to elevate their client experience.",
    price: 49,
    features: [
      "Up to 10 active wedding projects",
      "5TB storage",
      "Basic branding customization",
      "720p and 1080p streaming",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "Ideal for established videographers with a growing client base.",
    price: 99,
    features: [
      "Up to 30 active wedding projects",
      "15TB storage",
      "Advanced branding customization",
      "Up to 4K streaming",
      "Client sharing features",
      "Analytics dashboard",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Studio",
    description: "For multi-photographer studios with high-volume needs.",
    price: 199,
    features: [
      "Unlimited active wedding projects",
      "50TB storage",
      "Complete white-labeling",
      "Up to 4K streaming",
      "Advanced client sharing",
      "Detailed analytics",
      "Multiple team members",
      "24/7 priority support",
    ],
    featured: false,
  },
]
