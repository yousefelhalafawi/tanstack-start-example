import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  // ⬇️ This line extracts the dynamic URL segment
  const { id } = Route.useParams();

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-lg bg-[#252526] border border-[#3c3c3c] shadow-xl">
        {/* Editor header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-[#3c3c3c]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-sm text-gray-400 font-mono">
            src/routes/dynamic/$id.tsx
          </span>
        </div>

        {/* Code block */}
        <pre className="p-4 text-sm text-gray-200 font-mono overflow-x-auto leading-relaxed">
          <code>
            {`// File path:
// src/routes/dynamic/$id.tsx

export const Route = createFileRoute('/dynamic/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  // Extract dynamic param from URL
  const { id } = Route.useParams()

  return (
    <div>Hello "/dynamic/${id}"</div>
  )
}
`}
          </code>
        </pre>

        {/* Runtime output */}
        <div className="border-t border-[#3c3c3c] px-4 py-3 text-sm font-mono text-emerald-400 bg-[#1e1e1e]">
          Runtime value → id = "{id}"
        </div>
      </div>
    </div>
  );
}
