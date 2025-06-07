"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Target, Zap, Users } from 'lucide-react';

const ReadyToEnter = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⚔️ Ready to <span className="text-gradient">Enter the Arena?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            The Leaderboard & Hall of Fame is more than cosmetic. It's the fuel that powers 
            the entire EtherEdge economy of effort.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <MotivationCard
              icon={<Target className="h-8 w-8" />}
              title="Curiosity"
              description="Let me try this new stack..."
              color="blue"
            />
            <MotivationCard
              icon={<Zap className="h-8 w-8" />}
              title="Iteration"
              description="What if I swapped this feature out?"
              color="purple"
            />
            <MotivationCard
              icon={<Users className="h-8 w-8" />}
              title="Sharing"
              description="I'll post this combo on Discord..."
              color="green"
            />
            <MotivationCard
              icon={<Trophy className="h-8 w-8" />}
              title="Competition"
              description="They beat me by $50. Not for long."
              color="amber"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Beyond Metrics, Into Mythos
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Turns effort into recognition</h4>
                <p className="text-muted-foreground text-sm">Your hard work gets the spotlight it deserves</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Turns models into movement</h4>
                <p className="text-muted-foreground text-sm">Individual strategies become community trends</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg mb-2">Turns data grind into culture</h4>
                <p className="text-muted-foreground text-sm">Technical work becomes social connection</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              In a world where most platforms treat data work as solitary, EtherEdge makes it 
              communal. Gamified. Glorified. Alive.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Start building.</h3>
              <h3 className="text-2xl font-bold mb-4">Backtest loud.</h3>
              <h3 className="text-2xl font-bold mb-8">
                And maybe—just maybe—your name joins the <span className="text-gradient">Wall</span>.
              </h3>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Build Your Strategy
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button 
                className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-10 py-5 rounded-xl font-medium text-lg transition-all border border-white/10 backdrop-blur-sm flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy className="h-5 w-5" />
                Learn From Legends
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface MotivationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const MotivationCard = ({ icon, title, description, color }: MotivationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="feature-card text-center group"
    whileHover={{ y: -5 }}
  >
    <div className={`p-4 rounded-xl bg-${color}-500/20 text-${color}-400 inline-flex mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm italic">"{description}"</p>
  </motion.div>
);

export default ReadyToEnter;