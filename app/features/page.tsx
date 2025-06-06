"use client";

import { useState } from 'react';
import { Eye, AlertTriangle, Clock, Trophy, Zap, Gauge, Brain, Target } from 'lucide-react';
import FeaturesHeroSection from '@/components/features/hero-section';
import SearchFilter from '@/components/features/search-filter';
import SpotlightCards from '@/components/features/spotlight-cards';
import CommunityPicks from '@/components/features/community-picks';
import RoadmapPanel from '@/components/features/roadmap-panel';
import PhilosophySection from '@/components/features/philosophy-section';

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
      description: 'Visual confidence bands that pulse with prediction certainty, showing the likely range of outcomes for every price call',
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
      description: 'Real-time alerts for unusual market behavior and outliers that could wreck even the smartest system',
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
      description: 'Navigate historical market states with hindsight analysis, replaying any point in history with context',
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
      description: 'Compete with the best traders and model builders on live leaderboards, submit your own model tweaks',
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
      description: 'Combine multiple indicators into powerful composite signals using Edge Blocks like quant LEGO',
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
      description: 'Track market sentiment across social media and news, sensing the vibe—bullish, bearish, or chaos',
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
      description: 'AI-powered pattern recognition for complex market structures with transparent, explainable logic',
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
      description: 'Navigate market volatility with directional guidance and live insight overlays on every chart',
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
      description: 'Advanced neural network that analyzes multiple timeframes simultaneously for enhanced prediction accuracy',
      status: 'in-development' as const,
      votes: 1247,
      eta: 'Q2 2024',
      progress: 75
    },
    {
      id: 'portfolio-optimizer',
      name: 'Portfolio Optimizer',
      description: 'AI-driven portfolio allocation and rebalancing recommendations based on EtherEdge signals',
      status: 'design' as const,
      votes: 892,
      eta: 'Q3 2024',
      progress: 25
    },
    {
      id: 'smart-money-tracker',
      name: 'Smart Money Tracker',
      description: 'Track and analyze whale movements and institutional flows with real-time alerts',
      status: 'ideation' as const,
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
      <FeaturesHeroSection />
      
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
      
      <SpotlightCards
        features={filteredFeatures}
        selectedFeature={selectedFeature}
        onSelectFeature={setSelectedFeature}
      />
      
      <CommunityPicks picks={communityPicks} />
      
      <RoadmapPanel items={roadmapItems} />
      
      <PhilosophySection />
    </div>
  );
}