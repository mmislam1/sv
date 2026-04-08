"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

// ── Static data ─────────────────────────────────────────────────────────────
// Replace `image` paths with your actual assets (e.g. from /public or a CDN).
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Mint Flavor Chocolate",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-mint-green.jpg",
    bgColor: "#4ade80",      // green-400
  },
  {
    id: 2,
    name: "Mint Flavor Chocolate",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-mint-light.jpg",
    bgColor: "#86efac",      // green-300
  },
  {
    id: 3,
    name: "Dark Chocolate Bits",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-dark-peach.jpg",
    bgColor: "#fca5a5",      // red-300 / peach
  },
  {
    id: 4,
    name: "Orange Milk Chocolate",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-orange.jpg",
    bgColor: "#fbbf24",      // amber-400
  },
  {
    id: 5,
    name: "Mint Dark Chocolate",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-mint-bar.jpg",
    bgColor: "#a3e4b0",      // sage green
  },
  {
    id: 6,
    name: "White Almond Chocolate",
    price: 399,
    currency: "₹",
    rating: 4.5,
    image: "/images/choc-white.jpg",
    bgColor: "#fef3c7",      // amber-100 / cream
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function ProductsSection() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    // TODO: wire up to your cart store / context / API
    console.log("Added to cart:", product.name);
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12">
      {/* ── Section header ── */}
      <div className="flex items-start justify-between mb-6 sm:mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
            Our Products
          </h2>
          <p className="mt-1 text-sm sm:text-base text-gray-500">
            Fuel Your Workouts with Protein-Packed Nutrition
          </p>
        </div>

        {/* Decorative arrow cluster (matches screenshot's top-right graphic) */}
        <div className="hidden sm:flex items-center gap-1 opacity-30 pt-1" aria-hidden="true">
          {["▲", "▲", "▲"].map((a, i) => (
            <span key={i} className="text-gray-400 text-xs rotate-90 select-none">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* ── Product grid ── */}
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* Optional: cart badge for quick feedback */}
      {cart.length > 0 && (
        <p className="mt-6 text-center text-sm text-gray-500">
          🛒 {cart.length} item{cart.length > 1 ? "s" : ""} added to cart
        </p>
      )}
    </section>
  );
}
