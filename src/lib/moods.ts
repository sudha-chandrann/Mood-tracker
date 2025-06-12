
type mood= 'happy' | 'neutral' | 'sad';

export interface MoodEntry {
  id: string
  mood: mood
  comment?: string
  timestamp: Date
}

const moodEntries: MoodEntry[] = [
  {
    id: '1',
    mood: 'happy',
    comment: 'Great day at work',
    timestamp: new Date('2024-06-10')
  },
  {
    id: '2',
    mood: 'neutral',
    comment: 'Just another day',
    timestamp: new Date('2024-06-11')
  },
  {
    id: '3',
    mood: 'sad',
    comment: 'Tough deadline today',
    timestamp: new Date('2024-06-12')
  }
]

export function getAllMoods(): MoodEntry[] {
  return moodEntries.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
}

export function addMood({mood,comment}:{mood:mood,comment:string}): MoodEntry {
  const newEntry: MoodEntry = {
    id: Date.now().toString(),
    timestamp: new Date(),
    mood:mood,
    comment:comment
  }
  moodEntries.push(newEntry);
  return newEntry
}