"use client"

import type React from "react"
import { Link, useParams } from "react-router-dom"
import { MapPin, Calendar, Heart, MessageSquare, Share2, Bookmark, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"

const ArtDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-emerald-700">
            GreenArtMap 🌿
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700">
              Home
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700"
            >
              Gallery
            </Link>
            <Link
              to="/submit"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700"
            >
              Submit Art
            </Link>
            <Link
              to="/community"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-700"
            >
              Community
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/notifications" className="relative">
              <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-emerald-500 p-0 text-[10px] text-white">
                3
              </Badge>
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span className="sr-only">Notifications</span>
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-emerald-800 mb-2">Ocean Plastic Sculpture</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                    Venice Beach, CA
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    Installed: June 2023
                  </div>
                </div>
              </div>

              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Ocean Plastic Sculpture"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-between">
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Heart className="h-4 w-4 text-rose-500" />
                    128
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-500" />
                    32
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  Save
                </Button>
              </div>

              <Tabs defaultValue="about">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                  <TabsTrigger value="comments">Comments (32)</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-4 py-4">
                  <p>
                    This sculpture was created using plastic waste collected from Venice Beach during community cleanup
                    events. The artist spent three months collecting, cleaning, and assembling the materials to create
                    this powerful statement about ocean pollution.
                  </p>
                  <p>
                    The sculpture represents a wave made entirely of plastic bottles, fishing nets, and other debris
                    commonly found in our oceans. It stands as a reminder of the impact of human consumption on marine
                    ecosystems.
                  </p>
                </TabsContent>

                <TabsContent value="materials" className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Primary Materials</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Recycled plastic bottles (approx. 500)</li>
                        <li>Discarded fishing nets</li>
                        <li>Plastic packaging</li>
                        <li>Microplastics embedded in resin</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium mb-2">Construction</h3>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Steel wire frame (recycled)</li>
                        <li>Solar-powered LED lighting</li>
                        <li>Eco-friendly adhesives</li>
                        <li>Weather-resistant coating</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="comments" className="space-y-6 py-4">
                  <div className="flex gap-4 pb-6 border-b">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <textarea
                        className="w-full p-3 border rounded-lg text-sm"
                        rows={3}
                        placeholder="Add your comment..."
                      ></textarea>
                      <Button className="mt-2 bg-emerald-600 hover:bg-emerald-700">Post Comment</Button>
                    </div>
                  </div>

                  {/* Sample comments */}

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Sarah"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">Sarah L.</h4>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm mt-1">
                        This is such a powerful piece! I visited yesterday and was moved by how beautiful something made
                        from "trash" could be. Really makes you think about our consumption habits.
                      </p>
                      <div className="flex gap-4 mt-2">
                        <button className="text-xs text-muted-foreground hover:text-foreground">Reply</button>
                        <button className="text-xs text-muted-foreground hover:text-foreground">Like</button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h2 className="font-semibold mb-4">Artist</h2>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Jane Smith</h3>
                    <p className="text-sm text-muted-foreground">Eco-Artist & Activist</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Environmental artist focused on creating installations from recycled materials.
                </p>
                <Button variant="outline" className="w-full mt-4">
                  View Profile
                </Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <h2 className="font-semibold p-4 border-b">Location</h2>
                <div className="h-64 relative bg-emerald-50 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">Venice Beach</h3>
                  <p className="text-sm text-muted-foreground">Ocean Front Walk, Venice, CA 90291</p>
                  <Button variant="outline" className="w-full mt-4 gap-2">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ArtDetail
