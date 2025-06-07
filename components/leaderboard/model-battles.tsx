"use client";

import { motion } from 'framer-motion';
import { Swords, Users, Bot, Trophy, Play, Crown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const ModelBattles = () => {
  const battleModes = [
    {
      id: 'pvp',
      name: 'PvP',
      description: '1v1 tactical matchups. Same dataset, different brains.',
      icon: <Swords className="h-6 w-6" />,
      color: 'red',
      participants: 234
    },
    {
      id: 'pvai',
      name: 'PvAI',
      description: 'Challenge the EtherEdge House Strategy—our in-house meta-predictor.',
      icon: <Bot className="h-6 w-6" />,
      color: 'blue',
      participants: 156
    },
    {
      id: 'team',
      name: 'Team vs Team',
      description: 'Quant Guilds form squads, build shared stacks, and test against rival teams.',
      icon: <Users className="h-6 w-6" />,
      color: 'purple',
      participants: 89
    }
  ];

  const activeBattles = [
    {
      id: 1,
      mode: 'PvP',
      player1: { name: 'QuantKing.eth', avatar: '👑', score: '+24.5%' },
      player2: { name: 'MeanQueen', avatar: '👸', score: '+18.7%' },
      status: 'live',
      timeLeft: '2h 34m'
    },
    {
      id: 2,
      mode: 'PvAI',
      player1: { name: 'AIWizard', avatar: '🧙‍♂️', score: '+31.2%' },
      player2: { name: 'EtherEdge AI', avatar: '🤖', score: '+28.9%' },
      status: 'live',
      timeLeft: '1h 12m'
    },
    {
      id: 3,
      mode: 'Team',
      player1: { name: 'Quant Legends', avatar: '⚡', score: '+42.1%' },
      player2: { name: 'Data Wizards', avatar: '🔮', score: '+39.8%' },
      status: 'live',
      timeLeft: '45m'
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
            <div className="p-3 rounded-xl bg-red-500/20 text-red-400">
              <Swords className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                ⚔️ <span className="text-gradient">Model Battles — The Digital Coliseum</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Let Your Strategy Speak. Let It Bleed. Let It Win.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              The Model Battles Arena is where users go head-to-head in strategy duels. 
              It's part esports, part quantitative combat, and 100% EtherEdge.
            </p>
          </div>
        </motion.div>

        {/* Battle Modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {battleModes.map((mode, index) => (
            <BattleModeCard key={mode.id} mode={mode} index={index} />
          ))}
        </motion.div>

        {/* Active Battles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glassmorphism rounded-xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">🔥 Live Battles</h3>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="h-5 w-5" />
              Start Battle
            </motion.button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {activeBattles.map((battle, index) => (
              <BattleCard key={battle.id} battle={battle} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Battle Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <RewardCard
            icon={<Trophy className="h-8 w-8" />}
            title="Battle Badges"
            description="Bronze to Mythic, with effects like 'Champion's Spark' glow"
            color="amber"
          />
          <RewardCard
            icon={<Crown className="h-8 w-8" />}
            title="NFT Trophies"
            description="Tradable and displayable on your profile, minted with animated gifs"
            color="purple"
          />
          <RewardCard
            icon={<Zap className="h-8 w-8" />}
            title="Special Seasons"
            description="Limited-time 'Meta Seasons' where rules change and stakes rise"
            color="blue"
          />
        </motion.div>
      </div>
    </section>
  );
};

interface BattleModeCardProps {
  mode: any;
  index: number;
}

const BattleModeCard = ({ mode, index }: BattleModeCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="feature-card group cursor-pointer"
    whileHover={{ y: -5 }}
  >
    <div className={cn(
      "p-4 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform",
      `bg-${mode.color}-500/20 text-${mode.color}-400`
    )}>
      {mode.icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
      {mode.name}
    </h3>
    <p className="text-muted-foreground mb-4">{mode.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {mode.participants} active
      </span>
      <motion.button
        className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join Battle
      </motion.button>
    </div>
  </motion.div>
);

interface BattleCardProps {
  battle: any;
  index: number;
}

const BattleCard = ({ battle, index }: BattleCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="glassmorphism rounded-xl p-6 relative overflow-hidden"
  >
    {/* Live indicator */}
    <div className="absolute top-4 right-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
      <span className="text-xs text-red-400 font-medium">LIVE</span>
    </div>

    <div className="mb-4">
      <span className="text-sm text-muted-foreground">{battle.mode} Battle</span>
      <div className="text-sm text-muted-foreground">Ends in {battle.timeLeft}</div>
    </div>

    {/* VS Layout */}
    <div className="flex items-center justify-between mb-6">
      <div className="text-center">
        <div className="text-3xl mb-2">{battle.player1.avatar}</div>
        <div className="font-semibold text-sm">{battle.player1.name}</div>
        <div className="text-green-400 font-bold">{battle.player1.score}</div>
      </div>
      
      <div className="text-2xl font-bold text-muted-foreground">VS</div>
      
      <div className="text-center">
        <div className="text-3xl mb-2">{battle.player2.avatar}</div>
        <div className="font-semibold text-sm">{battle.player2.name}</div>
        <div className="text-green-400 font-bold">{battle.player2.score}</div>
      </div>
    </div>

    <motion.button
      className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Watch Battle
    </motion.button>
  </motion.div>
);

interface RewardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const RewardCard = ({ icon, title, description, color }: RewardCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="feature-card text-center group"
    whileHover={{ y: -5 }}
  >
    <div className={cn(
      "p-4 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform",
      `bg-${color}-500/20 text-${color}-400`
    )}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

export default ModelBattles;