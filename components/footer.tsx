import Link from 'next/link';
import { Zap, Github, Twitter, Disc as Discord, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t border-white/10 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">
                Ether<span className="text-gradient">Edge</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Data-driven. Battle-tested. Built to sharpen your crypto edge.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialLink href="#" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Discord size={20} />} label="Discord" />
            </div>
          </div>

          <FooterLinks 
            title="Platform" 
            links={[
              { label: "Features", href: "#features" },
              { label: "Roadmap", href: "#roadmap" },
              { label: "Manifesto", href: "#manifesto" },
              { label: "Edge Blocks", href: "#" },
            ]} 
          />

          <FooterLinks 
            title="Resources" 
            links={[
              { label: "Documentation", href: "#" },
              { label: "API Reference", href: "#" },
              { label: "Model Cards", href: "#" },
              { label: "Tutorials", href: "#" },
            ]} 
          />

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Subscribe</h4>
            <p className="text-muted-foreground">Get the latest updates and insights</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-secondary/50 border border-white/10 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-r-lg px-3 flex items-center">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EtherEdge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link 
    href={href} 
    className="bg-secondary/50 hover:bg-secondary text-foreground/80 hover:text-primary p-2 rounded-full transition-colors"
    aria-label={label}
  >
    {icon}
  </Link>
);

const FooterLinks = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="space-y-4">
    <h4 className="text-lg font-semibold">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            href={link.href} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;