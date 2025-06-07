"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Target, Zap, Users, Brain, Lightbulb, Rocket } from 'lucide-react';

const ReadyToEnter = () => {
  const motivationCards = [
    {
      icon: <Target className="h-10 w-10" />,
      title: 'Curiosity',
      description: 'Let me try this new stack...',
      color: 'blue',
      emoji: '🔍'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Iteration',
      description: 'What if I swapped this feature out?',
      color: 'purple',
      emoji: '⚡'
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Sharing',
      description: 'I\'ll post this combo on Discord...',
      color: 'green',
      emoji: '🤝'
    },
    {
      icon: <Trophy className="h-10 w-10" />,
      title: 'Competition',
      description: 'They beat me by $50. Not for long.',
      color: 'amber',
      emoji: '🏆'
    }
  ];

  const impactAreas = [
    {
      title: 'Turns effort into recognition',
      description: 'Your hard work gets the spotlight it deserves',
      icon: <Trophy className="h-8 w-8" />,
      color: 'amber'
    },
    {
      title: 'Turns models into movement',
      description: 'Individual strategies become community trends',
      icon: <Brain className="h-8 w-8" />,
      color: 'purple'
    },
    {
      title: 'Turns data grind into culture',
      description: 'Technical work becomes social connection',
      icon: <Users className="h-8 w-8" />,
      color: 'blue'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ⚔️ Ready to <span className="text-gradient">Enter the Arena?</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Leaderboard & Hall of Fame is more than cosmetic. It's the fuel that powers 
            the entire EtherEdge economy of effort.
          </motion.p>

          {/* Enhanced Motivation Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {motivationCards.map((card, index) => (
              <EnhancedMotivationCard key={index} card={card} index={index} />
            ))}
          </motion.div>

          {/* Enhanced Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glassmorphism rounded-3xl p-12 max-w-6xl mx-auto mb-16 relative overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-cyan-500/5"
              animate={{ 
                background: [
                  'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
                  'linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)',
                  'linear-gradient(225deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Lightbulb className="h-16 w-16 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Rocket className="h-16 w-16 text-purple-400" />
                </motion.div>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Beyond Metrics, Into Mythos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {impactAreas.map((area, index) => (
                  <EnhancedImpactCard key={index} area={area} index={index} />
                ))}
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                In a world where most platforms treat data work as solitary, EtherEdge makes it 
                communal. Gamified. Glorified. <span className="text-primary font-semibold">Alive.</span>
              </p>
            </div>
          </motion.div>

          {/* Enhanced Call to Action */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    'linear-gradient(45deg, #ec4899, #3b82f6)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                Start building.
              </motion.h3>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #8b5cf6, #ec4899)',
                    'linear-gradient(45deg, #ec4899, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                Backtest loud.
              </motion.h3>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-12"
                animate={{ 
                  background: [
                    'linear-gradient(45deg, #ec4899, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #ec4899)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
              >
                And maybe—just maybe—your name joins the <span className="text-gradient">Wall</span>.
              </motion.h3>
            </div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 flex items-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Rocket className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Build Your Strategy</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-foreground px-12 py-6 rounded-2xl font-bold text-xl transition-all border border-purple-500/30 backdrop-blur-lg flex items-center gap-3 shadow-xl hover:shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <Trophy className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">Learn From Legends</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface EnhancedMotivationCardProps {
  card: any;
  index: number;
}

const EnhancedMotivationCard = ({ card, index }: EnhancedMotivationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
    className="feature-card text-center group relative overflow-hidden"
    whileHover={{ y: -8, scale: 1.03 }}
  >
    {/* Background Effects */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${card.color}-500/10 to-transparent`}
    />
    
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${card.color}-500/5 blur-xl`}
    />
    
    <div className="relative z-10">
      {/* Enhanced Icon */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <motion.div
          className={`p-4 rounded-2xl bg-${card.color}-500/20 text-${card.color}-400 group-hover:scale-110 transition-transform relative`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {card.icon}
          <motion.div
            className={`absolute inset-0 bg-${card.color}-400/30 rounded-2xl blur-lg`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.div 
          className="text-4xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {card.emoji}
        </motion.div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
        {card.title}
      </h3>
      <p className="text-muted-foreground text-lg italic leading-relaxed">
        "{card.description}"
      </p>
    </div>
  </motion.div>
);

interface EnhancedImpactCardProps {
  area: any;
  index: number;
}

const EnhancedImpactCard = ({ area, index }: EnhancedImpactCardProps) => (
  <motion.div
    className="text-center group"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <motion.div
      className={`p-4 rounded-2xl bg-${area.color}-500/20 text-${area.color}-400 inline-flex mb-4 group-hover:scale-110 transition-transform`}
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.5 }}
    >
      {area.icon}
    </motion.div>
    <h4 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
      {area.title}
    </h4>
    <p className="text-muted-foreground leading-relaxed">
      {area.description}
    </p>
  </motion.div>
);

export default ReadyToEnter;