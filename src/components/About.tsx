
import React from 'react';
import {
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Globe,
  ArrowUpRight,
  Download,
  Sparkles,
  Terminal,
  Layers3,
  Rocket,
} from 'lucide-react';

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: 'Professional Experience',
    description: 'Hands-on experience building websites and web applications for different business domains.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Frontend interfaces, backend functionality, and custom web solutions.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BCA graduate and currently pursuing MCA.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Exploring modern technologies and improving development skills.',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-dark-300/50"
    >
      {/* Background Effects */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles size={16} />
            Get To Know Me
          </span>

          <h2 className="section-title">
            About Me
          </h2>

          <p className="section-subtitle max-w-2xl mx-auto">
            A little introduction about my journey, passion, and
            experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Introduction */}
          <div className="opacity-0 animate-fade-in">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/5 mb-7">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <span className="text-sm text-green-400">
                Passionate Web Developer
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
              Turning Ideas Into
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Digital Experiences.
              </span>
            </h3>

            <p className="text-white/70 leading-8 mb-5">
              Hi, I'm <strong className="text-white">Amit Kumar Verma</strong>,
              a passionate WordPress PHP Developer who enjoys
              building modern, responsive, and user-friendly websites
              and web applications.
            </p>

            <p className="text-white/70 leading-8 mb-5">
              I have hands-on experience working with
              <strong className="text-cyan-400"> WordPress, PHP, HTML, CSS, JavaScript, and MySQL</strong>.
              I also work with <strong className="text-purple-400">React.js and Node.js</strong>
              to expand my development capabilities and build
              interactive web applications.
            </p>

            <p className="text-white/70 leading-8 mb-8">
              From business websites and company portfolios to
              eCommerce platforms, I enjoy turning ideas into
              practical digital solutions. I believe in clean code,
              continuous learning, and delivering quality work.
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-9">
              {[
                'WordPress',
                'PHP',
                'React.js',
                'JavaScript',
                'Node.js',
                'MySQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/70 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Amit kr verma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <Download size={18} />
                Download CV
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="btn-outline inline-flex items-center gap-2 group"
              >
                Let's Talk
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          {/* RIGHT: Developer Profile Card */}
          <div className="relative opacity-0 animate-fade-in-delay-1">

            {/* Outer Glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-2xl rounded-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#111827]/90 backdrop-blur-xl p-6 md:p-8 shadow-2xl">

              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                    <Terminal size={25} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-lg">
                      Developer Profile
                    </h3>
                    <p className="text-xs text-white/40">
                      My professional journey
                    </p>
                  </div>
                </div>

                <Sparkles className="text-cyan-400" size={23} />
              </div>

              {/* Code Inspired Display */}
              <div className="rounded-2xl border border-white/10 bg-[#080f1d] p-5 mb-7 font-mono text-sm overflow-hidden">
                <div className="flex gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-auto text-xs text-white/30">
                    developer.js
                  </span>
                </div>

                <p className="text-purple-400">
                  const developer = {'{'}
                </p>
                <div className="pl-5 space-y-3 py-3">
                  <p>
                    <span className="text-cyan-400">name:</span>{' '}
                    <span className="text-green-400">'Amit Verma'</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">role:</span>{' '}
                    <span className="text-green-400">'WordPress PHP Developer'</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">frontend:</span>{' '}
                    <span className="text-yellow-300">['React', 'JavaScript']</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">backend:</span>{' '}
                    <span className="text-yellow-300">['PHP', 'Node.js']</span>,
                  </p>
                  <p>
                    <span className="text-cyan-400">passion:</span>{' '}
                    <span className="text-green-400">'Building great things'</span>
                  </p>
                </div>
                <p className="text-purple-400">{'};'}</p>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon size={23} />
                      </div>

                      <h4 className="text-white font-semibold text-sm mb-2">
                        {item.title}
                      </h4>

                      <p className="text-white/50 text-xs leading-6">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Badge */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <Layers3 size={18} className="text-cyan-400" />
                  <span className="text-sm text-white/60">
                    Developer Mindset
                  </span>
                </div>

                <span className="text-xs text-cyan-400 font-semibold">
                  Learn • Build • Grow
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
