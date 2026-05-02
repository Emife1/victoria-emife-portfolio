import { NextResponse } from "next/server";
import { generateAIResponse } from "@/lib/ai";

export async function POST(req: Request) {
  const { message } = await req.json();

  const result = await generateAIResponse(message);

  return NextResponse.json(result);
}