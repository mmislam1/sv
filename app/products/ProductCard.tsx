import Image from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  rating: number;
  maxRating?: number;
  image: string;
  bgColor: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { name, price, currency, rating, maxRating = 5, image, bgColor } = product;

  const renderStars = (rating: number, max: number) => {
    return Array.from({ length: max }, (_, i) => {
      const filled = i < Math.floor(rating);
      const partial = !filled && i < rating;
      return (
        <span key={i} className="relative inline-block text-sm">
          <span className="text-gray-600">★</span>
          {(filled || partial) && (
            <span
              className="absolute inset-0 text-yellow-400 overflow-hidden"
              style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
            >
              ★
            </span>
          )}
        </span>
      );
    });
  };

  return (
    <article className="group relative bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image Container */}
      <div
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl m-3"
        style={{ backgroundColor: bgColor, width: "calc(100% - 1.5rem)" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Footer */}
      <div className="flex items-end justify-between px-4 pb-4 pt-2">
        <div className="flex flex-col gap-1">
          <p className="text-white font-semibold text-sm sm:text-base leading-tight line-clamp-1">
            {name}
          </p>
          <p className="text-white font-bold text-base sm:text-lg">
            {currency}
            {price.toFixed(2)}
          </p>
          <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of ${maxRating}`}>
            {renderStars(rating, maxRating)}
          </div>
        </div>

        <button
          onClick={() => onAddToCart?.(product)}
          aria-label={`Add ${name} to cart`}
          className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-emerald-500/40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </article>
  );
}
