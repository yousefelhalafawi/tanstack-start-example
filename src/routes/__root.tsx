import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "../components/Header";
import { NotFound } from "../components/NotFound";
import appCss from "../styles.css?url";

export interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TanStack start Demo| YE" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/YE_logo.png" },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => <NotFound />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { queryClient } = Route.useRouteContext();

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}
