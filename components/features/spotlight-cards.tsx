"use client";

import { motion } from 'framer-motion';
import { Star, Users, Play, ExternalLink, Sparkles, Zap, Clock, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  popularity: number;
  usageCount: string;
  demoAvailable: boolean;
  isNew: boolean;
  tags: string[];
}

interface SpotlightCardsProps {
  features: Feature[];
  selectedFeature: string | null;
  onSelectFeature: (id: string) => void;
}

const SpotlightCards = ({ features, selectedFeature, onSelectFeature }: SpotlightCardsProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Sparkles className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🎴 <span className="text-gradient">Feature Spotlight Cards</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Explore Each EtherEdge Power—Visually, Interactively, Intuitively.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🔍 What You'll Find Inside Each Card:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FeatureHighlight
                icon={<Play className="h-5 w-5" />}
                title="Live Demos"
                description="Interactive previews of features in action"
              />
              <FeatureHighlight
                icon={<Star className="h-5 w-5" />}
                title="Why It Matters"
                description="Practical edge and real-world benefits"
              />
              <FeatureHighlight
                icon={<Zap className="h-5 w-5" />}
                title="X-Ray Toggle"
                description="Peel back layers to see inner workings"
              />
              <FeatureHighlight
                icon={<TrendingUp className="h-5 w-5" />}
                title="Usage Stats"
                description="Real community engagement metrics"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureSpotlightCard
              key={feature.id}
              feature={feature}
              index={index}
              onSelect={() => onSelectFeature(feature.id)}
              isSelected={selectedFeature === feature.id}
              isHovered={hoveredCard === feature.id}
              onHover={() => setHoveredCard(feature.id)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureSpotlightCardProps {
  feature: Feature;
  index: number;
  onSelect: () => void;
  isSelected: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const FeatureSpotlightCard = ({ 
  feature, 
  index, 
  onSelect, 
  isSelected, 
  isHovered,
  onHover,
  onLeave 
}: FeatureSpotlightCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={cn(
      "feature-card cursor-pointer relative overflow-hidden group",
      isSelected && "border-primary/50 bg-primary/5 ring-2 ring-primary/20",
      "hover:border-primary/30 transition-all duration-300"
    )}
    onClick={onSelect}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    whileHover={{ y: -5 }}
  >
    {/* Background Glow Effect */}
    <div className={cn(
      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
      `bg-gradient-to-br from-${feature.color}-500/10 to-transparent`
    )} />

    {/* New Badge */}
    {feature.isNew && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium shadow-lg"
      >
        NEW
      </motion.div>
    )}
    
    {/* Icon */}
    <motion.div
      className={cn(
        "p-4 rounded-xl inline-flex mb-4 relative",
        `bg-${feature.color}-500/20 text-${feature.color}-400`
      )}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {feature.icon}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity",
        `bg-${feature.color}-500/10 blur-xl`
      )} />
    </motion.div>
    
    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {feature.name}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {feature.description}
      </p>
      
      {/* Stats */}
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
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {feature.tags.slice(0, 3).map((tag: string) => (
          <span 
            key={tag} 
            className="text-xs px-2 py-1 bg-secondary/50 rounded-full hover:bg-secondary/70 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        {feature.demoAvailable && (
          <motion.button
            className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-center gap-1 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
            Try Demo
          </motion.button>
        )}
        <motion.button
          className="flex-1 bg-secondary/50 hover:bg-secondary/70 text-foreground px-3 py-2 rounded-lg text-sm transition-all border border-white/10 flex items-center justify-center gap-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ExternalLink className="h-4 w-4" />
          Learn More
        </motion.button>
      </div>
    </div>

    {/* Hover Effect Overlay */}
    {isHovered && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
      />
    )}
  </motion.div>
);

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureHighlight = ({ icon, title, description }: FeatureHighlightProps) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
    <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default SpotlightCards;