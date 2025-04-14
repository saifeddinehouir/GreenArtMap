import type React from "react"
import { Link } from "react-router-dom"
import { Filter, MapPin, MessageSquare, ThumbsUp, User } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Input } from "../components/ui/input"

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-emerald-700">
            GreenArtMap 🌿
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link to="/" className="text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900">
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
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-10">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-emerald-800 sm:text-4xl md:text-5xl">
                    Discover & Create Eco-Art in Your City
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join our community of artists and environmentalists mapping sustainable art projects around the
                    world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/submit">
                    <Button className="bg-emerald-600 text-white hover:bg-emerald-700">Submit Your Art</Button>
                  </Link>
                  <Link to="/community">
                    <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-emerald-100 md:h-[350px]">
                  <img
                    src="/placeholder.svg?height=350&width=500"
                    alt="Eco-Art Collage"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 shadow-sm">
                    <p className="text-sm font-medium text-emerald-800">1,240+ Art Projects</p>
                    <p className="text-xs text-muted-foreground">Across 86 cities worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section with Filters */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-bold text-emerald-800">Explore Eco-Art Near You</h2>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="Search by location..."
                  className="h-9 w-full max-w-[200px] rounded-full border-emerald-200"
                />
                <Button variant="outline" size="sm" className="h-9 gap-1 rounded-full border-emerald-200">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-emerald-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="mx-auto h-12 w-12 text-emerald-600" />
                  <p className="mt-2">Interactive Map (Leaflet would be integrated here)</p>
                </div>
              </div>
              {/* Sample Map Pins */}
              <div className="absolute left-1/4 top-1/3">
                <div className="group relative">
                  <MapPin className="h-6 w-6 cursor-pointer text-emerald-700" />
                  <div className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-white p-2 text-xs shadow-lg group-hover:visible">
                    <p className="font-medium">Living Wall Sculpture</p>
                    <p className="text-muted-foreground">Central Park, New York</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2">
                <div className="group relative">
                  <MapPin className="h-6 w-6 cursor-pointer text-emerald-700" />
                  <div className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-white p-2 text-xs shadow-lg group-hover:visible">
                    <p className="font-medium">Recycled Ocean Plastic Installation</p>
                    <p className="text-muted-foreground">Venice Beach, California</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-3/4 top-1/4">
                <div className="group relative">
                  <MapPin className="h-6 w-6 cursor-pointer text-emerald-700" />
                  <div className="invisible absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-lg bg-white p-2 text-xs shadow-lg group-hover:visible">
                    <p className="font-medium">Solar-Powered Light Garden</p>
                    <p className="text-muted-foreground">Millennium Park, Chicago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-white">
                All Types
              </Badge>
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-emerald-50 text-emerald-700">
                Murals
              </Badge>
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-white">
                Sculptures
              </Badge>
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-white">
                Installations
              </Badge>
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-white">
                Gardens
              </Badge>
              <Badge variant="outline" className="rounded-full border-emerald-200 bg-white">
                Upcycled Art
              </Badge>
            </div>
          </div>
        </section>

        {/* Art Gallery Section with Tabs */}
        <section className="container py-8">
          <Tabs defaultValue="trending" className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-emerald-800">Featured Eco-Art</h2>
              <TabsList className="grid w-[300px] grid-cols-3 rounded-full bg-emerald-50">
                <TabsTrigger
                  value="trending"
                  className="rounded-full data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                >
                  Trending
                </TabsTrigger>
                <TabsTrigger
                  value="newest"
                  className="rounded-full data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                >
                  Newest
                </TabsTrigger>
                <TabsTrigger
                  value="nearby"
                  className="rounded-full data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                >
                  Nearby
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="trending" className="mt-6">
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

                {/* Art Card 2 */}
                <Card className="overflow-hidden rounded-xl border-emerald-100 transition-all hover:shadow-md">
                  <CardHeader className="p-0">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Recycled Ocean Plastic Installation"
                      className="h-48 w-full object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full border-emerald-200 bg-emerald-50 text-xs text-emerald-700"
                      >
                        Installation
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-blue-200 bg-blue-50 text-xs text-blue-700"
                      >
                        Ocean
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Recycled Ocean Plastic Installation</h3>
                    <p className="text-sm text-muted-foreground">Venice Beach, California</p>
                    <div className="mt-2 flex items-center gap-1">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Artist"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">by OceanGuardian</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" /> 95
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" /> 18
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>

                {/* Art Card 3 */}
                <Card className="overflow-hidden rounded-xl border-emerald-100 transition-all hover:shadow-md">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt="Solar-Powered Light Garden"
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
                        Installation
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-yellow-200 bg-yellow-50 text-xs text-yellow-700"
                      >
                        Solar
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Solar-Powered Light Garden</h3>
                    <p className="text-sm text-muted-foreground">Millennium Park, Chicago</p>
                    <div className="mt-2 flex items-center gap-1">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Artist"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">by SolarArtist</span>
                      <Badge className="ml-auto h-5 rounded-full bg-emerald-100 px-2 text-[10px] font-normal text-emerald-700">
                        Top Creator
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" /> 156
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" /> 42
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="rounded-full border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                >
                  Load More
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="newest" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for newest content */}
                <Card className="overflow-hidden rounded-xl border-emerald-100 transition-all hover:shadow-md">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img
                        src="/placeholder.svg?height=200&width=400"
                        alt="Vertical Garden Mural"
                        className="h-48 w-full object-cover"
                      />
                      <Badge className="absolute left-3 top-3 bg-blue-600 text-white">New</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="rounded-full border-emerald-200 bg-emerald-50 text-xs text-emerald-700"
                      >
                        Mural
                      </Badge>
                      <Badge
                        variant="outline"
                        className="rounded-full border-green-200 bg-green-50 text-xs text-green-700"
                      >
                        Garden
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Vertical Garden Mural</h3>
                    <p className="text-sm text-muted-foreground">Downtown District, Portland</p>
                    <div className="mt-2 flex items-center gap-1">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Artist"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">by GreenThumb</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" /> 87
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" /> 24
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nearby" className="mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Placeholder for nearby content */}
                <Card className="overflow-hidden rounded-xl border-emerald-100 transition-all hover:shadow-md">
                  <CardHeader className="p-0">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Upcycled Material Sculpture"
                      className="h-48 w-full object-cover"
                    />
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
                        className="rounded-full border-purple-200 bg-purple-50 text-xs text-purple-700"
                      >
                        Upcycled
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-emerald-800">Upcycled Material Sculpture</h3>
                    <p className="text-sm text-muted-foreground">Waterfront Park, Seattle</p>
                    <div className="mt-2 flex items-center gap-1">
                      <img
                        src="/placeholder.svg?height=24&width=24"
                        alt="Artist"
                        className="h-5 w-5 rounded-full object-cover"
                      />
                      <span className="text-xs text-muted-foreground">by RecycleArtist</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <ThumbsUp className="h-4 w-4" /> 112
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MessageSquare className="h-4 w-4" /> 29
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-900">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

export default Home
