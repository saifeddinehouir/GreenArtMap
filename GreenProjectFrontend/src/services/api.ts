import axios from "axios"

// Create an axios instance with default config
const api = axios.create({
  baseURL:"http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor for authentication if needed
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (401, 403, etc.)
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized (e.g., redirect to login)
        localStorage.removeItem("token")
        window.location.href = "/login"
      }
    }
    return Promise.reject(error)
  },
)

export default api
