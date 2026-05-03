import { ai } from "@/lib/ai";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await ai.chat(body.message);

  return Response.json(response);
}
