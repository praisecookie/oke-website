import Link from "next/link";

export default function FintechPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl mb-24 md:mb-32">
        <div className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-muted)] mb-6">
          Advisory & Infrastructure
        </div>
        <h1 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
          Fintech Scaling. <br /> Operational Rigor.
        </h1>
        <p className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light max-w-2xl leading-relaxed">
          Leveraging a decade of experience building cross-border payment architectures and navigating complex regulatory landscapes to help founders scale digital asset platforms.
        </p>
      </div>

      {/* 2. Consulting Services */}
      <div className="mb-32">
        <h2 className="heading-serif text-3xl mb-12 border-b border-[color:var(--color-border)] pb-4">Consulting Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <h3 className="text-xl font-medium mb-4">Go-To-Market Strategy</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              End-to-end product roadmapping and brand positioning designed specifically for crypto-native and digital asset solutions entering emerging markets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Compliance & Operations</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Structuring secure, scalable operational frameworks and navigating the regulatory complexities of fiat-to-digital asset bridging.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Capital Readiness</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Refining investor pitches, structuring early-stage fundraising rounds, and developing rigorous financial models to secure venture capital.
            </p>
          </div>

        </div>
      </div>

      {/* 3. The Digital Storefront (Assets & Templates) */}
      <div className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-[color:var(--color-border)] pb-4 mb-12">
          <h2 className="heading-serif text-3xl">Digital Assets & Frameworks</h2>
          <span className="text-sm text-[color:var(--color-muted)] uppercase tracking-widest mt-4 md:mt-0">Instant Access</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Product 1 */}
          <div className="border border-[color:var(--color-border)] p-8 flex flex-col justify-between hover:border-[color:var(--color-primary)] transition-colors duration-300">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-4">Template</div>
              <h3 className="text-lg font-medium mb-3">Enterprise Business Plan</h3>
              <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed mb-8">
                A comprehensive, investor-grade business plan structure optimized for fintech and Web3 startups.
              </p>
            </div>
            <button className="text-left text-sm font-medium border-b border-[color:var(--color-primary)] pb-1 w-max hover:text-[color:var(--color-muted)] hover:border-[color:var(--color-muted)] transition-colors">
              Purchase — $150
            </button>
          </div>

          {/* Product 2 */}
          <div className="border border-[color:var(--color-border)] p-8 flex flex-col justify-between hover:border-[color:var(--color-primary)] transition-colors duration-300">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-4">Model</div>
              <h3 className="text-lg font-medium mb-3">Financial Modeling Engine</h3>
              <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed mb-8">
                Advanced Excel frameworks for burn-rate analysis, revenue forecasting, and valuation structuring.
              </p>
            </div>
            <button className="text-left text-sm font-medium border-b border-[color:var(--color-primary)] pb-1 w-max hover:text-[color:var(--color-muted)] hover:border-[color:var(--color-muted)] transition-colors">
              Purchase — $200
            </button>
          </div>

          {/* Product 3 */}
          <div className="border border-[color:var(--color-border)] p-8 flex flex-col justify-between hover:border-[color:var(--color-primary)] transition-colors duration-300">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--color-muted)] mb-4">Framework</div>
              <h3 className="text-lg font-medium mb-3">Operational SOPs</h3>
              <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed mb-8">
                Plug-and-play organizational structuring templates designed for Notion and Zoho ecosystems.
              </p>
            </div>
            <button className="text-left text-sm font-medium border-b border-[color:var(--color-primary)] pb-1 w-max hover:text-[color:var(--color-muted)] hover:border-[color:var(--color-muted)] transition-colors">
              Purchase — $100
            </button>
          </div>

          {/* Product 4 - Premium */}
          <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-4">Bespoke Service</div>
              <h3 className="text-lg font-medium mb-3">Custom Company Docs</h3>
              <p className="text-sm opacity-80 font-light leading-relaxed mb-8">
                Tailor-made documentation, pitch decks, and internal operational reports crafted specifically for your venture.
              </p>
            </div>
            <Link href="mailto:senoke01@gmail.com" className="text-left text-sm font-medium border-b border-[color:var(--color-surface)] pb-1 w-max hover:opacity-70 transition-opacity">
              Request a Quote
            </Link>
          </div>

        </div>
      </div>

      {/* 4. Call To Action */}
      <div className="border-t border-[color:var(--color-border)] pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="heading-serif text-3xl mb-2">Need strategic oversight?</h2>
          <p className="text-[color:var(--color-muted)] font-light">Retain my expertise to structure and scale your fintech operations.</p>
        </div>
        <Link 
          href="mailto:senoke01@gmail.com" 
          className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] px-8 py-4 hover:bg-[color:var(--color-muted)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
        >
          Inquire About Consulting
        </Link>
      </div>

    </div>
  );
}