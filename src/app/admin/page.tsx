"use client";
import MoodModal from "@/components/MoodModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, getMoodIcon } from "@/lib/helper";
import { MoodEntry } from "@/lib/moods";
import axios from "axios";
import {
  Smile,
  Meh,
  Frown,
  Users,
  Calendar,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";



export default function AdminPage() {
  const [allmoods, setallmoods] = useState<MoodEntry[]>([]);
  const [selectedmood, setselectedmood] = useState<MoodEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [modalopen,setmodelOpen]=useState(false);

  const getallMooods = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api");

      if (response.data.success) {
        setallmoods(response.data.data);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error geting mood:", error);
      toast.error(
        error?.response?.data?.error ||
          "Failed to get employees mood. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getallMooods();
  }, []);

  const totalMoods = allmoods.length;
  const happyCount = allmoods.filter((mood: MoodEntry) => mood.mood === "happy").length;
  const neutralCount = allmoods.filter((mood: MoodEntry) => mood.mood === "neutral").length;
  const sadCount = allmoods.filter((mood: MoodEntry) => mood.mood === "sad").length;
  const happyPercentage =totalMoods > 0 ? ((happyCount / totalMoods) * 100).toFixed(1) : 0;
  const neutralPercentage =totalMoods > 0 ? ((neutralCount / totalMoods) * 100).toFixed(1) : 0;
  const sadPercentage =totalMoods > 0 ? ((sadCount / totalMoods) * 100).toFixed(1) : 0;


  const getselectedMoodData= (id:string)=>{
    const mood= allmoods.find((mood: MoodEntry) => mood.id === id);
    setselectedmood(mood!);
    setmodelOpen(true);
  }  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <Loader2 className="animate-spin size-12" />
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor team mood trends and individual submissions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex  items-center justify-between flex-row pb-2">
              <CardTitle className="text-sm font-medium">
                Total Submissions
              </CardTitle>
              <Users className="size-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalMoods}</div>
              <p className="text-xs text-muted-foreground">
                Mood entries recorded
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Happy</CardTitle>
              <Smile className="size-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {happyCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {happyPercentage}% of submissions are in happy mood
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Neutral</CardTitle>
              <Meh className="size-6 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {neutralCount}
              </div>
              <p className="text-xs text-muted-foreground">
                {neutralPercentage}% of submissions are in neutral mood
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sad</CardTitle>
              <Frown className="size-6 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{sadCount}</div>
              <p className="text-xs text-muted-foreground">
                {sadPercentage}% of submissions are in sad mood
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="size-6" />
              Recent Mood Entries
            </CardTitle>
            <CardDescription>
              Latest mood submissions from team members
            </CardDescription>
          </CardHeader>
          <CardContent>
            {allmoods.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-28">Mood</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead className="w-52">Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allmoods.map((mood) => {
                    const Icondata = getMoodIcon(mood.mood);
                    return (
                      <TableRow key={mood.id} onClick={()=>{getselectedMoodData(mood.id)}}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Icondata.icon className={`${Icondata.color}`} />
                            <span className="capitalize font-medium">
                              {mood.mood}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-md">
                            {mood.comment ? (
                              <p className="text-sm">
                                {mood.comment.length > 100
                                  ? mood.comment.slice(0, 100) + "..."
                                  : mood.comment}
                              </p>
                            ) : (
                              <span className="text-muted-foreground italic">
                                No comment
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {formatDate(mood.timestamp)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="size-14 mx-auto mb-4 opacity-50" />
                <p>No mood entries yet</p>
                <p className="text-sm">
                  Mood submissions will appear here once employees start sharing
                  their feelings.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    {
      modalopen && (
        <MoodModal mooddata={selectedmood!} onclose={setmodelOpen}/>
      )
    }
    </>
  
  );
}
