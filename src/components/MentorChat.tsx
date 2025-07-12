import { askHuggingFaceChat } from "@/lib/huggingface";  // Correct import

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Bot, Send, User, Sparkles } from 'lucide-react';

interface MentorChatProps {
  onClose: () => void;
}

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export const MentorChat = ({ onClose }: MentorChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI mentor. I'm here to help you create a personalized learning roadmap. What career goal would you like to achieve?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const botReply = await askHuggingFaceChat(input);  // Use correct function

      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: botReply,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: "⚠️ Oops! Something went wrong while talking to your AI mentor.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error calling Hugging Face API:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-[600px] bg-gray-900/95 backdrop-blur-lg border-purple-500/30 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-purple-500/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-blue-600 to-green-400 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">AI Mentor</h3>
              <Badge className="bg-green-500/20 text-green-300 border-green-400/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Online
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-400 hover:text-white hover:bg-gray-800">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-gradient-to-r from-purple-600 via-blue-600 to-green-400'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-800/80 text-gray-100 border border-purple-500/20'
                }`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        <div className="p-4 border-t border-purple-500/30">
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-gray-800/50 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
            />
            <Button onClick={handleSend} className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-400 hover:from-purple-700 hover:via-blue-700 hover:to-green-500">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
