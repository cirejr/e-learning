import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Clock, BarChart, DollarSign, Calendar } from 'lucide-react'

// Mock data for a single course
const course = {
  id: 1,
  title: "Introduction to React",
  instructor: {
    name: "Jane Doe",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Senior Frontend Developer with 10+ years of experience"
  },
  category: "Web Development",
  duration: "8 weeks",
  level: "Beginner",
  price: 99.99,
  rating: 4.7,
  enrolledStudents: 1234,
  description: "Learn the fundamentals of React, including components, state management, and hooks. This course will give you a solid foundation to build modern web applications.",
  syllabus: [
    { week: 1, topic: "Introduction to React and JSX" },
    { week: 2, topic: "Components and Props" },
    { week: 3, topic: "State and Lifecycle" },
    { week: 4, topic: "Handling Events and Conditional Rendering" },
    { week: 5, topic: "Lists and Keys" },
    { week: 6, topic: "Forms and Controlled Components" },
    { week: 7, topic: "Hooks (useState, useEffect)" },
    { week: 8, topic: "Building a Final Project" },
  ],
  nextStartDate: "2023-07-01"
}

export default function Component() {
  return (
    <div className="min-h-screen pt-16">

      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">{course.title}</CardTitle>
                  <CardDescription>
                    <Badge className="mr-2">{course.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                      <Clock className="mr-1 inline" size={16} />
                      {course.duration}
                    </span>
                    <span className="ml-4 text-sm text-muted-foreground">
                      <BarChart className="mr-1 inline" size={16} />
                      {course.level}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{course.description}</p>
                  <div className="mb-4 flex items-center">
                    <Avatar className="mr-4 h-10 w-10">
                      <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                      <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{course.instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="syllabus">
                      <AccordionTrigger>Course Syllabus</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5">
                          {course.syllabus.map((week) => (
                            <li key={week.week} className="mb-2">
                              <span className="font-semibold">Week {week.week}:</span> {week.topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Enroll in this course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-3xl font-bold">
                    <DollarSign className="mr-1 inline" size={24} />
                    {course.price.toFixed(2)}
                  </p>
                  <ul className="mb-4">
                    <li className="mb-2 flex items-center">
                      <BookOpen className="mr-2" size={16} />
                      <span>{course.enrolledStudents} students enrolled</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <Calendar className="mr-2" size={16} />
                      <span>Starts on {new Date(course.nextStartDate).toLocaleDateString()}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}