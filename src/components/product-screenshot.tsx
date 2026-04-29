"use client";

import { useState } from "react";

export function ProductScreenshot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`${className} bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center min-h-[300px]`}>
        <span className="text-white/30 text-sm">产品演示图加载中...</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => { setIsLoading(false); setHasError(true); }}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
      />
    </div>
  );
}
