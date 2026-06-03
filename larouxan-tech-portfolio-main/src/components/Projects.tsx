import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Mail,
  FileText,
  Sheet,
  Users,
  Presentation,
  Github,
  ExternalLink,
  FolderOpen,
  PhoneCall,
  Bot,
  KanbanSquare,
  Briefcase,
  Zap,
  Workflow,
  Network,
  Code2,
  ClipboardList,
  Film,
  AppWindow,
  Search,
  Images,
  FileSignature,
  Database,
  BarChart3,
  ShieldCheck,
  Boxes,
  MessageSquare,
  LayoutDashboard,
  MessagesSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Project = {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  driveAssetsUrl?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    icon: LayoutDashboard,
    title: "NovaBank Workspace — Banking Ops Console",
    shortDescription: "Internal AI workspace for a digital bank — tasks, meetings, workflows & debugging",
    longDescription:
      "An internal operations console for NovaBank, a fictional modern digital bank. Built with Next.js 14, TypeScript, and Tailwind CSS: a task manager with a kanban pipeline, AI meeting capture that turns transcripts into linked action-item tasks, an automation workflow generator, an AI-powered debug console, and live project & people rollups across NovaBank initiatives (Nova Everyday, Nova Business, Nova Flex Loan) — powered by the Google Gemini API.",
    githubUrl: "https://github.com/prixieroxanbooc/novabank-workspace",
    liveUrl: "https://novabank-workspace.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini", "Fintech", "Full-Stack", "AI"],
  },
  {
    icon: Mail,
    title: "Gmail MCP Server",
    shortDescription: "AI-powered Gmail integration via Model Context Protocol",
    longDescription:
      "An MCP server that allows AI assistants like Claude to read, search, and manage Gmail messages programmatically. Deployed as a containerized service on Google Cloud Run.",
    githubUrl: "https://github.com/prixieroxanbooc/gmail-mcp-server",
    tags: ["Node.js", "Docker", "Google Cloud Run", "MCP", "Gmail API"],
  },
  {
    icon: FileText,
    title: "Google Docs MCP Server",
    shortDescription: "AI-powered Google Docs integration via MCP",
    longDescription:
      "MCP server enabling AI assistants to create, read, and edit Google Docs. Built with Node.js, containerized with Docker, and deployed serverlessly on Google Cloud Run.",
    githubUrl: "https://github.com/prixieroxanbooc/google-docs-mcp-server",
    tags: ["Node.js", "Docker", "Google Cloud Run", "MCP", "Google Docs API"],
  },
  {
    icon: Sheet,
    title: "Google Sheets MCP Server",
    shortDescription: "AI-powered Google Sheets integration via MCP",
    longDescription:
      "MCP server that lets AI assistants read, write, and analyze Google Sheets data. Deployed on Google Cloud Run for scalable, on-demand access.",
    githubUrl: "https://github.com/prixieroxanbooc/gsheets-mcp-server",
    tags: ["Node.js", "Docker", "Google Cloud Run", "MCP", "Google Sheets API"],
  },
  {
    icon: Users,
    title: "HubSpot MCP Server",
    shortDescription: "Connecting AI assistants to HubSpot CRM",
    longDescription:
      "MCP server that bridges AI assistants and HubSpot CRM, enabling automated contact management, deal tracking, and CRM workflows.",
    githubUrl: "https://github.com/prixieroxanbooc/hubspot-mcp-server",
    tags: ["Node.js", "Docker", "Google Cloud Run", "MCP", "HubSpot API"],
  },
  {
    icon: Presentation,
    title: "Google Slides MCP Server",
    shortDescription: "AI-powered Google Slides automation via MCP",
    longDescription:
      "MCP server that enables AI assistants to create and modify Google Slides presentations programmatically.",
    githubUrl: "https://github.com/prixieroxanbooc/google-slides-mcp-server",
    tags: ["Node.js", "Docker", "Google Cloud Run", "MCP", "Google Slides API"],
  },
  {
    icon: PhoneCall,
    title: "Retell Voice AI Agents",
    shortDescription: "Natural-sounding voice AI agents built with Retell",
    longDescription:
      "Voice AI agents that handle inbound and outbound phone interactions — customer inquiries, appointment booking, lead qualification, and 24/7 support. Built with Retell for human-like conversation flow.",
    tags: ["Retell", "Voice AI", "Conversational AI", "Phone Automation"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/10d0j9lS4FkT6JoTrUyX8I7Wa0WK8YwyD",
  },
  {
    icon: Bot,
    title: "Microsoft Copilot Studio Agents",
    shortDescription: "Custom AI agents built with Microsoft Copilot Studio",
    longDescription:
      "Conversational AI agents and chatbots built on Microsoft Copilot Studio for enterprise workflows, knowledge retrieval, and automated customer support across Microsoft 365 environments.",
    tags: ["Microsoft Copilot Studio", "AI Agents", "Conversational AI", "Enterprise"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1B1UB6_q2vZmfRjEAd5StcEeI3fDq1JGG",
  },
  {
    icon: KanbanSquare,
    title: "Monday.com Workflows",
    shortDescription: "Custom project boards and automations on Monday.com",
    longDescription:
      "Project boards, dashboards, and cross-team automations on Monday.com — streamlining operations, task tracking, and reporting for client teams.",
    tags: ["Monday.com", "Project Management", "Workflow Automation"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1WSbLzYWUNykatV49hvlOB32i56tdKepQ",
  },
  {
    icon: Briefcase,
    title: "GoHighLevel CRM Implementations",
    shortDescription: "End-to-end GHL CRM setups with pipelines & automations",
    longDescription:
      "Full GoHighLevel CRM implementations: pipeline setup, lead tracking, lifecycle workflows, calendars, Conversation AI, and SaaS sub-account configuration for online businesses, coaches, and agencies.",
    tags: ["GoHighLevel", "CRM", "Workflow Automation", "Lead Management"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1aFmJpbVwCKhoMa5CPb_kfwqKcoZe6FJf",
  },
  {
    icon: Zap,
    title: "Zapier Automations",
    shortDescription: "No-code Zapier workflows connecting business apps",
    longDescription:
      "Multi-step Zapier workflows connecting CRMs, email tools, spreadsheets, and SaaS platforms. Automates lead routing, data syncing, notifications, and recurring operational tasks.",
    tags: ["Zapier", "No-Code Automation", "App Integration"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1WnjhV9yCj62PPYHXqcTM9hfeXDAJ7jDK",
  },
  {
    icon: Workflow,
    title: "n8n Custom Workflows",
    shortDescription: "Advanced n8n workflows with AI agents, RAG, and MCP integration",
    longDescription:
      "Advanced n8n workflows including AI agents with Postgres chat memory, RAG chatbots backed by Supabase vector store, Heygen video generation pipelines, custom MCP server triggers, and integrations with internal banking tools — all on a single platform for unlimited execution.",
    tags: ["n8n", "AI Agents", "RAG", "Supabase", "OpenAI", "MCP"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1gY_SRJw6voSwc5kAIGUXnbCa2bH3ke7N",
  },
  {
    icon: Network,
    title: "Make.com Automation Scenarios",
    shortDescription: "Visual workflow automations built on Make.com",
    longDescription:
      "Complex multi-step automations on Make.com (formerly Integromat) connecting CRMs, marketing platforms, payment systems, and AI tools for lead processing, fulfillment, and operational workflows.",
    tags: ["Make.com", "Workflow Automation", "App Integration"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1kgKEaPQf_P6uONOdjTK6i1boDslByzUy",
  },
  {
    icon: Code2,
    title: "Google Apps Script Tools",
    shortDescription: "Custom Google Workspace tools and automations",
    longDescription:
      "Custom Google Apps Script tools for Sheets, Docs, Gmail, and Drive: automated report generators, mail-merge utilities, data scrapers, and internal tooling for client business operations.",
    tags: ["Google Apps Script", "Google Workspace", "JavaScript", "Automation"],
    driveAssetsUrl: "https://drive.google.com/drive/u/0/folders/1WZxFbHskl2_1EAbavkoC463Zzdhnc3yW",
  },
  {
    icon: ClipboardList,
    title: "Enterprise Asana Automations",
    shortDescription: "Project boards and AI-powered task automation on Asana",
    longDescription:
      "Enterprise Asana implementations for a Philippine rural bank: kanban task boards, an AI Project long-list, automated task generation, cross-team coordination, and integration with internal tools — built for fast-moving operations and IT teams.",
    tags: ["Asana", "Project Management", "Enterprise", "AI Workflows"],
    images: [
      "/portfolio-images/asana-board.png",
      "/portfolio-images/asana-list.png",
    ],
  },
  {
    icon: Film,
    title: "Heygen + Json2Video Content Pipeline",
    shortDescription: "Daily AI-generated video content pipeline",
    longDescription:
      "Automated content-to-video pipeline: pulls daily blog posts, generates scripts and visual prompts with an AI agent, creates avatar and faceless videos via Heygen and Json2Video, then tracks status across multiple sheets — all orchestrated through n8n.",
    tags: ["Heygen", "Json2Video", "n8n", "AI Agents", "Content Automation"],
  },
  {
    icon: AppWindow,
    title: "Appsmith Internal Apps",
    shortDescription: "Custom-built internal tools and dashboards on Appsmith",
    longDescription:
      "Full-stack Appsmith internal apps: a Larouxan Tech 'Automation Command Center' (auth, project management, document upload, AI-powered analysis) and a QRPH (QR Ph) Code Generator for a fintech client — Person-to-Merchant / P2P QR generation with JS-based form handlers and JSON queries against a Postgres backend.",
    tags: ["Appsmith", "Internal Tools", "Dashboard", "Authentication", "JavaScript", "Postgres"],
    images: [
      "/portfolio-images/appsmith-form.png",
      "/portfolio-images/appsmith-qrph-1.png",
      "/portfolio-images/appsmith-qrph-2.png",
      "/portfolio-images/appsmith-qrph-3.png",
    ],
  },
  {
    icon: Bot,
    title: "Closebot AI Agents",
    shortDescription: "Conversational AI agents built with Closebot",
    longDescription:
      "AI-powered chatbots built with Closebot for lead qualification, customer support, and CRM-integrated conversations — designed to handle pre-sales and post-sales interactions inside GoHighLevel sub-accounts.",
    tags: ["Closebot", "AI Agents", "Lead Qualification", "GHL Integration"],
  },
  {
    icon: Search,
    title: "Onyx (formerly Danswer) Knowledge Agents",
    shortDescription: "Enterprise knowledge retrieval & AI search with Onyx",
    longDescription:
      "Enterprise knowledge agents built on Onyx (formerly Danswer) — semantic search and RAG-powered Q&A grounded in internal documents, operational data, and Postgres-backed financial datasets. Used to power AI assistants for banking ops teams.",
    tags: ["Onyx", "Danswer", "Enterprise Search", "RAG", "PostgreSQL"],
  },
  {
    icon: FileSignature,
    title: "Loan Document Generator Service",
    shortDescription: "Microservice that fills DOCX loan templates from JSON",
    longDescription:
      "A serverless REST microservice that generates loan document bundles by filling Word (DOCX) templates from a structured JSON payload — two bundles, 54 fields total. Built as a pure templater (no financial computation) to keep legal/finance review in control, and deployed on Google Cloud Run. The live demo builds the request and a rendered document preview in the browser using sample data.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/demo-loan-docs.html",
    tags: ["Node.js", "Express", "Google Cloud Run", "docxtemplater", "REST API"],
  },
  {
    icon: Database,
    title: "Large-Spreadsheet Filter & Billing Console",
    shortDescription: "Server-side filtering of 290k+ row exports + billing PDF",
    longDescription:
      "A Cloud Run service that streams and filters 290,000+ row spreadsheet exports server-side — raw rows never reach the browser — then generates a deterministic monthly billing report and invoice PDF. Solved a scaling failure where an earlier approach overflowed on large files. Live demo simulates the preview-count → generate flow with fabricated sample data.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/demo-spreadsheet-filter.html",
    tags: ["Node.js", "Express", "Google Cloud Run", "Google Sheets API", "Drive API"],
  },
  {
    icon: BarChart3,
    title: "AI Usage Analytics Dashboard",
    shortDescription: "Adoption & governance dashboard for an internal AI platform",
    longDescription:
      "An analytics dashboard giving leadership visibility into adoption of an internal AI platform: active users, growth trends, and breakdowns by role and team. Secured behind an identity-aware proxy (org-domain only), with Firestore-backed role-based access (super-admin / member) and a full audit trail on every view and admin action. Deployed on Google Cloud Run.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/demo-dashboard.html",
    tags: ["Express", "Google Cloud Run", "Firestore", "IAP", "RBAC", "Audit Log"],
  },
  {
    icon: ShieldCheck,
    title: "MCP Gateway & Tool Governance",
    shortDescription: "Per-user identity routing & safety controls for MCP servers",
    longDescription:
      "A gateway fronting a fleet of MCP servers: it maps each profile to a user identity and injects it upstream, enforcing per-user OAuth so the assistant always acts as the right person. Adds an admin panel with per-profile tool allow/deny lists, live tool discovery, and destructive tools disabled by default. Deployed on Google Cloud Run.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/demo-mcp.html",
    tags: ["Node.js", "Google Cloud Run", "MCP", "OAuth 2.0", "Firestore"],
  },
  {
    icon: MessageSquare,
    title: "MCP Chat Client",
    shortDescription: "Chat client that calls MCP tools mid-conversation",
    longDescription:
      "A lightweight chat client (FastAPI + an LLM) that connects to Model Context Protocol servers over streamable HTTP / JSON-RPC, letting the assistant call real tools — Gmail, Sheets, Docs, Slides — during a conversation. It is backed by an MCP wrapper exposing 100+ platform capabilities as callable tools. The live demo runs a real LLM (bring your own key, capped) or simulated replies, with destructive tools blocked by a safe-defaults policy. Deployed on Google Cloud Run.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/demo-chat-client.html",
    tags: ["Python", "FastAPI", "LLM", "MCP", "JSON-RPC", "Google Cloud Run"],
  },
  {
    icon: MessagesSquare,
    title: "Embeddable FAQ Chatbot Widget",
    shortDescription: "Drop-in floating help widget — static, button-driven, no LLM",
    longDescription:
      "A self-contained floating FAQ chatbot any site can embed with one script tag. Static and button-driven (no AI, no API keys, no backend), it renders inside a Shadow DOM so it never clashes with the host page's CSS. Includes a no-code builder to set your brand, import a logo, pick a color, and paste your own knowledge base, then copy a ready-to-paste embed snippet.",
    liveUrl: "https://prixieroxanbooc.github.io/portfolio/faq-builder.html",
    tags: ["JavaScript", "Web Component", "Shadow DOM", "Embeddable", "No-Code"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const imageCount = project.images?.length ?? 0;
  const hasImages = imageCount > 0;

  return (
    <>
      <Card className="hover-lift gradient-border-card border-0 shadow-lg flex flex-col overflow-hidden">
        <CardHeader className="pb-4">
          <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
            <project.icon className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col flex-1">
          <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-muted px-3 py-1 rounded-full text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2 mt-auto">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild className="gradient-bg text-white hover:opacity-90">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </a>
              </Button>
            )}
            {project.driveAssetsUrl && (
              <Button size="sm" variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href={project.driveAssetsUrl} target="_blank" rel="noopener noreferrer">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Files
                </a>
              </Button>
            )}
            {hasImages && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setGalleryOpen(true)}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Images className="w-4 h-4 mr-2" />
                Images{imageCount > 1 ? ` (${imageCount})` : ''}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {hasImages && (
        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>{project.shortDescription}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 overflow-y-auto pr-2 -mr-2">
              {project.images!.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full rounded-lg border border-border"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-bg bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A mix of custom MCP servers, AI agents, automation platforms, and enterprise integrations — work shipped for real clients across CRMs, content pipelines, and internal tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
