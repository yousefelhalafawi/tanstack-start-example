import HomeComponent from "@/components/HomeComponent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <HomeComponent />;
}
