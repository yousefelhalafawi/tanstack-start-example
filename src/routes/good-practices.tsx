import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle2, Zap, Image as ImageIcon, MousePointerClick, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/good-practices")({
  component: GoodPractices,
});

function GoodPractices() {
  const [showLateBanner, setShowLateBanner] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Late loading, but we will have reserved space
    const timer = setTimeout(() => {
      setShowLateBanner(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Normal, responsive state update
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-md mx-auto flag-w-full space-y-8 py-10">
        <header className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-2xl mb-4 border border-green-500/20">
            <CheckCircle2 className="text-green-500" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Good CWV Practices</h1>
        </header>

        {/* CLS Fix Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="text-green-500" size={20} />
              <h2 className="font-bold">CLS: Reserved Space</h2>
            </div>
            <span className="text-[10px] px-2 py-1 bg-green-500/10 text-green-500 rounded-full font-mono">Zero Shift</span>
          </div>
          
          <div className="p-6">
            <div className="min-h-[84px] mb-4">
              {showLateBanner ? (
                <div className="p-4 bg-green-600 rounded-xl animate-in fade-in zoom-in duration-300">
                  <p className="font-bold">✅ Optimization Applied!</p>
                  <p className="text-sm opacity-90">Space was reserved, so nothing shifted.</p>
                </div>
              ) : (
                <div className="p-4 bg-gray-800/50 rounded-xl border border-dashed border-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 text-xs italic">Reserved space for banner...</p>
                </div>
              )}
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              By reserving space for the banner using a fixed height or skeleton, we avoid Cumulative Layout Shift (CLS) when it pops in.
            </p>

            <Link 
              to="/bad-practices"
              className="inline-flex items-center gap-2 text-xs text-green-500 hover:text-green-400 font-bold transition-colors"
            >
              <ArrowLeft size={12} /> Compare with broken CLS
            </Link>
          </div>
        </section>

        {/* LCP Fix Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
           <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <ImageIcon className="text-cyan-500" size={20} />
              <h2 className="font-bold">LCP: Optimized Image</h2>
            </div>
          </div>
          <div className="p-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=60&w=800&auto=format&fit=crop" 
              alt="Optimized space image" 
              className="w-full aspect-video object-cover"
              // @ts-ignore
              fetchPriority="high"
            />
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Using a correctly sized image (800px width instead of 3500px) and setting high fetch priority significantly improves Largest Contentful Paint.
              </p>

              <Link 
                to="/bad-practices"
                className="inline-flex items-center gap-2 text-xs text-cyan-500 hover:text-cyan-400 font-bold transition-colors"
              >
                <ArrowLeft size={12} /> Compare with heavy LCP
              </Link>
            </div>
          </div>
        </section>

        {/* / INP Demonstration: Responsive Search */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <MousePointerClick className="text-green-500" size={20} />
              <h2 className="font-bold">INP: Fluid Interaction</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-6">
              Try typing quickly in the box below. Typing is buttery smooth because the main thread is never blocked.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Type anything freely..."
                  className="w-full bg-gray-800 border-2 border-gray-700 rounded-xl px-4 py-4 text-white focus:border-green-500 outline-none transition-colors"
                />
                {searchQuery && (
                   <p className="mt-2 text-[10px] text-green-500 font-mono">
                     ✨ Main thread remains responsive
                   </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
               <Link 
                to="/bad-practices"
                className="inline-flex items-center gap-2 text-xs text-purple-500 hover:text-purple-400 font-bold transition-colors"
              >
                <ArrowLeft size={12} /> Compare with blocked INP
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
