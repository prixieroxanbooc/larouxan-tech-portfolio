
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Calendar, MessageSquare, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-bg bg-clip-text text-transparent">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how LarouxanTech can help automate your workflows and accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="hover-lift border-0 shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Book Your Free Consultation</h3>
                <p className="text-muted-foreground">
                  Let's explore how we can automate your business processes and save you time.
                </p>
                <Button size="lg" asChild className="gradient-bg text-white hover:opacity-90 tech-glow w-full">
                  <a href="https://calendly.com/prixieroxanbooc/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Free Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="hover-lift gradient-border-card border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Email Us</h4>
                    <a
                      href="mailto:prixieroxanbooc@gmail.com"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      prixieroxanbooc@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift gradient-border-card border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">WhatsApp</h4>
                    <a
                      href="https://wa.me/639678968426"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      Chat with me
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift gradient-border-card border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/prexel-roxan-macalaguim-7314b221b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift gradient-border-card border-0 shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground">Philippines</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold">Why Start Today?</h3>
              <ul className="space-y-4">
                {[
                  "Free consultation with automation & AI expert",
                  "Custom MCP server or workflow design tailored to your stack",
                  "AI agents and automations deployed in days, not weeks",
                  "Self-hosted or serverless — your choice",
                  "No upfront costs or commitments",
                  "Ongoing support and optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <img 
                src="/lovable-uploads/3d2c8a0b-8201-4b36-98a9-818c8cff83e8.png" 
                alt="Prixie Roxan - LarouxanTech Founder" 
                className="w-24 h-24 rounded-full border-4 border-primary mx-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">
                "I build AI agents, MCP servers, and automation workflows that save businesses 20+ hours a week — let's design yours."
              </p>
              <p className="font-semibold text-primary mt-2">- Prixie Roxan, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
