import Link from "next/link";
import Parser from "rss-parser";

// Next.js config to re-fetch this feed every hour so it's always up to date
export const revalidate = 3600; 

type FeedItem = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

export default async function InsightsPage() {
  const parser = new Parser();
  let items: FeedItem[] = [];

  try {
    // Medium feed URL
    const feed = await parser.parseURL("https://medium.com/feed/@senoke01");
    items = feed.items.slice(0, 9) as FeedItem[]; // Grab the latest 9 posts
  } catch (error) {
    console.error("Failed to fetch Medium feed:", error);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl mb-24 md:mb-32">
        <div className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-muted)] mb-6">
          Research & Writing
        </div>
        <h1 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
          Market Insights.
        </h1>
        <p className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light max-w-2xl leading-relaxed">
          Deep dives into Web3 infrastructure, African fintech adoption, and the operational mechanics of autonomous AI systems.
        </p>
      </div>

      {/* 2. The Substack Feed Grid */}
      <div className="mb-32">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => {
              // Format the date to look editorial (e.g., "OCT 14, 2025")
              const date = new Date(item.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).toUpperCase();

              return (
                <Link 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-[color:var(--color-border)] p-8 hover:border-[color:var(--color-primary)] transition-all duration-300 h-full"
                >
                  <div className="text-xs tracking-widest text-[color:var(--color-muted)] mb-6">{date}</div>
                  <h2 className="heading-serif text-2xl mb-4 group-hover:text-[color:var(--color-muted)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[color:var(--color-muted)] font-light leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {item.contentSnippet}
                  </p>
                  <div className="text-xs font-medium uppercase tracking-widest border-b border-[color:var(--color-primary)] pb-1 w-max group-hover:border-[color:var(--color-muted)] transition-colors">
                    Read Full Insight
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="border border-[color:var(--color-border)] p-12 text-center text-[color:var(--color-muted)]">
            <p>Loading the latest market research...</p>
          </div>
        )}
      </div>

      {/* 3. Newsletter Subscription CTA */}
      <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-xl">
          <h2 className="heading-serif text-3xl mb-4 text-[color:var(--color-surface)]">The Executive Brief</h2>
          <p className="opacity-80 font-light leading-relaxed">
            Join thousands of founders and investors receiving my latest research on tech infrastructure and capital allocation directly in their inbox.
          </p>
        </div>
        {/* Medium link */}
        <Link 
          href="https://medium.com/@senoke01" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[color:var(--color-surface)] text-[color:var(--color-primary)] px-8 py-4 hover:bg-gray-200 transition-colors duration-300 uppercase tracking-widest text-sm font-medium shrink-0"
        >
          Subscribe
        </Link>
      </div>

    </div>
  );
}