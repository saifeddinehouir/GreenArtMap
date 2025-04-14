import type React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-emerald-50/50 p-4 text-center">
      <h1 className="text-9xl font-bold text-emerald-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-emerald-700">Page Not Found</h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
          <Link to="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
          <Link to="/gallery">Explore Gallery</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
