
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Code, Link as LinkIcon, User } from 'lucide-react'
import CourseCreationForm from "@/components/dashboard/create-course-form"

type Course = {
  id: number
  title: string
  description: string
  code: string
  start_date: string
  end_date: string
  teacher_id: string
  url?: string
}

// This would normally come from your data fetching logic
const fakeCourse: Course = {
  id: 1,
  title: "Introduction to Journalism",
  description: "Learn the basics of journalism and reporting. This fakeCourse covers fundamental principles of news gathering, writing, and ethical reporting. Students will develop critical thinking skills and learn to craft compelling stories across various media platforms.",
  code: "JOUR101",
  start_date: "2024-01-15",
  end_date: "2024-05-30",
  teacher_id: "550e8400-e29b-41d4-a716-446655440000",
  url: "https://example.com/intro-to-journalism"
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  //const { code } = params.slug


  return (
    <div className="p-8">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="mb-2 text-3xl">{fakeCourse.title}</CardTitle>
              <CardDescription className="text-lg">{fakeCourse.code}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Description</h3>
            <p className="text-gray-700">{fakeCourse.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>Start Date: {new Date(fakeCourse.start_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-gray-500" />
              <span>End Date: {new Date(fakeCourse.end_date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              <span>Duration: {Math.ceil((new Date(fakeCourse.end_date).getTime() - new Date(fakeCourse.start_date).getTime()) / (1000 * 3600 * 24 * 7))} weeks</span>
            </div>
            <div className="flex items-center">
              <Code className="mr-2 h-4 w-4 text-gray-500" />
              <span>Course Code: {fakeCourse.code}</span>
            </div>
          </div>
          {fakeCourse.url && (
            <div className="flex items-center">
              <LinkIcon className="mr-2 h-4 w-4 text-gray-500" />
              <a href={fakeCourse.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Course Website
              </a>
            </div>
          )}
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 text-gray-500" />
            <span>Teacher ID: {fakeCourse.teacher_id}</span>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center">
            <Avatar className="mr-4 h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Teacher" />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Teacher Name</p>
              <p className="text-sm text-gray-500">teacher@example.com</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}