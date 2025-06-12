import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Smile,  } from 'lucide-react'

export default function HomePage() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold  sm:text-5xl md:text-6xl">
              Welcome to Mood Tracker
            </h1>
            <p className="text-center text-gray-700 md:text-lg dark:text-gray-400">
              Help us understand how you&apos;re feeling today. Your mood matters, and we&apos;re here to listen.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/mood">
                <Smile className="mr-2 h-5 w-5" />
                Submit Your Mood
              </Link>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Quick, anonymous, and secure mood tracking
            </p>
          </div>
        </div>
    </div>
  )
}
