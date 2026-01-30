import { Link } from "@tanstack/react-router";
import { TanStackStartCLI } from "./TanStackStartCLI";
import {
  Server,
  Smartphone,
  Layout,
  ChevronRight,
  FileCode,
  Globe,
  Sparkles,
  ArrowRightLeft,
} from "lucide-react";

export default function HomeComponent() {
  const sections = [
    {
      title: "Data Fetching",
      features: [
        {
          to: "/SSR",
          icon: <Server className="w-12 h-12 text-cyan-400" />,
          title: "SSR Preloading",
          description:
            "Data is prefetched on the server and injected into the initial HTML. Perfect for SEO and performance.",
          color: "border-cyan-500/50 hover:shadow-cyan-500/10",
        },
        {
          to: "/CSR",
          icon: <Smartphone className="w-12 h-12 text-yellow-400" />,
          title: "CSR Client-side",
          description:
            "Standard client-side fetching using TanStack Query hooks. Features loading states and caching.",
          color: "border-yellow-500/50 hover:shadow-yellow-500/10",
        },
      ],
    },
    {
      title: "Layouts & Architecture",
      features: [
        {
          to: "/outlet",
          icon: <Layout className="w-12 h-12 text-purple-400" />,
          title: "Outlet Layout",
          description:
            "Demonstrating nested routing with layout components that wrap child pages seamlessly.",
          color: "border-purple-500/50 hover:shadow-purple-500/10",
        },
        {
          to: "/outlet/child",
          icon: <ChevronRight className="w-12 h-12 text-pink-400" />,
          title: "Outlet Child",
          description:
            "A child route rendered within its parent's outlet, inheriting styles and context.",
          color: "border-pink-500/50 hover:shadow-pink-500/10",
        },
      ],
    },
    {
      title: "Routing Patterns",
      features: [
        {
          to: "/staticRoute",
          icon: <FileCode className="w-12 h-12 text-blue-400" />,
          title: "Static Index",
          description:
            "Simple file-based routing with index files acting as the root of a path group.",
          color: "border-blue-500/50 hover:shadow-blue-500/10",
        },
        {
          to: "/dynamic/123",
          icon: <Sparkles className="w-12 h-12 text-green-400" />,
          title: "Dynamic Route",
          description:
            "Access path parameters with full type safety using the useParams hook and route context.",
          color: "border-green-500/50 hover:shadow-green-500/10",
        },
        {
          to: "/rest/demo-path/second-path",
          icon: <Globe className="w-12 h-12 text-orange-400" />,
          title: "Catch-all Splat",
          description:
            "Handle nested paths of any depth using splat routes, ideal for CMS or dynamic hierarchies.",
          color: "border-orange-500/50 hover:shadow-orange-500/10",
        },
      ],
    },
    {
      title: "Resources",
      features: [
        {
          to: "/vs-next",
          icon: <ArrowRightLeft className="w-12 h-12 text-purple-400" />,
          title: "Compare Next.js",
          description:
            "A deep dive into the technical differences between Next.js and TanStack Start's architecture.",
          color: "border-purple-500/50 hover:shadow-purple-500/10",
        },
      ],
    },
  ];

  return (
    <div className="min-h-1 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 pb-20">
      <section className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <img
              src="/tanstack-circle-logo.png"
              alt="TanStack Logo"
              className="w-24 h-24 md:w-32 md:h-32"
            />
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-[-0.08em]">
              <span className="text-gray-300">TANSTACK</span>{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
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
npm run dev`}
            </pre>
          </div>
        </div>
      </section>

      <TanStackStartCLI />

      <section className="px-6 max-w-7xl mx-auto space-y-16">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest  bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                {section.title}
              </h2>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.to}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${feature.color}`}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                    Explore Demo <ChevronRight size={14} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
