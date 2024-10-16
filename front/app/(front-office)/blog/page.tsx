'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RssIcon, SearchIcon } from 'lucide-react'

const categories = ["All Posts", "Engineering", "Community", "Company News", "Customers", "Changelog", "Press"]

const featuredPosts = [
  {
    id: 1,
    icon: "▲",
    title: "Serverless servers: Efficient serverless Node.js with in-function concurrency",
    excerpt: "We're sharing a first look at a new version of Vercel Functions with support for in-function concurrency, enabling more efficient serverless Node.js execution.",
    date: "Oct 3",
    author: "Malte Ubl",
    authorAvatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: 2,
    icon: "▢",
    title: "Vercel AI SDK 3.3",
    excerpt: "The Vercel AI SDK is a toolkit for building AI applications with JavaScript and TypeScript. Its unified API allows you to use any language model and provides powerful UI integrations into leading web frameworks such as Next.js and Svelte.",
    date: "Aug 6",
    author: "Lars, Jared, and 2 others",
    authorAvatar: "/placeholder.svg?height=32&width=32"
  },
  {
    id: 3,
    icon: "◎",
    title: "How Google handles JavaScript throughout the indexing process",
    excerpt: "Understanding how search engines crawl, render, and index web pages is crucial for optimizing sites for search engines. Over the years, as search engines like Google change their processes, it's tough to keep track of what works and doesn't—especially with client-side JavaScript.",
    date: "Jul 31",
    author: "Giacomo, Alice, and 2 others",
    authorAvatar: "/placeholder.svg?height=32&width=32"
  }
]

const latestNews = [
  { id: 1, category: "Engineering", date: "Oct 10", title: "New Engineering Update" },
  { id: 2, category: "Customers", date: "Oct 10", title: "Customer Success Story" },
  { id: 3, category: "Customers", date: "Oct 9", title: "Another Customer Milestone" }
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen">
     

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div key={post.id} className="rounded-lg border p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="text-4xl">{post.icon}</div>
                <div className="text-muted-foreground">{post.date}</div>
              </div>
              <h2 className="mb-4 text-2xl font-bold">{post.title}</h2>
              <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center">
                <Avatar className="mr-2 h-8 w-8">
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{post.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold">Latest news.</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <div key={news.id} className="border-t pt-4">
                <div className="mb-2 flex justify-between text-sm text-muted-foreground">
                  <span>{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}