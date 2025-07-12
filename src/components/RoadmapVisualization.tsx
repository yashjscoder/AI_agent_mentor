
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock, Star, Book, Code, Trophy } from 'lucide-react';

export const RoadmapVisualization = () => {
  const roadmapSteps = [
    {
      id: 1,
      title: "Fundamentals",
      description: "HTML, CSS, JavaScript basics",
      status: "completed",
      duration: "4 weeks",
      icon: Book,
      skills: ["HTML5", "CSS3", "JavaScript ES6"]
    },
    {
      id: 2,
      title: "Frontend Framework",
      description: "React.js mastery",
      status: "in-progress",
      duration: "6 weeks",
      icon: Code,
      skills: ["React", "State Management", "Component Design"]
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Node.js and databases",
      status: "upcoming",
      duration: "8 weeks",
      icon: Circle,
      skills: ["Node.js", "Express", "MongoDB", "APIs"]
    },
    {
      id: 4,
      title: "Full-Stack Projects",
      description: "Build complete applications",
      status: "upcoming",
      duration: "6 weeks",
      icon: Trophy,
      skills: ["MERN Stack", "Deployment", "Testing"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Your Learning Roadmap Preview
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          See how our AI creates structured, progressive learning paths tailored to your goals
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 hidden md:block" />

        <div className="space-y-6">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 ml-0 md:ml-16">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="absolute -left-20 top-6 hidden md:block">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-green-500' :
                          step.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-500'
                        }`}>
                          <step.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-xl font-semibold text-white">{step.title}</h4>
                          {getStatusIcon(step.status)}
                        </div>
                        <p className="text-gray-300 mb-3">{step.description}</p>
                        <Badge className={getStatusColor(step.status)}>
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {step.status === 'in-progress' && (
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[65%]"></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
