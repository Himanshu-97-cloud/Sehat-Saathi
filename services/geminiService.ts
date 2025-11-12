
import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

export async function getHealthTip(topic: string, language: string = 'English'): Promise<string> {
  if (!ai) {
    return new Promise(resolve => setTimeout(() => resolve(`This is a mock health tip about ${topic}. Always consult a doctor for medical advice.`), 1000));
  }
  
  try {
    const prompt = `You are a helpful assistant for rural healthcare. Provide a simple, easy-to-understand health tip for a villager in India about "${topic}". The response should be in ${language}. Keep it under 60 words, use very simple language, and format it clearly.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating health tip:", error);
    return "Sorry, I couldn't get a health tip right now. Please try again later.";
  }
}

export function startHealthChat(language: string): Chat | null {
  if (!ai) {
    return null;
  }
  const systemInstruction = `You are 'Asha', a friendly and compassionate AI health assistant for villagers in rural areas. 
- Your goal is to provide simple, clear, and safe health information.
- You must speak in very simple language, like you're talking to someone with limited medical knowledge.
- You must NOT provide a medical diagnosis or prescribe medicine.
- For any serious symptom or query, you MUST strongly advise the user to consult a real doctor through the app's Tele-Consult feature or visit a nearby clinic.
- You can provide information on hygiene, nutrition, first-aid for minor issues, maternal care, and child health.
- Keep your answers short and easy to understand. Use bullet points or numbered lists if it helps.
- You must respond ONLY in the ${language} language.`;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction,
    },
  });
}

export async function getGovtSchemes(language: string): Promise<string> {
  if (!ai) {
    return Promise.resolve(`- Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP)\n- Rashtriya Arogya Nidhi (RAN)\n\nThis is mock data. Connect Gemini API to see real info.`);
  }

  try {
    const prompt = `You are a helpful assistant for rural healthcare in India. 
    Provide a simple, easy-to-understand list of 2-3 major Indian government schemes that provide free or subsidized medicines to citizens.
    For each scheme, provide a one-sentence description of who it's for.
    The entire response must be in the ${language} language.
    Use bullet points. Do not use markdown formatting like bold or italics.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating govt schemes info:", error);
    return `Sorry, I couldn't get information on government schemes right now. Please try again later. (Error in ${language})`;
  }
}
