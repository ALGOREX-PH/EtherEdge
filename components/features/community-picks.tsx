"use client";

import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Play, Quote, Award, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommunityPick {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  testimonial: string;
  author: string;
  role: string;
  usageGrowth: string;
}

interface CommunityPicksProps {
  picks: CommunityPick[];
}

const CommunityPicks = ({ picks }: CommunityPicksProps) => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
              <Award className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                👑 <span className="text-gradient">Top Community Picks</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Celebrating What the Community Loves Most
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🏆 Each Hall of Fame Entry Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <HallOfFameFeature
                icon={<TrendingUp className="h-5 w-5" />}
                title="Live Usage Metrics"
                description="Real-time engagement data"
              />
              <HallOfFameFeature
                icon={<Quote className="h-5 w-5" />}
                title="User Testimonials"
                description="Authentic community feedback"
              />
              <HallOfFameFeature
                icon={<Play className="h-5 w-5" />}
                title="Video Reviews"
                description="Power user demonstrations"
              />
              <HallOfFameFeature
                icon={<Star className="h-5 w-5" />}
                title="Strategy Snapshots"
                description="Real-world success stories"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {picks.map((pick, index) => (
            <CommunityPickCard key={pick.id} pick={pick} index={index} />
          ))}
        </div>

        {/* Community Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glassmorphism rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
          <blockquote className="text-2xl font-medium mb-6 italic">
            "When I added the 7-Day Momentum stack with the Confidence Halo, it felt like flipping on night vision in the dark. 
            EtherEdge doesn't just give me a forecast—it gives me conviction."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-semibold">GenesisX</p>
              <p className="text-sm text-muted-foreground">Edge Pro User</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CommunityPickCardProps {
  pick: CommunityPick;
  index: number;
}

const CommunityPickCard = ({ pick, index }: CommunityPickCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="feature-card group relative overflow-hidden"
    whileHover={{ y: -5 }}
  >
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10">
      {/* Hall of Fame Badge - moved inside relative container */}
      <div className="flex justify-end mb-2">
        <div className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-medium">
          Hall of Fame
        </div>
      </div>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex-1 pr-4">
          {pick.name}
        </h3>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-medium text-lg">{pick.rating}</span>
          <span className="text-sm text-muted-foreground">({pick.reviews})</span>
        </div>
      </div>
      
      {/* Testimonial */}
      <div className="relative mb-6">
        <Quote className="h-6 w-6 text-primary/50 absolute -top-2 -left-1" />
        <blockquote className="text-lg italic pl-6 border-l-4 border-primary/30">
          {pick.testimonial}
        </blockquote>
      </div>
      
      {/* Author & Stats */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-medium">{pick.author}</p>
            <p className="text-sm text-muted-foreground">{pick.role}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Usage Growth</p>
          <p className="font-medium text-green-400 flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            {pick.usageGrowth}
          </p>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          Try This Feature
        </motion.button>
        <motion.button
          className="px-4 py-3 bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-lg transition-all border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

interface HallOfFameFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HallOfFameFeature = ({ icon, title, description }: HallOfFameFeatureProps) => (
  <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default CommunityPicks;