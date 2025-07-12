
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection = ({ onStartJourney }: HeroSectionProps) => {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      {/* Designer Credit - Top Middle */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-xs text-gray-500 font-['Georgia'] italic">
          designed and coded by yash vishnoi
        </p>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-black/60 text-green-300 border-green-400/30 mb-6 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Learning Revolution
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Your Personal
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent block">
              AI Mentor
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Create and track personalized learning roadmaps powered by advanced AI. 
            Transform your career goals into structured, achievable milestones with intelligent guidance.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-400 hover:from-purple-700 hover:via-blue-700 hover:to-green-500 text-white text-lg px-8 py-4 shadow-xl shadow-purple-500/25"
              onClick={onStartJourney}
            >
              <Bot className="mr-2 w-5 h-5" />
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-lg rounded-3xl border border-gray-800/50 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                <Bot className="w-3 h-3 mr-1" />
                AI Online
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-400/20 rounded-2xl p-4 max-w-md border border-gray-700/30">
                <p className="text-white font-medium">
                  Hi! I'm your AI mentor. What career goal would you like to achieve?
                </p>
              </div>
              
              <div className="bg-gray-900/80 rounded-2xl p-4 max-w-md ml-auto border border-gray-700/30">
                <p className="text-gray-200">
                  I want to become a full-stack developer in 6 months
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-400/20 rounded-2xl p-4 max-w-md border border-gray-700/30">
                <p className="text-white font-medium">
                  Perfect! I'll create a personalized roadmap based on your current skills. Let's start with a quick assessment...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
