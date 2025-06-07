"use client";

import { motion } from 'framer-motion';
import { Trophy, Play, BarChart3, ArrowRight } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';

const ArenaHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center">
      <ParticleBackground />
      
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          > 
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Trophy className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-lg font-medium">🏟️ BACKTEST ARENA 🏆</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Where Strategies Go to{' '}
            <span className="text-gradient glow">
              Battle, Glory, and Growth
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism rounded-xl p-6 max-w-2xl mx-auto mb-12"
          >
            <blockquote className="text-xl md:text-2xl italic mb-4">
              "Markets may forget your predictions. But they'll remember your edge."
            </blockquote>
            <p className="text-muted-foreground">— The EtherEdge Manifesto</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all flex items-center justify-center group shadow-lg shadow-primary/20 hover:shadow-primary/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              Enter the Arena
            </motion.button>
            <motion.button 
              className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all border border-white/10 backdrop-blur-sm flex items-center justify-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BarChart3 className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              View Leaderboard
            </motion.button>
          </motion.div>

          {/* Arena Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StatCard
              icon={<Trophy className="h-8 w-8 text-primary" />}
              number="2,847"
              label="Active Strategies"
              description="Battle-tested and ranked"
            />
            <StatCard
              icon={<BarChart3 className="h-8 w-8 text-green-400" />}
              number="156%"
              label="Top Strategy Return"
              description="This month's champion"
            />
            <StatCard
              icon={<Play className="h-8 w-8 text-purple-400" />}
              number="47k+"
              label="Backtests Run"
              description="Strategies tested daily"
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
  <motion.div 
    className="glassmorphism rounded-xl p-6 text-center group"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="text-3xl font-bold mb-2">{number}</div>
    <div className="text-lg font-semibold mb-1">{label}</div>
    <div className="text-sm text-muted-foreground">{description}</div>
  </motion.div>
);

export default ArenaHero;