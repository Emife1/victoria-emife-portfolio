"use client";

import { useState } from "react";

export default function AIChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-[#111] text-white p-4 rounded-xl">
      <div className="h-64 overflow-y-auto text-sm space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left opacity-80"}>
            {m.content}
          </div>
        ))}
      </div>

      <input
        className="w-full mt-2 p-2 bg-black border border-gray-700"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about Victoria..."
      />

      <button className="mt-2 w-full bg-white text-black p-2" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}