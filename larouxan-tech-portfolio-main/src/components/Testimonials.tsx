
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Online Coach",
    content: "Working with LarouxanTech saved me over 20 hours a week. The automation workflows Prixie set up for my coaching business are incredible!",
    rating: 5
  },
  {
    name: "Daniel R.",
    role: "Real Estate Team",
    content: "Prixie handled our CRM migration flawlessly. Highly recommended for anyone looking to streamline their business operations.",
    rating: 5
  },
  {
    name: "Leo G.",
    role: "Startup Founder",
    content: "Fast, reliable, and super tech-savvy. Delivered our AI agent in 3 days. LarouxanTech is now our go-to for all tech solutions.",
    rating: 5
  },
  {
    name: "Gus Puston",
    role: "Netbank.ph",
    content: "Wow, this is really great — it will help our employees handle their tasks with faster and more reliable workflows. Excellent job!",
    rating: 5
  },
  {
    name: "Stasiu Sliva",
    role: "S&C Digital Solutions",
    content: "This really helps us interact faster with clients! It's been a great fit for our company.",
    rating: 5
  },
  {
    name: "Nick Cornelious",
    role: "King Caller AI",
    content: "She really helps us with our business partners — a great automation developer who builds end-to-end processes.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-24 pb-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="gradient-bg bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners have to say about working with LarouxanTech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift gradient-border-card border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
