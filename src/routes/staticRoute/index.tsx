import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/staticRoute/")({
  component: StaticRoute,
});

function StaticRoute() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-xl">
        {/* VS Code header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-sm text-gray-400 font-mono">
            src/routes/staticRoute/index.tsx
          </span>
        </div>

        {/* Code */}
        <pre className="p-4 text-sm text-gray-200 font-mono leading-relaxed">
          {`// File path:
// src/routes/staticRoute/index.tsx

export const Route = createFileRoute('/staticRoute')({
  component: StaticRoute,
})

// URL:
// /staticRoute

// No <Outlet /> here
// This page is fully standalone
`}
        </pre>

        {/* Explanation */}
        <div className="border-t border-[#3c3c3c] px-4 py-3 text-sm font-mono text-yellow-400 bg-[#1e1e1e]">
          Explanation: This route does NOT render &lt;Outlet /&gt;, so it does
          NOT render child routes.
        </div>
      </div>
    </div>
  );
}
