"use client";

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Zap, LineChart, Eye, Puzzle as PuzzlePiece, AlertCircle, GanttChart, Vote, Receipt, Timer, Plug as Plugs, HelpCircle, Music2, Heart, Clock, Scroll } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      id: 1,
      icon: <Eye className="h-8 w-8 text-primary" />,
      emoji: "🩻🔬",
      title: "X-Ray Model Cards",
      description: "Transparency isn't just a buzzword at EtherEdge—it's a superpower. With X-Ray Model Cards, every single prediction, parameter tweak, and data transformation is laid bare in a slick, interactive format."
    },
    {
      id: 2,
      icon: <PuzzlePiece className="h-8 w-8 text-pink-500" />,
      emoji: "🧩🛠️",
      title: "Edge Blocks: Build Your Own Signal Stack",
      description: "Your edge, your rules. EtherEdge's Edge Blocks feature works like quant LEGO—snap together custom indicators, features, and signals to create the ultimate forecasting machine."
    },
    {
      id: 3,
      icon: <GanttChart className="h-8 w-8 text-cyan-500" />,
      emoji: "🪩🌈",
      title: "Market Mood Ring",
      description: "What if your trading model could actually \"feel\" the market? With Market Mood Ring, EtherEdge goes beyond raw numbers, sensing the vibe—bullish, bearish, sideways, or outright chaos."
    },
    {
      id: 4,
      icon: <AlertCircle className="h-8 w-8 text-orange-500" />,
      emoji: "🚨⚡",
      title: "Anomaly Siren",
      description: "Sometimes the market just gets… weird. A flash crash, a rogue tweet, or a data glitch can wreck even the smartest system. That's why EtherEdge features the Anomaly Siren."
    },
    {
      id: 5,
      icon: <LineChart className="h-8 w-8 text-green-500" />,
      emoji: "🎛️👁️",
      title: "Live Insight Overlays",
      description: "Every chart on EtherEdge is more than just a pretty line—it's a living, breathing explainer. With Live Insight Overlays, you get instant, hover-powered breakdowns."
    },
    {
      id: 6,
      icon: <Vote className="h-8 w-8 text-purple-500" />,
      emoji: "🗳️🔥",
      title: "Feature Frenzy Voting",
      description: "EtherEdge is a community, not a dictatorship. With Feature Frenzy Voting, every user has a voice in what comes next—propose new features, vote for your favorite assets."
    },
    {
      id: 7,
      icon: <Receipt className="h-8 w-8 text-yellow-500" />,
      emoji: "🧾💥",
      title: "Win-Loss Receipts",
      description: "Let's get real: No trading model wins every time. EtherEdge's Win-Loss Receipts bring radical transparency to the game. Every prediction—win or loss—is tracked."
    },
    {
      id: 8,
      icon: <Timer className="h-8 w-8 text-blue-500" />,
      emoji: "🏟️🕹️",
      title: "Instant Backtest Arena",
      description: "Welcome to your training ground for trading glory. EtherEdge's Instant Backtest Arena lets you simulate trades, test new strategies, and experiment with tweaks."
    },
    {
      id: 9,
      icon: <Plugs className="h-8 w-8 text-red-500" />,
      emoji: "🎉🔗",
      title: "Plug-In Party API",
      description: "EtherEdge was built for open ecosystems. With the Plug-In Party API, you can bring EtherEdge signals into your bots, trading dashboards, Discord servers, or DeFi projects."
    },
    {
      id: 10,
      icon: <HelpCircle className="h-8 w-8 text-indigo-500" />,
      emoji: "🌈🛡️",
      title: "Confidence Halo",
      description: "Forget one-dimensional predictions. EtherEdge wraps every forecast in a glowing \"confidence halo\"—a visual band showing the likely range of outcomes for every price call."
    },
    {
      id: 11,
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      emoji: "🏆🚀",
      title: "Top Gun Leaderboards",
      description: "EtherEdge turns trading into a friendly battlefield. Compete on live leaderboards, submit your own model tweaks, and see how your edge stacks up against the brightest minds."
    },
    {
      id: 12,
      icon: <Music2 className="h-8 w-8 text-teal-500" />,
      emoji: "🎵💻",
      title: "Jupyter Jam Sessions",
      description: "Why settle for static charts or locked-down workflows? EtherEdge gives you live, remixable Jupyter Notebooks with real market data."
    },
    {
      id: 13,
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      emoji: "💓📊",
      title: "Sentiment Pulse Detector",
      description: "Markets run on emotion, not just math. EtherEdge's Sentiment Pulse Detector tracks the real-time vibe—FOMO, FUD, whale games, and retail panic."
    },
    {
      id: 14,
      icon: <Clock className="h-8 w-8 text-cyan-400" />,
      emoji: "⏳🔄",
      title: "Edge Time Machine",
      description: "Imagine rewinding the market's greatest moments, but with your model's eyes. The Edge Time Machine lets you replay any point in history with context."
    },
    {
      id: 15,
      icon: <Scroll className="h-8 w-8 text-violet-500" />,
      emoji: "📝⚡",
      title: "Manifesto Mode",
      description: "When you need a discipline boost, flip on Manifesto Mode. Get real-time reminders, trading wisdom, and \"edge checks\" overlaid onto your workspace."
    }
  ];
  
  const handleCardClick = (index: number) => {
    setActiveFeature(index);
    
    // Scroll to selected card on mobile
    if (window.innerWidth < 768 && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card');
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };
  
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">15 Features</span> That Make EtherEdge The Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each feature is designed to give you an edge in the crypto market, 
            with transparency and control at the forefront.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className={cn(
            "glassmorphism p-6 rounded-2xl border-2 col-span-1 md:col-span-2",
            "transform transition-all duration-500",
            activeFeature % 3 === 0 ? "border-primary/50" : 
            activeFeature % 3 === 1 ? "border-pink-500/50" : "border-cyan-500/50"
          )}>
            <div className="flex items-center mb-4">
              <div className={cn(
                "p-3 rounded-lg mr-4",
                activeFeature % 3 === 0 ? "bg-primary/20" : 
                activeFeature % 3 === 1 ? "bg-pink-500/20" : "bg-cyan-500/20"
              )}>
                {features[activeFeature].icon}
              </div>
              <div>
                <span className="text-xl mr-2">{features[activeFeature].emoji}</span>
                <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
              </div>
            </div>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {features[activeFeature].description}
            </p>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-3">Why this matters:</h4>
              <p className="text-muted-foreground">
                This feature embodies our core principles of transparency, simplicity, and user control.
                It's not just about having a feature – it's about having the right feature that gives you
                a genuine edge in the market.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="glassmorphism rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Why choose EtherEdge?</h3>
              <ul className="space-y-3">
                <ListItem>Transparent, explainable models</ListItem>
                <ListItem>Full control over your strategy</ListItem>
                <ListItem>Community-driven development</ListItem>
                <ListItem>Built for all experience levels</ListItem>
              </ul>
            </div>
            
            <div className="glassmorphism rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <blockquote className="text-lg italic border-l-4 border-primary pl-4">
                "Old tools, wielded well, still cut the sharpest."
              </blockquote>
              <p className="mt-4 text-right text-muted-foreground">— EtherEdge Manifesto</p>
            </div>
          </div>
        </div>
        
        <div 
          className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:gap-6" 
          ref={cardsRef}
        >
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={cn(
                "feature-card min-w-[240px] snap-center flex-shrink-0 md:min-w-0",
                index === activeFeature && "border-primary/50 bg-primary/5"
              )}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex items-center mb-3">
                <div className={cn(
                  "p-2 rounded-md mr-3 bg-secondary/80",
                  index === activeFeature && "bg-primary/20"
                )}>
                  {feature.icon}
                </div>
                <span className="text-xl">{feature.emoji}</span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {feature.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
    <span>{children}</span>
  </li>
);

export default FeaturesSection;