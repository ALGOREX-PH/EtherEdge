"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertTriangle, TrendingUp, MessageSquare, Wallet, Volume2, ExternalLink, Clock } from 'lucide-react';
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
    lastUpdate: '2m ago'
  });

  // Simulate new feed items
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
          color: marketMood === 'bullish' ? 'green' : marketMood === 'bearish' ? 'red' : 'purple'
        }
      ];

      setFeedItems(prev => [...newItems, ...prev.slice(0, 9)]);
    }, 15000);

    return () => clearInterval(interval);
  }, [marketMood]);

  const moodColors = {
    bullish: 'bg-green-500/20 text-green-400 border-green-500/30',
    bearish: 'bg-red-500/20 text-red-400 border-red-500/30',
    volatile: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glassmorphism rounded-2xl p-6 h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-1">💬 Market Mood Feed</h2>
          <p className="text-sm text-muted-foreground">Live sentiment stream</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-muted-foreground">Live Updates</span>
        </div>
      </div>

      {/* Current Mood */}
      <div className={cn(
        "rounded-xl p-4 mb-6 border",
        moodColors[marketMood]
      )}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Current Mood</h3>
          <span className="text-xs opacity-75">Updated {currentMoodData.lastUpdate}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            marketMood === 'bullish' ? 'bg-green-500/30' :
            marketMood === 'bearish' ? 'bg-red-500/30' :
            'bg-purple-500/30'
          )}>
            {marketMood === 'bullish' ? '🟢' : marketMood === 'bearish' ? '🔴' : '🟣'}
          </div>
          <div>
            <div className="font-medium">{currentMoodData.sentiment}</div>
            <div className="text-sm opacity-75">{currentMoodData.description}</div>
          </div>
        </div>
      </div>

      {/* Feed Items */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {feedItems.map((item, index) => (
          <FeedItemCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <button className="w-full text-center text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2">
          View All Updates
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "p-4 rounded-lg border transition-all hover:bg-secondary/20 cursor-pointer",
        item.severity ? severityColors[item.severity] : "border-white/10 bg-secondary/10"
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "p-2 rounded-lg flex-shrink-0",
          `bg-${item.color}-500/20 text-${item.color}-400`
        )}>
          {item.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-sm">{item.title}</h4>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {item.timestamp}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          
          {item.type === 'social' && (
            <button className="mt-2 text-xs text-primary hover:text-primary/80 transition-colors">
              View Thread →
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MarketMoodFeed;