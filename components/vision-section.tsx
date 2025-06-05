"use client";

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { LineChart, TrendingUp, Eye, Code, Shield, Trophy } from 'lucide-react';

const VisionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="vision" className="py-20 relative">
      {/* Background grid with opacity */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            The Vision: <span className="text-foreground">Reclaim Your Crypto Edge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In an industry where hype trumps logic and complexity is often sold as innovation, 
            EtherEdge is a declaration of independence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto" ref={ref}>
          <div className={cn(
            "transition-all duration-700 transform",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <p className="text-xl mb-6 leading-relaxed">
              Crypto trading has evolved into a high-stakes arena. Market noise is deafening. 
              Influencers pump coins, algorithmic whales front-run retail, and the average trader 
              is left swimming in a sea of conflicting signals and FOMO.
            </p>
            <p className="text-xl mb-8 leading-relaxed">
              But what if you could build a <span className="text-primary font-semibold">real edge</span>? 
              What if, instead of chasing the latest buzzwords or entrusting your capital to a "magic" 
              black box, you anchored your strategy in clarity, transparency, and time-tested logic?
            </p>
            
            <div className="flex flex-col space-y-6">
              <ValueProp 
                icon={<Eye className="h-6 w-6 text-primary" />}
                title="Transparency is non-negotiable"
                description="Every model, every feature, every decision is fully documented and explainable."
              />
              
              <ValueProp 
                icon={<Code className="h-6 w-6 text-pink-500" />}
                title="Simplicity scales"
                description="Complex doesn't mean better. Clean, robust tools win more consistently."
              />
              
              <ValueProp 
                icon={<Shield className="h-6 w-6 text-cyan-500" />}
                title="Your data, your control"
                description="We don't lock you in. Fork the code, own your process, build your edge."
              />
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300 transform",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="glassmorphism rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                <LineChart className="h-40 w-40 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gradient">The Origin Story</h3>
              
              <p className="mb-4 text-lg">
                EtherEdge began not with a pitch deck or a viral tweet, but with a fundamental question:
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-lg">
                "Can we consistently forecast Ethereum's price using clean data and honest logic—no voodoo, just sharp analysis?"
              </blockquote>
              
              <p className="mb-4 text-lg">
                The crypto world was (and still is) obsessed with deep learning, LSTMs, transformers—models so 
                complex that even their creators sometimes struggle to explain them.
              </p>
              
              <p className="mb-6 text-lg">
                So we set out to prove something radical: 
                <span className="font-medium block mt-2">
                  You don't need to chase hype to win. You need mastery over the basics, executed with surgical precision.
                </span>
              </p>
              
              <div className="flex items-center space-x-2 text-primary">
                <Trophy className="h-5 w-5" />
                <span className="font-bold">EtherEdge is the answer</span>
              </div>
              <p className="ml-7 text-lg">
                A lean, powerful forecasting engine—old school at heart, but engineered with modern rigor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueProp = ({ icon, title, description }: ValuePropProps) => (
  <div className="flex space-x-4">
    <div className="flex-shrink-0 mt-1">
      <div className="bg-secondary/50 p-2.5 rounded-lg">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default VisionSection;