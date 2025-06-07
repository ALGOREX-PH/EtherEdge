"use client";

import { motion } from 'framer-motion';
import { MessageSquare, Vote, Calendar, Users, Heart, Reply } from 'lucide-react';
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
      avatar: '🐋'
    },
    {
      id: 2,
      nominee: 'AIWizard',
      nominator: 'MeanQueen',
      reason: 'Revolutionary approach to neural net optimization. Their educational content has helped hundreds of new quants.',
      votes: 189,
      timeAgo: '5 days ago',
      avatar: '🧙‍♂️'
    }
  ];

  const shoutouts = [
    {
      id: 1,
      author: 'DataDriven',
      content: 'I studied JessKwon\'s Edge Block combo for weeks—finally cracked it! The momentum + sentiment fusion is pure genius.',
      likes: 156,
      replies: 23,
      timeAgo: '4h ago',
      avatar: '📊'
    },
    {
      id: 2,
      author: 'VolatilityHunter',
      content: 'Shoutout to @QuantKing.eth for the volatility crusher strategy. Just hit my 10th consecutive win using their approach!',
      likes: 89,
      replies: 12,
      timeAgo: '8h ago',
      avatar: '⚡'
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
      attendees: 234
    },
    {
      id: 2,
      title: 'Guest Lecture Series',
      speaker: 'MeanQueen',
      topic: 'Risk Management Masterclass',
      date: 'Dec 18, 2024',
      time: '7:00 PM UTC',
      attendees: 189
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
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
              <MessageSquare className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                📢 <span className="text-gradient">Voice of the Community — Social Edge Layer</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Quantify the Vibes. Vote the Future.
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground">
              EtherEdge isn't just about backtests—it's about culture. This section adds social 
              mechanics that turn individual effort into collective wisdom.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hall of Fame Nominations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Vote className="h-6 w-6 text-primary" />
                Hall of Fame Nominations
              </h3>
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nominate
              </motion.button>
            </div>

            <div className="space-y-4">
              {nominations.map((nomination, index) => (
                <NominationCard key={nomination.id} nomination={nomination} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Edge Shoutouts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-400" />
                Edge Shoutouts
              </h3>
              <motion.button
                className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors border border-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Post Shoutout
              </motion.button>
            </div>

            <div className="space-y-4">
              {shoutouts.map((shoutout, index) => (
                <ShoutoutCard key={shoutout.id} shoutout={shoutout} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Edge Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glassmorphism rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Upcoming Edge Events</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface NominationCardProps {
  nomination: any;
  index: number;
}

const NominationCard = ({ nomination, index }: NominationCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
  >
    <div className="flex items-start gap-3 mb-3">
      <div className="text-2xl">{nomination.avatar}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">{nomination.nominee}</span>
          <span className="text-sm text-muted-foreground">
            nominated by {nomination.nominator}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{nomination.timeAgo}</p>
      </div>
    </div>
    
    <p className="text-sm mb-4">{nomination.reason}</p>
    
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Vote className="h-4 w-4 text-primary" />
        <span className="font-medium">{nomination.votes} votes</span>
      </div>
      <motion.button
        className="bg-primary/90 hover:bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Vote
      </motion.button>
    </div>
  </motion.div>
);

interface ShoutoutCardProps {
  shoutout: any;
  index: number;
}

const ShoutoutCard = ({ shoutout, index }: ShoutoutCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
  >
    <div className="flex items-start gap-3 mb-3">
      <div className="text-2xl">{shoutout.avatar}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold">{shoutout.author}</span>
          <span className="text-sm text-muted-foreground">{shoutout.timeAgo}</span>
        </div>
      </div>
    </div>
    
    <p className="text-sm mb-4">{shoutout.content}</p>
    
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Heart className="h-4 w-4 text-red-400" />
        <span className="text-sm">{shoutout.likes}</span>
      </div>
      <div className="flex items-center gap-2">
        <Reply className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">{shoutout.replies}</span>
      </div>
    </div>
  </motion.div>
);

interface EventCardProps {
  event: any;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="feature-card"
  >
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-semibold">{event.title}</h4>
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{event.attendees}</span>
      </div>
    </div>
    
    <div className="mb-4">
      <p className="font-medium mb-1">Speaker: {event.speaker}</p>
      <p className="text-sm text-muted-foreground mb-2">{event.topic}</p>
      <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
    </div>
    
    <motion.button
      className="w-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Join Event
    </motion.button>
  </motion.div>
);

export default VoiceOfCommunity;