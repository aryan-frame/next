import Link from "next/link"
import Image from "next/image"
import {
  Film,
  DownloadCloud,
  Link2,
  LayoutGrid,
  Globe,
  Usb,
  Video,
  ChevronRight,
  Play,
  MonitorSmartphone,
  Download,
  Settings,
  BookOpen,
} from "lucide-react";



import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/lead-form"
import { Testimonials } from "@/components/testimonials"
import { FeatureCard } from "@/components/feature-card"
import { HowItWorks } from "@/components/how-it-works"
import { PricingSection } from "@/components/pricing-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Video className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold tracking-tight">FrameFX</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </nav>
          <div>
            <Button asChild>
              <Link href="#access">Request Access</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0 bg-black/40" />
          <div className="relative z-10 container flex flex-col items-center justify-center px-4 py-24 md:py-32 lg:py-40 text-center text-white">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Elevate Your Wedding Videography Business
            </h1>
            <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90">
              Offer your clients a premium, Netflix-style platform to view and share their wedding memories. Exclusive
              for professional videographers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#access">
                  Request Access <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                asChild
              >
                <Link href="#demo">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full">
            <Image
              src="/hero.jpg"
              alt="Wedding couple"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section id="features" className="container py-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for Videographers, Loved by Clients
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Our platform provides everything you need to deliver an exceptional viewing experience to your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
              icon={<LayoutGrid className="h-10 w-10 text-primary" />}
              title="Netflix-Style Layout"
              description="Give weddings the OTT treatment with a modern interface that showcases highlights, reels, and full videos — all in one immersive experience."
            />
            <FeatureCard
              icon={<Film className="h-10 w-10 text-primary" />}
              title="Auto Reel Generation"
              description="Turn full-length wedding videos into cinematic reels in minutes. Just set start and end markers — our tool does the rest. "
            />
            <FeatureCard
              icon={<DownloadCloud className="h-10 w-10 text-primary" />}
              title="Dropbox Integration"
              description="Fetch footage directly from Dropbox — no re-uploads, faster workflows, and support for large files."
            />
            <FeatureCard
              icon={<Link2 className="h-10 w-10 text-primary" />}
              title="Shareable Links"
              description="Share secure gallery links — full access for couples, view-only for guests. Simple, safe, and elegant."
            />
            
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Watch Anywhere"
              description="Watch on any device — no apps, no downloads. Just click the link and start streaming instantly."
            />
            <FeatureCard
              icon={<Usb className="h-10 w-10 text-primary" />}
              title="Offline Playback"
              description="No internet? No problem. Get a USB with all videos and thumbnails for smooth offline playback."
            />
            <FeatureCard
              icon={<MonitorSmartphone className="h-10 w-10 text-primary" />}
              title="Smart TV Support"
              description="Watch on Android TV — relive wedding moments on the big screen without cables or tech hassles."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="One-Click Chapters"
              description="Loved a chapter? Save it instantly. Each moment is just one click away — perfect for rewatching, sharing, or keeping forever."
            />
            <FeatureCard
              icon={<Settings className="h-10 w-10 text-primary" />}
              title="Admin Dashboard"
              description="Full control made simple — edit videos, update info, and manage everything from one clean backend."
            />
          </div>
        </section>

        <section id="how-it-works" className="bg-muted py-24">
          <div className="container">
            <HowItWorks />
          </div>
        </section>

        <section id="demo" className="container py-24 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">See the Platform in Action</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Watch how FrameFX transforms the way your clients experience their wedding videos.
            </p>
          </div>

          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl border shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <Button size="lg" variant="outline" className="rounded-full h-16 w-16 p-0">
                <Play className="h-8 w-8" />
                <span className="sr-only">Play demo video</span>
              </Button>
            </div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Platform demo"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>
        </section>

        <section id="testimonials" className="bg-muted/50 py-24">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        <section id="pricing" className="container py-24">
          <PricingSection />
        </section>

        <section id="access" className="bg-primary text-primary-foreground py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Request Exclusive Access</h2>
                <p className="text-lg text-primary-foreground/90">
                  FrameFX is exclusively available to professional wedding videographers. Fill out the form below
                  to request access to our platform.
                </p>
              </div>

              <LeadForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">FrameFX</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Elevating wedding videography with premium client experiences.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FrameFX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
