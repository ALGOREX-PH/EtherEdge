"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Flame, Star, TrendingDown, Eye, Vote, MoreHorizontal, Filter, Search, Crown, Trophy, Zap, Activity } from 'lucide-react';
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
  const [sortBy, setSortBy] = useState('rank');

  const timeframes = [
    { id: 'daily', name: 'Daily Surge', count: 50, emoji: '⚡' },
    { id: 'weekly', name: 'Weekly Wave', count: 200, emoji: '🌊' },
    { id: 'monthly', name: 'Monthly Masters', count: 500, emoji: '👑' },
    { id: 'all-time', name: 'All-Time Greats', count: 2847, emoji: '🏆' }
  ];

  const categories = [
    { id: 'all-strategies', name: 'All Strategies', count: 2847, color: 'primary' },
    { id: 'momentum', name: 'Momentum Surfers', count: 892, color: 'blue' },
    { id: 'mean-reversion', name: 'Mean Reversion Artists', count: 654, color: 'purple' },
    { id: 'ai-models', name: 'AI Modelers', count: 423, color: 'green' },
    { id: 'experimental', name: 'Experimental Alchemists', count: 234, color: 'pink' }
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
      bio: 'I only trade volatility spikes under lunar cycles 🌕📉',
      badges: ['🔥', '⚡', '🏆']
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
      bio: 'Fade the extremes, profit from the mean',
      badges: ['💎', '🎯']
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
      bio: 'TensorFlow ninja pushing edges with deep learning',
      badges: ['🤖', '🧠']
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
      bio: 'Following the smart money, always',
      badges: ['🆕', '🐋']
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
      bio: 'Meme magic is real magic 🚀',
      badges: ['🚀', '🎭']
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
            <motion.div 
              className="p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-orange-400 relative"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(251, 146, 60, 0.3)',
                  '0 0 40px rgba(251, 146, 60, 0.5)',
                  '0 0 20px rgba(251, 146, 60, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="h-10 w-10" />
              <motion.div
                className="absolute inset-0 bg-orange-400/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                🔥 <span className="text-gradient">Real-Time Leaderboard Engine</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-3">
                Track the Climb. Witness the Fall. Feel the Heat.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8 mb-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The Leaderboard Grid is alive—constantly reshuffling, reacting, and recalculating 
                based on the latest ETH data streams and backtesting results.
              </p>
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">Live Updates Every 30 Seconds</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphism rounded-2xl p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Enhanced Search */}
              <div className="flex-1 relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search strategies, users, or techniques..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-secondary/30 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg placeholder:text-muted-foreground/70 backdrop-blur-sm"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ✕
                  </motion.button>
                )}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-3">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="rank">Rank</option>
                  <option value="roi">ROI</option>
                  <option value="winRate">Win Rate</option>
                  <option value="streak">Streak</option>
                </select>
              </div>
            </div>

            {/* Enhanced Timeframe Filter */}
            <div className="flex flex-wrap gap-3 mb-6">
              {timeframes.map((timeframe, index) => (
                <motion.button
                  key={timeframe.id}
                  onClick={() => setSelectedTimeframe(timeframe.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl font-bold transition-all whitespace-nowrap relative overflow-hidden group",
                    selectedTimeframe === timeframe.id
                      ? "bg-gradient-to-r from-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground border border-white/10"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {selectedTimeframe === timeframe.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-lg">{timeframe.emoji}</span>
                    {timeframe.name}
                    <span className="text-xs opacity-75">({timeframe.count})</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-5 py-3 rounded-xl font-medium transition-all relative overflow-hidden group",
                    selectedCategory === category.id
                      ? `bg-${category.color} text-${category.color}-foreground shadow-lg`
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 border border-white/10"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Leaderboard Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glassmorphism rounded-2xl overflow-hidden relative"
        >
          <div className="p-8 border-b border-white/10 bg-gradient-to-r from-primary/5 to-purple-500/5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Trophy className="h-7 w-7 text-primary" />
                  </motion.div>
                  Live Rankings
                </h3>
                <p className="text-muted-foreground mt-1">Updated every 30 seconds • {leaderboardData.length} active competitors</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">LIVE</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30 backdrop-blur-sm">
                <tr>
                  <th className="text-left p-6 font-bold text-lg">Rank</th>
                  <th className="text-left p-6 font-bold text-lg">Strategist</th>
                  <th className="text-left p-6 font-bold text-lg">Strategy</th>
                  <th className="text-left p-6 font-bold text-lg">Win Rate</th>
                  <th className="text-left p-6 font-bold text-lg">ROI</th>
                  <th className="text-left p-6 font-bold text-lg">Sharpe</th>
                  <th className="text-left p-6 font-bold text-lg">Streak</th>
                  <th className="text-left p-6 font-bold text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="popLayout">
                  {leaderboardData.map((entry, index) => (
                    <EnhancedLeaderboardRow key={entry.rank} entry={entry} index={index} />
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

interface EnhancedLeaderboardRowProps {
  entry: any;
  index: number;
}

const EnhancedLeaderboardRow = ({ entry, index }: EnhancedLeaderboardRowProps) => (
  <motion.tr
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="border-b border-white/5 hover:bg-gradient-to-r hover:from-secondary/20 hover:to-transparent transition-all group relative"
    whileHover={{ scale: 1.01 }}
  >
    {/* Rank */}
    <td className="p-6">
      <div className="flex items-center gap-4">
        <motion.div 
          className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg relative overflow-hidden",
            entry.rank === 1 ? "bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 text-yellow-400 border-2 border-yellow-400/50" :
            entry.rank === 2 ? "bg-gradient-to-br from-gray-300/30 to-gray-500/30 text-gray-300 border-2 border-gray-300/50" :
            entry.rank === 3 ? "bg-gradient-to-br from-amber-600/30 to-amber-800/30 text-amber-600 border-2 border-amber-600/50" :
            "bg-secondary/50 text-muted-foreground border border-white/10"
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {entry.rank <= 3 && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}
          <span className="relative z-10">{entry.rank}</span>
        </motion.div>
        
        {/* Special Effects */}
        <div className="flex items-center gap-2">
          {entry.streak > 5 && (
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <Flame className="h-5 w-5 text-orange-400" />
              <motion.div
                className="absolute inset-0 bg-orange-400/30 rounded-full blur-lg"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          )}
          {entry.isNew && (
            <motion.span 
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30 font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              NEW
            </motion.span>
          )}
          {entry.isFalling && (
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <TrendingDown className="h-5 w-5 text-red-400" />
            </motion.div>
          )}
        </div>
      </div>
    </td>

    {/* Strategist */}
    <td className="p-6">
      <div className="flex items-center gap-4">
        <motion.div 
          className="text-4xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {entry.avatar}
        </motion.div>
        <div>
          <div className="font-bold text-lg group-hover:text-primary transition-colors">
            {entry.name}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-1 max-w-xs">
            {entry.bio}
          </div>
          <div className="flex items-center gap-1 mt-1">
            {entry.badges.map((badge: string, i: number) => (
              <motion.span 
                key={i}
                className="text-sm"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </td>

    {/* Strategy */}
    <td className="p-6">
      <div>
        <div className="font-bold text-lg">{entry.strategy}</div>
        <div className="text-sm text-muted-foreground">{entry.category}</div>
      </div>
    </td>

    {/* Win Rate */}
    <td className="p-6">
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg">{entry.winRate}%</span>
        <div className="w-16 h-2 bg-secondary/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${entry.winRate}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    </td>

    {/* ROI */}
    <td className="p-6">
      <motion.span 
        className="font-bold text-xl text-green-400"
        whileHover={{ scale: 1.1 }}
      >
        {entry.roi}
      </motion.span>
    </td>

    {/* Sharpe */}
    <td className="p-6">
      <span className="font-bold text-lg">{entry.sharpe}</span>
    </td>

    {/* Streak */}
    <td className="p-6">
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg">{entry.streak}</span>
        {entry.streak > 0 && (
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
          </motion.div>
        )}
      </div>
    </td>

    {/* Actions */}
    <td className="p-6">
      <div className="flex items-center gap-3">
        <motion.button
          className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors group/btn"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Eye className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
        </motion.button>
        <motion.button
          className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors group/btn"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Vote className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
        </motion.button>
        <motion.button
          className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-colors group/btn"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <MoreHorizontal className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
        </motion.button>
      </div>
    </td>
  </motion.tr>
);

export default RealtimeLeaderboard;