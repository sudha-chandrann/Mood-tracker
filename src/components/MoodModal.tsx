"use client";
import { MoodEntry } from "@/lib/moods";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar, MessageCircle, User } from "lucide-react";
import { formatDate, getMoodIcon } from "@/lib/helper";

interface MoodModalProps {
  mooddata: MoodEntry;
  onclose: (open: boolean) => void;
}

function MoodModal({ mooddata, onclose }: MoodModalProps) {
  const IconData = getMoodIcon(mooddata.mood);
  const Icon = IconData.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md">
        <Card className="w-full shadow-xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-semibold">
              Mood Entry Details
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Employee feedback submitted anonymously
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-y-3 ">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <User className="size-6" />
                <span>Employee Mood</span>
              </div>
              <div className="w-1/2 flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all border-primary/20 bg-primary/5">
                <Icon className={cn("size-8", IconData.color)} />
                <span className="font-semibold text-lg capitalize">{mooddata.mood}</span>
              </div>
            </div>

            {mooddata.comment && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <MessageCircle className="h-4 w-4" />
                  <span>Comments</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <p className="text-sm leading-relaxed">{mooddata.comment}</p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Submitted On</span>
              </div>
              <div className="bg-muted/30 rounded-lg p-3">
                <p className="text-sm font-mono">{formatDate(mooddata.timestamp)}</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => onclose(false)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MoodModal;