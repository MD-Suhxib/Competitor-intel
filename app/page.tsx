'use client'

import { useState } from "react"
import {
  Search,
  Target,
  BarChart3,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompetitorIntelPage() {
  const [urls, setUrls] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any[]>([])

  const handleAnalyze = async () => {
    setLoading(true)

    const urlList = urls
      .split("\n")
      .map((url) => url.trim())
      .filter((url) => url !== "")

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: urlList }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Unknown error")

      setResults(data.data || [])
    } catch (err: any) {
      console.error("Analysis failed:", err)
      alert("Analysis failed: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Input */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
            <Zap className="w-3 h-3 mr-1" />
            Powered by Advanced AI
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Competitor
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Intelligence
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Unlock powerful insights about your competitors with AI-driven analysis. Enter competitor website URLs and
            get comprehensive intelligence reports in seconds.
          </p>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-slate-300 font-medium">Enter Competitor URLs</span>
                </div>

                <textarea
                  value={urls}
                  onChange={(e) => setUrls(e.target.value)}
                  placeholder={`Paste URLs here (one per line)...\nhttps://competitor1.com\nhttps://competitor2.com`}
                  className="w-full h-32 bg-slate-900/50 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                      Secure Analysis
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-green-400" />
                      Real-time Data
                    </div>
                  </div>

                  <Button
                    onClick={handleAnalyze}
                    disabled={loading || urls.trim() === ""}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
                  >
                    {loading ? (
                      <>
                        <BarChart3 className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Analyze Competitors
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          {results.length > 0 && (
            <div className="max-w-5xl mx-auto space-y-6 text-left mt-10">
              <h2 className="text-3xl font-semibold text-white mb-4 text-center">Competitor Insights</h2>

              {results.map((r, i) => (
                <Card key={i} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6 space-y-2 text-white">
                    <p><strong>🌐 URL:</strong> <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{r.url}</a></p>
                    <p><strong>📛 Domain:</strong> {r.domain}</p>
                    <p><strong>📈 Estimated Traffic:</strong> {r.trafficEstimate.toLocaleString()}</p>
                    <p><strong>🔍 Top Keywords:</strong> {r.topKeywords?.join(', ') || 'N/A'}</p>
                    <p><strong>⭐ SEO Score:</strong> {r.seoScore}</p>
                    <p><strong>🔥 Strengths:</strong> {r.strengths?.join(', ') || 'N/A'}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
