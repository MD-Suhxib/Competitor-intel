import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const apiKey = process.env.GEMINI_API_KEY;

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json({ error: "Missing Gemini API key" }, { status: 500 });
  }

  const prompt = `
Analyze the following website: ${url}
Respond STRICTLY in JSON ONLY. Use this structure:

{
  "business_summary": "...",
  "unique_selling_points": ["...", "..."],
  "product_breakdown": ["...", "..."],
  "seo_analysis": {
    "estimated_traffic": "...",
    "seo_score": "...",
    "top_keywords": ["...", "..."],
    "keyword_density": {"keyword1": "density", "keyword2": "density"},
    "strengths": ["...", "..."],
    "weaknesses": ["...", "..."],
    "meta_description": "...",
    "title_tag": "..."
  }
}
NO explanations, JSON ONLY.
`;

  try {
    const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const geminiJson = await geminiRes.json();
    const rawText = geminiJson?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    if (!rawText) {
      return NextResponse.json({ error: "Empty response from Gemini API" }, { status: 500 });
    }

    let structured;
    try {
      structured = JSON.parse(rawText);
    } catch (err) {
      console.error("JSON parse error:", err, rawText);
      return NextResponse.json({ error: "Invalid JSON format from Gemini", raw: rawText }, { status: 500 });
    }

    return NextResponse.json(structured);
  } catch (error) {
    console.error("Gemini API fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error", details: error }, { status: 500 });
  }
}
