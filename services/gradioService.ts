import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from '../types';
import { systemInstruction as baseSystemInstruction } from '../prompts/systemInstruction';
import { mattLevineContext } from '../context/mattLevine';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

// Replace the placeholder with the actual context
const systemInstruction = baseSystemInstruction.replace('{{MATT_CONTEXT}}', mattLevineContext);

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: systemInstruction,
  },
});

export const runChat = async (history: ChatMessage[]): Promise<string> => {
  // We will manage history manually for this simple use case. Let's send the last message.
  const lastMessage = history[history.length - 1];
  if (lastMessage.role !== 'user') {
    return "I'm sorry, I can only respond to user messages.";
  }
  
  try {
    const result = await chat.sendMessage({ message: lastMessage.parts[0].text });
    return result.text;
  } catch (error) {
    console.error("Error in runChat:", error);
    return "An error occurred while processing your request.";
  }
};
