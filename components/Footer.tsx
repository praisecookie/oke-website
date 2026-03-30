import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] mt-auto py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Brand, Mission & Copyright (Takes up 2 columns on desktop) */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="heading-serif normal-case text-4xl font-bold text-[color:var(--color-surface)] mb-6 block">
                Oke.
              </Link>
              <p className="text-[color:var(--color-surface)]/70 font-light max-w-sm leading-relaxed">
                Bridging the gap between operational scaling, venture capital, and autonomous AI systems across emerging markets.
              </p>
            </div>
            {/* Copyright moved here */}
            <div className="mt-12 text-xs text-[color:var(--color-surface)]/50 font-light tracking-wide">
              &copy; {new Date().getFullYear()} Oke Orhosere. All rights reserved.
            </div>
          </div>

          {/* Column 2: Directory */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-surface)]/50 font-medium mb-6">Directory</div>
            <div className="flex flex-col gap-4 text-sm font-light text-[color:var(--color-surface)]/90">
              <Link href="/ai-automation" className="hover:opacity-60 transition-opacity">AI Automation</Link>
              <Link href="/fintech" className="hover:opacity-60 transition-opacity">Fintech Consulting</Link>
              <Link href="/ventures" className="hover:opacity-60 transition-opacity">Ventures & Capital</Link>
              <Link href="/insights" className="hover:opacity-60 transition-opacity">Insights & Research</Link>
              <Link href="/about" className="hover:opacity-60 transition-opacity">The Operator</Link>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--color-surface)]/50 font-medium mb-6">Connect</div>
            <div className="flex flex-col gap-4 text-sm font-light text-[color:var(--color-surface)]/90">
              <Link href="https://www.linkedin.com/in/sen-oke-orhosere-84b608148/" target="_blank" className="hover:opacity-60 transition-opacity">LinkedIn</Link>
              <Link href="https://x.com/iam_senex" target="_blank" className="hover:opacity-60 transition-opacity">Twitter (X)</Link>
              <Link href="https://cuukie.substack.com/" target="_blank" className="hover:opacity-60 transition-opacity">Substack</Link>
              <Link href="mailto:senoke01@gmail.com" className="hover:opacity-60 transition-opacity">senoke01@gmail.com</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}