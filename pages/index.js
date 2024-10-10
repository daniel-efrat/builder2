import { useState, useEffect } from 'react'
import AuthScreen from '../components/AuthScreen'
import Dashboard from '../components/Dashboard'

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="min-h-screen bg-gray-100"></div> // or a loading indicator
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <AuthScreen onAuthenticate={() => setIsAuthenticated(true)} />
      )}
    </div>
  )
}