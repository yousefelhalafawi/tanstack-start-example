import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productsQueryOptions } from "@/api/products";

export const Route = createFileRoute("/SSR/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(productsQueryOptions()),
  component: SSRComponent,
});

function SSRComponent() {
  const productsQuery = useSuspenseQuery(productsQueryOptions());
  const products = productsQuery.data;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400">
            SSR Data Fetching
          </h1>
          <p className="text-gray-400 mt-2">
            This data was prefetched on the server. If you "View Source", you'll
            see the product titles in the initial HTML.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all group"
            >
              <div className="h-48 overflow-hidden bg-white">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <span className="bg-cyan-900 text-cyan-300 px-2 py-1 rounded text-sm font-semibold">
                    ${product.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
