// User related types
export interface User {
    id: number
    username: string
    email: string
    fullName: string
    location: string
    bio: string
    profileImage: string
    joinDate: string
  }
  
  // Art installation related types
  export interface ArtInstallation {
    id: number
    title: string
    description: string
    location: string
    coordinates: {
      latitude: number
      longitude: number
    }
    images: string[]
    artist: User
    createdAt: string
    tags: string[]
    votes: number
    comments: number
    type: "Sculpture" | "Mural" | "Installation" | "Garden" | "Other"
  }
  
  // Comment related types
  export interface Comment {
    id: number
    content: string
    user: User
    createdAt: string
    artInstallationId: number
  }
  
  // Event related types
  export interface Event {
    id: number
    title: string
    description: string
    location: string
    date: string
    organizer: User
    attendees: number
    image: string
  }
  
  // Organization related types
  export interface Organization {
    id: number
    name: string
    description: string
    location: string
    website: string
    logo: string
  }
  
  // Authentication related types
  export interface LoginRequest {
    username: string
    password: string
  }
  
  export interface RegisterRequest {
    username: string
    email: string
    password: string
    fullName: string
  }
  
  export interface AuthResponse {
    token: string
    user: User
  }
  