"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Bell, Settings, Trash2, Edit, Smartphone, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  name: string;
  condition: string;
  channel: 'sms' | 'email' | 'discord' | 'push';
  isActive: boolean;
  lastTriggered?: string;
}

const CustomAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      name: 'ETH Forecast Confidence > 90%',
      condition: 'Confidence > 90%',
      channel: 'sms',
      isActive: true,
      lastTriggered: '2h ago'
    },
    {
      id: '2',
      name: 'Price deviates 5% from prediction',
      condition: 'Deviation > 5% in 15min',
      channel: 'email',
      isActive: true
    },
    {
      id: '3',
      name: 'Anomaly Siren + Red Mood Ring',
      condition: 'Anomaly + Bearish mood',
      channel: 'discord',
      isActive: false,
      lastTriggered: '1d ago'
    },
    {
      id: '4',
      name: 'Edge Block "Liquidity Trap" activates',
      condition: 'Liquidity Trap signal',
      channel: 'push',
      isActive: true
    }
  ]);

  const [showNewAlert, setShowNewAlert] = useState(false);

  const toggleAlert = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  const deleteAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const channelIcons = {
    sms: <Smartphone className="h-4 w-4" />,
    email: <Mail className="h-4 w-4" />,
    discord: <MessageSquare className="h-4 w-4" />,
    push: <Bell className="h-4 w-4" />
  };

  const channelColors = {
    sms: 'text-green-400',
    email: 'text-blue-400',
    discord: 'text-purple-400',
    push: 'text-orange-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glassmorphism rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
            📬 <span>Custom Alerts System</span>
          </h2>
          <p className="text-sm text-muted-foreground">The market doesn't sleep. Neither should your edge.</p>
        </div>
        
        <button
          onClick={() => setShowNewAlert(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Alert
        </button>
      </div>

      {/* Alert List */}
      <div className="space-y-3 mb-6">
        {alerts.map((alert, index) => (
          <AlertCard
            key={alert.id}
            alert={alert}
            index={index}
            onToggle={() => toggleAlert(alert.id)}
            onDelete={() => deleteAlert(alert.id)}
            channelIcon={channelIcons[alert.channel]}
            channelColor={channelColors[alert.channel]}
          />
        ))}
      </div>

      {/* Alert Settings */}
      <div className="border-t border-white/10 pt-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Alert Settings
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">⚙️ Trigger Type</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option>Confidence threshold</option>
              <option>Price deviation</option>
              <option>Volume spike</option>
              <option>Mood ring change</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">🛎️ Delivery Channel</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option>SMS (urgent only)</option>
              <option>Email with charts</option>
              <option>Discord webhook</option>
              <option>Push notification</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">🕰️ Smart Timing</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
              <option>24/7 monitoring</option>
              <option>Trading hours only</option>
              <option>Quiet hours (9PM-7AM)</option>
              <option>Weekly digest</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors border border-white/10">
              Save Settings
            </button>
          </div>
        </div>
      </div>

      {/* New Alert Modal */}
      {showNewAlert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glassmorphism rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-lg font-semibold mb-4">Create New Alert</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Alert Name</label>
                <input
                  type="text"
                  placeholder="e.g., High confidence ETH prediction"
                  className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Condition</label>
                <input
                  type="text"
                  placeholder="e.g., Confidence > 85%"
                  className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Channel</label>
                <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2">
                  <option>SMS</option>
                  <option>Email</option>
                  <option>Discord</option>
                  <option>Push</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowNewAlert(false)}
                className="flex-1 bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewAlert(false)}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg transition-colors"
              >
                Create Alert
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

interface AlertCardProps {
  alert: Alert;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
  channelIcon: React.ReactNode;
  channelColor: string;
}

const AlertCard = ({ alert, index, onToggle, onDelete, channelIcon, channelColor }: AlertCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className={cn(
      "p-4 rounded-lg border transition-all",
      alert.isActive 
        ? "border-primary/30 bg-primary/5" 
        : "border-white/10 bg-secondary/10 opacity-60"
    )}
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onToggle}
            className={cn(
              "w-4 h-4 rounded border-2 transition-all",
              alert.isActive 
                ? "bg-primary border-primary" 
                : "border-muted-foreground"
            )}
          >
            {alert.isActive && (
              <div className="w-full h-full rounded bg-primary-foreground scale-50" />
            )}
          </button>
          <h4 className="font-medium">{alert.name}</h4>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground ml-7">
          <span>{alert.condition}</span>
          <div className={cn("flex items-center gap-1", channelColor)}>
            {channelIcon}
            <span className="capitalize">{alert.channel}</span>
          </div>
          {alert.lastTriggered && (
            <span>Last: {alert.lastTriggered}</span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
          <Edit className="h-4 w-4" />
        </button>
        <button
          onClick={onDelete}
          className="p-1 text-muted-foreground hover:text-red-400 transition-colors"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

export default CustomAlerts;