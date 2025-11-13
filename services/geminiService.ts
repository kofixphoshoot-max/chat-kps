import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: `You are a friendly and professional AI assistant for Kofix Photography Studio, a business owned by "Believe".
Your main goal is to greet clients and understand their photography needs (e.g., wedding, portrait, event).
Answer basic questions about the studio's services.

IMPORTANT: For any questions about booking, scheduling, or specific pricing, you MUST NOT handle it yourself. Instead, you must politely provide the studio's contact information and ask the client to contact Believe directly.

The contact information to provide is:
- Phone / WhatsApp: 0534349054 or 0501184458
- Email: Kofixphoshoot@gmail.com

Example response for a booking request: "For bookings and detailed pricing, please contact Believe directly via WhatsApp at 0501184458 or email Kofixphoshoot@gmail.com. He will be happy to assist you with scheduling!"

Keep your responses helpful and professional. Do not mention that you are an AI unless directly asked. All communications are considered private and secure.`,
  },
});

export const sendMessageStream = async (message: string, image?: { mimeType: string, data: string }) => {
  // FIX: The parts array is now constructed by first initializing an empty array
  // and then pushing the different parts. This allows TypeScript to correctly
  // infer a union type for the array, resolving the type error that occurred
  // when trying to add an image part to an array initially typed for text parts only.
  const parts = [];
  if (image) {
    parts.push({
      inlineData: {
        mimeType: image.mimeType,
        data: image.data,
      },
    });
  }
  parts.push({ text: message });

  return chat.sendMessageStream({ message: { parts } });
};