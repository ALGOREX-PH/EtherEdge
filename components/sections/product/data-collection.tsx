"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LineChart, Database, MessageSquare } from 'lucide-react';

const DataCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const dataSources = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Exchange Data",
      description: "OHLC prices, trade volumes, liquidity metrics",
      color: "blue"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "On-Chain Indicators",
      description: "Wallet activity, gas usage, smart contract interactions",
      color: "green"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Sentiment Streams",
      description: "Twitter sentiment, Reddit activity, news event flags",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            1. Data Collection:{' '}
            <span className="text-gradient">
              Tapping Into the Heartbeat of the Market
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            EtherEdge listens to the market like a cardiologist with a stethoscope 
            pressed against Ethereum's chest. Every second, it ingests a symphony 
            of market signals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {dataSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="feature-card"
              >
                <div className={`p-3 rounded-lg inline-flex mb-4 bg-${source.color}-500/20 text-${source.color}-400`}>
                  {source.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{source.title}</h3>
                <p className="text-muted-foreground">{source.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h4 className="text-xl font-semibold mb-4">Why it matters:</h4>
            <p className="text-lg text-muted-foreground">
              Before a model can forecast the future, it must deeply understand the now. 
              EtherEdge ensures every data point is structured, relevant, and ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCollection;