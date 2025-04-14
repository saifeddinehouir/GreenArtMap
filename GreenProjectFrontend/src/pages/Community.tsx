import type React from "react"
import { Link } from "react-router-dom"
import { User, Search, Calendar, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

const Community: React.FC = () => {
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
              className="text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
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
            <h1 className="text-3xl font-bold text-emerald-800 mb-2">Community</h1>
            <p className="text-muted-foreground">Connect with eco-artists and environmentalists around the world</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search community members..." className="pl-9 rounded-full border-emerald-200" />
                </div>
              </div>

              <Tabs defaultValue="artists">
                <TabsList className="mb-6">
                  <TabsTrigger value="artists">Artists</TabsTrigger>
                  <TabsTrigger value="organizations">Organizations</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>

                <TabsContent value="artists" className="space-y-4">
                  {/* Artist Cards */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Artist 1 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-emerald-200 transition-colors">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Artist"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-emerald-800">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">Eco-Artist & Activist</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          Portland, Oregon
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 h-7 text-xs">
                          View Profile
                        </Button>
                      </div>
                    </div>

                    {/* Artist 2 */}
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-emerald-200 transition-colors">
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Artist"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-emerald-800">Michael Johnson</h3>
                        <p className="text-sm text-muted-foreground">Recycled Materials Sculptor</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          Seattle, Washington
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 h-7 text-xs">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="organizations" className="space-y-4">
                  {/* Organization Cards */}
                  <div className="grid gap-4">
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-emerald-200 transition-colors">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=64&width=64"
                          alt="Organization"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-emerald-800">EcoArt Foundation</h3>
                        <p className="text-sm text-muted-foreground">
                          Non-profit supporting environmental art projects
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          San Francisco, California
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 h-7 text-xs">
                          View Organization
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="events" className="space-y-4">
                  {/* Event Cards */}
                  <div className="grid gap-4">
                    <div className="flex gap-4 p-4 border rounded-lg hover:border-emerald-200 transition-colors">
                      <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-emerald-800">Beach Cleanup & Art Workshop</h3>
                        <p className="text-sm text-muted-foreground">
                          Join us for a beach cleanup followed by a workshop to create art from collected materials.
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          June 15, 2023 • 10:00 AM
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          Venice Beach, California
                        </div>
                        <Button variant="outline" size="sm" className="mt-2 h-7 text-xs">
                          View Event
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 border rounded-lg bg-emerald-50/50">
                  <h2 className="font-semibold mb-4">Join Our Community</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with like-minded artists, share your work, and collaborate on eco-art projects around the
                    world.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Create Account</Button>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-emerald-700 hover:underline">
                      Log in
                    </Link>
                  </p>
                </div>

                <div className="p-6 border rounded-lg">
                  <h2 className="font-semibold mb-4">Upcoming Events</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-emerald-800">JUN</span>
                        <span className="text-lg font-bold text-emerald-800">15</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Beach Cleanup & Art Workshop</h3>
                        <p className="text-xs text-muted-foreground">Venice Beach, CA</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-emerald-800">JUL</span>
                        <span className="text-lg font-bold text-emerald-800">08</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Sustainable Art Exhibition</h3>
                        <p className="text-xs text-muted-foreground">Portland Museum of Art</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded flex flex-col items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-emerald-800">JUL</span>
                        <span className="text-lg font-bold text-emerald-800">22</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Eco-Art Workshop for Kids</h3>
                        <p className="text-xs text-muted-foreground">Central Park, New York</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-emerald-700">
                    View All Events
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

export default Community
