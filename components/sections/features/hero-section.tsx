"use client";

import { motion } from 'framer-motion';
import { Play, Sparkles, Zap, TrendingUp, Users, Eye } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';

const FeaturesHeroSection = () => {
  return (
    <section className="py-20 relative min-h-[70vh] flex items-center">
      <ParticleBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-lg font-medium">🔍 FEATURES HUB 🧩✨</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            All Power. All Options.{' '}
            <span className="text-gradient glow">
              Welcome to the Heart of EtherEdge.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-5xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Features Hub is not just a collection of tools. It's the{' '}
            <span className="text-primary font-semibold">engine room of innovation</span>, 
            a living laboratory where data science, crypto intuition, and user-driven design collide.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all flex items-center justify-center group shadow-lg shadow-primary/20 hover:shadow-primary/40">
              <Play className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              Watch Tutorial
            </button>
            <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all border border-white/10 backdrop-blur-sm">
              Explore All Features
            </button>
          </motion.div>

          {/* Feature Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StatCard
              icon={<Zap className="h-8 w-8 text-primary" />}
              number="15+"
              label="Powerful Features"
              description="Each designed to give you an edge"
            />
            <StatCard
              icon={<Users className="h-8 w-8 text-green-400" />}
              number="50k+"
              label="Active Users"
              description="Building their edge daily"
            />
            <StatCard
              icon={<TrendingUp className="h-8 w-8 text-purple-400" />}
              number="95%"
              label="Satisfaction Rate"
              description="Community-driven excellence"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const StatCard = ({ icon, number, label, description }: StatCardProps) => (
  <div className="glassmorphism rounded-xl p-6 text-center">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-lg font-semibold mb-1">{label}</div>
    <div className="text-sm text-muted-foreground">{description}</div>
  </div>
);

export default FeaturesHeroSection;