import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AlertCircle, Zap, Image as ImageIcon, MousePointerClick, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/bad-practices")({
  component: BadPractices,
});

function BadPractices() {
  const [showLateBanner, setShowLateBanner] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Intentionally late loading to cause CLS
    const timer = setTimeout(() => {
      setShowLateBanner(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value); 
    
    // INTENTIONAL BAD PRACTICE:
    // Blocking the main thread for 150ms on EVERY keystroke.
    // This makes the input feel "heavy" and disconnected.
    const start = Date.now();
    while (Date.now() - start < 150) {
      // Blocking the paint of the new character
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-md mx-auto w-full space-y-8 py-10">
        <header className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 bg-red-500/10 rounded-2xl mb-4 border border-red-500/20">
            <AlertCircle className="text-red-500" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Bad CWV Practices</h1>
        </header>

        {/* CLS Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="text-red-500" size={20} />
              <h2 className="font-bold">CLS: Late Loading Content</h2>
            </div>
          </div>
          <div className="p-6">
            {showLateBanner && (
              <div className="p-4 bg-red-600 rounded-xl mb-4 animate-in fade-in slide-in-from-top-4 duration-500">
                <p className="font-bold">⚠️ Layout Shift Occurred!</p>
                <p className="text-sm opacity-90">This content popped in and pushed everything down.</p>
              </div>
            )}
            <p className="text-gray-400 text-sm mb-4">
              Refresh the page to see how the banner above shifts the page content down when it loads after 2 seconds.
            </p>
            <Link 
              to="/good-practices"
              className="inline-flex items-center gap-2 text-xs text-red-500 hover:text-red-400 font-bold transition-colors"
            >
              Learn how to fix CLS <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* LCP Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
           <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <ImageIcon className="text-orange-500" size={20} />
              <h2 className="font-bold">LCP: Unoptimized Image</h2>
            </div>
          </div>
          <div className="p-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=3500&auto=format&fit=crop" 
              alt="Heavy space image" 
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                This image is way too large (3500px wide) and unoptimized, causing a very slow Largest Contentful Paint (LCP).
              </p>
              <Link 
                to="/good-practices"
                className="inline-flex items-center gap-2 text-xs text-orange-500 hover:text-orange-400 font-bold transition-colors"
              >
                Learn how to fix LCP <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* / INP Demonstration: Laggy Search */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <MousePointerClick className="text-purple-500" size={20} />
              <h2 className="font-bold">INP: Laggy Interaction</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-6">
              Try typing quickly in the box below. Notice how the characters "stick" and don't appear instantly because each keystroke blocks the main thread.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Type 'Ramadan Kareem' quickly..."
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:border-red-500 outline-none transition-colors"
                />
                {searchQuery && (
                   <p className="mt-2 text-[10px] text-red-500 font-mono animate-pulse">
                     ⚠️ Main thread blocked per keystroke
                   </p>
                )}
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
               <Link 
                to="/good-practices"
                className="inline-flex items-center gap-2 text-xs text-purple-500 hover:text-purple-400 font-bold transition-colors"
              >
                Learn how to fix INP <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        <footer className="text-center pt-4 pb-10">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            Experimental Performance Lab
          </p>
        </footer>
      </div>
    </div>
  );
}
