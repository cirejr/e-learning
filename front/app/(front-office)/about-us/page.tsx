import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Users, Globe, Award } from 'lucide-react'

const stats = [
  { icon: BookOpen, label: "Courses Offered", value: "50+" },
  { icon: Users, label: "Students Enrolled", value: "10,000+" },
  { icon: Globe, label: "Countries Reached", value: "120+" },
  { icon: Award, label: "Industry Awards", value: "25+" },
]

const teamMembers = [
  { name: "Dr. Jane Smith", role: "Dean of Journalism", avatar: "/placeholder.svg?height=100&width=100" },
  { name: "Prof. John Doe", role: "Head of Digital Media", avatar: "/placeholder.svg?height=100&width=100" },
  { name: "Sarah Johnson", role: "Lead Instructor", avatar: "/placeholder.svg?height=100&width=100" },
  { name: "Michael Brown", role: "Industry Liaison", avatar: "/placeholder.svg?height=100&width=100" },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary">About Us</h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Empowering the next generation of journalists with cutting-edge online education since 2010.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Our Mission</h3>
            <p className="mb-4 text-muted-foreground">
              At Journalism School Online, we are committed to nurturing skilled, ethical, and innovative journalists who can thrive in the digital age. Our mission is to provide accessible, high-quality education that combines traditional journalistic values with cutting-edge digital skills.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of storytelling to inform, inspire, and transform society. Through our comprehensive online courses, we aim to equip our students with the tools and knowledge they need to become leaders in the ever-evolving field of journalism.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Our Story</h3>
            <p className="mb-4 text-muted-foreground">
              Founded in 2010 by a group of veteran journalists and educators, Journalism School Online was born out of a vision to democratize journalism education. We recognized the need for flexible, accessible training that could keep pace with the rapidly changing media landscape.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown from a small startup to a global leader in online journalism education, always staying true to our core values of integrity, innovation, and impact.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-primary">Our Impact</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <stat.icon className="mb-4 h-12 w-12 text-primary" />
                  <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-primary">Our Team</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar className="mb-4 h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center text-muted-foreground sm:px-6 lg:px-8">
          <p>&copy; 2024 Journalism School Online. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}