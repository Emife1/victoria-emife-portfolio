export async function generateAIResponse(message: string) {
  return {
    reply: `AI Assistant: ${message}`,
  };
}
