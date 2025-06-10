import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateAnalysis(websiteData: {
  url: string;
  title: string;
  description: string;
  headings: string[];
}) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
    Analyze the following competitor website for SEO:

    Website URL: ${websiteData.url}
    Title: ${websiteData.title}
    Meta Description: ${websiteData.description}
    Headings: ${websiteData.headings.join(", ")}

    Provide:
    - Estimated Traffic
    - Top Keywords
    - SEO Score out of 100
    - Strengths
    - Weaknesses
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
