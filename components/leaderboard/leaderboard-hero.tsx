"use client";

import { motion } from 'framer-motion';
import { Trophy, Crown, Flame, Star, Zap, Users, Target, Award } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';

const LeaderboardHero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Trophy className="h-24 w-24 text-primary" />
        </motion.div>
      </div>
      
      <div className="absolute top-32 right-16 opacity-20">
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Crown className="h-20 w-20 text-yellow-400" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 left-20 opacity-20">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Star className="h-16 w-16 text-purple-400" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Enhanced Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 mb-8 backdrop-blur-lg shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Trophy className="h-7 w-7 text-primary" />
              <motion.div
                className="absolute inset-0 bg-primary/30 rounded-full blur-lg"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              🎖️ LEADERBOARD & HALL OF FAME 🏆🔥
            </span>
          </motion.div>
          
          {/* Enhanced Main Title */}
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-8 tracking-tight relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="relative">
              Where Data Becomes{' '}
              <span className="text-gradient glow relative">
                Glory
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg blur-xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </span>
          </motion.h1>
          
          {/* Enhanced Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glassmorphism rounded-2xl p-8 max-w-5xl mx-auto mb-16 relative overflow-hidden"
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-purple-500/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl italic mb-6 font-medium">
                "Where Data Becomes Glory, and Every Backtest Has a Shot at Immortality."
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is EtherEdge's Wall of Flame—where every streak, win, failure, comeback, 
                and breakout strategy is immortalized, visualized, and celebrated. It's not just 
                a record of who's winning—it's a full-on arena of competitive spirit.
              </p>
            </div>
          </motion.div>
          
          {/* Enhanced Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-12 py-6 rounded-2xl font-bold text-xl transition-all flex items-center justify-center group shadow-2xl shadow-primary/30 hover:shadow-primary/50 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Crown className="mr-4 h-7 w-7 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10">View Leaderboard</span>
            </motion.button>
            
            <motion.button 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-foreground px-12 py-6 rounded-2xl font-bold text-xl transition-all border border-purple-500/30 backdrop-blur-lg flex items-center justify-center group shadow-xl hover:shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <Star className="mr-4 h-7 w-7 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="relative z-10">Hall of Fame</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Live Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <EnhancedStatCard
              icon={<Flame className="h-10 w-10" />}
              number="2,847"
              label="Active Competitors"
              description="Battling for supremacy"
              color="orange"
              delay={0}
            />
            <EnhancedStatCard
              icon={<Trophy className="h-10 w-10" />}
              number="156"
              label="Hall of Fame Members"
              description="Legends immortalized"
              color="primary"
              delay={0.1}
            />
            <EnhancedStatCard
              icon={<Zap className="h-10 w-10" />}
              number="47k+"
              label="Battles Fought"
              description="Strategies tested daily"
              color="yellow"
              delay={0.2}
            />
            <EnhancedStatCard
              icon={<Crown className="h-10 w-10" />}
              number="892%"
              label="Top Strategy Return"
              description="Current champion"
              color="purple"
              delay={0.3}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface EnhancedStatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}

const EnhancedStatCard = ({ icon, number, label, description, color, delay }: EnhancedStatCardProps) => (
  <motion.div 
    className="glassmorphism rounded-2xl p-8 text-center group relative overflow-hidden"
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.7 + delay }}
    whileHover={{ y: -8, scale: 1.03 }}
  >
    {/* Animated Background */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${color}-500/10 to-transparent`}
    />
    
    {/* Glow Effect */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${color}-500/5 blur-xl`}
    />
    
    <div className="relative z-10">
      <motion.div 
        className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className={`text-${color}-400 relative`}>
          {icon}
          <motion.div
            className={`absolute inset-0 bg-${color}-400/30 rounded-full blur-lg`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="text-4xl font-bold mb-3"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 + delay }}
      >
        {number}
      </motion.div>
      
      <div className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {label}
      </div>
      
      <div className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </div>
    </div>
    
    {/* Hover Border Effect */}
    <motion.div
      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300"
    />
  </motion.div>
);

export default LeaderboardHero;