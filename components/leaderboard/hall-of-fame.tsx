"use client";

import { motion } from 'framer-motion';
import { Crown, Star, Trophy, Copy, ExternalLink, Heart, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const HallOfFame = () => {
  const hallOfFameMembers = [
    {
      id: 1,
      name: 'QuantKing.eth',
      title: 'The Edge Whisperer',
      avatar: '👑',
      philosophy: 'I don\'t trust momentum. I build for collapse.',
      stats: {
        lifetimeTrades: '4,729',
        cumulativeROI: '+2,847%',
        biggestWin: '+156%',
        longestStreak: '47 days',
        smallestDrawdown: '-2.3%'
      },
      achievements: ['3x Monthly Champion', 'First Whale Divergence Detector', 'Community Educator'],
      remixCount: 1247,
      communityLove: 2834,
      color: 'yellow'
    },
    {
      id: 2,
      name: 'MeanQueen',
      title: 'Drawdown Slayer',
      avatar: '👸',
      philosophy: 'Markets overreact. I profit from their emotions.',
      stats: {
        lifetimeTrades: '3,892',
        cumulativeROI: '+1,954%',
        biggestWin: '+134%',
        longestStreak: '38 days',
        smallestDrawdown: '-1.8%'
      },
      achievements: ['Mean Reversion Master', 'Risk Management Guru', 'Top Educator'],
      remixCount: 987,
      communityLove: 2156,
      color: 'purple'
    },
    {
      id: 3,
      name: 'TornadoFlowMaster',
      title: 'Volatility Poet',
      avatar: '🌪️',
      philosophy: 'Chaos is a ladder. Volatility is my playground.',
      stats: {
        lifetimeTrades: '5,234',
        cumulativeROI: '+3,421%',
        biggestWin: '+289%',
        longestStreak: '52 days',
        smallestDrawdown: '-4.1%'
      },
      achievements: ['Volatility Master', 'Innovation Pioneer', 'Strategy Architect'],
      remixCount: 1534,
      communityLove: 3421,
      color: 'cyan'
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
            <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400">
              <Crown className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🏛️ <span className="text-gradient">The Hall of Fame — Data Immortality</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Not Everyone Gets Remembered. Only the Relentless.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">🎓 Induction Criteria:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <CriteriaItem
                title="Performance Excellence"
                description="Minimum of 3 leaderboard Top 3 finishes"
              />
              <CriteriaItem
                title="Community Recognition"
                description="Peer votes from community members"
              />
              <CriteriaItem
                title="Innovation"
                description="Novelty of strategy and Edge Block creation"
              />
              <CriteriaItem
                title="Education"
                description="Open-source models and community tutorials"
              />
            </div>
          </div>
        </motion.div>

        {/* Hall of Fame Members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {hallOfFameMembers.map((member, index) => (
            <HallOfFameMember key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="h-5 w-5" />
            View All Hall of Fame Inductees
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface HallOfFameMemberProps {
  member: any;
  index: number;
}

const HallOfFameMember = ({ member, index }: HallOfFameMemberProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="feature-card group relative overflow-hidden"
    whileHover={{ y: -5 }}
  >
    {/* Background Gradient */}
    <div className={cn(
      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
      `bg-gradient-to-br from-${member.color}-500/10 to-transparent`
    )} />
    
    <div className="relative z-10">
      {/* Header */}
      <div className="text-center mb-6">
        <motion.div 
          className="text-6xl mb-4"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {member.avatar}
        </motion.div>
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {member.name}
        </h3>
        <p className={cn(
          "font-medium",
          `text-${member.color}-400`
        )}>
          {member.title}
        </p>
      </div>

      {/* Philosophy */}
      <div className="mb-6">
        <blockquote className="text-lg italic text-center border-l-4 border-primary/30 pl-4">
          "{member.philosophy}"
        </blockquote>
      </div>

      {/* Stats */}
      <div className="mb-6 space-y-3">
        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          Legendary Stats
        </h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <StatItem label="Trades" value={member.stats.lifetimeTrades} />
          <StatItem label="ROI" value={member.stats.cumulativeROI} />
          <StatItem label="Best Win" value={member.stats.biggestWin} />
          <StatItem label="Streak" value={member.stats.longestStreak} />
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
          Achievements
        </h4>
        <div className="flex flex-wrap gap-2">
          {member.achievements.map((achievement: string, i: number) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-secondary/50 rounded-full"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="flex items-center justify-between mb-6 text-sm">
        <div className="flex items-center gap-2">
          <Copy className="h-4 w-4 text-muted-foreground" />
          <span>{member.remixCount} remixes</span>
        </div>
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-red-400" />
          <span>{member.communityLove}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <motion.button
          className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 group/btn"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Copy className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
          Clone Strategy
        </motion.button>
        <motion.button
          className="px-4 py-3 bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-lg transition-all border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="h-4 w-4" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

interface CriteriaItemProps {
  title: string;
  description: string;
}

const CriteriaItem = ({ title, description }: CriteriaItemProps) => (
  <div className="p-4 rounded-lg bg-secondary/30">
    <h4 className="font-medium mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem = ({ label, value }: StatItemProps) => (
  <div>
    <div className="text-muted-foreground">{label}</div>
    <div className="font-bold">{value}</div>
  </div>
);

export default HallOfFame;