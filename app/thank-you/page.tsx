import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto text-center p-6">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-muted-foreground mb-8">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <Button asChild>
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  )
}
