"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PriceForecastPanel from '@/components/forecasts/price-forecast-panel';
import MarketMoodFeed from '@/components/forecasts/market-mood-feed';
import EdgeOverlays from '@/components/forecasts/edge-overlays';
import CustomAlerts from '@/components/forecasts/custom-alerts';
import HistoricalReplay from '@/components/forecasts/historical-replay';

export default function ForecastsPage() {
  const [currentPrice, setCurrentPrice] = useState(2345.78);
  const [marketMood, setMarketMood] = useState<'bullish' | 'bearish' | 'volatile'>('bullish');

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 10;
      setCurrentPrice(prev => Math.max(0, prev + change));
      
      // Randomly change market mood
      if (Math.random() < 0.05) {
        const moods: ('bullish' | 'bearish' | 'volatile')[] = ['bullish', 'bearish', 'volatile'];
        setMarketMood(moods[Math.floor(Math.random() * moods.length)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-white/10 bg-black/40 backdrop-blur-sm sticky top-20 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-3">
                📊🔮 <span className="text-gradient">Live Dashboard & Forecasts</span>
              </h1>
              <p className="text-muted-foreground">Your Crystal Ball, Reimagined.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">Live Updates</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">ETH</div>
                  <div className="text-lg font-bold">${currentPrice.toFixed(2)}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Market Mood</div>
                  <div className={`text-sm font-medium ${
                    marketMood === 'bullish' ? 'text-green-400' :
                    marketMood === 'bearish' ? 'text-red-400' :
                    'text-purple-400'
                  }`}>
                    {marketMood === 'bullish' ? '🟢 Bullish' :
                     marketMood === 'bearish' ? '🔴 Bearish' :
                     '🟣 Volatile'}
                  </div>
                </div>
                
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors">
                  + New Alert
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Dashboard Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Price Forecast Panel */}
          <div className="xl:col-span-2">
            <PriceForecastPanel 
              currentPrice={currentPrice}
              marketMood={marketMood}
            />
          </div>
          
          {/* Right Column - Market Mood Feed */}
          <div className="xl:col-span-1">
            <MarketMoodFeed marketMood={marketMood} />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
          {/* Edge Overlays */}
          <EdgeOverlays />
          
          {/* Custom Alerts */}
          <CustomAlerts />
        </div>

        {/* Third Row - Historical Replay */}
        <div className="mt-8">
          <HistoricalReplay />
        </div>
      </div>
    </div>
  );
}