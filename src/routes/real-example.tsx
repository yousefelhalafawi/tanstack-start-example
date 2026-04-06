import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ShoppingCart, Star, Shield, Truck } from "lucide-react";

export const Route = createFileRoute("/real-example")({
  component: RealExample,
});

function RealExample() {
  // ❌ BAD CLS: promo banner loads late with no reserved space
  const [showPromoBanner, setShowPromoBanner] = useState(false);
  // ❌ BAD CLS: product recommendations load late
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // ❌ BAD CLS: banner appears after 2s and pushes content down
    const bannerTimer = setTimeout(() => setShowPromoBanner(true), 2000);
    // ❌ BAD CLS: "You might also like" loads after 3s and pushes content
    const recTimer = setTimeout(() => setShowRecommendations(true), 3000);
    return () => {
      clearTimeout(bannerTimer);
      clearTimeout(recTimer);
    };
  }, []);

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;

  // simulate heavy CPU work
  const arr = new Array(50_000_000).fill(0).map((_, i) => i * Math.random());

  setSearchQuery(value);
};

  const handleAddToCart = () => {
    // ❌ BAD INP: button click blocks the thread for 500ms before responding
    const start = Date.now();
    while (Date.now() - start < 500) {
      // intentional busy-wait — simulates heavy cart calculation
    }
    setAddedToCart(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ❌ BAD CLS: Late-loading promo banner — no reserved space */}
      {showPromoBanner && (
        <div className="bg-red-600 text-white text-center py-3 text-sm font-medium animate-in slide-in-from-top duration-300">
          🔥 Flash Sale! Use code <strong>SAVE20</strong> for 20% off — ends tonight!
          <button className="ml-4 underline text-xs opacity-80">Dismiss</button>
        </div>
      )}

      {/* Nav */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-lg">
        <span className="text-xl font-extrabold tracking-tight">⚡ ShopFast</span>
        <div className="flex items-center gap-3">
          {/* ❌ BAD INP: search blocks thread per keystroke */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products..."
            className="hidden md:block bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 outline-none focus:border-red-500 transition-colors w-56"
          />
          <ShoppingCart size={22} />
        </div>
      </nav>

      {/* Hero — ❌ BAD LCP: full-res 3500px image, no fetchpriority */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=100&w=3500&auto=format&fit=crop"
          alt="Hero product shot"
          className="w-full h-[420px] object-cover"
          // ❌ BAD LCP: no fetchPriority="high", enormous resolution
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
            The Future of<br />Urban Sneakers
          </h1>
          <p className="text-gray-300 mt-3 max-w-md text-sm md:text-base">
            Engineered for performance. Crafted for style. Available now.
          </p>
          <button
            onClick={handleAddToCart}
            className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all w-fit ${
              addedToCart
                ? "bg-green-500 text-white"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            {addedToCart ? "✓ Added to Cart!" : (
              <>
                Shop Now <ArrowRight size={16} />
              </>
            )}
          </button>
          {/* ❌ hint for the user */}
          <p className="mt-3 text-[11px] text-red-300 font-mono">
            ⚠️ Click "Shop Now" — notice the 500ms lag (INP issue)
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 items-center justify-center text-sm text-gray-600">
          <span className="flex items-center gap-2"><Shield size={16} className="text-green-500" /> Secure Checkout</span>
          <span className="flex items-center gap-2"><Truck size={16} className="text-blue-500" /> Free Shipping on $50+</span>
          <span className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 4.9 ★ from 12,000+ reviews</span>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>

        {/* ❌ BAD CLS: "You might also like" injects above grid after 3s */}
        {showRecommendations && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-800 animate-in fade-in slide-in-from-top duration-500">
            <p className="font-bold mb-1">✨ Recommended for You</p>
            <p>Based on trending items this week — these just dropped! Don't miss out.</p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* ❌ BAD LCP: each card image is also full-res */}
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-sm">{p.name}</p>
                <p className="text-gray-500 text-xs mt-1">{p.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold text-gray-900">${p.price}</span>
                  <button
                    onClick={handleAddToCart}
                    className="text-xs bg-gray-900 text-white px-3 py-1.5 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile search — visible on small screens, also has INP issue */}
      <section className="md:hidden px-6 pb-6">
        <p className="text-xs text-gray-500 mb-2 font-medium">Search (try typing fast 👇)</p>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="e.g. Running shoes..."
          className="w-full border-2 border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-red-500 transition-colors"
        />
        {searchQuery && (
          <p className="mt-2 text-[10px] text-red-500 font-mono animate-pulse">
            ⚠️ Main thread blocked 200ms per keystroke (INP issue)
          </p>
        )}
      </section>

      {/* CWV badge summary */}
      <section className="bg-gray-950 text-white px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-mono">Issues on this page</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-red-900/30 border border-red-800 rounded-xl p-4">
              <p className="text-red-400 font-mono font-bold text-lg">LCP</p>
              <p className="text-gray-400 text-xs mt-1">3500px hero image, no fetchpriority</p>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-xl p-4">
              <p className="text-red-400 font-mono font-bold text-lg">INP</p>
              <p className="text-gray-400 text-xs mt-1">200–500ms main thread block per interaction</p>
            </div>
            <div className="bg-red-900/30 border border-red-800 rounded-xl p-4">
              <p className="text-red-400 font-mono font-bold text-lg">CLS</p>
              <p className="text-gray-400 text-xs mt-1">Promo banner + recommendations shift layout</p>
            </div>
          </div>
          <div className="mt-6 flex gap-4 justify-center text-sm">
            <Link to="/bad-practices" className="text-red-400 hover:underline">← Isolated demos</Link>
            <Link to="/good-practices" className="text-green-400 hover:underline">See the fixed version →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const PRODUCTS = [
  {
    id: 1,
    name: "AirRun Pro X",
    category: "Running",
    price: "129",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=100&w=3500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Urban Drift Low",
    category: "Lifestyle",
    price: "99",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=100&w=3500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "TrailBlazer GTX",
    category: "Hiking",
    price: "159",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=100&w=3500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "CloudWalk Slip",
    category: "Casual",
    price: "79",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=100&w=3500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "SprintEdge Elite",
    category: "Track",
    price: "189",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=100&w=3500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "StealthFit 2.0",
    category: "Training",
    price: "119",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=100&w=3500&auto=format&fit=crop",
  },
];
