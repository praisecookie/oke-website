import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "AI Automation", href: "/ai-automation" },
    { name: "Fintech", href: "/fintech" },
   // { name: "Ventures", href: "/ventures" },
   // { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between text-xs uppercase tracking-widest font-medium">
        
        {/* Logo / Name */}
        <Link href="/" className="heading-serif normal-case text-2xl font-bold">
          Oke.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-[color:var(--color-muted)] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <Link 
            href="mailto:senoke01@gmail.com" 
            className="bg-[color:var(--color-primary)] text-[color:var(--color-surface)] px-6 py-3 hover:bg-[color:var(--color-foreground)] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}