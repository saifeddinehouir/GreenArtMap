import type React from "react"
import { Link } from "react-router-dom"
import { Filter, MessageSquare, ThumbsUp, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"

const Gallery: React.FC = () => {
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
              className="text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-emerald-800 mb-2">Art Gallery</h1>
            <p className="text-muted-foreground">Explore eco-friendly art installations from around the world</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-64 space-y-4">
              <div className="p-4 border rounded-lg bg-emerald-50/50">
                <h3 className="font-medium mb-3">Filter by</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="sculptures" className="mr-2" />
                    <label htmlFor="sculptures" className="text-sm">
                      Sculptures
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="murals" className="mr-2" />
                    <label htmlFor="murals" className="text-sm">
                      Murals
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="installations" className="mr-2" />
                    <label htmlFor="installations" className="text-sm">
                      Installations
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="gardens" className="mr-2" />
                    <label htmlFor="gardens" className="text-sm">
                      Gardens
                    </label>
                  </div>
                </div>

                <h3 className="font-medium mt-6 mb-3">Sort by</h3>
                <select className="w-full p-2 text-sm border rounded">
                  <option>Most Popular</option>
                  <option>Newest First</option>
                  <option>Oldest First</option>
                </select>
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-xl font-bold text-emerald-800">All Eco-Art</h2>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="h-9 w-full max-w-[200px] rounded-full border-emerald-200"
                  />
                  <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full border-emerald-200">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Art Card 1 */}
                <Card className="overflow-hidden rounded-xl border-emerald-100 transition-all hover:shadow-md">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt="Living Wall Sculpture"
                        className="h-48 w-full object-cover"
                      />
                      <Badge className="absolute left-3 top-3 bg-emerald-600 text-white">Trending</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full border-emerald-200 bg-emerald-50 text-xs text-emerald-700"
                      >
                        Sculpture
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-amber-200 bg-amber-50 text-xs text-amber-700"
                      >
                        Recycled
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Living Wall Sculpture</h3>
                    <p className="text-sm text-muted-foreground">Central Park, New York</p>
                    <div className="mt-2 flex items-center gap-1">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Artist"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">by EcoArtist</span>
                      <Badge className="ml-auto h-5 rounded-full bg-emerald-100 px-2 text-[10px] font-normal text-emerald-700">
                        Top Creator
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" /> 128
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" /> 32
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>

                {/* More cards would be here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gallery
