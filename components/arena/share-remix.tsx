"use client";

import { motion } from 'framer-motion';
import { Share2, Copy, Github, MessageSquare, Twitter, User, Link, Shuffle } from 'lucide-react';
import { cn } from '@/lib/utils';

const ShareRemix = () => {
  const shareOptions = [
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Discord', color: 'purple' },
    { icon: <Twitter className="h-5 w-5" />, label: 'X / Twitter', color: 'blue' },
    { icon: <User className="h-5 w-5" />, label: 'Profile', color: 'green' }
  ];

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
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Share2 className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🚀 <span className="text-gradient">Share, Remix, Challenge</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Make It Social. Make It Viral.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Once you complete a run, you can instantly export results, create strategy challenges, 
              and fork others' strategies. Learning happens faster when it's shared.
            </p>
            
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
              <p className="text-purple-400 font-medium text-center">
                🫂 Learning happens faster when it's shared. Let your edge echo across the chain.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Export & Share */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Share2 className="h-6 w-6 text-primary" />
                Export & Share
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Export results to Discord, X, or your EtherEdge profile
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                {shareOptions.map((option, index) => (
                  <motion.button
                    key={option.label}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-lg transition-all",
                      option.color === 'purple' ? "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30" :
                      option.color === 'blue' ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" :
                      "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.icon}
                    <span className="text-sm font-medium">{option.label}</span>
                  </motion.button>
                ))}
              </div>
              
              <p className="text-sm text-muted-foreground">
                Export results to Discord, X, or your EtherEdge profile
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Link className="h-5 w-5 text-primary" />
                Strategy Challenges
              </h4>
              
              <div className="space-y-4">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <label className="block text-sm font-medium mb-2">Challenge Link</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      value="https://etheredge.io/arena/challenge/vol-crush-v3-84f2a"
                      readOnly
                      className="flex-1 bg-secondary/50 border border-white/10 rounded-lg px-3 py-2 text-sm"
                    />
                    <motion.button
                      className="px-4 py-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded-lg transition-colors flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Copy className="h-4 w-4" />
                      Copy
                    </motion.button>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Create Strategy Challenges—send a link and dare others to beat your alpha
                </p>
              </div>
            </div>
          </motion.div>

          {/* Arena Cards & Fork/Remix */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Arena Cards</h3>
              
              {/* Mock Arena Card */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold">Volatility Crusher v3</h4>
                  <span className="text-sm bg-purple-500/30 px-3 py-1 rounded-full">Momentum</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">+287%</div>
                    <div className="text-sm text-muted-foreground">Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3.42</div>
                    <div className="text-sm text-muted-foreground">Sharpe</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">72%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-sm">
                      🧙‍♂️
                    </div>
                    <span className="text-sm">CryptoWizard</span>
                  </div>
                  <span className="text-sm text-muted-foreground">May 2024</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Generate Arena Cards—compact, stylized infographics that summarize your win rate, 
                Sharpe ratio, and P&L in seconds
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                Fork and Remix
              </h4>
              
              <div className="flex gap-4 mb-6">
                <motion.button
                  className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="h-4 w-4" />
                  Fork Strategy
                </motion.button>
                <motion.button
                  className="flex-1 bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-3 rounded-lg transition-colors border border-white/10 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Shuffle className="h-4 w-4" />
                  Remix
                </motion.button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Fork and Remix someone else's strategy with a single click, like GitHub for trading
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShareRemix;