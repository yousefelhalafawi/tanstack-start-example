import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/outlet/child")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4 mt-4 rounded bg-[#1e1e1e] text-green-400 font-mono">
      Hello from <b>/outlet/child</b> 👋
    </div>
  );
}
