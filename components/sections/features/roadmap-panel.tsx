"use client";

import { motion } from 'framer-motion';
import { Vote, Calendar, Heart, Wrench, Lightbulb, Code, TestTube, Rocket, Clock, Users, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapItem {
  id: string;
  name: string;
  description: string;
  status: 'in-development' | 'design' | 'ideation';
  votes: number;
  eta: string;
  progress: number;
}

interface RoadmapPanelProps {
  items: RoadmapItem[];
}

const RoadmapPanel = ({ items }: RoadmapPanelProps) => {
  const statusConfig = {
    'in-development': {
      icon: <Code className="h-5 w-5" />,
      color: 'blue',
      label: 'In Development',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    },
    'design': {
      icon: <TestTube className="h-5 w-5" />,
      color: 'purple',
      label: 'Design Phase',
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-400'
    },
    'ideation': {
      icon: <Lightbulb className="h-5 w-5" />,
      color: 'amber',
      label: 'Ideation',
      bgColor: 'bg-amber-500/20',
      textColor: 'text-amber-400'
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Wrench className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🛠️ <span className="text-gradient">Coming Soon Panel</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Where Vision Meets User Voting
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🚧 In This Section:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <RoadmapFeature
                icon={<Rocket className="h-5 w-5" />}
                title="Feature Teasers"
                description="Sneak peeks and early prototypes"
              />
              <RoadmapFeature
                icon={<Clock className="h-5 w-5" />}
                title="Build Queue"
                description="Real progress tracking"
              />
              <RoadmapFeature
                icon={<Vote className="h-5 w-5" />}
                title="Vote to Prioritize"
                description="Community-driven development"
              />
              <RoadmapFeature
                icon={<Users className="h-5 w-5" />}
                title="Beta Testing"
                description="Early access opportunities"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => (
            <RoadmapCard key={item.id} item={item} index={index} statusConfig={statusConfig} />
          ))}
        </div>

        {/* Community Voting CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto">
            <Vote className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              🗳️ If the community roars for it, EtherEdge builds it.
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              It's not a wishlist—it's a pact. Your votes directly influence our development priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all">
                View Full Roadmap
              </button>
              <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
                Join Beta Program
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface RoadmapCardProps {
  item: RoadmapItem;
  index: number;
  statusConfig: any;
}

const RoadmapCard = ({ item, index, statusConfig }: RoadmapCardProps) => {
  const config = statusConfig[item.status];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="feature-card group relative overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <span className={cn(
          "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2",
          config.bgColor,
          config.textColor
        )}>
          {config.icon}
          {config.label}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-6">{item.description}</p>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span className="font-medium">{item.progress}%</span>
        </div>
        <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
          <motion.div
            className={cn(
              "h-3 rounded-full",
              item.status === 'in-development' ? "bg-blue-500" :
              item.status === 'design' ? "bg-purple-500" :
              "bg-amber-500"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${item.progress}%` }}
            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          />
        </div>
      </div>
      
      {/* Stats */}
      <div className="flex items-center justify-between mb-6">
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
      
      {/* Vote Button */}
      <motion.button
        className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-3 rounded-lg transition-all border border-white/10 flex items-center justify-center gap-2 group/btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Heart className="h-4 w-4 group-hover/btn:text-red-400 transition-colors" />
        Vote to Prioritize
        <TrendingUp className="h-4 w-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
      </motion.button>
      
      {/* Hover Effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
        `bg-gradient-to-br from-${config.color}-500/5 to-transparent`
      )} />
    </motion.div>
  );
};

interface RoadmapFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RoadmapFeature = ({ icon, title, description }: RoadmapFeatureProps) => (
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

export default RoadmapPanel;