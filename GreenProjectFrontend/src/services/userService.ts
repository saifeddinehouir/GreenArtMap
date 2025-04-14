import api from "./api"
import type { User, ArtInstallation, LoginRequest, RegisterRequest, AuthResponse } from "../models/types"

export const userService = {
  // Login user
  login: async (credentials: LoginRequest) => {
    const response = await api.post<AuthResponse>("/auth/login", credentials)
    // Store token in localStorage
    localStorage.setItem("token", response.data.token)
    return response.data
  },

  // Register new user
  register: async (userData: RegisterRequest) => {
    const response = await api.post<AuthResponse>("/auth/register", userData)
    // Store token in localStorage
    localStorage.setItem("token", response.data.token)
    return response.data
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("token")
  },

  // Get current user profile
  getCurrentUser: async () => {
    const response = await api.get<User>("/users/me")
    return response.data
  },

  // Get user by ID
  getUserById: async (id: number) => {
    const response = await api.get<User>(`/users/${id}`)
    return response.data
  },

  // Update user profile
  updateProfile: async (userData: FormData) => {
    const response = await api.put<User>("/users/me", userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  },

  // Get user's art submissions
  getUserSubmissions: async (userId: number) => {
    const response = await api.get<ArtInstallation[]>(`/users/${userId}/submissions`)
    return response.data
  },

  // Get user's saved art
  getSavedArt: async () => {
    const response = await api.get<ArtInstallation[]>("/users/me/saved")
    return response.data
  },

  // Save an art installation
  saveArt: async (artId: number) => {
    await api.post(`/users/me/saved/${artId}`)
  },

  // Unsave an art installation
  unsaveArt: async (artId: number) => {
    await api.delete(`/users/me/saved/${artId}`)
  },
}
