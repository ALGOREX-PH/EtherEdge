"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Star, TrendingUp, Users, Clock, ArrowRight, Play, Eye, Zap, Heart, Vote, Calendar, Code, Brain, Gauge, AlertTriangle, Trophy, Target, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function FeaturesHubPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Features', count: 15 },
    { id: 'prediction', name: 'Prediction', count: 5 },
    { id: 'analysis', name: 'Analysis', count: 4 },
    { id: 'visualization', name: 'Visualization', count: 3 },
    { id: 'community', name: 'Community', count: 3 }
  ];

  const features = [
    {
      id: 'confidence-halo',
      name: 'Confidence Halo',
      category: 'prediction',
      description: 'Visual confidence bands that pulse with prediction certainty',
      icon: <Eye className="h-6 w-6" />,
      color: 'blue',
      popularity: 95,
      usageCount: '12.4k',
      demoAvailable: true,
      isNew: false,
      tags: ['prediction', 'visualization', 'confidence']
    },
    {
      id: 'anomaly-siren',
      name: 'Anomaly Siren',
      category: 'analysis',
      description: 'Real-time alerts for unusual market behavior and outliers',
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'red',
      popularity: 88,
      usageCount: '8.7k',
      demoAvailable: true,
      isNew: false,
      tags: ['alerts', 'anomaly', 'real-time']
    },
    {
      id: 'edge-time-machine',
      name: 'Edge Time Machine',
      category: 'analysis',
      description: 'Navigate historical market states with hindsight analysis',
      icon: <Clock className="h-6 w-6" />,
      color: 'purple',
      popularity: 92,
      usageCount: '15.2k',
      demoAvailable: true,
      isNew: false,
      tags: ['historical', 'backtesting', 'analysis']
    },
    {
      id: 'top-gun-leaderboards',
      name: 'Top Gun Leaderboards',
      category: 'community',
      description: 'Compete with the best traders and model builders',
      icon: <Trophy className="h-6 w-6" />,
      color: 'amber',
      popularity: 85,
      usageCount: '6.3k',
      demoAvailable: false,
      isNew: false,
      tags: ['competition', 'leaderboard', 'community']
    },
    {
      id: 'signal-fusion',
      name: 'Signal Fusion',
      category: 'prediction',
      description: 'Combine multiple indicators into powerful composite signals',
      icon: <Zap className="h-6 w-6" />,
      color: 'green',
      popularity: 90,
      usageCount: '9.8k',
      demoAvailable: true,
      isNew: false,
      tags: ['signals', 'fusion', 'indicators']
    },
    {
      id: 'sentiment-radar',
      name: 'Sentiment Radar',
      category: 'analysis',
      description: 'Track market sentiment across social media and news',
      icon: <Gauge className="h-6 w-6" />,
      color: 'pink',
      popularity: 87,
      usageCount: '11.1k',
      demoAvailable: true,
      isNew: false,
      tags: ['sentiment', 'social', 'radar']
    },
    {
      id: 'neural-pattern-detector',
      name: 'Neural Pattern Detector',
      category: 'prediction',
      description: 'AI-powered pattern recognition for complex market structures',
      icon: <Brain className="h-6 w-6" />,
      color: 'cyan',
      popularity: 78,
      usageCount: '4.2k',
      demoAvailable: true,
      isNew: true,
      tags: ['ai', 'patterns', 'neural']
    },
    {
      id: 'volatility-compass',
      name: 'Volatility Compass',
      category: 'visualization',
      description: 'Navigate market volatility with directional guidance',
      icon: <Target className="h-6 w-6" />,
      color: 'orange',
      popularity: 83,
      usageCount: '7.5k',
      demoAvailable: true,
      isNew: false,
      tags: ['volatility', 'navigation', 'compass']
    }
  ];

  const communityPicks = [
    {
      id: 'confidence-halo',
      name: 'Confidence Halo',
      rating: 4.9,
      reviews: 234,
      testimonial: "When I added the 7-Day Momentum stack with the Confidence Halo, it felt like flipping on night vision in the dark. EtherEdge doesn't just give me a forecast—it gives me conviction.",
      author: "GenesisX",
      role: "Edge Pro User",
      usageGrowth: "+45%"
    },
    {
      id: 'anomaly-siren',
      name: 'Anomaly Siren',
      rating: 4.8,
      reviews: 189,
      testimonial: "The Anomaly Siren caught the flash crash 3 minutes before it happened. Saved me from a 15% loss and turned it into a 8% gain.",
      author: "CryptoSage",
      role: "Quant Trader",
      usageGrowth: "+67%"
    },
    {
      id: 'edge-time-machine',
      name: 'Edge Time Machine',
      rating: 4.9,
      reviews: 312,
      testimonial: "Being able to replay the 2021 bull run with current models is incredible. It's like having a crystal ball for backtesting.",
      author: "DataDriven",
      role: "Research Analyst",
      usageGrowth: "+23%"
    }
  ];

  const roadmapItems = [
    {
      id: 'multi-timeframe-neural-net',
      name: 'Multi-Timeframe Neural Net',
      description: 'Advanced neural network that analyzes multiple timeframes simultaneously',
      status: 'in-development',
      votes: 1247,
      eta: 'Q2 2024',
      progress: 75
    },
    {
      id: 'portfolio-optimizer',
      name: 'Portfolio Optimizer',
      description: 'AI-driven portfolio allocation and rebalancing recommendations',
      status: 'design',
      votes: 892,
      eta: 'Q3 2024',
      progress: 25
    },
    {
      id: 'smart-money-tracker',
      name: 'Smart Money Tracker',
      description: 'Track and analyze whale movements and institutional flows',
      status: 'ideation',
      votes: 1456,
      eta: 'Q4 2024',
      progress: 10
    }
  ];

  const filteredFeatures = features.filter(feature => {
    const matchesSearch = feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feature.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || feature.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">🔍 FEATURES HUB 🧩✨</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              All Power. All Options.{' '}
              <span className="text-gradient">Welcome to the Heart of EtherEdge.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              The Features Hub is not just a collection of tools. It's the engine room of innovation, 
              a living laboratory where data science, crypto intuition, and user-driven design collide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorial
              </button>
              <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
                View All Features
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="glassmorphism rounded-2xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search features, capabilities, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-secondary/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors",
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
                    )}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight Cards */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎴 <span className="text-gradient">Feature Spotlight Cards</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Explore Each EtherEdge Power—Visually, Interactively, Intuitively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFeatures.map((feature, index) => (
              <FeatureSpotlightCard
                key={feature.id}
                feature={feature}
                index={index}
                onSelect={() => setSelectedFeature(feature.id)}
                isSelected={selectedFeature === feature.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Community Picks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              👑 <span className="text-gradient">Top Community Picks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Celebrating What the Community Loves Most. EtherEdge doesn't dictate which features shine—you do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {communityPicks.map((pick, index) => (
              <CommunityPickCard key={pick.id} pick={pick} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Panel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🛠️ <span className="text-gradient">Coming Soon Panel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Where Vision Meets User Voting. Transparency is a core EtherEdge principle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => (
              <RoadmapCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all">
              View Full Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 noise-bg z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎯 The Philosophy Behind the <span className="text-gradient">Features Hub</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Not a List. Not a Menu. A Launchpad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <PhilosophyCard
                icon={<Users className="h-8 w-8" />}
                title="For Beginners"
                description="Feel invited to poke around and try something new. Every feature has guided tutorials and safe sandbox environments."
              />
              <PhilosophyCard
                icon={<Brain className="h-8 w-8" />}
                title="For Analysts"
                description="Feel empowered to dig into the mechanics. Access raw data, model parameters, and detailed documentation."
              />
              <PhilosophyCard
                icon={<Code className="h-8 w-8" />}
                title="For Pros"
                description="Feel respected—given tools sharp enough to win, fast enough to adapt, and open enough to customize."
              />
            </div>

            <div className="mt-16 glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl font-medium mb-6">
                "We built this not just to showcase what EtherEdge can do, but to inspire what you can do with it."
              </blockquote>
              <p className="text-lg text-muted-foreground">
                You're not here to consume. You're here to co-create. EtherEdge believes the future of finance is agentic, interpretable, and community-built.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface FeatureSpotlightCardProps {
  feature: any;
  index: number;
  onSelect: () => void;
  isSelected: boolean;
}

const FeatureSpotlightCard = ({ feature, index, onSelect, isSelected }: FeatureSpotlightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={cn(
      "feature-card cursor-pointer relative overflow-hidden",
      isSelected && "border-primary/50 bg-primary/5"
    )}
    onClick={onSelect}
  >
    {feature.isNew && (
      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
        NEW
      </div>
    )}
    
    <div className={cn(
      "p-3 rounded-lg inline-flex mb-4",
      `bg-${feature.color}-500/20 text-${feature.color}-400`
    )}>
      {feature.icon}
    </div>
    
    <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
    <p className="text-muted-foreground mb-4">{feature.description}</p>
    
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="text-sm font-medium">{feature.popularity}%</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{feature.usageCount}</span>
      </div>
    </div>
    
    <div className="flex flex-wrap gap-1 mb-4">
      {feature.tags.slice(0, 3).map((tag: string) => (
        <span key={tag} className="text-xs px-2 py-1 bg-secondary/50 rounded-full">
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex gap-2">
      {feature.demoAvailable && (
        <button className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm transition-colors">
          Try Demo
        </button>
      )}
      <button className="flex-1 bg-secondary/50 hover:bg-secondary/70 text-foreground px-3 py-2 rounded-lg text-sm transition-colors border border-white/10">
        Learn More
      </button>
    </div>
  </motion.div>
);

interface CommunityPickCardProps {
  pick: any;
  index: number;
}

const CommunityPickCard = ({ pick, index }: CommunityPickCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="feature-card"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{pick.name}</h3>
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="font-medium">{pick.rating}</span>
        <span className="text-sm text-muted-foreground">({pick.reviews})</span>
      </div>
    </div>
    
    <blockquote className="text-lg italic mb-4 border-l-4 border-primary pl-4">
      "{pick.testimonial}"
    </blockquote>
    
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="font-medium">{pick.author}</p>
        <p className="text-sm text-muted-foreground">{pick.role}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-muted-foreground">Usage Growth</p>
        <p className="font-medium text-green-400">{pick.usageGrowth}</p>
      </div>
    </div>
    
    <button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors">
      Try This Feature
    </button>
  </motion.div>
);

interface RoadmapCardProps {
  item: any;
  index: number;
}

const RoadmapCard = ({ item, index }: RoadmapCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="feature-card"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <span className={cn(
        "px-3 py-1 rounded-full text-sm font-medium",
        item.status === 'in-development' ? "bg-blue-500/20 text-blue-400" :
        item.status === 'design' ? "bg-purple-500/20 text-purple-400" :
        "bg-gray-500/20 text-gray-400"
      )}>
        {item.status.replace('-', ' ')}
      </span>
    </div>
    
    <p className="text-muted-foreground mb-4">{item.description}</p>
    
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span>Progress</span>
        <span>{item.progress}%</span>
      </div>
      <div className="w-full bg-secondary/30 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${item.progress}%` }}
        />
      </div>
    </div>
    
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Vote className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{item.votes.toLocaleString()}</span>
        <span className="text-sm text-muted-foreground">votes</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{item.eta}</span>
      </div>
    </div>
    
    <button className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors border border-white/10 flex items-center justify-center gap-2">
      <Heart className="h-4 w-4" />
      Vote to Prioritize
    </button>
  </motion.div>
);

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PhilosophyCard = ({ icon, title, description }: PhilosophyCardProps) => (
  <div className="feature-card text-center">
    <div className="p-4 rounded-lg bg-primary/20 text-primary inline-flex mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);