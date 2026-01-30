import { Link } from '@tanstack/react-router'
import { FileQuestion, MoveLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <FileQuestion className="w-24 h-24 text-cyan-400 relative z-10 animate-bounce" />
      </div>
      
      <h1 className="text-6xl font-black text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        Oops! It seems like you've wandered into the digital void. The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg transition-all border border-slate-700 hover:border-cyan-500/50 shadow-xl"
      >
        <MoveLeft className="w-5 h-5" />
        Back to Safety (Home)
      </Link>
    </div>
  )
}
