"use client";

import { motion } from 'framer-motion';
import { Clock, Code, BarChart3, Video, ArrowRight } from 'lucide-react';

const ComingSoon = () => {
  const upcomingFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Risk Parity Builder Mode',
      description: 'Balance strategy allocation across uncorrelated signals',
      color: 'blue'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Multi-Asset Backtesting',
      description: 'Test cross-market edges on BTC, SOL, AVAX, or even NFT indices',
      color: 'purple'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Custom Indicators API',
      description: 'Plug in your own alpha-generating formulas with JS or Python snippets',
      color: 'green'
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: 'Narrative Replays',
      description: 'Auto-generated video clips of your strategy\'s greatest moments',
      color: 'amber'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Clock className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              🔜 <span className="text-gradient">Coming Soon</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            The Arena continues to evolve with cutting-edge features designed to push the boundaries 
            of strategy testing and market analysis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {upcomingFeatures.map((feature, index) => (
              <UpcomingFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glassmorphism rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-4xl">✨</div>
              <div className="text-4xl">⭐</div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Your edge deserves a stage.
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Welcome to the Arena. Let the testing begin.
            </p>
            
            <motion.button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter the Arena
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          <FooterSection
            title="Platform"
            links={[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Backtest Arena', href: '/arena' },
              { label: 'Strategy Library', href: '/strategies' },
              { label: 'Community', href: '/community' }
            ]}
          />
          <FooterSection
            title="Resources"
            links={[
              { label: 'Documentation', href: '/docs' },
              { label: 'API Reference', href: '/api' },
              { label: 'Trading Guides', href: '/guides' },
              { label: 'Market Research', href: '/research' }
            ]}
          />
          <FooterSection
            title="Connect"
            links={[
              { label: 'Discord', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'YouTube', href: '#' },
              { label: 'Blog', href: '#' }
            ]}
          />
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4">🏟️ ETHEREDGE</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Where strategies go to battle, glory, and growth.
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 EtherEdge. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface UpcomingFeatureCardProps {
  feature: any;
  index: number;
}

const UpcomingFeatureCard = ({ feature, index }: UpcomingFeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    className="feature-card text-left group"
    whileHover={{ y: -5 }}
  >
    <div className={`p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform bg-${feature.color}-500/20 text-${feature.color}-400`}>
      {feature.icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {feature.title}
    </h3>
    <p className="text-muted-foreground text-sm">{feature.description}</p>
  </motion.div>
);

interface FooterSectionProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a 
            href={link.href} 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


export default ComingSoon;