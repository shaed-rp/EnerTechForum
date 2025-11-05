import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, TrendingUp, Users, DollarSign, Zap } from "lucide-react";

export default function Home() {
  const handleDownloadDeck = () => {
    window.open('mailto:contact@shaed.com?subject=Investment%20Deck%20Request', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10 py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Zap className="w-4 h-4" />
              Presenting at EnerTech Forum San Diego | November 6, 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              The Operating System for{" "}
              <span className="text-primary">Modern Mobility Commerce</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transforming a <strong className="text-foreground">$150 billion market</strong> trapped in 30-year-old processes
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
              {[
                { value: "$2.8B+", label: "GMV Tracked" },
                { value: "7,800+", label: "Vehicles Managed" },
                { value: "$980M+", label: "Revenue in Ecosystem" },
                { value: "43,000+", label: "Annual Unit Volume" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg" onClick={handleDownloadDeck}>
                <Download className="w-5 h-5 mr-2" />
                Download Investment Deck
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">The Problem: An Industry Built on Complexity</h2>
              <p className="text-xl text-muted-foreground italic">
                "Where's my quote? Where's my truck? Where are my documents?"
              </p>
              <p className="text-lg text-muted-foreground">— Every Commercial Vehicle Buyer</p>
            </div>

            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-8 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { value: "5+ days", label: "to respond to buyer inquiries" },
                    { value: "40+ steps", label: "manual steps per sale" },
                    { value: "8-12 systems", label: "disconnected systems" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center space-y-2">
                      <div className="text-4xl font-bold text-destructive">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-lg">
                    <strong className="text-destructive">$5.4 billion</strong> trapped annually in the U.S. dealer network
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    Source: ATD Commercial Truck Dealer Future Landscape, March 2018
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Why Now: Three Converging Forces</h2>
              <p className="text-xl text-muted-foreground">Digital transformation isn't just possible—it's inevitable</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/50 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Behavioral Forces</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">40-50% of dealer principals</strong> will retire by 2027-2028. 
                    The next generation demands digital-first solutions and rejects manual processes.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Average dealer age: 56.8 years | 43% Social Security eligible by 2027
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/50 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Economic Forces</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">$2.4M lost per dealer annually</strong> due to inefficiencies in 
                    working capital, manual labor, and process delays.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Working capital trapped:</span>
                      <span className="font-semibold">$978K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Manual labor overhead:</span>
                      <span className="font-semibold">$435K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lost revenue from delays:</span>
                      <span className="font-semibold">$1.0M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/50 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Technology Forces</h3>
                  <p className="text-muted-foreground">
                    The stack is finally ready. API-first architecture, cloud computing, and AI make it possible to build 
                    a unified platform at affordable cost.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Proven playbooks: Procore (construction), Epic Systems (healthcare), DocuSign (real estate)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">The SHAED Solution</h2>
              <p className="text-xl text-primary font-semibold">One Platform. One Process. One Source of Truth.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl font-bold text-primary">01</div>
                  <h3 className="text-2xl font-bold">CATALOG</h3>
                  <p className="text-muted-foreground">
                    Centralized, omnichannel product catalog powering marketplaces, dealer websites, and private catalogs 
                    with dynamic pricing and seamless inventory syndication.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>62 vendors onboarded</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>134K page views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>250 quotes generated</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl font-bold text-primary">02</div>
                  <h3 className="text-2xl font-bold">ORDER MANAGEMENT</h3>
                  <p className="text-muted-foreground">
                    End-to-end visibility for all 13+ stakeholders with real-time status updates, automated workflows, 
                    and customer self-service portals.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>203 active users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>50,000+ vehicles tracked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>6,304 upfits processed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <div className="text-4xl font-bold text-primary">03</div>
                  <h3 className="text-2xl font-bold">DOCUMENTATION</h3>
                  <p className="text-muted-foreground">
                    AI-powered digital deal jacket centralizing every document with automated routing, compliance tracking, 
                    and instant search capabilities.
                  </p>
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>70,000+ documents processed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>98.9% success rate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>Zero lost documents</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Proven Traction & Validated ROI</h2>
              <p className="text-xl text-muted-foreground">Real results from our beta dealer network</p>
            </div>

            <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Beta Dealer Case Study</h3>
                  <p className="text-muted-foreground">6-Month Results (Annualized)</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: DollarSign, value: "$978,000", label: "Annual Interest Savings", desc: "Working capital optimization" },
                    { icon: TrendingUp, value: "$434,720", label: "Annual Labor Savings", desc: "Process automation" },
                    { icon: Zap, value: "$1,008,000", label: "Revenue Multiplier", desc: "Faster inventory turns" },
                    { icon: ArrowRight, value: "3 Days", label: "Faster Delivery", desc: "Quote-to-delivery cycle" },
                    { icon: Users, value: "16 Upfitters", label: "Real-Time Integration", desc: "vs. 0-2 typical" },
                    { icon: Download, value: "100%", label: "Digital Storage", desc: "Zero lost documents" }
                  ].map((metric, i) => (
                    <div key={i} className="bg-background rounded-lg p-6 space-y-3">
                      <metric.icon className="w-8 h-8 text-primary" />
                      <div className="text-3xl font-bold text-primary">{metric.value}</div>
                      <div className="font-semibold">{metric.label}</div>
                      <div className="text-sm text-muted-foreground">{metric.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Source: SHAED Beta Dealer Case Study, validated by ATD industry benchmarks
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">A Defensible Business Model</h2>
              <p className="text-xl text-muted-foreground">Three revenue streams with compounding moats</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">SaaS Subscriptions</h3>
                  <div className="text-3xl font-bold text-primary">$500-1,500</div>
                  <p className="text-sm text-muted-foreground">per location/month</p>
                  <p className="text-muted-foreground">
                    Recurring revenue from dealers accessing the SHAED platform, replacing 4+ legacy systems at 30-50% cost savings.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold">5-Year Target</div>
                    <div className="text-2xl font-bold text-primary">$16.2M ARR</div>
                    <div className="text-sm text-muted-foreground">at 40% market penetration</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Marketplace Take Rate</h3>
                  <div className="text-3xl font-bold text-primary">2-8%</div>
                  <p className="text-sm text-muted-foreground">on non-chassis revenue</p>
                  <p className="text-muted-foreground">
                    Transaction fees on upfitting, equipment, financing, and insurance flowing through the platform.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold">5-Year Target</div>
                    <div className="text-2xl font-bold text-primary">$65M</div>
                    <div className="text-sm text-muted-foreground">at 250K annual units</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Data & Analytics</h3>
                  <div className="text-3xl font-bold text-primary">Future</div>
                  <p className="text-sm text-muted-foreground">revenue stream</p>
                  <p className="text-muted-foreground">
                    Licensing unique data insights to OEMs, lenders, and insurers for predictive analytics and market intelligence.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-sm font-semibold">5-Year Target</div>
                    <div className="text-2xl font-bold text-primary">$20M ARR</div>
                    <div className="text-sm text-muted-foreground">data licensing & APIs</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/50 bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-sm font-semibold text-muted-foreground">TOTAL 5-YEAR REVENUE PROJECTION</div>
                <div className="text-5xl md:text-6xl font-bold text-primary">$96M</div>
                <div className="text-lg text-muted-foreground">with 70-80% gross margins</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">A Massive Market Opportunity</h2>
              <p className="text-xl text-muted-foreground">Commercial vehicles: The perfect beachhead</p>
            </div>

            <Card className="border-primary/50">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">U.S. Class 4-8 Market</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm text-muted-foreground">Annual New Vehicle Sales</div>
                        <div className="text-2xl font-bold">450K-550K units</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Chassis Market Size</div>
                        <div className="text-2xl font-bold">$29B-66B</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Total Addressable Market</div>
                        <div className="text-3xl font-bold text-primary">$65B-98B</div>
                        <div className="text-sm text-muted-foreground">including add-ons & aftermarket</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Why Commercial First?</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span><strong className="text-foreground">Higher AOV, lower volume</strong> = faster go-to-market</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span><strong className="text-foreground">Complex coordination</strong> = higher value-add for platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span><strong className="text-foreground">Fuel-agnostic</strong> = future-proof (diesel, CNG, electric, hydrogen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span><strong className="text-foreground">Relationship-driven</strong> = sticky once adopted</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Current penetration: <strong className="text-foreground">$2.8B GMV</strong> (2.9-4.3% of market)
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Source: ATD Report 2018, ACT Research projections
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Industry Veterans Building the Future</h2>
              <p className="text-xl text-muted-foreground">Deep expertise in automotive, technology, and finance</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Ryan Pritchard</h3>
                  <div className="text-primary font-semibold">CEO & Co-Founder</div>
                  <p className="text-muted-foreground">
                    21 years of experience transforming the transportation industry through innovative, sustainable products and services. 
                    Leadership roles at Pritchard Companies and Palfinger. Recognized authority in commercial vehicle procurement with 
                    unmatched expertise and a proven record of revenue growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold">Eddie Schick</h3>
                  <div className="text-primary font-semibold">CFO & Co-Founder</div>
                  <p className="text-muted-foreground">
                    Strategic partner leading investor relations, fundraising, and overall financial strategy. Proven track record 
                    managing financial operations at Pritchard EV, Coty, and RSM. Deep expertise driving sales and fostering strong 
                    customer relationships to fuel continued growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground">
                Our team includes leaders with experience from <strong className="text-foreground">UPS, Hyundai, Oracle, Polaris, PwC, and Winnebago</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Transform Commercial Vehicle Commerce?</h2>
            <p className="text-xl text-muted-foreground">
              Join us in building the future of mobility commerce. Download our investment deck to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={handleDownloadDeck}>
                <Download className="w-5 h-5 mr-2" />
                Download Investment Deck
              </Button>
              <Button size="lg" variant="outline" className="text-lg" onClick={() => window.open('mailto:contact@shaed.com', '_blank')}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <div className="text-2xl font-bold text-primary">SHAED</div>
            <p className="text-sm text-muted-foreground">
              The Operating System for Modern Mobility Commerce
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 SHAED. All rights reserved. | Presenting at EnerTech Forum San Diego, November 6, 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
