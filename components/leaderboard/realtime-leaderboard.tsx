"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Flame, Star, TrendingDown, Eye, Vote, MoreHorizontal, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RealtimeLeaderboardProps {
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const RealtimeLeaderboard = ({ 
  selectedTimeframe, 
  setSelectedTimeframe, 
  selectedCategory, 
  setSelectedCategory 
}: RealtimeLeaderboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const timeframes = [
    { id: 'daily', name: 'Daily Surge', count: 50 },
    { id: 'weekly', name: 'Weekly Wave', count: 200 },
    { id: 'monthly', name: 'Monthly Masters', count: 500 },
    { id: 'all-time', name: 'All-Time Greats', count: 2847 }
  ];

  const categories = [
    { id: 'all-strategies', name: 'All Strategies', count: 2847 },
    { id: 'momentum', name: 'Momentum Surfers', count: 892 },
    { id: 'mean-reversion', name: 'Mean Reversion Artists', count: 654 },
    { id: 'ai-models', name: 'AI Modelers', count: 423 },
    { id: 'experimental', name: 'Experimental Alchemists', count: 234 }
  ];

  const leaderboardData = [
    {
      rank: 1,
      name: 'QuantKing.eth',
      strategy: 'Volatility Crusher v4',
      category: 'Momentum',
      winRate: 78.4,
      roi: '+892%',
      sharpe: 3.42,
      streak: 12,
      isNew: false,
      isFalling: false,
      avatar: '👑',
      bio: 'I only trade volatility spikes under lunar cycles 🌕📉'
    },
    {
      rank: 2,
      name: 'MeanQueen',
      strategy: 'Reversion Master Pro',
      category: 'Mean Reversion',
      winRate: 72.1,
      roi: '+654%',
      sharpe: 2.88,
      streak: 8,
      isNew: false,
      isFalling: false,
      avatar: '👸',
      bio: 'Fade the extremes, profit from the mean'
    },
    {
      rank: 3,
      name: 'AIWizard',
      strategy: 'Neural Net Supreme',
      category: 'AI Models',
      winRate: 69.7,
      roi: '+543%',
      sharpe: 2.76,
      streak: 0,
      isNew: false,
      isFalling: true,
      avatar: '🧙‍♂️',
      bio: 'TensorFlow ninja pushing edges with deep learning'
    },
    {
      rank: 4,
      name: 'CryptoSage',
      strategy: 'Whale Watcher Alpha',
      category: 'Experimental',
      winRate: 67.3,
      roi: '+432%',
      sharpe: 2.54,
      streak: 5,
      isNew: true,
      isFalling: false,
      avatar: '🐋',
      bio: 'Following the smart money, always'
    },
    {
      rank: 5,
      name: 'MemeTrader',
      strategy: 'Doge Magic v2',
      category: 'Experimental',
      winRate: 65.8,
      roi: '+387%',
      sharpe: 2.31,
      streak: 3,
      isNew: false,
      isFalling: false,
      avatar: '🐕',
      bio: 'Meme magic is real magic 🚀'
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
            <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
              <Flame className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🔥 <span className="text-gradient">Real-Time Leaderboard Engine</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Track the Climb. Witness the Fall. Feel the Heat.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              The Leaderboard Grid is alive—constantly reshuffling, reacting, and recalculating 
              based on the latest ETH data streams and backtesting results.
            </p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphism rounded-xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search strategies, users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary/30 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Timeframe Filter */}
            <div className="flex gap-2">
              {timeframes.map((timeframe) => (
                <motion.button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap",
                    selectedTimeframe === timeframe.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {timeframe.name}
                  <span className="ml-2 text-xs opacity-75">({timeframe.count})</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glassmorphism rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold">Live Rankings</h3>
            <p className="text-muted-foreground">Updated every 30 seconds</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30">
                <tr>
                  <th className="text-left p-4 font-medium">Rank</th>
                  <th className="text-left p-4 font-medium">Strategist</th>
                  <th className="text-left p-4 font-medium">Strategy</th>
                  <th className="text-left p-4 font-medium">Win Rate</th>
                  <th className="text-left p-4 font-medium">ROI</th>
                  <th className="text-left p-4 font-medium">Sharpe</th>
                  <th className="text-left p-4 font-medium">Streak</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {leaderboardData.map((entry, index) => (
                    <LeaderboardRow key={entry.rank} entry={entry} index={index} />
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface LeaderboardRowProps {
  entry: any;
  index: number;
}

const LeaderboardRow = ({ entry, index }: LeaderboardRowProps) => (
  <motion.tr
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="border-b border-white/5 hover:bg-secondary/20 transition-colors group"
  >
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center font-bold",
          entry.rank === 1 ? "bg-yellow-500/20 text-yellow-400" :
          entry.rank === 2 ? "bg-gray-400/20 text-gray-400" :
          entry.rank === 3 ? "bg-amber-600/20 text-amber-600" :
          "bg-secondary/50 text-muted-foreground"
        )}>
          {entry.rank}
        </div>
        {entry.streak > 5 && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Flame className="h-4 w-4 text-orange-400" />
          </motion.div>
        )}
        {entry.isNew && (
          <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {entry.isFalling && (
          <TrendingDown className="h-4 w-4 text-red-400" />
        )}
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="text-2xl">{entry.avatar}</div>
        <div>
          <div className="font-semibold group-hover:text-primary transition-colors">
            {entry.name}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-1">
            {entry.bio}
          </div>
        </div>
      </div>
    </td>
    <td className="p-4">
      <div>
        <div className="font-medium">{entry.strategy}</div>
        <div className="text-sm text-muted-foreground">{entry.category}</div>
      </div>
    </td>
    <td className="p-4">
      <span className="font-medium">{entry.winRate}%</span>
    </td>
    <td className="p-4">
      <span className="font-bold text-green-400">{entry.roi}</span>
    </td>
    <td className="p-4">
      <span className="font-medium">{entry.sharpe}</span>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <span className="font-medium">{entry.streak}</span>
        {entry.streak > 0 && (
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
        )}
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <motion.button
          className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye className="h-4 w-4" />
        </motion.button>
        <motion.button
          className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Vote className="h-4 w-4" />
        </motion.button>
        <motion.button
          className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MoreHorizontal className="h-4 w-4" />
        </motion.button>
      </div>
    </td>
  </motion.tr>
);

export default RealtimeLeaderboard;