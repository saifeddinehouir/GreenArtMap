import type React from "react"
import { Link } from "react-router-dom"
import { MapPin, Calendar, Edit, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"

const Profile: React.FC = () => {
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
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-emerald-50/50">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h1 className="text-2xl font-bold text-emerald-800">Jane Smith</h1>
                  <p className="text-muted-foreground mb-2">Eco-Artist & Activist</p>

                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    Portland, Oregon
                  </div>

                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    Member since April 2023
                  </div>

                  <Button variant="outline" className="w-full gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                <div className="p-6 border rounded-lg">
                  <h2 className="font-semibold mb-4">About</h2>
                  <p className="text-sm text-muted-foreground">
                    Environmental artist focused on creating installations from recycled materials. My work explores the
                    relationship between human consumption and nature.
                  </p>

                  <h2 className="font-semibold mt-6 mb-4">Stats</h2>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <div className="text-xl font-bold text-emerald-800">12</div>
                      <div className="text-xs text-muted-foreground">Installations</div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <div className="text-xl font-bold text-emerald-800">1.2k</div>
                      <div className="text-xs text-muted-foreground">Votes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <Tabs defaultValue="submissions">
                <TabsList className="mb-6">
                  <TabsTrigger value="submissions">My Submissions</TabsTrigger>
                  <TabsTrigger value="saved">Saved</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="submissions">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Art Card */}
                    <div className="overflow-hidden rounded-xl border border-emerald-100 transition-all hover:shadow-md">
                      <div className="relative">
                        <img
                          src="/placeholder.svg?height=200&width=400"
                          alt="Living Wall Sculpture"
                          className="h-48 w-full object-cover"
                        />
                        <Badge className="absolute left-3 top-3 bg-emerald-600 text-white">Trending</Badge>
                      </div>
                      <div className="p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="rounded-full border-emerald-200 bg-emerald-50 text-xs text-emerald-700"
                          >
                            Sculpture
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-emerald-800">Living Wall Sculpture</h3>
                        <p className="text-sm text-muted-foreground">Central Park, New York</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="saved">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">You haven't saved any art installations yet.</p>
                  </div>
                </TabsContent>

                <TabsContent value="activity">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">You</span> submitted a new art installation:
                          <span className="font-medium text-emerald-700"> Ocean Plastic Sculpture</span>
                        </p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium">Alex</span> commented on your
                          <span className="font-medium text-emerald-700"> Living Wall Garden</span>
                        </p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
