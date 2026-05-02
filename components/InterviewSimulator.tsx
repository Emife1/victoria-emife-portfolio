"use client";

import { useState } from "react";

export default function InterviewSimulator() {
  const [score] = useState(87);

  return (
    <section className="p-12 bg-black text-white">
      <h2 className="text-2xl font-semibold mb-4">AI Interview Simulator</h2>
      <p className="opacity-70">Multi-agent evaluation score: {score}</p>
    </section>
  );
}