import { createFileRoute } from "@tanstack/react-router";
import { 
  Zap, 
  ShieldCheck, 
  ArrowRightLeft, 
  Cpu, 
  Box, 
  Layers, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export const Route = createFileRoute("/vs-next")({
  component: VSNextComponent,
});

function VSNextComponent() {
  const comparisonPoints = [
    {
      title: "Type Safety",
      nextjs: "Incremental/Eventual safety. Many types are broad or require manual definition (e.g., searchParams).",
      tanstack: "100% inference-based type safety. Routes, params, and data are strictly typed from the start.",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Data Fetching",
      nextjs: "Server Components (RSC) + native fetch. Relies on server-side memoization and deduping.",
      tanstack: "TanStack Query + Server Functions. Full client-side state management with server-side prefetching.",
      icon: <ArrowRightLeft className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Routing Philosophy",
      nextjs: "Server-centric (App Router). Client components are 'leaves' of the server tree.",
      tanstack: "Client-capable power. Full control over client-side layout, state, and transitions.",
      icon: <Layers className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Modularity",
      nextjs: "Highly integrated and opinionated framework. Hard to swap pieces out.",
      tanstack: "Modular and explicit. Use only what you need (Router, Query, Form, Table).",
      icon: <Box className="w-6 h-6 text-green-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white pb-20">
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} /> Technical Breakdown
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Next.js <span className="text-slate-500 italic font-light">vs</span> <span className="text-cyan-400">TanStack Start</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            While both frameworks occupy the React meta-framework space, their philosophies and architectural choices differ significantly.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          {comparisonPoints.map((point, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all"
            >
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-700/50">
                <div className="p-8 md:w-1/4 bg-slate-800/20 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 p-3 rounded-xl bg-slate-900/50 border border-slate-700 shadow-inner">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold">{point.title}</h3>
                </div>
                
                <div className="p-8 md:w-3/8 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-tighter">
                    <AlertCircle size={12} className="text-slate-600" /> Next.js Approach
                  </div>
                  <p className="text-slate-300 leading-relaxed font-light italic">
                    {point.nextjs}
                  </p>
                </div>

                <div className="p-8 md:w-3/8 flex flex-col gap-4 bg-cyan-950/10 relative">
                  <div className="absolute top-0 right-0 p-2">
                    <CheckCircle2 size={16} className="text-cyan-500/50" />
                  </div>
                  <div className="flex items-center gap-2 text-cyan-500 text-xs font-bold uppercase tracking-tighter">
                    <Cpu size={12} /> TanStack Edge
                  </div>
                  <p className="text-cyan-50/90 leading-relaxed font-medium">
                    {point.tanstack}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/10 text-center">
          <h2 className="text-3xl font-bold mb-4">The Conclusion</h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            TanStack Start isn't trying to be "another Next.js". It's a return to client-side power with modern server-side capabilities, 
            prioritizing **Type Safety** and **state management** over opaque framework magic.
          </p>
        </section>
      </div>
    </div>
  );
}
