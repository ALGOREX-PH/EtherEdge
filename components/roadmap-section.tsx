"use client";

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { CheckCircle2, Circle, ArrowRight, CodeIcon, Users, Database, BookOpen, GitMerge } from 'lucide-react';

const RoadmapSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      title: "Core Model & Open-Source Release",
      icon: <CodeIcon className="h-6 w-6" />,
      description: "The foundation: our transparent, robust prediction model.",
      items: [
        "ETH price prediction linear regression model",
        "EDA dashboards and explainability modules",
        "Weekly forecast reports and error analysis",
      ],
      status: "current"
    },
    {
      title: "Community and Competition",
      icon: <Users className="h-6 w-6" />,
      description: "Empowering our users to shape the platform.",
      items: [
        "Leaderboards for backtesting and forecast accuracy",
        "Model \"duels\" - community-submitted models battle EtherEdge",
        "Feature request hub and public changelog",
      ],
      status: "upcoming"
    },
    {
      title: "Builder Tools & Integration",
      icon: <Database className="h-6 w-6" />,
      description: "Making EtherEdge accessible and extensible.",
      items: [
        "Streamlit dashboard for no-code exploration",
        "API endpoints for ETH prediction (REST & GraphQL)",
        "Modular plug-ins for DeFi dApps and trading bots",
      ],
      status: "upcoming"
    },
    {
      title: "Multi-Asset and Multi-Model Expansion",
      icon: <GitMerge className="h-6 w-6" />,
      description: "Broadening our horizons beyond ETH.",
      items: [
        "Add BTC, SOL, and other major crypto assets",
        "Integrate ensemble learning and regime detectors",
        "User-generated signal marketplaces",
      ],
      status: "upcoming"
    },
    {
      title: "Learning & Events",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Sharing knowledge and building expertise.",
      items: [
        "Deep-dive workshops, hackathons, and AMAs",
        "\"Behind the Model\" blog series",
        "Curriculum partnerships with universities",
      ],
      status: "upcoming"
    }
  ];
  
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Roadmap:</span> EtherEdge Today & Tomorrow
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our vision for the future, with clear and achievable milestones.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto" ref={ref}>
          {/* Phases navigation */}
          <div className="md:w-1/3">
            <div className="sticky top-24 glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6">Development Phases</h3>
              
              <div className="space-y-1">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    className={cn(
                      "flex items-center w-full text-left p-3 rounded-lg transition-all",
                      activePhase === index 
                        ? "bg-primary/20 text-primary" 
                        : "hover:bg-secondary/30 text-foreground/80"
                    )}
                    onClick={() => setActivePhase(index)}
                  >
                    <StatusIcon status={phase.status} className="mr-3 flex-shrink-0" />
                    <span className="font-medium">Phase {index + 1}: {phase.title}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-muted-foreground text-sm">
                  Our roadmap is dynamic and evolves with community feedback. 
                  Have suggestions? Join our Discord to contribute!
                </p>
              </div>
            </div>
          </div>
          
          {/* Phase details */}
          <div className="md:w-2/3">
            <div className={cn(
              "glassmorphism rounded-2xl p-8 transition-all duration-500",
              activePhase === 0 ? "border-2 border-blue-500/30" :
              activePhase === 1 ? "border-2 border-purple-500/30" :
              activePhase === 2 ? "border-2 border-cyan-500/30" :
              activePhase === 3 ? "border-2 border-amber-500/30" :
              "border-2 border-green-500/30"
            )}>
              <div className="flex items-center mb-6">
                <div className={cn(
                  "p-3 rounded-lg mr-4",
                  activePhase === 0 ? "bg-blue-500/20 text-blue-400" :
                  activePhase === 1 ? "bg-purple-500/20 text-purple-400" :
                  activePhase === 2 ? "bg-cyan-500/20 text-cyan-400" :
                  activePhase === 3 ? "bg-amber-500/20 text-amber-400" :
                  "bg-green-500/20 text-green-400"
                )}>
                  {phases[activePhase].icon}
                </div>
                <div>
                  <div className="flex items-center">
                    <StatusIcon status={phases[activePhase].status} className="mr-2" />
                    <span className={cn(
                      "text-sm font-medium",
                      phases[activePhase].status === "current" ? "text-blue-400" :
                      phases[activePhase].status === "completed" ? "text-green-400" :
                      "text-muted-foreground"
                    )}>
                      {phases[activePhase].status === "current" ? "Current Phase" :
                      phases[activePhase].status === "completed" ? "Completed" :
                      "Upcoming"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Phase {activePhase + 1}: {phases[activePhase].title}</h3>
                </div>
              </div>
              
              <p className="text-lg mb-8">
                {phases[activePhase].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Key Deliverables:</h4>
                <ul className="space-y-4">
                  {phases[activePhase].items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowIcon className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {activePhase === 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Current Progress:</h4>
                    <div className="w-full bg-secondary/50 rounded-full h-2.5 mb-4">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      We're 75% through our first phase, with the core model and dashboards complete.
                      Weekly forecast reports are being finalized.
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glassmorphism rounded-xl p-6">
                <h4 className="font-semibold mb-3">Community Input</h4>
                <p className="text-muted-foreground mb-4">
                  Vote on which features you'd like to see prioritized in our upcoming phases.
                </p>
                <button className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors w-full">
                  Cast Your Vote
                </button>
              </div>
              
              <div className="glassmorphism rounded-xl p-6">
                <h4 className="font-semibold mb-3">Developer Updates</h4>
                <p className="text-muted-foreground mb-4">
                  Get notified about new releases, feature updates, and technical discussions.
                </p>
                <button className="bg-secondary/90 hover:bg-secondary text-foreground px-4 py-2 rounded-lg transition-colors w-full border border-white/10">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatusIcon = ({ status, className }: { status: string, className?: string }) => {
  if (status === "completed") {
    return <CheckCircle2 className={cn("h-5 w-5 text-green-400", className)} />;
  } else if (status === "current") {
    return <CheckCircle2 className={cn("h-5 w-5 text-blue-400", className)} />;
  } else {
    return <Circle className={cn("h-5 w-5 text-muted-foreground", className)} />;
  }
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <ArrowRight className={className} />
);

export default RoadmapSection;