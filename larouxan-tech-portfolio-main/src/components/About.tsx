
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Globe, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "50+", label: "Businesses Served" },
  { icon: Clock, value: "2+", label: "Years Experience" },
  { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
  { icon: Globe, value: "24/7", label: "Support Available" }
];

const About = () => {
  return (
    <section id="about" className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold">
                About <span className="gradient-bg bg-clip-text text-transparent">LarouxanTech</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Prixie Roxan — Tech VA, automation engineer, and AI integration specialist based in the Philippines. LarouxanTech designs workflows, builds MCP servers and AI agents, sets up CRMs, and engineers custom internal tools for businesses that want to scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 2 years of hands-on experience helping online businesses, coaches, and agencies scale through automation, we understand the unique challenges of growing a business in today's digital landscape.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose LarouxanTech?</h3>
              <ul className="space-y-3">
                {[
                  "Proven track record with 50+ successful projects",
                  "AI-first approach: MCP servers, RAG chatbots, custom agents",
                  "Self-hosted & serverless deployment expertise",
                  "Deep expertise in cutting-edge automation tools",
                  "Personalized solutions tailored to your business",
                  "Philippines-based team with global perspective",
                  "Ongoing support and optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift gradient-border-card border-0 shadow-lg">
                <CardContent className="space-y-4 p-0">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
