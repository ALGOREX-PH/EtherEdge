"use client";

import { motion } from 'framer-motion';
import { Trophy, Users, Vote, Star, TrendingUp, Eye, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const CommunityShowdown = () => {
  const leaderboardData = [
    {
      rank: 1,
      strategy: 'Volatility Crusher v3',
      creator: 'CryptoWizard',
      category: 'Momentum + Mean Reversion',
      return: '+287%',
      sharpe: 3.42,
      winRate: 72,
      votes: 842,
      avatar: '🧙‍♂️'
    },
    {
      rank: 2,
      strategy: 'Whale Watcher Alpha',
      creator: 'BlockchainQueen',
      category: 'On-Chain + Technical',
      return: '+214%',
      sharpe: 2.88,
      winRate: 68,
      votes: 756,
      avatar: '👑'
    },
    {
      rank: 3,
      strategy: 'Sentiment Surfer',
      creator: 'DataDriven',
      category: 'Social + Volume Analysis',
      return: '+178%',
      sharpe: 2.76,
      winRate: 64,
      votes: 631,
      avatar: '🏄‍♂️'
    }
  ];

  const timeframes = ['1D', '1W', '1M', 'Conservative', 'Aggressive', 'YOLO'];

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
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400">
              <Trophy className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🏅 <span className="text-gradient">Community Strategy Showdown</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                A Leaderboard Worth Fighting For
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Every month, the Arena turns into a coliseum of minds. Strategy of the Week / Month 
              competitions where users submit their best-performing Edge Blocks and signal stacks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ShowdownFeature
                icon={<Trophy className="h-5 w-5" />}
                title="🏆 Win prizes, unlock advanced tools"
                description="Top winners gain 'Legend Status' with badges and early feature access"
                color="amber"
              />
              <ShowdownFeature
                icon={<Users className="h-5 w-5" />}
                title="👾 Collab Mode"
                description="Join up with other users for tag-team strategies"
                color="blue"
              />
              <ShowdownFeature
                icon={<Vote className="h-5 w-5" />}
                title="🗳️ Vote-Based Uplift"
                description="Community upvotes elevate strategies into the Edge Hall of Flame"
                color="purple"
              />
              <ShowdownFeature
                icon={<Star className="h-5 w-5" />}
                title="⭐ Live Leaderboards"
                description="Filtered by timeframe, risk profile, and strategy type"
                color="green"
              />
            </div>
          </div>
        </motion.div>

        <div className="glassmorphism rounded-xl p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">🏆 A Leaderboard Worth Fighting For</h3>
            <p className="text-muted-foreground">Every month, the Arena turns into a coliseum of minds.</p>
          </div>

          {/* Timeframe Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {timeframes.map((timeframe, index) => (
              <motion.button
                key={timeframe}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all",
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {timeframe}
              </motion.button>
            ))}
          </div>

          {/* Strategy of the Month Leaderboard */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Strategy of the Month Leaderboard</h4>
            
            <div className="grid grid-cols-1 gap-4">
              {leaderboardData.map((entry, index) => (
                <LeaderboardEntry key={entry.rank} entry={entry} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CommunityFeatureCard
            icon={<Users className="h-12 w-12" />}
            title="🛡️ Collab Mode"
            description="Join up with other users for tag-team strategies, unlocking combo logic only available in co-builds."
            color="blue"
          />
          <CommunityFeatureCard
            icon={<Trophy className="h-12 w-12" />}
            title="🏆 Win Prizes"
            description="Win prizes, unlock advanced tools, or get your profile featured on the homepage."
            color="amber"
          />
          <CommunityFeatureCard
            icon={<Star className="h-12 w-12" />}
            title="👾 Legend Status"
            description="Top winners gain 'Legend Status'—with a badge, animated flair, and early feature access."
            color="purple"
          />
        </div>
      </div>
    </section>
  );
};

interface ShowdownFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ShowdownFeature = ({ icon, title, description, color }: ShowdownFeatureProps) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
    <div className={cn(
      "p-2 rounded-lg flex-shrink-0",
      color === 'amber' ? "bg-amber-500/20 text-amber-400" :
      color === 'blue' ? "bg-blue-500/20 text-blue-400" :
      color === 'purple' ? "bg-purple-500/20 text-purple-400" :
      "bg-green-500/20 text-green-400"
    )}>
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

interface LeaderboardEntryProps {
  entry: any;
  index: number;
}

const LeaderboardEntry = ({ entry, index }: LeaderboardEntryProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className={cn(
      "p-6 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer group",
      entry.rank === 1 ? "border-amber-500/50 bg-amber-500/5" :
      entry.rank === 2 ? "border-gray-400/50 bg-gray-400/5" :
      entry.rank === 3 ? "border-amber-600/50 bg-amber-600/5" :
      "border-white/10 bg-secondary/10"
    )}
    whileHover={{ y: -2 }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold",
          entry.rank === 1 ? "bg-amber-500/20 text-amber-400" :
          entry.rank === 2 ? "bg-gray-400/20 text-gray-400" :
          entry.rank === 3 ? "bg-amber-600/20 text-amber-600" :
          "bg-secondary/50 text-muted-foreground"
        )}>
          {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {entry.strategy}
          </h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{entry.avatar}</span>
            <span>{entry.creator}</span>
            <span>•</span>
            <span>{entry.category}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-6 text-right">
        <div>
          <div className="text-lg font-bold text-green-400">{entry.return}</div>
          <div className="text-sm text-muted-foreground">Return</div>
        </div>
        <div>
          <div className="text-lg font-bold">{entry.sharpe}</div>
          <div className="text-sm text-muted-foreground">Sharpe</div>
        </div>
        <div>
          <div className="text-lg font-bold">{entry.winRate}%</div>
          <div className="text-sm text-muted-foreground">Win Rate</div>
        </div>
        <div>
          <div className="text-lg font-bold flex items-center gap-1">
            <Heart className="h-4 w-4 text-red-400" />
            {entry.votes}
          </div>
          <div className="text-sm text-muted-foreground">Votes</div>
        </div>
        <div className="flex gap-2">
          <motion.button
            className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Vote className="h-4 w-4" />
          </motion.button>
          <motion.button
            className="p-2 rounded-lg bg-secondary/50 text-foreground hover:bg-secondary/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
);

interface CommunityFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const CommunityFeatureCard = ({ icon, title, description, color }: CommunityFeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="feature-card text-center group"
    whileHover={{ y: -5 }}
  >
    <div className={cn(
      "inline-flex p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform",
      color === 'blue' ? "bg-blue-500/20 text-blue-400" :
      color === 'amber' ? "bg-amber-500/20 text-amber-400" :
      "bg-purple-500/20 text-purple-400"
    )}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);


export default CommunityShowdown;