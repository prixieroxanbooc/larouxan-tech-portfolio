import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "AI & MCP",
    skills: [
      "Model Context Protocol (MCP)",
      "AI Integration / LLM Tooling",
      "ChatGPT / OpenAI",
      "Microsoft Copilot Studio",
      "Retell",
      "Vapi",
      "Closebot",
      "Onyx (formerly Danswer)",
      "RAG / Vector Stores",
      "FastMCP",
      "JSON-RPC / Streamable HTTP",
      "AI Chat Clients (FastAPI)",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Run",
      "Docker / Containerization",
      "Serverless Architecture",
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Git / GitHub",
      "GitHub Pages",
    ],
  },
  {
    title: "CRM & Workflow Automation",
    skills: [
      "GoHighLevel",
      "HubSpot",
      "Make.com",
      "Zapier",
      "n8n",
      "Monday.com",
    ],
  },
  {
    title: "Google Workspace & Productivity",
    skills: [
      "Google Workspace APIs",
      "Google Apps Script",
      "Apps Script Web Apps",
      "Google Sheets (as backend)",
      "Google Drive API",
      "AppSheet",
      "Notion",
    ],
  },
  {
    title: "APIs Integrated",
    skills: [
      "Gmail API",
      "Google Docs API",
      "Google Sheets API",
      "Google Slides API",
      "HubSpot API",
    ],
  },
  {
    title: "AI-Assisted Development",
    skills: [
      "Vibe Coding (Claude, ChatGPT, LLMs)",
      "AI-Pair Programming",
      "Low-Code Development",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "Bots & Messaging",
    skills: [
      "Telegram Bot Development",
      "grammY",
      "Telegram Bot API",
      "Chatbot Payment / Paywall Flows",
      "Inline Keyboards & Callbacks",
    ],
  },
  {
    title: "Web & Frontend",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Web Components / Shadow DOM",
      "Embeddable Widgets",
      "Responsive UI",
    ],
  },
  {
    title: "Document & File Generation",
    skills: [
      "DOCX (docxtemplater)",
      "PDF (jsPDF)",
      "Excel / CSV (SheetJS)",
      "Client-Side File Generation",
      "Branded Templates / Design Systems",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-24 pb-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Tech <span className="gradient-bg bg-clip-text text-transparent">Stack & Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The tools and technologies I work with to build modern, scalable automation and AI integration solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-0 shadow-lg hover-lift gradient-border-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-muted text-primary font-medium hover:bg-muted"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
