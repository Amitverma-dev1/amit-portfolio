
import React from 'react';
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
  Code2,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/YOUR_GITHUB_USERNAME',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/',
      icon: Instagram,
    },
    {
      name: 'Email',
      href: 'mailto:amitdell7070@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-dark-300 border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/4 w-80 h-80 bg-highlight-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-highlight-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-flex items-center gap-2 text-3xl font-bold group"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-highlight-purple to-highlight-pink shadow-lg shadow-highlight-purple/20 group-hover:rotate-6 transition-transform duration-300">
                <Code2 size={24} className="text-white" />
              </span>

              <span>
                <span className="text-highlight-purple">Amit</span>
                <span className="text-white"> Verma</span>
                <span className="text-highlight-purple">.</span>
              </span>
            </a>

            <p className="text-white/60 mt-6 leading-7 max-w-md">
              Building modern digital experiences with clean code,
              creative thinking, and a passion for technology.
              Turning ideas into meaningful web solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mt-7">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target={name === 'Email' ? undefined : '_blank'}
                  rel={name === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={name}
                  className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-highlight-purple/60 hover:bg-highlight-purple/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-highlight-purple/10 transition-all duration-300"
                >
                  <Icon
                    size={19}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-7 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-highlight-purple rounded-full" />
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="group inline-flex items-center gap-2 text-white/55 hover:text-highlight-purple transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-highlight-purple group-hover:scale-125 transition-all" />
                    {label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-7 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-highlight-pink rounded-full" />
              Let's Connect
            </h3>

            <p className="text-white/55 leading-7 mb-5 text-sm">
              Have an exciting project or opportunity?
              Let's create something amazing together.
            </p>

            <a
              href="mailto:amitdell7070@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-highlight-purple hover:text-white transition-colors break-all"
            >
              <Mail size={17} className="shrink-0" />
              amitdell7070@gmail.com
              <ArrowUpRight
                size={15}
                className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>

            {/* Availability */}
            <div className="mt-7 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-green-400/5 border border-green-400/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>

              <span className="text-xs font-medium text-green-400">
                Open to Opportunities
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-7">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-white/40 text-sm text-center">
              © {currentYear}{' '}
              <span className="text-white/70">Amit Verma</span>.
              All rights reserved.
            </p>

            {/* Credit */}
            <p className="text-white/40 text-sm flex items-center gap-2">
              Designed & Developed with
              <Heart
                size={14}
                className="text-highlight-pink fill-highlight-pink"
              />
              by <span className="text-white/70">Amit Verma</span>
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              className="group w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-highlight-purple/20 to-highlight-pink/20 border border-highlight-purple/30 text-highlight-purple hover:from-highlight-purple hover:to-highlight-pink hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-highlight-purple/20 transition-all duration-300"
            >
              <ArrowUp
                size={20}
                className="group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
