import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Menu,
  X,
  Server,
  Smartphone,
  Layout,
  ChevronRight,
  Hash,
  FileCode,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = ({
    to,
    label,
    icon: Icon,
    colorClass = "text-gray-300",
  }: any) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-all mb-1 group ${colorClass}`}
      activeProps={{
        className: `flex items-center gap-3 p-3 rounded-lg bg-gray-800 border-l-4 border-cyan-500 transition-all mb-1 ${colorClass}`,
      }}
    >
      <Icon size={18} className="group-hover:scale-110 transition-transform" />
      <span className="font-medium">{label}</span>
    </Link>
  );

  const SectionHeader = ({ label }: { label: string }) => (
    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 mb-2 px-3">
      {label}
    </div>
  );

  return (
    <>
      <header className="p-4 flex items-center bg-gray-900 border-b border-gray-800 text-white shadow-lg sticky top-0 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors border border-gray-700"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          <Link to="/">TanStack Start</Link>
        </h1>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-[#0d1117] text-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out flex flex-col border-r border-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-cyan-500 flex items-center justify-center font-bold">
              T
            </div>
            <h2 className="text-lg font-bold">Explorer</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <NavItem to="/" label="Dashboard" icon={Home} />

          <SectionHeader label="Data Fetching" />
          <NavItem
            to="/SSR"
            label="SSR Preloading"
            icon={Server}
            colorClass="text-cyan-400"
          />
          <NavItem
            to="/CSR"
            label="CSR Client-side"
            icon={Smartphone}
            colorClass="text-yellow-400"
          />

          <SectionHeader label="Layouts & Outlets" />
          <NavItem to="/outlet" label="Outlet Layout" icon={Layout} />
          <NavItem
            to="/outlet/child"
            label="Outlet Child"
            icon={ChevronRight}
          />

          <SectionHeader label="Routing Patterns" />
          <NavItem to="/staticRoute" label="Static Index" icon={FileCode} />
          <NavItem to="/staticRoute/child" label="Static Child" icon={Hash} />
          <NavItem to="/dynamic/123" label="Dynamic Route" icon={Sparkles} />
          <NavItem
            to="/rest/demo-path/second-path"
            label="Catch-all Splat"
            icon={Globe}
          />
        </nav>

        <div className="p-4 border-t border-gray-800 text-[10px] text-gray-500 flex justify-between uppercase tracking-tighter">
          <span>v1.132.0</span>
          <span>TanStack SDK</span>
        </div>
      </aside>
    </>
  );
}
