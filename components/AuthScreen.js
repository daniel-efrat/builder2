import { useState, useEffect } from 'react'
import { Mail, Lock, User } from 'lucide-react'

export default function AuthScreen({ onAuthenticate }) {
  const [isLogin, setIsLogin] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the authentication logic
    onAuthenticate()
  }

  if (!isClient) {
    return null // or a loading indicator
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-right bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center">{isLogin ? 'התחברות' : 'הרשמה'}</h3>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mt-4">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400" />
                <input type="text" placeholder="שם מלא" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
            </div>
          )}
          <div className="mt-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400" />
              <input type="email" placeholder="אימייל" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <Lock className="w-5 h-5 text-gray-400" />
              <input type="password" placeholder="סיסמה" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
              {isLogin ? 'התחברות' : 'הרשמה'}
            </button>
            <a href="#" className="text-sm text-blue-600 hover:underline" onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); }}>
              {isLogin ? 'צור חשבון' : 'יש לך כבר חשבון?'}
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}