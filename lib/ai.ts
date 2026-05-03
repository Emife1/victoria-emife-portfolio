export const generateAIResponse = async (message: string) => {
  return {
    reply: "AI module placeholder response",
    input: message
  };
};

export const ai = {
  chat: async (input: string) => {
    return {
      reply: "AI module placeholder response",
      input
    };
  }
};