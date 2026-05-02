"use client";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      className="absolute inset-0 w-full h-full object-cover opacity-40"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}