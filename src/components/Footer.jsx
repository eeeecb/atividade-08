import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 p-4 text-center">
      <p className="text-sm text-gray-400">
        {new Date().getFullYear()} | Eduardo Barbosa - 2324290087
      </p>
    </footer>
  )
}