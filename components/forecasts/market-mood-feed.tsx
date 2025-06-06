"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, MessageSquare, Wallet, Volume2, ExternalLink, Clock, Zap, Activity, Radio } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MarketMoodFeedProps {
  marketMood: 'bullish' | 'bearish' | 'volatile';
}

interface FeedItem {
  id: string;
  type: 'mood' | 'anomaly' | 'social' | 'whale';
  title: string;
  description: string;
  timestamp: string;
  severity?: 'low' | 'medium' | 'high';
  icon: React.ReactNode;
  color: string;
  isNew?: boolean;
}

const MarketMoodFeed = ({ marketMood }: MarketMoodFeedProps) => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    {
      id: '1',
      type: 'whale',
      title: '⚠️ Whale Alert',
      description: '5,000 ETH removed from Coinbase Pro in the last hour.',
      timestamp: '2 minutes ago',
      severity: 'high',
      icon: <Wallet className="h-5 w-5" />,
      color: 'amber'
    },
    {
      id: '2',
      type: 'social',
      title: '🐦 Trending on X',
      description: 'Vitalik just posted about Ethereum scalability—model confidence updated.',
      timestamp: '10 minutes ago',
      severity: 'medium',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'blue'
    },
    {
      id: '3',
      type: 'anomaly',
      title: '🔥 Volume Spike',
      description: 'ETH trading 3.4x its 1hr average on Binance.',
      timestamp: '15 minutes ago',
      severity: 'high',
      icon: <Volume2 className="h-5 w-5" />,
      color: 'red'
    }
  ]);

  const [currentMoodData, setCurrentMoodData] = useState({
    sentiment: marketMood === 'bullish' ? 'Cautiously Bullish' : 
               marketMood === 'bearish' ? 'Bearish Pressure' : 'Highly Volatile',
    description: 'Sentiment improving over 4h timeframe',
    lastUpdate: '2m ago',
    strength: Math.floor(Math.random() * 30) + 70
  });

  // Simulate new feed items with enhanced animations
  useEffect(() => {
    const interval = setInterval(() => {
      const newItems = [
        {
          id: Date.now().toString(),
          type: 'mood' as const,
          title: '🌈 Mood Ring Update',
          description: `Market sentiment shifted to ${marketMood}`,
          timestamp: 'Just now',
          severity: 'medium' as const,
          icon: <TrendingUp className="h-5 w-5" />,
          color: marketMood === 'bullish' ? 'green' : marketMood === 'bearish' ? 'red' : 'purple',
          isNew: true
        }
      ];

      setFeedItems(prev => [...newItems, ...prev.slice(0, 9)]);
      
      // Remove new flag after animation
      setTimeout(() => {
        setFeedItems(prev => prev.map(item => ({ ...item, isNew: false })));
      }, 3000);
    }, 20000);

    return () => clearInterval(interval);
  }, [marketMood]);

  const moodColors = {
    bullish: 'bg-green-500/20 text-green-400 border-green-500/30',
    bearish: 'bg-red-500/20 text-red-400 border-red-500/30',
    volatile: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  };

  const moodEmojis = {
    bullish: '🟢',
    bearish: '🔴', 
    volatile: '🟣'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="glassmorphism rounded-2xl p-6 h-full relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="flex items-center justify-between mb-8 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-xl bg-primary/20"
            >
              💬
            </motion.div>
            <span className="text-gradient">Market Mood Feed</span>
          </h2>
          <p className="text-muted-foreground">Live sentiment stream from the beating heart of crypto</p>
        </div>
        <motion.div 
          className="flex items-center gap-3"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
          <Radio className="h-4 w-4 text-green-400" />
          <span className="text-sm text-muted-foreground font-medium">Live Updates</span>
        </motion.div>
      </motion.div>

      {/* Enhanced Current Mood Display */}
      <motion.div
        className={cn(
          "rounded-2xl p-6 mb-8 border-2 relative overflow-hidden",
          moodColors[marketMood]
        )}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Mood Ring Animation */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ 
            background: [
              `radial-gradient(circle at 20% 50%, ${marketMood === 'bullish' ? '#10b981' : marketMood === 'bearish' ? '#ef4444' : '#8b5cf6'} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 50%, ${marketMood === 'bullish' ? '#10b981' : marketMood === 'bearish' ? '#ef4444' : '#8b5cf6'} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 50%, ${marketMood === 'bullish' ? '#10b981' : marketMood === 'bearish' ? '#ef4444' : '#8b5cf6'} 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Current Mood</h3>
            <motion.span 
              className="text-sm opacity-75"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Updated {currentMoodData.lastUpdate}
            </motion.span>
          </div>
          <div className="flex items-center gap-4">
            <motion.div 
              className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center text-2xl relative",
                marketMood === 'bullish' ? 'bg-green-500/30' :
                marketMood === 'bearish' ? 'bg-red-500/30' :
                'bg-purple-500/30'
              )}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {moodEmojis[marketMood]}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-current opacity-30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div className="flex-1">
              <motion.div 
                className="text-xl font-bold mb-1"
                key={currentMoodData.sentiment}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentMoodData.sentiment}
              </motion.div>
              <div className="text-sm opacity-75 mb-3">{currentMoodData.description}</div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium">Strength:</span>
                <div className="flex-1 bg-black/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-current rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${currentMoodData.strength}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-bold">{currentMoodData.strength}%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Feed Items */}
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {feedItems.map((item, index) => (
            <FeedItemCard key={item.id} item={item} index={index} />
          ))}
        </AnimatePresence>
      </div>

      {/* Enhanced View All Button */}
      <motion.div 
        className="mt-8 pt-6 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button 
          className="w-full text-center text-primary hover:text-primary/80 transition-all duration-300 flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Activity className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">View All Updates</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

interface FeedItemCardProps {
  item: FeedItem;
  index: number;
}

const FeedItemCard = ({ item, index }: FeedItemCardProps) => {
  const severityColors = {
    low: 'border-blue-500/30 bg-blue-500/5',
    medium: 'border-yellow-500/30 bg-yellow-500/5',
    high: 'border-red-500/30 bg-red-500/5'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ 
        duration: 0.4, 
        delay: item.isNew ? 0 : index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      className={cn(
        "p-5 rounded-xl border transition-all duration-300 hover:bg-secondary/20 cursor-pointer group relative overflow-hidden",
        item.severity ? severityColors[item.severity] : "border-white/10 bg-secondary/10",
        item.isNew && "ring-2 ring-primary/50 shadow-lg shadow-primary/20"
      )}
      whileHover={{ y: -2, scale: 1.02 }}
    >
      {/* New Item Indicator */}
      {item.isNew && (
        <motion.div
          className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1, repeat: 3 }}
        />
      )}

      <div className="flex items-start gap-4">
        <motion.div 
          className={cn(
            "p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300",
            `bg-${item.color}-500/20 text-${item.color}-400`
          )}
          whileHover={{ rotate: 5 }}
        >
          {item.icon}
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <motion.h4 
              className="font-semibold text-lg group-hover:text-primary transition-colors"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            >
              {item.title}
            </motion.h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="font-medium">{item.timestamp}</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
          
          {/* Severity Indicator */}
          {item.severity && (
            <div className="flex items-center gap-2 mb-3">
              <div className={cn(
                "w-2 h-2 rounded-full",
                item.severity === 'high' ? "bg-red-400" :
                item.severity === 'medium' ? "bg-yellow-400" :
                "bg-blue-400"
              )} />
              <span className="text-xs font-medium uppercase tracking-wide">
                {item.severity} Priority
              </span>
            </div>
          )}
          
          {item.type === 'social' && (
            <motion.button 
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-1"
              whileHover={{ x: 5 }}
            >
              View Thread 
              <ExternalLink className="h-3 w-3" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MarketMoodFeed;