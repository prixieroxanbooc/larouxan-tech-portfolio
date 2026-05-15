
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 mesh-bg">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Scale Your Business with 
                <span className="gradient-bg bg-clip-text text-transparent"> Smart Automation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From CRM setups and AI voice agents to custom MCP servers and advanced n8n workflows — I help businesses automate, integrate, and scale.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 tech-glow btn-shine transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30">
                <a href="https://calendly.com/prixieroxanbooc/30min" target="_blank" rel="noopener noreferrer">
                  Book a Free Call
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/projects">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  View My Portfolio
                </Link>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right space-y-6">
            <div className="relative bg-card rounded-2xl p-6 shadow-xl hover-lift">
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe
                  src="https://drive.google.com/file/d/1MKTnwQ3F_EW51ucOPg2VbB-jctsaXdJG/preview"
                  className="w-full h-full"
                  title="LarouxanTech Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Learn how LarouxanTech can transform your business</p>
              </div>
            </div>

            {/* Enhanced profile section */}
            <div className="flex flex-col items-center space-y-4 bg-card rounded-2xl p-6 shadow-lg">
              <img 
                src="/lovable-uploads/3d2c8a0b-8201-4b36-98a9-818c8cff83e8.png" 
                alt="Prixie Roxan - Founder of LarouxanTech" 
                className="w-32 h-32 rounded-full border-4 border-primary shadow-lg"
              />
              <div className="text-center">
                <p className="font-bold text-xl text-foreground">Prixie Roxan</p>
                <p className="text-muted-foreground">Tech VA & Automation Engineer | AI • MCP • CRM • Workflows</p>
                <p className="text-sm text-muted-foreground mt-2">Helping businesses scale through smart automation</p>
              </div>
              
              {/* CTA button under profile */}
              <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 tech-glow w-full">
                <a href="https://calendly.com/prixieroxanbooc/30min" target="_blank" rel="noopener noreferrer">
                  Book a Free Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
