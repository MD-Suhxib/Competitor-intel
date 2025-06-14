import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "Missing URL parameter" }, { status: 400 })
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY
  if (!GEMINI_API_KEY) {
    return NextResponse.json({ error: "Missing Gemini API Key" }, { status: 500 })
  }

  const prompt = `
You are an expert website analyst.

Analyze the website at ${url} and respond ONLY in JSON format matching EXACTLY this structure:

{
  "business_summary": string,
  "unique_selling_points": string[],
  "product_breakdown": string[],
  "seo_analysis": {
    "estimated_traffic": string,
    "seo_score": string,
    "top_keywords": string[],
    "keyword_density": { [keyword: string]: string },
    "strengths": string[],
    "weaknesses": string[],
    "meta_description": string,
    "title_tag": string
  }
}

Do not explain or add anything else. Respond only with this JSON object.
`

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    )

    const result = await geminiResponse.json()

    const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || ""

    let structured
    try {
      structured = JSON.parse(rawText)
    } catch (err) {
      console.error("JSON parse error:", err)
      return NextResponse.json(
        { error: "Failed to parse Gemini response as JSON", raw: rawText },
        { status: 500 }
      )
    }

    return NextResponse.json(structured)
  } catch (error: any) {
    console.error("Gemini API error:", error)
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 })
  }
}
