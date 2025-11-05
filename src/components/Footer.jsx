import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500" />
            <span className="font-semibold tracking-tight">MarketPilot</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3 text-slate-600">
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter size={18} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Github size={18} /></a>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} MarketPilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
