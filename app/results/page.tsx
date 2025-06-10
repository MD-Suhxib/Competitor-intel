"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const urls = searchParams.get("urls") || ""
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!urls) return

    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/scrape?url=${encodeURIComponent(urls)}`)
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
  }, [urls])

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Competitor Analysis Results</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {data && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="text-gray-400">{data.description}</p>

          <h3 className="font-bold">Headings Found:</h3>
          <ul className="list-disc pl-5">
            {data.headings.map((heading: string, index: number) => (
              <li key={index}>{heading}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
