"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      // <div className="rounded-lg border border-primary/20 bg-primary-foreground/10 p-8 text-center">
      //   <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
      //     <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
      //   </div>
      //   <h3 className="mt-4 text-xl font-medium">Thank You for Your Interest</h3>
      //   <p className="mt-2 text-primary-foreground/90">
      //     We've received your request for access. Our team will review your application and get back to you within 48
      //     hours.
      //   </p>
      // </div>
      <div className="rounded-lg border border-gray-200 p-8 text-center bg-white text-black">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
          <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mt-4 text-xl font-medium">
          Thank You for Your Interest
        </h3>
        <p className="mt-2">
          We've received your request for access. Our team will review your
          application and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="space-y-6 rounded-lg border border-primary/20 bg-primary-foreground/10 p-8"
    // >
    //   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    //     <div className="space-y-2">
    //       <Label htmlFor="first-name">First name</Label>
    //       <Input
    //         id="first-name"
    //         placeholder="John"
    //         required
    //         className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <Label htmlFor="last-name">Last name</Label>
    //       <Input
    //         id="last-name"
    //         placeholder="Doe"
    //         required
    //         className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //       />
    //     </div>
    //   </div>
    //   <div className="space-y-2">
    //     <Label htmlFor="company">Company/Studio name</Label>
    //     <Input
    //       id="company"
    //       placeholder="Eternal Moments Videography"
    //       required
    //       className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //     />
    //   </div>
    //   <div className="space-y-2">
    //     <Label htmlFor="email">Email</Label>
    //     <Input
    //       id="email"
    //       type="email"
    //       placeholder="john@example.com"
    //       required
    //       className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //     />
    //   </div>
    //   <div className="space-y-2">
    //     <Label htmlFor="url">URL </Label>
    //     <Input
    //       id="url"
    //       type="url"
    //       placeholder="https://your-url.com"
    //       className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //     />
    //   </div>
    //   <div className="space-y-2">
    //     <Label htmlFor="message">Tell us about your business</Label>
    //     <Textarea
    //       id="message"
    //       placeholder="Share details about your videography business, experience, and why you're interested in our platform."
    //       rows={4}
    //       className="border-primary/20 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/50"
    //     />
    //   </div>
    //   <Button
    //     type="submit"
    //     size="lg"
    //     className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
    //   >
    //     Submit Application
    //   </Button>
    // </form>
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-lg border border-gray-200 p-8 bg-white text-black"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name" className="text-black">
            First name
          </Label>
          <Input
            id="first-name"
            placeholder="John"
            required
            className="border border-gray-200 bg-white text-black placeholder:text-gray-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name" className="text-black">
            Last name
          </Label>
          <Input
            id="last-name"
            placeholder="Doe"
            required
            className="border border-gray-200 bg-white text-black placeholder:text-gray-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company" className="text-black">
          Company/Studio name
        </Label>
        <Input
          id="company"
          placeholder="Eternal Moments Videography"
          required
          className="border border-gray-200 bg-white text-black placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-black">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          required
          className="border border-gray-200 bg-white text-black placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url" className="text-black">
          URL
        </Label>
        <Input
          id="url"
          type="url"
          placeholder="https://your-url.com"
          className="border border-gray-200 bg-white text-black placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-black">
          Tell us about your business
        </Label>
        <Textarea
          id="message"
          placeholder="Share details about your videography business, experience, and why you're interested in our platform."
          rows={4}
          className="border border-gray-200 bg-white text-black placeholder:text-gray-500 "
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-white hover:bg-primary/80"
      >
        Submit Application
      </Button>
    </form>
  );
}
