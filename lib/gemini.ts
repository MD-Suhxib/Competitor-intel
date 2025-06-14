import { GoogleGenerativeAI } from '@google/generative-ai'
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generateAnalysis(websiteURL: string) {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const prompt = `
You are an expert business analyst and SEO strategist.

Analyze the following competitor website **based only on its URL** and provide your best estimate and analysis. Use the following **EXACT JSON FORMAT** (VALID JSON ONLY — no comments, no explanations):

{
  "business_summary": "...",
  "unique_selling_points": ["..."],
  "product_breakdown": ["..."],
  "seo_analysis": {
    "estimated_traffic": "...",
    "top_keywords": ["..."],
    "seo_score": "...",
    "strengths": ["..."],
    "weaknesses": ["..."],
    "keyword_density": {
      "keyword1": "X%",
      "keyword2": "Y%",
      "keyword3": "Z%"
    },
    "meta_description": "...",
    "title_tag": "..."
  }
}

Analyze this website URL: ${websiteURL}

IMPORTANT: Return **pure JSON only**. No explanations. No markdown.
`

  const result = await model.generateContent(prompt)
  return result.response.text()
}
