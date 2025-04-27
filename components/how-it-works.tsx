import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">How FrameFX Works</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          A simple process that delivers exceptional results for you and your clients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image src="/placeholder.svg?height=720&width=1280" alt="Platform dashboard" fill className="object-cover" />
        </div>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-background p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">Easy Setup</h3>
            <p className="text-sm text-muted-foreground">
              Get started in minutes with our intuitive dashboard and upload wizard.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">Client Satisfaction</h3>
            <p className="text-sm text-muted-foreground">
              Delight your clients with a premium viewing experience they'll love to share.
            </p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium">Business Growth</h3>
            <p className="text-sm text-muted-foreground">
              Increase your perceived value and command higher prices for your services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    title: "Upload Your Wedding Films",
    description:
      "Upload your finished wedding films to our secure platform. Our system automatically optimizes them for streaming at the highest quality.",
  },
  {
    title: "Customize the Experience",
    description:
      "Add your branding, create chapters, and customize the viewing experience to match your style and the couple's preferences.",
  },
  {
    title: "Share with Your Clients",
    description:
      "Generate a unique, password-protected link for your clients to access their wedding films on any device.",
  },
  {
    title: "Monitor Engagement",
    description:
      "Track how clients interact with their videos through our analytics dashboard to improve your services.",
  },
]
