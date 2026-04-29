"use client";

import { useState } from "react";

export function ScreenshotImg({
  src,
  alt,
  fallbackText,
  className = "w-full h-auto",
  minHeight = "min-h-[200px]",
}: {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  minHeight?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-white/[0.03] border border-dashed border-white/10 rounded-xl text-white/30 text-sm ${minHeight}`}
      >
        {fallbackText}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}
