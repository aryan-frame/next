import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by Professional Videographers
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Hear what other wedding videographers have to say about how FrameFX has transformed their business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
              </div>
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "FrameFX has completely transformed how I deliver videos to my clients. They're blown away by the premium experience, and it's helped me justify higher pricing for my services.",
    name: "Michael Reynolds",
    company: "Eternal Moments Films",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "My clients love being able to share specific moments with family without giving away access to the entire wedding video. It's been a game-changer for my business.",
    name: "Sarah Johnson",
    company: "Timeless Wedding Films",
    avatar: "/placeholder.svg?height=200&width=200",
  },
  {
    quote:
      "The platform is so easy to use, both for me and my clients. The branded experience makes my studio look incredibly professional and has helped me stand out in a crowded market.",
    name: "David Chen",
    company: "Cinematic Love Stories",
    avatar: "/placeholder.svg?height=200&width=200",
  },
]
