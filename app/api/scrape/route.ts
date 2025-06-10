import { NextResponse } from 'next/server'
import { scrapeWebsite } from '@/lib/scraper'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const url = searchParams.get('url')

    if (!url) {
      return NextResponse.json({ error: 'Missing URL' }, { status: 400 })
    }

    console.log(`Scraping URL: ${url}`)

    const scrapedData = await scrapeWebsite(url)
    return NextResponse.json(scrapedData)
  } catch (error) {
    console.error('Scraper error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
