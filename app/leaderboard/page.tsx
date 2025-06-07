"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import LeaderboardHero from '@/components/leaderboard/leaderboard-hero';
import RealtimeLeaderboard from '@/components/leaderboard/realtime-leaderboard';
import ModelBattles from '@/components/leaderboard/model-battles';
import HallOfFame from '@/components/leaderboard/hall-of-fame';
import VoiceOfCommunity from '@/components/leaderboard/voice-of-community';
import ReadyToEnter from '@/components/leaderboard/ready-to-enter';

export default function LeaderboardPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('all-time');
  const [selectedCategory, setSelectedCategory] = useState('all-strategies');

  return (
    <div className="min-h-screen pt-20">
      <LeaderboardHero />
      
      <RealtimeLeaderboard 
        selectedTimeframe={selectedTimeframe}
        setSelectedTimeframe={setSelectedTimeframe}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <ModelBattles />
      
      <HallOfFame />
      
      <VoiceOfCommunity />
      
      <ReadyToEnter />
    </div>
  );
}