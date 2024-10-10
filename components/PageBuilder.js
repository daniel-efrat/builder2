import { useState } from 'react'
import { Save, Eye, Layout, Image, Type } from 'lucide-react'

export default function PageBuilder() {
  const [sections, setSections] = useState([])

  const addSection = (type) => {
    setSections([...sections, { type, content: '' }])
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">רכיבים</h2>
          <button onClick={() => addSection('hero')} className="block w-full text-right p-2 mb-2 bg-gray-200 rounded">
            <Layout className="inline-block mr-2" /> כותרת ראשית
          </button>
          <button onClick={() => addSection('text')} className="block w-full text-right p-2 mb-2 bg-gray-200 rounded">
            <Type className="inline-block mr-2" /> טקסט
          </button>
          <button onClick={() => addSection('image')} className="block w-full text-right p-2 mb-2 bg-gray-200 rounded">
            <Image className="inline-block mr-2" /> תמונה
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-lg p-6 min-h-full">
          {sections.map((section, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
              {section.type === 'hero' && <h1 className="text-4xl font-bold">כותרת ראשית</h1>}
              {section.type === 'text' && <p>הוסף טקסט כאן</p>}
              {section.type === 'image' && <div className="bg-gray-200 h-40 flex items-center justify-center">תמונה</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          <Save className="inline-block mr-2" /> שמור
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          <Eye className="inline-block mr-2" /> תצוגה מקדימה
        </button>
      </div>
    </div>
  )
}