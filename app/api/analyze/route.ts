import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const urls: string[] = body.urls

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "Invalid input. 'urls' must be an array." }, { status: 400 })
    }

    const results = urls.map((url) => {
      const domain = extractDomain(url)
      return {
        url,
        domain,
        trafficEstimate: Math.floor(Math.random() * 1000000),
        topKeywords: ["AI tools", "marketing automation", "SaaS platform"].sort(() => 0.5 - Math.random()).slice(0, 2),
        seoScore: Math.floor(Math.random() * 100),
        strengths: ["Content Marketing", "Strong Backlinks", "Paid Ads"].sort(() => 0.5 - Math.random()).slice(0, 2),
      }
    })

    return NextResponse.json({ success: true, data: results })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

function extractDomain(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.hostname.replace("www.", "")
  } catch {
    return url
  }
}
