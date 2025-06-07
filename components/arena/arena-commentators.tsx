"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Brain, Zap } from 'lucide-react';

const ArenaCommentators = () => {
  const commentators = [
    {
      id: 'quantzilla',
      name: 'QuantZilla',
      avatar: '🤖',
      personality: 'dry wit, brutal honesty, deeply insightful',
      quote: "You're using a lagging indicator in a momentum market? Bold strategy.",
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-indigo-500/20'
    },
    {
      id: 'datashroom',
      name: 'DataShroom',
      avatar: '🍄',
      personality: 'chill, trippy, highly interpretive',
      quote: "Whoa... your edge caught the halving wave like a psychedelic surfboard.",
      color: 'green',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'missfit',
      name: 'Miss Fit',
      avatar: '💪',
      personality: 'performance coach and optimizer bot',
      quote: "Great recovery in late 2022. Let's reduce your exposure window next time?",
      color: 'pink',
      bgGradient: 'from-pink-500/20 to-rose-500/20'
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
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
              <MessageSquare className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🤖 <span className="text-gradient">Arena Commentators</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                AI with Sass and Stats
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Your strategy deserves a hype team. Enter: the Arena Commentators, real-time AI avatars 
              who observe your runs and react like Twitch streamers mixed with MIT data professors.
            </p>
            
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-400 font-medium">
                These aren't just for show. They nudge you toward interpretability, better design, 
                and understanding tradeoffs in your logic.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {commentators.map((commentator, index) => (
            <CommentatorCard key={commentator.id} commentator={commentator} index={index} />
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glassmorphism rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            🎭 Live Commentary Demo
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Scenario: Your strategy just hit a 15% drawdown</h4>
              
              <div className="space-y-4">
                {commentators.map((commentator, index) => (
                  <motion.div
                    key={commentator.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.2 }}
                    className={`p-4 rounded-lg bg-gradient-to-r ${commentator.bgGradient} border border-white/10`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{commentator.avatar}</div>
                      <div>
                        <div className="font-semibold text-sm mb-1">{commentator.name}</div>
                        <div className="text-sm italic">
                          {index === 0 && "Ouch. That's what happens when you ignore correlation matrices."}
                          {index === 1 && "The market's teaching you a lesson, dude. Time to adapt and flow."}
                          {index === 2 && "Drawdowns are data points, not defeats. Let's analyze and optimize!"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Brain className="h-24 w-24 text-primary mx-auto mb-4 opacity-60" />
                <p className="text-lg text-muted-foreground">
                  Real-time AI commentary adapts to your strategy's performance
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CommentatorCardProps {
  commentator: any;
  index: number;
}

const CommentatorCard = ({ commentator, index }: CommentatorCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`feature-card group relative overflow-hidden`}
    whileHover={{ y: -5 }}
  >
    {/* Background Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-br ${commentator.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    
    <div className="relative z-10">
      {/* Avatar */}
      <motion.div 
        className="text-6xl mb-4 text-center"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {commentator.avatar}
      </motion.div>
      
      {/* Name */}
      <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors">
        {commentator.name}
      </h3>
      
      {/* Personality */}
      <p className="text-sm text-muted-foreground text-center mb-6 italic">
        {commentator.personality}
      </p>
      
      {/* Quote */}
      <div className="relative">
        <div className="absolute -top-2 -left-2 text-primary/30 text-2xl">"</div>
        <blockquote className="text-lg italic pl-4 border-l-4 border-primary/30 group-hover:border-primary/60 transition-colors">
          {commentator.quote}
        </blockquote>
      </div>
      
      {/* Interaction Button */}
      <motion.button
        className="w-full mt-6 bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-3 rounded-lg transition-all border border-white/10 flex items-center justify-center gap-2 group/btn"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Zap className="h-4 w-4 group-hover/btn:text-primary transition-colors" />
        <span className="font-medium">Chat with {commentator.name}</span>
      </motion.button>
    </div>
  </motion.div>
);

export default ArenaCommentators;