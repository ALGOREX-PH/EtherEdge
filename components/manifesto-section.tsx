"use client";

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { ShieldCheck, ZapOff, Award, Users, Wand } from 'lucide-react';

const ManifestoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activePoint, setActivePoint] = useState(0);
  
  const manifestoPoints = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Simplicity scales",
      description: "We don't believe complexity is an achievement by itself. Simpler, more robust tools win more often.",
    },
    {
      icon: <ZapOff className="h-6 w-6" />,
      title: "Transparency is trust",
      description: "Users deserve to know how their predictions are made. Every model, every tweak, every data source is fully documented.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Consistency wins",
      description: "The edge comes from repeatability. Any strategy that only works in backtests or one-off bull runs is not an edge.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community over ego",
      description: "EtherEdge's value grows as more users probe, critique, and improve the model.",
    },
    {
      icon: <Wand className="h-6 w-6" />,
      title: "Old school slaps",
      description: "We're proud to wield classic stats, robust regressions, and human-readable code. It works.",
    }
  ];
  
  return (
    <section id="manifesto" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The EtherEdge <span className="text-gradient">Manifesto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            "Old tools, wielded well, still cut the sharpest."
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto" ref={ref}>
          <div className={cn(
            "transition-all duration-700 transform",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="glassmorphism rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Core Principles</h3>
              
              <div className="space-y-6">
                {manifestoPoints.map((point, index) => (
                  <button 
                    key={index}
                    className={cn(
                      "flex items-start space-x-4 w-full text-left p-3 rounded-lg transition-all",
                      activePoint === index ? "bg-primary/10 border border-primary/30" : "hover:bg-secondary/30"
                    )}
                    onClick={() => setActivePoint(index)}
                  >
                    <div className={cn(
                      "flex-shrink-0 p-2 rounded-lg",
                      activePoint === index ? "bg-primary/20 text-primary" : "bg-secondary/80 text-muted-foreground"
                    )}>
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{point.title}</h4>
                      <p className={cn(
                        "text-muted-foreground transition-all duration-300",
                        activePoint === index ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0 overflow-hidden"
                      )}>
                        {point.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className={cn(
            "transition-all duration-700 delay-300 transform",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="glassmorphism rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">
                The Founder's <span className="text-gradient">Promise</span>
              </h3>
              
              <p className="text-lg mb-6">
                As the creator of EtherEdge, I stand by these principles:
              </p>
              
              <div className="space-y-5">
                <PromiseItem>
                  You deserve tools you can trust.
                </PromiseItem>
                
                <PromiseItem>
                  You deserve transparency and the right to challenge or improve every line of code.
                </PromiseItem>
                
                <PromiseItem>
                  You deserve a voice in the product's future.
                </PromiseItem>
              </div>
              
              <p className="mt-8 text-lg font-medium">
                EtherEdge is built for the community, with the community, and by the community.
                <span className="block mt-2 text-primary">This is your edge—claim it.</span>
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <blockquote className="text-lg italic">
                  "In the end, markets reward those who see through the noise. 
                  EtherEdge is your lens—crafted for clarity, shaped for mastery, powered by you."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PromiseItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center space-x-3">
    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
    <p className="text-lg">{children}</p>
  </div>
);

export default ManifestoSection;