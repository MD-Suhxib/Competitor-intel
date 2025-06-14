"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const url = searchParams.get("urls") || ""
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`)
        if (!response.ok) throw new Error("Failed to fetch competitor data")
        const result = await response.json()
        setData(result)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return (
    <div className="min-h-screen bg-black text-white p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Competitor Analysis Results</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {data && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Business Summary</h2>
          <p className="text-gray-300">{data.business_summary}</p>

          <h3 className="font-bold">Unique Selling Points</h3>
          <ul className="list-disc pl-5">
            {data.unique_selling_points?.map((usp: string, index: number) => (
              <li key={index}>{usp}</li>
            ))}
          </ul>

          <h3 className="font-bold">Product Breakdown</h3>
          <ul className="list-disc pl-5">
            {data.product_breakdown?.map((product: string, index: number) => (
              <li key={index}>{product}</li>
            ))}
          </ul>

          <h3 className="font-bold">SEO Analysis</h3>
          <p><strong>Estimated Traffic:</strong> {data.seo_analysis?.estimated_traffic}</p>
          <p><strong>SEO Score:</strong> {data.seo_analysis?.seo_score}</p>

          <h4 className="font-semibold">Top Keywords</h4>
          <ul className="list-disc pl-5">
            {data.seo_analysis?.top_keywords?.map((keyword: string, index: number) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>

          <h4 className="font-semibold">Keyword Density</h4>
          <ul className="list-disc pl-5">
            {data.seo_analysis?.keyword_density &&
              Object.entries(data.seo_analysis.keyword_density as Record<string, string>).map(([keyword, density], index) => (
                <li key={index}>{keyword}: {density}</li>
              ))}
          </ul>


          <h4 className="font-semibold">Strengths</h4>
          <ul className="list-disc pl-5">
            {data.seo_analysis?.strengths?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold">Weaknesses</h4>
          <ul className="list-disc pl-5">
            {data.seo_analysis?.weaknesses?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4 className="font-semibold">Meta Description</h4>
          <p className="text-gray-400">{data.seo_analysis?.meta_description}</p>

          <h4 className="font-semibold">Title Tag</h4>
          <p className="text-gray-400">{data.seo_analysis?.title_tag}</p>
        </div>
      )}
    </div>
  )
}
