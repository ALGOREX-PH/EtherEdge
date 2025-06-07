"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Users, Bot, Trophy, Play, Crown, Zap, Shield, Target, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModelBattles = () => {
  const battleModes = [
    {
      id: 'pvp',
      name: 'PvP Duels',
      description: '1v1 tactical matchups. Same dataset, different brains.',
      icon: <Swords className="h-8 w-8" />,
      color: 'red',
      participants: 234,
      emoji: '⚔️'
    },
    {
      id: 'pvai',
      name: 'PvAI Challenge',
      description: 'Challenge the EtherEdge House Strategy—our in-house meta-predictor.',
      icon: <Bot className="h-8 w-8" />,
      color: 'blue',
      participants: 156,
      emoji: '🤖'
    },
    {
      id: 'team',
      name: 'Guild Wars',
      description: 'Quant Guilds form squads, build shared stacks, and test against rival teams.',
      icon: <Users className="h-8 w-8" />,
      color: 'purple',
      participants: 89,
      emoji: '🛡️'
    }
  ];

  const activeBattles = [
    {
      id: 1,
      mode: 'PvP',
      player1: { name: 'QuantKing.eth', avatar: '👑', score: '+24.5%', health: 85 },
      player2: { name: 'MeanQueen', avatar: '👸', score: '+18.7%', health: 72 },
      status: 'live',
      timeLeft: '2h 34m',
      viewers: 1247
    },
    {
      id: 2,
      mode: 'PvAI',
      player1: { name: 'AIWizard', avatar: '🧙‍♂️', score: '+31.2%', health: 92 },
      player2: { name: 'EtherEdge AI', avatar: '🤖', score: '+28.9%', health: 88 },
      status: 'live',
      timeLeft: '1h 12m',
      viewers: 892
    },
    {
      id: 3,
      mode: 'Team',
      player1: { name: 'Quant Legends', avatar: '⚡', score: '+42.1%', health: 95 },
      player2: { name: 'Data Wizards', avatar: '🔮', score: '+39.8%', health: 90 },
      status: 'live',
      timeLeft: '45m',
      viewers: 2156
    }
  ];

  const rewards = [
    {
      icon: <Trophy className="h-10 w-10" />,
      title: 'Battle Badges',
      description: 'Bronze to Mythic, with effects like "Champion\'s Spark" glow',
      color: 'amber',
      rarity: 'Epic'
    },
    {
      icon: <Crown className="h-10 w-10" />,
      title: 'NFT Trophies',
      description: 'Tradable and displayable on your profile, minted with animated gifs',
      color: 'purple',
      rarity: 'Legendary'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Special Seasons',
      description: 'Limited-time "Meta Seasons" where rules change and stakes rise',
      color: 'blue',
      rarity: 'Mythic'
    }
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
            <motion.div 
              className="p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-400 relative"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.3)',
                  '0 0 40px rgba(239, 68, 68, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Swords className="h-10 w-10" />
              <motion.div
                className="absolute inset-0 bg-red-400/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                ⚔️ <span className="text-gradient">Model Battles — The Digital Coliseum</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-3">
                Let Your Strategy Speak. Let It Bleed. Let It Win.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8 mb-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                The Model Battles Arena is where users go head-to-head in strategy duels. 
                It's part esports, part quantitative combat, and 100% EtherEdge.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-400 animate-pulse" />
                  <span className="text-orange-400 font-medium">3 Live Battles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">4,295 Total Viewers</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Battle Modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {battleModes.map((mode, index) => (
            <EnhancedBattleModeCard key={mode.id} mode={mode} index={index} />
          ))}
        </motion.div>

        {/* Enhanced Active Battles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glassmorphism rounded-2xl p-8 mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🔥
                  </motion.div>
                  Live Battles
                </h3>
                <p className="text-muted-foreground mt-2">Watch strategies clash in real-time</p>
              </div>
              <motion.button
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-lg shadow-primary/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-6 w-6" />
                Start Battle
              </motion.button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {activeBattles.map((battle, index) => (
                <EnhancedBattleCard key={battle.id} battle={battle} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Battle Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🏆 Battle Rewards & Glory</h3>
            <p className="text-xl text-muted-foreground">Victory brings more than bragging rights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <EnhancedRewardCard key={index} reward={reward} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Arena Commentators Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glassmorphism rounded-2xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">🎙️ Arena Commentators</h3>
            <p className="text-lg text-muted-foreground mb-6">
              AI-powered avatars provide real-time commentary like Twitch streamers mixed with MIT data professors
            </p>
            
            <div className="flex justify-center gap-8 mb-8">
              {[
                { name: 'QuantBot Q', avatar: '🤖', quote: "That's a spicy standard deviation!" },
                { name: 'MeanRevert Mike', avatar: '📊', quote: "This one's holding underwater..." },
                { name: 'Meme Queen Lisa', avatar: '👑', quote: "Overfit detected... yikes." }
              ].map((commentator, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-2">{commentator.avatar}</div>
                  <div className="font-semibold text-sm">{commentator.name}</div>
                  <div className="text-xs text-muted-foreground italic mt-1">
                    "{commentator.quote}"
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-6 py-3 rounded-xl transition-all border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enable Commentary
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EnhancedBattleModeCardProps {
  mode: any;
  index: number;
}

const EnhancedBattleModeCard = ({ mode, index }: EnhancedBattleModeCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="feature-card group cursor-pointer relative overflow-hidden"
    whileHover={{ y: -8, scale: 1.02 }}
  >
    {/* Background Gradient */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${mode.color}-500/10 to-transparent`}
    />
    
    {/* Glow Effect */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-${mode.color}-500/5 blur-xl`}
    />
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className={`p-4 rounded-2xl bg-${mode.color}-500/20 text-${mode.color}-400 group-hover:scale-110 transition-transform relative`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {mode.icon}
          <motion.div
            className={`absolute inset-0 bg-${mode.color}-400/30 rounded-2xl blur-lg`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <div className="text-3xl">{mode.emoji}</div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        {mode.name}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{mode.description}</p>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {mode.participants} active
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-medium">LIVE</span>
        </div>
      </div>
      
      <motion.button
        className={`w-full bg-gradient-to-r from-${mode.color}-500/90 to-${mode.color}-600/90 hover:from-${mode.color}-500 hover:to-${mode.color}-600 text-white px-6 py-4 rounded-xl transition-all font-bold shadow-lg`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Battle
      </motion.button>
    </div>
  </motion.div>
);

interface EnhancedBattleCardProps {
  battle: any;
  index: number;
}

const EnhancedBattleCard = ({ battle, index }: EnhancedBattleCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glassmorphism rounded-2xl p-8 relative overflow-hidden group"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    {/* Animated Background */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />
    
    {/* Live Indicator */}
    <div className="absolute top-6 right-6 flex items-center gap-2">
      <motion.div 
        className="w-3 h-3 rounded-full bg-red-400"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-xs text-red-400 font-bold">LIVE</span>
    </div>

    <div className="relative z-10">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold">{battle.mode} Battle</span>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{battle.viewers}</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">Ends in {battle.timeLeft}</div>
      </div>

      {/* Enhanced VS Layout */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-center flex-1">
          <motion.div 
            className="text-5xl mb-3"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {battle.player1.avatar}
          </motion.div>
          <div className="font-bold text-lg mb-1">{battle.player1.name}</div>
          <div className="text-green-400 font-bold text-xl mb-2">{battle.player1.score}</div>
          
          {/* Health Bar */}
          <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${battle.player1.health}%` }}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">{battle.player1.health}% Health</div>
        </div>
        
        <motion.div 
          className="text-3xl font-bold text-muted-foreground mx-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          VS
        </motion.div>
        
        <div className="text-center flex-1">
          <motion.div 
            className="text-5xl mb-3"
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {battle.player2.avatar}
          </motion.div>
          <div className="font-bold text-lg mb-1">{battle.player2.name}</div>
          <div className="text-green-400 font-bold text-xl mb-2">{battle.player2.score}</div>
          
          {/* Health Bar */}
          <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${battle.player2.health}%` }}
              transition={{ duration: 1, delay: index * 0.2 + 0.2 }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">{battle.player2.health}% Health</div>
        </div>
      </div>

      <motion.button
        className="w-full bg-gradient-to-r from-primary/90 to-blue-600/90 hover:from-primary hover:to-blue-600 text-primary-foreground px-6 py-4 rounded-xl transition-all font-bold shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Watch Battle
      </motion.button>
    </div>
  </motion.div>
);

interface EnhancedRewardCardProps {
  reward: any;
  index: number;
}

const EnhancedRewardCard = ({ reward, index }: EnhancedRewardCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
    className="feature-card text-center group relative overflow-hidden"
    whileHover={{ y: -8, scale: 1.02 }}
  >
    {/* Background Effects */}
    <motion.div
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${reward.color}-500/10 to-transparent`}
    />
    
    <div className="relative z-10">
      {/* Rarity Badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs px-3 py-1 rounded-full font-bold bg-${reward.color}-500/20 text-${reward.color}-400 border border-${reward.color}-500/30`}>
          {reward.rarity}
        </span>
      </div>
      
      <motion.div
        className={`p-6 rounded-2xl bg-${reward.color}-500/20 text-${reward.color}-400 inline-flex mb-6 group-hover:scale-110 transition-transform relative`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.5 }}
      >
        {reward.icon}
        <motion.div
          className={`absolute inset-0 bg-${reward.color}-400/30 rounded-2xl blur-lg`}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
        {reward.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{reward.description}</p>
    </div>
  </motion.div>
);

export default ModelBattles;