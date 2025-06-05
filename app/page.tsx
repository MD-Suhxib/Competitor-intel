import { Search, Target, BarChart3, Zap, Globe, TrendingUp, Users, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompetitorIntelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CompetitorIntel</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

          {/* Main Input Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Globe className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-slate-300 font-medium">Enter Competitor URLs</span>
                </div>
                <textarea
                  placeholder="Paste URLs here (one per line)...
https://competitor1.com
https://competitor2.com
https://competitor3.com"
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
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Analyze Competitors
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10K+</div>
              <div className="text-slate-400">Websites Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-slate-400">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2.5s</div>
              <div className="text-slate-400">Average Analysis Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI-Driven Features</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get comprehensive competitor insights with our advanced AI analysis tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Market Positioning</h3>
                <p className="text-slate-300">
                  Analyze competitor positioning, messaging, and unique value propositions to identify market gaps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Metrics</h3>
                <p className="text-slate-300">
                  Track competitor website performance, loading speeds, and technical SEO factors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Audience Analysis</h3>
                <p className="text-slate-300">
                  Understand competitor target audiences, demographics, and customer engagement strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Content Strategy</h3>
                <p className="text-slate-300">
                  Analyze competitor content themes, publishing frequency, and engagement patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Analysis</h3>
                <p className="text-slate-300">
                  Evaluate competitor security measures, SSL certificates, and privacy implementations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-slate-300">
                  Get instant alerts when competitors make significant changes to their websites or strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">Get competitor insights in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enter URLs</h3>
              <p className="text-slate-300">Simply paste your competitor website URLs into our analysis tool</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Analysis</h3>
              <p className="text-slate-300">
                Our advanced AI algorithms analyze and extract key insights from competitor websites
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Insights</h3>
              <p className="text-slate-300">
                Receive comprehensive reports with actionable intelligence and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Outsmart Your Competition?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using AI-powered competitor intelligence to stay ahead
          </p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
            Start Free Analysis
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CompetitorIntel</span>
            </div>
            <div className="text-slate-400 text-sm">© 2024 CompetitorIntel. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
