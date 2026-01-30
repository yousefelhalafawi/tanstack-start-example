// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

// Create a new router instance
export const getRouter = (queryClient: QueryClient) => {
  const router = createRouter({
    routeTree,
    context: {
      queryClient,
    },

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
