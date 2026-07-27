import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function generateCareerAdvice(userData) {
  const prompt = `
You are an expert career advisor.

Name: ${userData.name}
Education: ${userData.education}
Skills: ${userData.skills}
Interests: ${userData.interests}
Goals: ${userData.goals}

Give:
1. Best career roles
2. Skill gaps
3. Learning roadmap
`;

  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt,
  });

  return response.text;
}