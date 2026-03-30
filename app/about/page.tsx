import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl mb-24">
        <div className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-muted)] mb-6">
          The Operator
        </div>
        <h1 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
          A decade at the frontier of African digital finance.
        </h1>
      </div>

      {/* 2. The Editorial Narrative (Two-Column Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 border-t border-[color:var(--color-border)] pt-16">
        
        {/* Left Column: The "Quote" / Positioning */}
        <div className="lg:col-span-5">
          <p className="heading-serif text-2xl md:text-3xl leading-snug text-[color:var(--color-primary)] sticky top-32">
            "True scale isn't about employing more people; it's about architecting systems that bridge institutional capital with decentralized infrastructure."
          </p>
        </div>

        {/* Right Column: The History */}
        <div className="lg:col-span-7 space-y-12 text-lg text-[color:var(--color-muted)] font-light leading-relaxed">
          <p>
            Operating out of Lekki, Lagos, the epicenter of Africa's tech renaissance, I have spent the last ten years building, scaling, and advising the platforms that define the continent's digital economy. 
          </p>
          <p>
            My foundation is rooted in pure Mathematics. This analytical rigor allowed me to transition seamlessly into the complexities of financial technology. In 2016, I founded <strong className="font-medium text-[color:var(--color-foreground)]">Senexpay</strong>, navigating brutal regulatory landscapes and scaling a crypto-native platform to solve real-world cross-border payment bottlenecks.
          </p>
          <p>
            Having operated successfully as a founder, I expanded into capital allocation. At <strong className="font-medium text-[color:var(--color-foreground)]">SenexHub</strong>, I sit across the table, leveraging my operational scars to evaluate high-potential Web3 startups, architect institutional due diligence, and position founders for follow-on venture funding.
          </p>
          <p>
            Today, I merge financial strategy with deep technical infrastructure. Recognizing that the next frontier of leverage is automation, I architect enterprise-grade, local-first AI systems (n8n, ClaudeBot) that allow businesses to operate flawlessly around the clock.
          </p>
        </div>
      </div>

      {/* 3. The Arsenal / Hard Skills Grid */}
      <div className="mb-32">
        <h2 className="heading-serif text-3xl mb-12 border-b border-[color:var(--color-border)] pb-4">Operational Architecture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-foreground)] font-medium mb-4">Systems & AI</div>
            <ul className="space-y-2 text-sm text-[color:var(--color-muted)] font-light">
              <li>n8n Enterprise Automation</li>
              <li>ClaudeBot / Moltbot</li>
              <li>Python / SQL</li>
              <li>Local-First LLM Deployment</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-foreground)] font-medium mb-4">Capital & Finance</div>
            <ul className="space-y-2 text-sm text-[color:var(--color-muted)] font-light">
              <li>Venture Capital Modeling</li>
              <li>Burn-rate Forecasting</li>
              <li>Valuation Structuring</li>
              <li>Cap Table Management</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-foreground)] font-medium mb-4">Executive</div>
            <ul className="space-y-2 text-sm text-[color:var(--color-muted)] font-light">
              <li>Go-To-Market Strategy</li>
              <li>Regulatory Compliance</li>
              <li>Cross-Border Operations</li>
              <li>Investor Relations</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-foreground)] font-medium mb-4">Credentials</div>
            <ul className="space-y-2 text-sm text-[color:var(--color-muted)] font-light">
              <li>VC Modeling (EDUCBA)</li>
              <li>BSc. Mathematics</li>
              <li>10+ Years African Fintech</li>
            </ul>
          </div>

        </div>
      </div>

      {/* 4. The "High Status" Call To Action */}
      <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-xl">
          <h2 className="heading-serif text-3xl mb-4 text-[color:var(--color-surface)]">Private Advisory</h2>
          <p className="opacity-80 font-light leading-relaxed">
            I maintain a highly curated roster of advisory clients. Available for board seats, institutional consulting, and high-level structural overhauls.
          </p>
        </div>
        <Link 
          href="mailto:senoke01@gmail.com?subject=Private Advisory Inquiry" 
          className="border border-[color:var(--color-surface)] text-[color:var(--color-surface)] px-8 py-4 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-primary)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium shrink-0"
        >
          Request Availability
        </Link>
      </div>

    </div>
  );
}