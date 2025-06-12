'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Smile, Meh, Frown, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios';
import { toast } from 'sonner';


interface moodOptionsProps {
  value:string,
  label:string,
  icon:LucideIcon,
  color:string,
}



const moodOptions:moodOptionsProps[] = [
  { 
    value: 'happy' , 
    label: 'Happy', 
    icon: Smile, 
    color: 'text-green-500 hover:text-green-600',
  },
  { 
    value: 'neutral',
    label: 'Neutral', 
    icon: Meh, 
    color: 'text-yellow-500 hover:text-yellow-600',
  },
  { 
    value: 'sad',
    label: 'Sad', 
    icon: Frown, 
    color: 'text-red-500 hover:text-red-600',
  },
]

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState<string|null>(null)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedMood) {
      toast.error("Please Select Your Mood before submitting the form");
      return ;
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post('/api', {
          mood: selectedMood,
          comment: comment.trim(),
      })

    if (response.data.success) {
        setIsSubmitted(true);
        toast.success(response.data.message)
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error submitting mood:', error)
      toast.error(error?.response?.data?.error || 'Failed to submit mood. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex items-center justify-center h-screen ">
          <Card className="w-full max-w-md text-center py-10 bg-primary">
            <CardHeader className='flex items-center justify-center '>
                <div className="h-12 w-12 bg-green-900 dark:bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Smile className="h-6 w-6 text-green-400 dark:text-green-600" />
                </div>
              <CardTitle className="text-2xl text-white dark:text-black">Thank You!</CardTitle>
              <CardDescription className='text-gray-400 dark:text-gray-600 '>
                Your mood has been recorded successfully. Redirecting you back to home...
              </CardDescription>
            </CardHeader>
          </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10 items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">How are you feeling today?</h1>
          <p className="text-muted-foreground">
            Select your current mood and optionally share what&apos;s on your mind
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Submit Your Mood</CardTitle>
            <CardDescription>
              Your response is anonymous and helps us company working environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-4 block">
                  Select your mood:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {moodOptions.map((mood) => {
                    const Icon = mood.icon
                    return (
                      <Button
                        variant="ghost"
                        key={mood.value}
                        type="button"
                        onClick={() => setSelectedMood(mood.value)}
                        className={cn(
                          "py-10 rounded-lg border-2 transition-all duration-200 flex items-center justify-center ",
                          selectedMood === mood.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50",
                        )}
                      >
                        <div className="flex flex-col items-center justify-center gap-y-2">
                          <Icon className={cn("h-6 w-6 ", mood.color)} />
                          <div className="font-medium">{mood.label}</div>
                        </div>
                      </Button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="text-sm font-medium mb-2 block">
                  Additional comments (optional):
                </label>
                <Textarea
                  id="comment"
                  placeholder="Share what's contributing to your mood today..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-28"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button
                  type="submit"
                  disabled={!selectedMood || isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Mood'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
    </div>
  )
}