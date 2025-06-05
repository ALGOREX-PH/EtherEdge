"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { LineChart, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedPeriod, setSelectedPeriod] = useState('1M');

  const metrics = {
    mae: 2.3,
    accuracy: 78,
    drawdown: 12.5,
    profit: 156.8
  };

  const periods = ['1D', '1W', '1M', '3M', '6M', '1Y', 'ALL'];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            5. Results:{' '}
            <span className="text-gradient">
              Proof Over Promises
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            We don't ask for trust. We earn it. Explore our historical performance 
            with complete transparency.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 glassmorphism rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Performance Overview</h3>
                <div className="flex gap-2">
                  {periods.map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={cn(
                        "px-3 py-1 rounded-lg text-sm font-medium transition-colors",
                        selectedPeriod === period
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
                      )}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              <div className="aspect-[16/9] rounded-lg bg-secondary/30 p-4 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="h-24 w-24 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground">
                    Interactive chart visualization coming soon
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <MetricCard
                  label="Mean Absolute Error"
                  value={metrics.mae}
                  unit="%"
                  icon={<LineChart className="h-5 w-5" />}
                  color="blue"
                />
                <MetricCard
                  label="Directional Accuracy"
                  value={metrics.accuracy}
                  unit="%"
                  icon={<CheckCircle className="h-5 w-5" />}
                  color="green"
                />
                <MetricCard
                  label="Max Drawdown"
                  value={metrics.drawdown}
                  unit="%"
                  icon={<XCircle className="h-5 w-5" />}
                  color="red"
                />
                <MetricCard
                  label="Cumulative Profit"
                  value={metrics.profit}
                  unit="%"
                  icon={<TrendingUp className="h-5 w-5" />}
                  color="purple"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Performance Log</h3>
                <div className="space-y-4">
                  <LogEntry
                    type="success"
                    message="Predicted 12% upside, actual: 14.2%"
                    time="2h ago"
                  />
                  <LogEntry
                    type="warning"
                    message="Volatility spike detected, adjusting confidence bands"
                    time="4h ago"
                  />
                  <LogEntry
                    type="error"
                    message="Missed flash crash prediction by 3.5%"
                    time="1d ago"
                  />
                  <LogEntry
                    type="success"
                    message="Successfully identified accumulation phase"
                    time="2d ago"
                  />
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Verification</h4>
                <p className="text-muted-foreground mb-4">
                  All predictions are logged on-chain and verifiable. Download raw 
                  data or inspect individual forecasts.
                </p>
                <button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors">
                  Download Performance Data
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

const MetricCard = ({ label, value, unit, icon, color }: MetricCardProps) => (
  <div className="bg-secondary/30 rounded-lg p-4">
    <div className={cn(
      "flex items-center gap-2 mb-2",
      color === "blue" ? "text-blue-400" :
      color === "green" ? "text-green-400" :
      color === "red" ? "text-red-400" :
      "text-purple-400"
    )}>
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="text-2xl font-bold">
      {value}{unit}
    </div>
  </div>
);

interface LogEntryProps {
  type: 'success' | 'warning' | 'error';
  message: string;
  time: string;
}

const LogEntry = ({ type, message, time }: LogEntryProps) => (
  <div className="flex items-start gap-3">
    <div className={cn(
      "w-2 h-2 rounded-full mt-2",
      type === 'success' ? "bg-green-400" :
      type === 'warning' ? "bg-yellow-400" :
      "bg-red-400"
    )} />
    <div>
      <p className="text-sm">{message}</p>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  </div>
);

export default Results;