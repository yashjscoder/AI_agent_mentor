
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Brain, Target, Zap, Star, Users, TrendingUp, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCard } from '@/components/FeatureCard';
import { MentorChat } from '@/components/MentorChat';

const Index = () => {
  const [showMentor, setShowMentor] = useState(false);

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Mentor",
      description: "Get personalized guidance from our advanced AI mentor that understands your unique goals and learning style.",
      gradient: "gradient-dark-purple"
    },
    {
      icon: Target,
      title: "Custom Roadmaps",
      description: "Receive tailored learning paths designed specifically for your career objectives and current skill level.",
      gradient: "gradient-dark-blue"
    },
    {
      icon: Brain,
      title: "Smart Progress Tracking",
      description: "Monitor your advancement with intelligent analytics that adapt your roadmap based on your progress.",
      gradient: "gradient-dark-green"
    },
    {
      icon: Zap,
      title: "Real-time Adaptation",
      description: "Your roadmap evolves with you, adjusting timelines and content based on your learning pace and achievements.",
      gradient: "gradient-dark-neon"
    }
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Learners Guided" },
    { icon: TrendingUp, value: "85%", label: "Career Success Rate" },
    { icon: BookOpen, value: "500+", label: "Learning Paths" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <HeroSection onStartJourney={() => setShowMentor(true)} />
      
      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Personal AI Learning Companion
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of personalized education with our intelligent mentor system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black/60 backdrop-blur-lg border-gray-800/50 text-center p-6">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-900/80 via-blue-900/80 to-green-800/80 border-0 p-12 backdrop-blur-lg">
            <CardContent className="pt-6">
              <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse-slow" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of learners who have already accelerated their growth with our AI mentor
              </p>
              <Button 
                size="lg" 
                className="bg-black/60 text-white hover:bg-black/80 text-lg px-8 py-4 border border-green-400/30"
                onClick={() => setShowMentor(true)}
              >
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mentor Chat Interface */}
      {showMentor && (
        <MentorChat onClose={() => setShowMentor(false)} />
      )}
    </div>
  );
};

export default Index;
