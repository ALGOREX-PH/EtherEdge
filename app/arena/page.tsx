"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ArenaHero from '@/components/arena/arena-hero';
import StrategyBuilder from '@/components/arena/strategy-builder';
import ArenaEngine from '@/components/arena/arena-engine';
import SimulatedPnL from '@/components/arena/simulated-pnl';
import CommunityShowdown from '@/components/arena/community-showdown';
import ArenaCommentators from '@/components/arena/arena-commentators';
import ShareRemix from '@/components/arena/share-remix';
import WhyArenaMatters from '@/components/arena/why-arena-matters';
import ComingSoon from '@/components/arena/coming-soon';

export default function ArenaPage() {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);
  const [backtestResults, setBacktestResults] = useState<any>(null);

  return (
    <div className="min-h-screen pt-20">
      <ArenaHero />
      
      <StrategyBuilder 
        onStrategySelect={setSelectedStrategy}
        selectedStrategy={selectedStrategy}
      />
      
      <ArenaEngine 
        strategy={selectedStrategy}
        onResultsUpdate={setBacktestResults}
      />
      
      <SimulatedPnL results={backtestResults} />
      
      <CommunityShowdown />
      
      <ArenaCommentators />
      
      <ShareRemix />
      
      <WhyArenaMatters />
      
      <ComingSoon />
    </div>
  );
}