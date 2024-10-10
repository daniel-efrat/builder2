import { useState } from 'react'
import { Plus, Edit2, Copy, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function Dashboard() {
  const [pages, setPages] = useState([
    { id: 1, title: 'דף נחיתה 1', thumbnail: 'https://source.unsplash.com/random/800x600?website' },
    { id: 2, title: 'דף נחיתה 2', thumbnail: 'https://source.unsplash.com/random/800x600?landing' },
  ])

  const handleDelete = (id) => {
    setPages(pages.filter(page => page.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">לוח הבקרה שלי</h1>
      <Link href="/builder/new" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-6">
        <Plus className="w-5 h-5 mr-2" />
        צור דף נחיתה חדש
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <div key={page.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={page.thumbnail} alt={page.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <div className="flex justify-between">
                <Link href={`/builder/${page.id}`} className="text-blue-600 hover:text-blue-800">
                  <Edit2 className="w-5 h-5" />
                </Link>
                <button onClick={() => {/* Handle duplicate */}} className="text-green-600 hover:text-green-800">
                  <Copy className="w-5 h-5" />
                </button>
                <button onClick={() => handleDelete(page.id)} className="text-red-600 hover:text-red-800">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}