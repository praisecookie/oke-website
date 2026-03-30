import Link from "next/link";

export default function AIAutomationPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      
      {/* 1. Hero Section */}
      <div className="max-w-4xl mb-24 md:mb-32">
        <div className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-muted)] mb-6">
          Service Architecture
        </div>
        <h1 className="heading-serif text-5xl md:text-7xl mb-8 leading-tight">
          Autonomous Systems. <br /> Zero Downtime.
        </h1>
        <p className="text-xl md:text-2xl text-[color:var(--color-muted)] font-light max-w-2xl leading-relaxed">
          Custom-deployed AI receptionists and autonomous agents that handle multi-channel enquiries, schedule meetings, and manage operational workflows 24/7.
        </p>
      </div>

      {/* 2. Core Capabilities Grid */}
      <div className="mb-32">
        <h2 className="heading-serif text-3xl mb-12 border-b border-[color:var(--color-border)] pb-4">Core Deployments & Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Capability 1 */}
          <div>
            <h3 className="text-xl font-medium mb-4">24/7 AI Receptionists</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Never miss a lead. Designing and deploying autonomous systems that instantly answer customer enquiries and seamlessly integrate with your calendar to schedule appointments around the clock.
            </p>
          </div>

          {/* Capability 2 */}
          <div>
            <h3 className="text-xl font-medium mb-4">Secure Open-Source Agents</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Specializing in the secure, local-first setup of advanced autonomous assistants (including ClaudeBot and Moltbot) to ensure complete data sovereignty and operational reliability.
            </p>
          </div>

          {/* Capability 3: The n8n Flex */}
          <div>
            <h3 className="text-xl font-medium mb-4">Enterprise Workflow Architecture (n8n)</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Moving beyond basic integrations. Architecting complex, self-hosted backend logic using n8n to connect Large Language Models directly to your secure databases, APIs, and internal systems without compromising privacy.
            </p>
          </div>

          {/* Capability 4 */}
          <div>
            <h3 className="text-xl font-medium mb-4">Omnichannel Integrations</h3>
            <p className="text-[color:var(--color-muted)] font-light leading-relaxed">
              Connecting AI agents seamlessly to the platforms your customers and teams already use, including Telegram, WhatsApp, and browser-based environments for automated administrative tasks.
            </p>
          </div>

        </div>
      </div>

      {/* 3. The Retainer Pitch (The Revenue Engine) */}
      <div className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] p-10 md:p-16 mb-32">
        <div className="max-w-3xl">
          <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-[color:var(--color-surface)]">
            The Managed Retainer Model
          </h2>
          <p className="text-lg opacity-90 font-light leading-relaxed mb-8">
            AI is not a one-time installation; it is an evolving operational asset. My managed retainer model ensures your autonomous systems are continuously refined, securely updated, and scaled alongside your business growth. Consistent oversight guarantees maximum ROI and zero operational drift.
          </p>
          <ul className="space-y-4 mb-12 opacity-90 font-light">
            <li className="flex items-start">
              <span className="mr-3 mt-1 block w-1.5 h-1.5 bg-[color:var(--color-surface)] rounded-full shrink-0"></span>
              Continuous prompt engineering and response optimization.
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 block w-1.5 h-1.5 bg-[color:var(--color-surface)] rounded-full shrink-0"></span>
              Proactive server maintenance and local-first security patching.
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 block w-1.5 h-1.5 bg-[color:var(--color-surface)] rounded-full shrink-0"></span>
              Expansion of workflows as new platforms and APIs emerge.
            </li>
          </ul>
        </div>
      </div>

      {/* 4. Call To Action */}
      <div className="border-t border-[color:var(--color-border)] pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="heading-serif text-3xl mb-2">Ready to automate?</h2>
          <p className="text-[color:var(--color-muted)] font-light">Stop losing hours to administrative bottlenecks.</p>
        </div>
        <Link 
          href="mailto:senoke01@gmail.com" 
          className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] px-8 py-4 hover:bg-[color:var(--color-muted)] transition-colors duration-300 uppercase tracking-widest text-sm font-medium"
        >
          Book a Discovery Call
        </Link>
      </div>

    </div>
  );
}