import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/outlet")({
  component: OutletLayout,
});

function OutletLayout() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] p-6">
      <div className="max-w-3xl mx-auto rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-xl">
        {/* VS Code header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="ml-3 text-sm text-gray-400 font-mono">
            src/routes/outlet/index.tsx
          </span>
        </div>

        <pre className="p-4 text-sm text-gray-200 font-mono leading-relaxed">
          {`// File path:
// src/routes/outlet/index.tsx

export const Route = createFileRoute('/outlet')({
  component: OutletLayout,
})

// URL:
// /outlet
// /outlet/child

// <Outlet /> = layout slot (like Next.js layout.tsx)
`}
        </pre>

        <div className="border-t border-[#3c3c3c] p-4 text-sm font-mono text-blue-400 bg-[#1e1e1e]">
          This file behaves like <b>Next.js layout.tsx</b>
          and wraps all routes under <code>/outlet/*</code>.
        </div>

        {/* 🔥 Outlet */}
        <div className="border-t border-dashed border-[#3c3c3c] p-4 bg-[#1e1e1e] text-gray-300 font-mono">
          &lt;Outlet /&gt; renders child routes HERE 👇
          <Outlet />
        </div>
      </div>
    </div>
  );
}
