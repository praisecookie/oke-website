import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl space-y-8">
        <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl leading-tight">
          Oke Orhosere.
        </h1>
        <p className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light max-w-2xl leading-relaxed">
          Fintech Founder. AI Automation Architect. <br />
          Bridging the gap between operational scaling and autonomous systems.
        </p>
      </div>

      {/* 2. Routing Grid (The Mini-Sites) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <Link href="/ai-automation" className="group block border border-[color:var(--color-border)] p-8 hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-surface)] transition-all duration-300">
          <h2 className="heading-serif text-2xl mb-4 group-hover:text-[color:var(--color-surface)]">AI Automation</h2>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            Deploy 24/7 autonomous agents and optimize operational workflows with local-first AI systems.
          </p>
        </Link>

        <Link href="/fintech" className="group block border border-[color:var(--color-border)] p-8 hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-surface)] transition-all duration-300">
          <h2 className="heading-serif text-2xl mb-4 group-hover:text-[color:var(--color-surface)]">Fintech Consulting</h2>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            Strategic structuring, compliance navigation, and operational frameworks for digital asset platforms.
          </p>
        </Link>

        {/* HIDDEN FOR NOW
        <Link href="/ventures" className="group block border border-[color:var(--color-border)] p-8 hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-surface)] transition-all duration-300">
          <h2 className="heading-serif text-2xl mb-4 group-hover:text-[color:var(--color-surface)]">Ventures & Capital</h2>
          <p className="text-sm opacity-80 leading-relaxed font-light">
            Deal sourcing, due diligence, and capital allocation for high-potential Web3 and DeFi startups.
          </p>
        </Link>
        */}

      </div>

      {/* 3. The Executive Brief (Teasing the About Page) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-[color:var(--color-border)] pt-32">
        <div>
          <h2 className="heading-serif text-3xl md:text-5xl mb-6 leading-tight">A decade of scaling digital economies.</h2>
          <p className="text-lg text-[color:var(--color-muted)] font-light leading-relaxed mb-8">
            From founding Senexpay through brutal regulatory landscapes to architecting enterprise-grade AI automation workflows, my focus is singular: building systems that scale flawlessly and bridging the gap between brilliant technical founders and institutional capital.
          </p>
          <Link href="/about" className="text-sm uppercase tracking-widest font-medium border-b border-[color:var(--color-primary)] pb-1 hover:text-[color:var(--color-muted)] hover:border-[color:var(--color-muted)] transition-colors">
            Read Full Profile
          </Link>
        </div>
        
        {/* The Signature Quote Box */}
        <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-12 flex flex-col justify-center h-full">
          <div className="heading-serif text-6xl mb-4 leading-none">"</div>
          <p className="text-xl md:text-2xl font-light leading-snug mb-8">
            True scale isn't just about deploying technology; it's about architecting systems that bridge institutional capital with decentralized infrastructure.
          </p>
          <div className="text-sm uppercase tracking-widest opacity-70">Oke Orhosere</div>
        </div>
      </div>

      {/* 4. The Final Call To Action */}
      <div className="border-t border-[color:var(--color-border)] pt-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-2xl">
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">Private Advisory & Retainers</h2>
          <p className="text-[color:var(--color-muted)] font-light text-lg">
            I maintain a highly curated roster of clients for autonomous AI deployments, board seats, and fintech structuring.
          </p>
        </div>
        <Link 
          href="mailto:senoke01@gmail.com?subject=Inquiry: Advisory & Retainer" 
          className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] px-8 py-4 hover:bg-[color:var(--color-muted)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium shrink-0"
        >
          Request Availability
        </Link>
      </div>

    </div>
  );
}