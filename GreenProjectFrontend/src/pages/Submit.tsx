"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Upload, MapPin, User } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const Submit: React.FC = () => {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

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
              className="text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
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
        <div className="container py-8 max-w-3xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-emerald-800 mb-2">Submit Your Eco-Art</h1>
            <p className="text-muted-foreground">Share your eco-friendly art installation with the community</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter the title of your art installation" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your eco-art installation and the materials used"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="flex gap-2">
                    <Input id="location" placeholder="Enter the location" className="flex-1" />
                    <Button variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Or click the pin icon to use your current location</p>
                </div>

                <div className="space-y-2">
                  <Label>Upload Images</Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                      dragActive ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrag}
                  >
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Upload className="h-10 w-10 text-emerald-600" />
                      <p className="text-sm font-medium">Drag and drop your images here, or click to browse</p>
                      <p className="text-xs text-muted-foreground">Supports JPG, PNG, WEBP (max 5MB each)</p>
                      <Input type="file" className="hidden" id="file-upload" multiple accept="image/*" />
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => document.getElementById("file-upload")?.click()}
                        type="button"
                      >
                        Select Files
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Add tags separated by commas (e.g., sculpture, recycled, urban)" />
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Submit Art Installation</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Submit
