
import React from 'react';
import {
  Code2,
  Server,
  Globe,
  Database,
  Wrench,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    subtitle: 'Building beautiful user interfaces',
    icon: Code2,
    color: 'cyan',
    description:
      'Creating modern, responsive, and interactive web experiences with clean and reusable code.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
      'Redux',
    ],
  },
  {
    title: 'Backend Development',
    subtitle: 'Powering applications behind the scenes',
    icon: Server,
    color: 'purple',
    description:
      'Developing dynamic applications, server-side functionality, and API integrations.',
    skills: [
      'PHP',
      'Core PHP',
      'Node.js',
      'REST APIs',
      'JavaScript ES6+',
    ],
  },
  {
    title: 'CMS & eCommerce',
    subtitle: 'Websites and online stores',
    icon: Globe,
    color: 'pink',
    description:
      'Building professional websites and customized eCommerce solutions using WordPress.',
    skills: [
      'WordPress',
      'Custom Themes',
      'Custom Plugins',
      'Elementor',
      'WPBakery',
      'WooCommerce',
      'Contact Form 7',
    ],
  },
  {
    title: 'Database Management',
    subtitle: 'Managing and organizing data',
    icon: Database,
    color: 'green',
    description:
      'Working with relational databases, managing application data, and writing efficient queries.',
    skills: [
      'MySQL',
      'SQL',
      'Database Design',
      'CRUD Operations',
      'phpMyAdmin',
    ],
  },
  {
    title: 'Tools & Optimization',
    subtitle: 'Building better development workflows',
    icon: Wrench,
    color: 'orange',
    description:
      'Using modern development tools and optimization techniques to improve project quality.',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Responsive Design',
      'Performance Optimization',
    ],
  },
];

const colorStyles: Record<string, { text: string; gradient: string }> = {
  cyan: {
    text: 'text-cyan-400',
    gradient: 'from-cyan-400 to-blue-500',
  },
  purple: {
    text: 'text-purple-400',
    gradient: 'from-purple-400 to-indigo-500',
  },
  pink: {
    text: 'text-pink-400',
    gradient: 'from-pink-400 to-rose-500',
  },
  green: {
    text: 'text-green-400',
    gradient: 'from-green-400 to-emerald-500',
  },
  orange: {
    text: 'text-orange-400',
    gradient: 'from-orange-400 to-amber-500',
  },
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-dark-300/50 py-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-400">
            <Sparkles size={16} />
            My Technical Expertise
          </div>

          <h2 className="section-title animate-fade-in">
            Tech Stack & Skills
          </h2>

          <p className="section-subtitle mx-auto mt-4 max-w-2xl">
            A collection of technologies and tools I use to
            design, develop, and deliver powerful digital experiences.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const colors = colorStyles[group.color];

            return (
              <div
                key={group.title}
                tabIndex={0}
                aria-label={`${group.title}. Focus or hover to explore skills.`}
                className="group relative h-[340px] cursor-pointer rounded-2xl outline-none [perspective:1200px] opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.12}s`,
                  animationFillMode: 'forwards',
                }}
              >
                {/* Animated Glow */}
                <div
                  className={`absolute -inset-[2px] rounded-2xl bg-gradient-to-br ${colors.gradient} opacity-0 blur-md transition duration-500 group-hover:opacity-40 group-focus:opacity-40`}
                />

                {/* Flip Container */}
                <div className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">

                  {/* FRONT */}
                  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-7 shadow-xl [backface-visibility:hidden]">

                    <div>
                      <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${colors.text} transition-all duration-500 group-hover:scale-110`}>
                        <Icon size={32} />
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                        0{index + 1} / Expertise
                      </span>

                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {group.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {group.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm text-white/50">
                        {group.skills.length} Technologies
                      </span>

                      <span className={`flex items-center gap-2 text-sm font-semibold ${colors.text}`}>
                        Explore
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#151e30] p-7 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">

                    <div>
                      <div className="mb-5 flex items-center justify-between">
                        <span className={`text-sm font-semibold ${colors.text}`}>
                          {group.title}
                        </span>
                        <Icon size={24} className={colors.text} />
                      </div>

                      <p className="mb-6 text-sm leading-6 text-white/60">
                        {group.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-white/40">
                        Technologies & Tools
                      </span>

                      <Sparkles
                        size={17}
                        className={colors.text}
                      />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white/50">
            Always learning. Always building. Always improving.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
