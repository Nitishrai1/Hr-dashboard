"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

// Define the User type
interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  age: number
  department: string
  rating: number
  bookmarked?: boolean
}

// Define the state shape
interface AppState {
  bookmarkedUsers: User[]
  searchQuery: string
  filters: {
    department: string[]
    rating: number[]
  }
}

// Define action types for the reducer
type Action =
  | { type: "ADD_BOOKMARK"; payload: User }
  | { type: "REMOVE_BOOKMARK"; payload: number }
  | { type: "SET_SEARCH_QUERY"; payload: string }
  | { type: "SET_FILTERS"; payload: { department: string[]; rating: number[] } }
  | { type: "CLEAR_FILTERS" }

// Initial state
const initialState: AppState = {
  bookmarkedUsers: [],
  searchQuery: "",
  filters: {
    department: [],
    rating: [],
  },
}

// Reducer to handle state updates
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      if (state.bookmarkedUsers.some((user) => user.id === action.payload.id)) {
        return state // User already bookmarked
      }
      return {
        ...state,
        bookmarkedUsers: [...state.bookmarkedUsers, { ...action.payload, bookmarked: true }],
      }
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarkedUsers: state.bookmarkedUsers.filter((user) => user.id !== action.payload),
      }
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      }
    case "SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
      }
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: { department: [], rating: [] },
      }
    default:
      return state
  }
}

// Define the context type
interface AppContextType {
  state: AppState
  addBookmark: (user: User) => void
  removeBookmark: (userId: number) => void
  setSearchQuery: (query: string) => void
  setFilters: (filters: { department: string[]; rating: number[] }) => void
  clearFilters: () => void
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined)

// Create the provider component
interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const addBookmark = (user: User) => {
    dispatch({ type: "ADD_BOOKMARK", payload: user })
  }

  const removeBookmark = (userId: number) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: userId })
  }

  const setSearchQuery = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query })
  }

  const setFilters = (filters: { department: string[]; rating: number[] }) => {
    dispatch({ type: "SET_FILTERS", payload: filters })
  }

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addBookmark,
        removeBookmark,
        setSearchQuery,
        setFilters,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
