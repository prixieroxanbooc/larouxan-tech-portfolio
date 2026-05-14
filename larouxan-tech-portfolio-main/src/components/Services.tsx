
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Zap, MessageSquare, Database, FileText, Boxes, Sparkles, Video, LayoutDashboard } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: "CRM Setup & Automation",
    description: "GoHighLevel, HubSpot integration and optimization for seamless customer management and automated workflows.",
    tools: "GoHighLevel, HubSpot"
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent automation that saves time and reduces manual work.",
    tools: "Make.com, Zapier"
  },
  {
    icon: MessageSquare,
    title: "AI Voice & Chat Agents",
    description: "Custom AI assistants that handle customer inquiries, bookings, and support 24/7 with human-like interactions.",
    tools: "Retell, Vapi, ChatGPT"
  },
  {
    icon: Settings,
    title: "Custom Trackers & POS Systems",
    description: "Tailored tracking systems and point-of-sale solutions built specifically for your business needs.",
    tools: "AppSheet, Google Apps Script"
  },
  {
    icon: FileText,
    title: "SOP & Business Process Setup",
    description: "Comprehensive standard operating procedures and business process documentation for consistent operations.",
    tools: "Notion, Google Workspace"
  },
  {
    icon: Boxes,
    title: "MCP Server Development",
    description: "Custom Model Context Protocol servers that connect AI assistants like Claude to your business tools — Gmail, Docs, Sheets, HubSpot, Slides, and beyond. Containerized and deployed serverlessly on Google Cloud Run.",
    tools: "Node.js, Docker, MCP, Google Cloud Run"
  },
  {
    icon: Sparkles,
    title: "AI Workflow Engineering",
    description: "Advanced n8n workflows with AI agents, RAG chatbots backed by vector stores, and custom MCP triggers — built for scale, full control, and unlimited execution.",
    tools: "n8n, Supabase, OpenAI, RAG"
  },
  {
    icon: Video,
    title: "AI Video Generation Pipelines",
    description: "Automated content-to-video pipelines: blog posts and scripts turned into AI-generated avatar videos using Heygen and Json2Video, with scheduled daily runs.",
    tools: "Heygen, Json2Video, n8n"
  },
  {
    icon: LayoutDashboard,
    title: "Custom Internal Dashboards",
    description: "Internal tools and admin dashboards built with Appsmith — automation command centers, document upload portals, and client-facing apps with authentication and access controls.",
    tools: "Appsmith, Node.js, APIs"
  }
];

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Services &amp; <span className="gradient-bg bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A full-stack mix of automation engineering, AI integration, CRM implementation, and custom tooling — all designed to scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift gradient-border-card border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {service.tools}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
