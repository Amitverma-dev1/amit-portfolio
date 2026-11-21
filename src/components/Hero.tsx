
import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
} from 'lucide-react';

// Keep titles outside the component to avoid recreating the array.
const titles = [
  'Front-End Developer',
  'React.js Developer',
  'WordPress & PHP Developer',
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentTitle.slice(0, displayText.length + 1)
          );
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setCurrentTitleIndex(
            (prevIndex) => (prevIndex + 1) % titles.length
          );
          setIsTyping(true);
        }, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitleIndex]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Amitverma-dev1',
      Icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amit-kr-verma-dev/',
      Icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/amit_v70/',
      Icon: Instagram,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 md:pt-28 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-highlight-purple/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse-glow pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-highlight-blue/20 blur-[100px] md:blur-[120px] rounded-full animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">

          {/* Hero Content */}
          <div className="order-2 lg:order-1 lg:col-span-3 text-center lg:text-left">

            <p className="text-highlight-purple font-medium text-sm sm:text-base mb-4 opacity-0 animate-fade-in">
              👋 HELLO THERE, I'M
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-1">

              <span className="block">
                Amit Kumar Verma
              </span>

              <span
                className="block gradient-text mt-3 min-h-[1.3em]"
                aria-live="off"
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </span>

            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-2">
              I build modern, responsive and user-friendly digital experiences for the web.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in-delay-3">

              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </a>

              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 opacity-0 animate-fade-in-delay-3">

              {socialLinks.map(({ name, url, Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                  className="text-white/70 hover:text-white hover:-translate-y-1 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-highlight-purple rounded-sm"
                >
                  <Icon size={24} />
                </a>
              ))}

            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 lg:col-span-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">

            <div className="relative animate-float transition-transform duration-500 hover:scale-105">

              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 p-1 shadow-glow">

                <div className="w-full h-full rounded-full overflow-hidden bg-dark-200">

                  <img
                    src="/images/amit.jpg"
                    alt="Amit Kumar Verma - Web Developer"
                    title="Amit Kumar Verma"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />

                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-2 sm:bottom-4 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 bg-dark-100 px-5 sm:px-6 py-3 rounded-lg glass-card whitespace-nowrap shadow-lg">

                <p className="text-xs sm:text-sm font-medium text-yellow-400">
                  <span className="text-highlight-cyan">
                    1.5+ Years
                  </span>{' '}
                  Experience
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
