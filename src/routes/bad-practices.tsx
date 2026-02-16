import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AlertCircle, Zap, Image as ImageIcon, MousePointerClick, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/bad-practices")({
  component: BadPractices,
});

function BadPractices() {
  const [showLateBanner, setShowLateBanner] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Intentionally late loading to cause CLS
    const timer = setTimeout(() => {
      setShowLateBanner(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const runHeavyTask = () => {
    setIsProcessing(true);
    // Blocking the main thread for about 1 second to tank FID/INP
    const start = Date.now();
    while (Date.now() - start < 1500) {
      // Intentional block
    }
    setIsProcessing(false);
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
              <Zap className="text-yellow-500" size={20} />
              <h2 className="font-bold">CLS: Layout Shift</h2>
            </div>
            <span className="text-[10px] px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-full font-mono">2.0s Delay</span>
          </div>
          
          <div className="p-6">
             {/* This banner will pop in and push the LCP image down, causing CLS */}
            {showLateBanner && (
              <div className="mb-4 p-4 bg-blue-600 rounded-xl animate-in fade-in duration-300">
                <p className="font-bold">🔥 Limited Offer!</p>
                <p className="text-sm opacity-90">Free shipping for only 3 more hours. Don't miss out!</p>
              </div>
            )}
            
            <p className="text-gray-400 text-sm mb-4">
              The content below will be shifted suddenly when the "Limited Offer" banner loads after 2 seconds without reserved space.
            </p>
            
            <Link 
              to="/good-practices"
              className="inline-flex items-center gap-2 text-xs text-yellow-500 hover:text-yellow-400 font-bold transition-colors"
            >
              Learn how to fix CLS <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* LCP Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
           <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <ImageIcon className="text-cyan-500" size={20} />
              <h2 className="font-bold">LCP: Massive Unoptimized Image</h2>
            </div>
          </div>
          <div className="p-0">
            {/* Massive unoptimized high-res image to tank LCP */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop" 
              alt="Massive space image" 
              className="w-full aspect-video object-cover"
              // Intentionally NOT using loading="lazy" or priority to make it even worse for LCP if it's above the fold
            />
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Loading a 4MB+ raw image as the main hero element in a mobile view will significantly degrade the Largest Contentful Paint.
              </p>
              
              <Link 
                to="/good-practices"
                className="inline-flex items-center gap-2 text-xs text-cyan-500 hover:text-cyan-400 font-bold transition-colors"
              >
                Learn how to fix LCP <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>

        {/* FID / INP Demonstration */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <MousePointerClick className="text-purple-500" size={20} />
              <h2 className="font-bold">FID/INP: Main Thread Blocking</h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 text-sm mb-6">
              Click the button below to trigger a 1.5s synchronous loop. The UI will freeze completely.
            </p>
            <button 
              onClick={runHeavyTask}
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${
                isProcessing 
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                  : "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/20"
              }`}
            >
              {isProcessing ? "THREAD BLOCKED..." : "RUN HEAVY TASK"}
            </button>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
               <Link 
                to="/good-practices"
                className="inline-flex items-center gap-2 text-xs text-purple-500 hover:text-purple-400 font-bold transition-colors"
              >
                Learn how to fix FID/INP <ArrowRight size={12} />
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
