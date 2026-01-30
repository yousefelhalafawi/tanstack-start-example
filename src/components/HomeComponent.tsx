import { TanStackStartCLI } from "./TanStackStartCLI";
import {
  Zap,
  Server,
  Route as RouteIcon,
  Shield,
  Waves,
  Sparkles,
} from "lucide-react";
export default function HomeComponent() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Powerful Server Functions",
      description:
        "Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple.",
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: "Flexible Server Side Rendering",
      description:
        "Full-document SSR, streaming, and progressive enhancement out of the box. Control exactly what renders where.",
    },
    {
      icon: <RouteIcon className="w-12 h-12 text-cyan-400" />,
      title: "API Routes",
      description:
        "Build type-safe API endpoints alongside your application. No separate backend needed.",
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Strongly Typed Everything",
      description:
        "End-to-end type safety from server to client. Catch errors before they reach production.",
    },
    {
      icon: <Waves className="w-12 h-12 text-cyan-400" />,
      title: "Full Streaming Support",
      description:
        "Stream data from server to client progressively. Perfect for AI applications and real-time updates.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
      title: "Next Generation Ready",
      description:
        "Built from the ground up for modern web applications. Deploy anywhere JavaScript runs.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-6xl md:text-7xl font-black text-white [letter-spacing:-0.08em]">
              <span className="text-gray-300">TANSTACK</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                START
              </span>
            </h1>
          </div>

          {/* Brief description */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            A type-safe full-stack React framework built on TanStack Router
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            TanStack Start combines file-based routing, server functions,
            streaming SSR, and end-to-end type safety into a single modern
            framework.
            <br />
            <span className="text-cyan-400 border-l-4 border-cyan-400 pl-2 font-bold">
              by - Yousef Elhalafawy
            </span>
          </p>

          {/* Install block (VS Code / terminal style) */}
          <div className="mx-auto max-w-3xl text-left rounded-xl bg-[#252526] border border-[#3c3c3c] shadow-xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-sm text-gray-400 font-mono">
                Terminal
              </span>
            </div>

            {/* Terminal content */}
            <pre className="p-4 text-sm font-mono text-gray-200 leading-relaxed overflow-x-auto">
              {`# Create a new TanStack Start project
    npm create @tanstack/start@latest
    
    # or using the official CLI
    npx @tanstack/cli create
    
    # Move into your project
    cd my-tanstack-start-app
    
    # Start development server
    npm run dev
    `}
            </pre>
          </div>
        </div>
      </section>

      <TanStackStartCLI />
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
