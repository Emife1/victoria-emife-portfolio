import { askAI } from '@/lib/ai';

export async function POST(req) {
  const { message } = await req.json();

  const context = 'Marketing strategist, brand growth, and operations expertise.';

  const reply = await askAI(message, context);

  return Response.json({ reply });
}