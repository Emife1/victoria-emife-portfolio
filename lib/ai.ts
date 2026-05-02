import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askAI(prompt, context) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      { role: 'system', content: 'You are Victoria Emife's AI career assistant.' },
      { role: 'user', content: `${context}\n\n${prompt}` }
    ],
  });

  return response.choices[0].message.content;
}