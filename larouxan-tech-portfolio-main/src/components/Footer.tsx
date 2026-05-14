
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* New tech-inspired logo for footer */}
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-violet-400 flex items-center justify-center shadow-lg">
                  {/* Circuit/automation inspired design */}
                  <div className="relative w-6 h-6">
                    {/* Central processor square */}
                    <div className="absolute inset-1.5 bg-white/90 rounded-sm"></div>
                    {/* Circuit connections */}
                    <div className="absolute top-0 left-1/2 w-0.5 h-1.5 bg-white transform -translate-x-0.5"></div>
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-1.5 bg-white transform -translate-x-0.5"></div>
                    <div className="absolute left-0 top-1/2 w-1.5 h-0.5 bg-white transform -translate-y-0.5"></div>
                    <div className="absolute right-0 top-1/2 w-1.5 h-0.5 bg-white transform -translate-y-0.5"></div>
                    {/* Corner connection points */}
                    <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-background tracking-tight">LarouxanTech</span>
                <span className="text-xs text-background/70 -mt-1 tracking-wide">AUTOMATION SOLUTIONS</span>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering businesses with smart automation solutions. Scale without burning out.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>CRM Setup & Automation</li>
              <li>Workflow Automation</li>
              <li>AI Voice & Chat Agents</li>
              <li>MCP Server Development</li>
              <li>AI Workflow Engineering</li>
              <li>AI Video Generation</li>
              <li>Custom Dashboards (Appsmith)</li>
              <li>Custom Trackers & POS</li>
              <li>SOP & Process Setup</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-background/80">
              <p>prixieroxanbooc@gmail.com</p>
              <p>Philippines</p>
              <a 
                href="https://calendly.com/prixieroxanbooc/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background hover:text-background/80 transition-colors"
              >
                Book a Free Call
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-background transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-and-conditions" 
                  className="hover:text-background transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 LarouxanTech. All rights reserved. Built with ❤️ for ambitious entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
