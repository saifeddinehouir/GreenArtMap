"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { User } from "../models/types"
import { userService } from "../services/userService"

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string, fullName: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on component mount
    const checkAuthStatus = async () => {
      try {
        if (localStorage.getItem("token")) {
          const userData = await userService.getCurrentUser()
          setUser(userData)
        }
      } catch (error) {
        // If token is invalid, clear it
        localStorage.removeItem("token")
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  const login = async (username: string, password: string) => {
    setLoading(true)
    try {
      const response = await userService.login({ username, password })
      setUser(response.user)
    } finally {
      setLoading(false)
    }
  }

  const register = async (username: string, email: string, password: string, fullName: string) => {
    setLoading(true)
    try {
      const response = await userService.register({ username, email, password, fullName })
      setUser(response.user)
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    userService.logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
