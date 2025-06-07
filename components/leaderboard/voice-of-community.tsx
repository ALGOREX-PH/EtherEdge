"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Vote, Calendar, Users, Heart, Reply, TrendingUp, Award, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

const VoiceOfCommunity = () => {
  const nominations = [
    {
      id: 1,
      nominee: 'CryptoSage',
      nominator: 'QuantKing.eth',
      reason: 'Discovered the first groundbreaking whale-based sentiment strategy. Their "Doge Momentum Divergence" has been studied for weeks.',
      votes: 247,
      timeAgo: '2 days ago',
      avatar: '🐋',
      trending: true
    },
    {
      id: 2,
      nominee: 'AIWizard',
      nominator: 'MeanQueen',
      reason: 'Revolutionary approach to neural net optimization. Their educational content has helped hundreds of new quants.',
      votes: 189,
      timeAgo: '5 days ago',
      avatar: '🧙‍♂️',
      trending: false
    }
  ];

  const shoutouts = [
    {
      id: 1,
      author: 'DataDriven',
      content: 'I studied JessKwon\'s Edge Block combo for weeks—finally cracked it! The momentum + sentiment fusion is pure genius. 🔥',
      likes: 156,
      replies: 23,
      timeAgo: '4h ago',
      avatar: '📊',
      isHot: true
    },
    {
      id: 2,
      author: 'VolatilityHunter',
      content: 'Shoutout to @QuantKing.eth for the volatility crusher strategy. Just hit my 10th consecutive win using their approach! 🚀',
      likes: 89,
      replies: 12,
      timeAgo: '8h ago',
      avatar: '⚡',
      isHot: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Edge AMA Live Chat',
      speaker: 'QuantKing.eth',
      topic: 'Advanced Volatility Strategies',
      date: 'Dec 15, 2024',
      time: '3:00 PM UTC',
      attendees: 234,
      type: 'ama',
      featured: true
    },
    {
      id: 2,
      title: 'Guest Lecture Series',
      speaker: 'MeanQueen',
      topic: 'Risk Management Masterclass',
      date: 'Dec 18, 2024',
      time: '7:00 PM UTC',
      attendees: 189,
      type: 'lecture',
      featured: false
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
              className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 relative"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageSquare className="h-10 w-10" />
              <motion.div
                className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                📢 <span className="text-gradient">Voice of the Community — Social Edge Layer</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-3">
                Quantify the Vibes. Vote the Future.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8 mb-8 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                EtherEdge isn't just about backtests—it's about culture. This section adds social 
                mechanics that turn individual effort into collective wisdom.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400 font-medium">2,847 Active Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-medium">156 Daily Discussions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Enhanced Hall of Fame Nominations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Vote className="h-7 w-7 text-primary" />
                  </motion.div>
                  Hall of Fame Nominations
                </h3>
                <motion.button
                  className="bg-gradient-to-r from-primary/90 to-blue-600/90 hover:from-primary hover:to-blue-600 text-primary-foreground px-6 py-3 rounded-xl transition-all font-bold shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nominate
                </motion.button>
              </div>

              <div className="space-y-6">
                {nominations.map((nomination, index) => (
                  <EnhancedNominationCard key={nomination.id} nomination={nomination} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Edge Shoutouts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-pink-500/5" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="h-7 w-7 text-red-400" />
                  </motion.div>
                  Edge Shoutouts
                </h3>
                <motion.button
                  className="bg-gradient-to-r from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 text-foreground px-6 py-3 rounded-xl transition-all border border-red-500/30 font-bold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post Shoutout
                </motion.button>
              </div>

              <div className="space-y-6">
                {shoutouts.map((shoutout, index) => (
                  <EnhancedShoutoutCard key={shoutout.id} shoutout={shoutout} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Upcoming Edge Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glassmorphism rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="p-3 rounded-xl bg-purple-500/20 text-purple-400"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Calendar className="h-7 w-7" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold">Upcoming Edge Events</h3>
                <p className="text-muted-foreground">Join the conversation with legends</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EnhancedEventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EnhancedNominationCardProps {
  nomination: any;
  index: number;
}

const EnhancedNominationCard = ({ nomination, index }: EnhancedNominationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all group relative overflow-hidden"
    whileHover={{ y: -3, scale: 1.01 }}
  >
    {nomination.trending && (
      <div className="absolute top-4 right-4">
        <motion.div
          className="flex items-center gap-1 bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp className="h-3 w-3" />
          TRENDING
        </motion.div>
      </div>
    )}
    
    <div className="flex items-start gap-4 mb-4">
      <motion.div 
        className="text-3xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {nomination.avatar}
      </motion.div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-bold text-lg group-hover:text-primary transition-colors">
            {nomination.nominee}
          </span>
          <span className="text-sm text-muted-foreground">
            nominated by {nomination.nominator}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{nomination.timeAgo}</p>
      </div>
    </div>
    
    <p className="text-sm mb-6 leading-relaxed">{nomination.reason}</p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Vote className="h-5 w-5 text-primary" />
        <span className="font-bold text-lg">{nomination.votes} votes</span>
        {nomination.trending && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Flame className="h-4 w-4 text-orange-400" />
          </motion.div>
        )}
      </div>
      <motion.button
        className="bg-gradient-to-r from-primary/90 to-blue-600/90 hover:from-primary hover:to-blue-600 text-primary-foreground px-6 py-2 rounded-lg text-sm transition-all font-bold shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Vote
      </motion.button>
    </div>
  </motion.div>
);

interface EnhancedShoutoutCardProps {
  shoutout: any;
  index: number;
}

const EnhancedShoutoutCard = ({ shoutout, index }: EnhancedShoutoutCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-6 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-all group relative overflow-hidden"
    whileHover={{ y: -3, scale: 1.01 }}
  >
    {shoutout.isHot && (
      <div className="absolute top-4 right-4">
        <motion.div
          className="flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Flame className="h-3 w-3" />
          HOT
        </motion.div>
      </div>
    )}
    
    <div className="flex items-start gap-4 mb-4">
      <motion.div 
        className="text-3xl"
        whileHover={{ scale: 1.2, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {shoutout.avatar}
      </motion.div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-bold text-lg group-hover:text-primary transition-colors">
            {shoutout.author}
          </span>
          <span className="text-sm text-muted-foreground">{shoutout.timeAgo}</span>
        </div>
      </div>
    </div>
    
    <p className="text-sm mb-6 leading-relaxed">{shoutout.content}</p>
    
    <div className="flex items-center gap-6">
      <motion.div 
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Heart className="h-5 w-5 text-red-400" />
        <span className="font-medium">{shoutout.likes}</span>
      </motion.div>
      <motion.div 
        className="flex items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Reply className="h-5 w-5 text-muted-foreground" />
        <span className="font-medium">{shoutout.replies}</span>
      </motion.div>
    </div>
  </motion.div>
);

interface EnhancedEventCardProps {
  event: any;
  index: number;
}

const EnhancedEventCard = ({ event, index }: EnhancedEventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="feature-card group relative overflow-hidden"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    {event.featured && (
      <div className="absolute top-4 right-4">
        <motion.div
          className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Award className="h-3 w-3" />
          FEATURED
        </motion.div>
      </div>
    )}
    
    <div className="flex items-center justify-between mb-6">
      <h4 className="font-bold text-xl group-hover:text-primary transition-colors">
        {event.title}
      </h4>
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground font-medium">{event.attendees}</span>
      </div>
    </div>
    
    <div className="mb-6">
      <p className="font-bold text-lg mb-2">Speaker: {event.speaker}</p>
      <p className="text-muted-foreground mb-4 leading-relaxed">{event.topic}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <span>{event.time}</span>
      </div>
    </div>
    
    <motion.button
      className="w-full bg-gradient-to-r from-primary/90 to-purple-600/90 hover:from-primary hover:to-purple-600 text-primary-foreground px-6 py-3 rounded-xl transition-all font-bold shadow-lg"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Join Event
    </motion.button>
  </motion.div>
);

export default VoiceOfCommunity;