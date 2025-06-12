import { CircleHelp, Frown, Meh, Smile } from "lucide-react";

export function getMoodIcon(mood: string) {
  switch (mood) {
    case "happy":
      return {
        icon: Smile,
        color: "text-green-500 hover:text-green-600",
      };
    case "neutral":
      return {
        icon: Meh,
        color: "text-yellow-500 hover:text-yellow-600",
      };
    case "sad":
      return {
        icon: Frown,
        color: "text-red-500 hover:text-red-600",
      };
    default:
      return {
        icon: CircleHelp,
        color: "text-red-500 hover:text-red-600",
      };
  }
}

export function formatDate(date: Date) {
  return new Date(date).toDateString();
}
