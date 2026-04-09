import Link from "next/link";

export default function VenturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl mb-24 md:mb-32">
        <div className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-muted)] mb-6">
          Deal Sourcing & Allocation
        </div>
        <h1 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
          Capital & Conviction.
        </h1>
        <p className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light max-w-2xl leading-relaxed">
          Identifying and backing high-potential Web3 startups and blockchain infrastructure across emerging markets.
        </p>
      </div>

      {/* 2. Investment Thesis & Focus */}
      <div className="mb-32">
        <h2 className="heading-serif text-3xl mb-12 border-b border-[color:var(--color-border)] pb-4">Investment Thesis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          <div>
            <h3 className="text-xl font-medium mb-4">DeFi & Financial Inclusion</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Targeting protocols and platforms that leverage decentralized finance to bypass traditional banking bottlenecks and accelerate financial inclusion across the African continent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Blockchain Infrastructure</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Investing in the foundational layers—nodes, cross-chain bridges, and scalability solutions—that enable consumer-facing Web3 applications to thrive in low-bandwidth environments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Digital Identity</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Backing solutions that establish secure, self-sovereign digital identities, unlocking access to global credit markets and essential services for unbanked populations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Operational Alpha</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Beyond capital, I provide portfolio companies with rigorous go-to-market strategies, operational restructuring, and refined pitch architectures to ensure follow-on funding.
            </p>
          </div>

        </div>
      </div>

      {/* 3. The VC Value Add (SenexHub Context) */}
      <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-10 md:p-16 mb-32">
        <div className="max-w-3xl">
          <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-[color:var(--color-surface)]">
            Rigorous Due Diligence
          </h2>
          <p className="text-lg opacity-90 font-light leading-relaxed mb-8">
            As a Venture Capitalist at SenexHub, my mandate is to bridge the gap between brilliant technical founders and institutional capital. I specialize in deep-dive market analysis, founder evaluation, and crafting the investment memos that drive allocation decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[color:var(--color-surface)]/20 pt-8 mt-8">
            <div>
              <div className="text-2xl font-medium mb-2">01.</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Deal Sourcing</div>
            </div>
            <div>
              <div className="text-2xl font-medium mb-2">02.</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Market Analysis</div>
            </div>
            <div>
              <div className="text-2xl font-medium mb-2">03.</div>
              <div className="text-sm opacity-80 uppercase tracking-widest">Portfolio Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Call To Action (Pitch Submission) */}
      <div className="border-t border-[color:var(--color-border)] pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="heading-serif text-3xl mb-2">Building the future of Web3?</h2>
          <p className="text-[color:var(--color-muted)] font-light">Submit your deck for review and potential syndication.</p>
        </div>
        <Link 
          href="mailto:senoke01@gmail.com?subject=Pitch Deck Submission: [Startup Name]" 
          className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] px-8 py-4 hover:bg-[color:var(--color-muted)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
        >
          Submit Pitch Deck
        </Link>
      </div>

    </div>
  );
}