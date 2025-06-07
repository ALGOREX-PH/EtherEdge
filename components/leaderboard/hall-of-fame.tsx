"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Star, Trophy, Copy, ExternalLink, Heart, Eye, Award, Zap, Target } from 'lucide-react';
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
      color: 'yellow',
      rank: 'Legendary',
      joinDate: 'Genesis Member'
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
      color: 'purple',
      rank: 'Mythic',
      joinDate: 'Early Adopter'
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
      color: 'cyan',
      rank: 'Legendary',
      joinDate: 'Founding Member'
    }
  ];

  const inductionCriteria = [
    {
      title: 'Performance Excellence',
      description: 'Minimum of 3 leaderboard Top 3 finishes',
      icon: <Trophy className="h-6 w-6" />,
      color: 'amber'
    },
    {
      title: 'Community Recognition',
      description: 'Peer votes from community members',
      icon: <Heart className="h-6 w-6" />,
      color: 'red'
    },
    {
      title: 'Innovation',
      description: 'Novelty of strategy and Edge Block creation',
      icon: <Zap className="h-6 w-6" />,
      color: 'blue'
    },
    {
      title: 'Education',
      description: 'Open-source models and community tutorials',
      icon: <Target className="h-6 w-6" />,
      color: 'green'
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
              className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 text-yellow-400 relative"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(251, 191, 36, 0.3)',
                  '0 0 40px rgba(251, 191, 36, 0.5)',
                  '0 0 20px rgba(251, 191, 36, 0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Crown className="h-10 w-10" />
              <motion.div
                className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                🏛️ <span className="text-gradient">The Hall of Fame — Data Immortality</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-3">
                Not Everyone Gets Remembered. Only the Relentless.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8 mb-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-amber-500/5"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-7 w-7 text-primary" />
                🎓 Induction Criteria
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {inductionCriteria.map((criteria, index) => (
                  <EnhancedCriteriaItem key={index} criteria={criteria} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Hall of Fame Members */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          {hallOfFameMembers.map((member, index) => (
            <EnhancedHallOfFameMember key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Enhanced View All Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-4xl mx-auto mb-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Join the Immortals</h3>
              <p className="text-xl text-muted-foreground mb-6">
                The Hall of Fame isn't just recognition—it's digital immortality. Your strategies, 
                your innovations, your edge preserved forever in the EtherEdge legacy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">156</div>
                  <div className="text-sm text-muted-foreground">Immortalized Legends</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">47k+</div>
                  <div className="text-sm text-muted-foreground">Strategy Remixes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2.8M</div>
                  <div className="text-sm text-muted-foreground">Community Votes</div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.button
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground px-12 py-6 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 flex items-center gap-3 mx-auto relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <Star className="h-6 w-6" />
            <span className="relative z-10">View All Hall of Fame Inductees</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

interface EnhancedCriteriaItemProps {
  criteria: any;
  index: number;
}

const EnhancedCriteriaItem = ({ criteria, index }: EnhancedCriteriaItemProps) => (
  <motion.div 
    className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/40 transition-all group relative overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -3, scale: 1.02 }}
  >
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${criteria.color}-500/10 to-transparent`}
    />
    
    <div className="relative z-10">
      <motion.div
        className={`p-3 rounded-xl bg-${criteria.color}-500/20 text-${criteria.color}-400 inline-flex mb-4 group-hover:scale-110 transition-transform`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {criteria.icon}
      </motion.div>
      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
        {criteria.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {criteria.description}
      </p>
    </div>
  </motion.div>
);

interface EnhancedHallOfFameMemberProps {
  member: any;
  index: number;
}

const EnhancedHallOfFameMember = ({ member, index }: EnhancedHallOfFameMemberProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="feature-card group relative overflow-hidden"
    whileHover={{ y: -8, scale: 1.02 }}
  >
    {/* Enhanced Background Effects */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${member.color}-500/10 to-transparent`}
    />
    
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${member.color}-500/5 blur-xl`}
    />
    
    <div className="relative z-10">
      {/* Rank Badge */}
      <div className="absolute top-4 right-4">
        <motion.span 
          className={`text-xs px-3 py-1 rounded-full font-bold bg-${member.color}-500/20 text-${member.color}-400 border border-${member.color}-500/30`}
          whileHover={{ scale: 1.1 }}
        >
          {member.rank}
        </motion.span>
      </div>
      
      {/* Enhanced Header */}
      <div className="text-center mb-8">
        <motion.div 
          className="text-7xl mb-4 relative"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {member.avatar}
          <motion.div
            className={`absolute inset-0 bg-${member.color}-400/30 rounded-full blur-xl`}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
        
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
          {member.name}
        </h3>
        <p className={`font-bold text-lg text-${member.color}-400 mb-2`}>
          {member.title}
        </p>
        <p className="text-sm text-muted-foreground">
          {member.joinDate}
        </p>
      </div>

      {/* Enhanced Philosophy */}
      <div className="mb-8">
        <motion.blockquote 
          className="text-lg italic text-center border-l-4 border-primary/30 pl-6 relative"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute -left-2 -top-2 text-primary/30 text-3xl">"</div>
          {member.philosophy}
          <div className="absolute -right-2 -bottom-2 text-primary/30 text-3xl">"</div>
        </motion.blockquote>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="mb-8">
        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
          <Trophy className="h-4 w-4" />
          Legendary Stats
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(member.stats).map(([key, value], i) => (
            <motion.div
              key={key}
              className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            >
              <div className="text-xs text-muted-foreground mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="font-bold text-lg">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Achievements */}
      <div className="mb-8">
        <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
          <Award className="h-4 w-4" />
          Achievements
        </h4>
        <div className="flex flex-wrap gap-2">
          {member.achievements.map((achievement: string, i: number) => (
            <motion.span 
              key={i}
              className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary/70 rounded-full transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
            >
              {achievement}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Enhanced Community Stats */}
      <div className="flex items-center justify-between mb-8 text-sm">
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Copy className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{member.remixCount} remixes</span>
        </motion.div>
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Heart className="h-4 w-4 text-red-400" />
          <span className="font-medium">{member.communityLove}</span>
        </motion.div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          className="flex-1 bg-gradient-to-r from-primary/90 to-blue-600/90 hover:from-primary hover:to-blue-600 text-primary-foreground px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn font-bold shadow-lg"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <Copy className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
          <span className="relative z-10">Clone Strategy</span>
        </motion.button>
        
        <motion.button
          className="px-6 py-4 bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-xl transition-all border border-white/10"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default HallOfFame;