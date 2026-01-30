import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { productsQueryOptions } from "@/api/products";

export const Route = createFileRoute("/CSR/")({
  component: CSRComponent,
});

function CSRComponent() {
  const { data: products, isLoading, error } = useQuery(productsQueryOptions());

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
        <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mb-4" />
        <p className="text-xl font-medium animate-pulse">
          Loading products on the client...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-red-400">
        <p className="text-xl font-medium">Error: {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-yellow-400">
            CSR Data Fetching
          </h1>
          <p className="text-gray-400 mt-2">
            This data is fetched <strong>after</strong> the component mounts on
            the client. You should have seen a loading spinner briefly. If you
            "View Source", you won't see the product data in the initial HTML.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all group"
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
                  <span className="bg-yellow-900 text-yellow-300 px-2 py-1 rounded text-sm font-semibold">
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
