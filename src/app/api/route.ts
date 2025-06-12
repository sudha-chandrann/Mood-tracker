import { NextRequest, NextResponse } from 'next/server'
import { getAllMoods, addMood } from '@/lib/moods'

export async function GET() {
  try {
    const moods = getAllMoods()
    return NextResponse.json({success:true ,data:moods})
  } catch (error) {
    console.error('Error fetching moods:', error)
    return NextResponse.json(
      {success:false, error: 'Failed to fetch moods' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { mood, comment } = body;

    if (!mood || !['happy', 'neutral', 'sad'].includes(mood)) {
      return NextResponse.json(
         {success:false,  error: 'Invalid mood. Must be happy, neutral, or sad.'},
        { status: 400 }
      )
    }

    if (comment && typeof comment !== 'string') {
      return NextResponse.json(
        {success:false,  error: 'Comment must be a string'},
        { status: 400 }
      )
    }

    const newMood = addMood({
      mood,
      comment: comment?.trim() || "",
    })

    return NextResponse.json({success:true,data:newMood,message:"Your mood is Submitted Successfully"}, { status: 201 })
  } catch (error) {
    console.error('Error creating mood:', error)
    return NextResponse.json(
      { success:false,error: 'Failed to create mood entry' },
      { status: 500 }
    )
  }
}