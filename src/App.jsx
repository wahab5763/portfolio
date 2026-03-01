import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  Github,
  GraduationCap,
  Menu,
  X,
  Sparkles,
  UserRound,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const theme = {
  colors: {
    primary: '#E8E4DD',
    accent: '#E63B2E',
    bg: '#F5F3EE',
    dark: '#111111',
    text: '#111111',
    surface: 'rgba(255,255,255,0.74)',
    border: 'rgba(17,17,17,0.08)',
  },
  fonts: {
    heading: '"Space Grotesk", system-ui, sans-serif',
    drama: '"DM Serif Display", Georgia, serif',
    mono: '"Space Mono", monospace',
  },
};

const profile = {
  name: 'Abdul Wahab',
  title: 'Software Engineer',
  tagline:
   'I am a Software Engineer skilled in web development, data analytics, and Generative AI, with strong problem-solving abilities and a solid foundation in software engineering principles.',  location: 'Karachi, Pakistan',
  email: 'wahab5763@gmail.com',
  phone: '+92 3332531119',
  linkedin: '#',
};

const navLinks = ['About', 'Projects', 'Experience', 'Contact'];

const heroImage =
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80';
const textureImage =
  'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1600&q=80';

const featureCards = {
  engineering: ['AI tooling', 'Full-stack apps', 'Data systems'],
  delivery: [
    'remote.collab :: shipped across teams',
    'mentor.mode :: code reviews and training',
    'build.ops :: practical, maintainable outputs',
    'freelance.system :: independent delivery active',
  ],
  scheduleDays: [1, 3, 5],
};

const projects = [
  {
    name: 'ChatEmail',
    stack: 'Python, Streamlit, Hugging Face, RAG, Gmail API, Groq',
    desc: 'AI email assistant with retrieval-augmented generation for smart processing and response generation.',
    link: 'https://huggingface.co/spaces/wahab5763/ChatEmail',
  },
  {
    name: 'Career Compass',
    stack: 'Python, Streamlit, Hugging Face, RAG',
    desc: 'AI-driven career recommendation system with dynamic user journeys and personalized suggestions.',
    link: 'https://huggingface.co/spaces/wahab5763/CareerCounsellingApp',
  },
  {
    name: 'Justice Compass',
    stack: 'Python, Streamlit, Hugging Face, RAG',
    desc: 'AI-powered legal guidance platform built with interactive flows and structured recommendations.',
    link: 'https://huggingface.co/spaces/wahab5763/LawyersGuide',
  },
  {
    name: 'Badin Schools Data Analysis',
    stack: 'Excel, SQL, R, Shiny',
    desc: 'Interactive dashboard for school performance analysis with authentication and dynamic reporting.',
    link: 'https://wahab5763.shinyapps.io/BSMS',
  },
  {
    name: 'School Location App',
    stack: 'Excel, SQL, R, Shiny',
    desc: 'Dashboard to identify the 10 nearest schools using selected tehsil, union council, and school.',
    link: 'https://wahab5763.shinyapps.io/SchoolLocationApp/',
  },
  {
    name: 'Maven E-commerce Analysis',
    stack: 'Excel, SQL, R, Shiny',
    desc: 'Sales and behavior analytics dashboards with business metrics including RFM analysis.',
    link: 'https://wahab5763.shinyapps.io/FuzzyAnalytics/',
  },
  {
    name: 'Hybrid Comparison Tool',
    stack: 'Excel, R, Shiny',
    desc: 'Developed a web application and analysis to compare performance of different states based on selected hybrids. Outputs can be exported as PDF reports.',
    link: 'https://wahab11.shinyapps.io/hybrid_manager-v2/',
  },
  {
    name: 'Customer Analytics',
    stack: 'Excel, SQL, R, Shiny',
    desc: 'Analyzed customer purchasing behaviour to identify trends and RFM segments, and created visualizations to surface actionable insights.',
    link: 'https://wahab5763.shinyapps.io/CustomerAnalytics/',
  },
  {
    name: 'Nike Sales Data Analysis',
    stack: 'Excel, SQL, Power BI',
    desc: 'Performed data cleaning and analysis using DAX for custom calculations, producing interactive Power BI reports and visualizations.',
    link: '#',
  },
];

const certifications = [
  'Google Data Analytics',
  'Google Advanced Data Analytics',
  'AI with Python',
  'Data Analytics & Business Intelligence',
  'Software Development Course',
  'Gen AI Application Developer',
];

const skills = [
  'Python',
  'R',
  'Java',
  'Streamlit',
  'Django REST APIs',
  'Android (Java)',
  'MySQL',
  'SQLite',
  'Git',
  'Docker',
  'RAG',
  'Hugging Face',
  'Google Colab',
  'Agile Development',
];

const experiences = [
  {
    role: 'Software & Data Analytics Instructor (Part-time)',
    company: 'U-Learns: Online Skills Training Institute',
    time: 'June 2024 — Present',
    mode: 'Remote',
    points: [
      'Delivered training on programming, data analysis, and software development using Python, SQL, and Git.',
      'Conducted code reviews and mentored students on clean, efficient, maintainable code.',
      'Designed hands-on coding exercises and projects to strengthen practical software skills.',
    ],
  },
  {
    role: 'Freelance Software & Data Solutions Developer',
    company: 'Upwork',
    time: 'April 2017 — Present',
    mode: 'Remote',
    points: [
      'Developed and optimized data processing scripts using Python and R for analytics and research projects.',
      'Built automated data pipelines for extraction, transformation, and analysis of large datasets.',
      'Provided technical evaluation support and detailed programming feedback.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Retailistan Private Limited',
    time: 'Sep 2015 — March 2017',
    mode: 'Karachi, Pakistan',
    points: [
      'Developed and maintained web and mobile applications using Java and Android.',
      'Collaborated with cross-functional teams on backend logic and database management.',
      'Debugged and optimized application performance and database queries.',
    ],
  },
];

function MagneticButton({ children, className = '', inverse = false, href }) {
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`group relative inline-flex overflow-hidden rounded-[999px] px-5 py-3 font-semibold tracking-[-0.02em] transition-all duration-300 hover:-translate-y-[1px] hover:scale-[1.03] ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      <span
        className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
        style={{ background: inverse ? theme.colors.bg : theme.colors.dark, opacity: 0.12 }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}

function Navbar() {
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // prevent background scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const target = document.getElementById('hero-observer');
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className="flex w-full max-w-6xl items-center justify-between rounded-[999px] border px-3 py-3 transition-all duration-500 md:px-4"
        style={{
          background: compact ? 'rgba(245,243,238,0.68)' : 'rgba(255,255,255,0.06)',
          backdropFilter: compact ? 'blur(18px)' : 'blur(10px)',
          WebkitBackdropFilter: compact ? 'blur(18px)' : 'blur(10px)',
          borderColor: compact ? 'rgba(17,17,17,0.08)' : 'rgba(255,255,255,0.12)',
          color: compact ? theme.colors.dark : theme.colors.bg,
          boxShadow: compact ? '0 20px 50px rgba(17,17,17,0.08)' : 'none',
        }}
      >
        <div className="flex items-center gap-2 px-2 text-2xl font-bold tracking-[0.18em] md:text-3xl rounded-full" style={{ background: theme.colors.accent, color: theme.colors.bg }}>
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: theme.colors.bg }} />
          ABDUL WAHAB
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-medium transition-transform duration-300 hover:-translate-y-[1px]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 transition-transform duration-300 hover:-translate-y-[1px] md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <MagneticButton className="border" inverse={!compact} href="#contact">
            <span className="rounded-full px-3 py-1 text-lg md:text-xl" style={{ background: theme.colors.accent, color: theme.colors.bg }}>
              Hire Me
            </span>
          </MagneticButton>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-white/95 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-medium py-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: 0.2 }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero-observer"
      ref={ref}
      className="relative flex min-h-[100dvh] items-end overflow-hidden rounded-b-[3rem] px-5 pb-10 pt-40 md:px-10 md:pb-16 md:pt-28"
      style={{ color: theme.colors.bg }}
    >
      <img src={heroImage} alt="Engineering workspace" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(17,17,17,0.1) 0%, rgba(17,17,17,0.4) 40%, rgba(17,17,17,0.95) 100%)' }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="flex flex-col gap-5 md:gap-7">
          <div className="hero-reveal inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] backdrop-blur-md md:text-sm">
            <Sparkles size={14} />
            Software engineer / AI builder / instructor
          </div>
          <div className="flex flex-col leading-none">
            <span className="hero-reveal text-[14vw] font-black tracking-[-0.07em] md:text-[6.2rem]" style={{ fontFamily: theme.fonts.heading }}>
              Engineer the
            </span>
            <div className="text-center">
              <span
                className="hero-reveal -mt-1 text-[22vw] italic tracking-[-0.05em] md:-mt-4 md:text-[9rem] inline-block"
                style={{ fontFamily: theme.fonts.drama, color: theme.colors.accent }}
              >
                Future.
              </span>
            </div>
          </div>
          <p className="hero-reveal max-w-2xl text-base text-white/78 md:text-xl">{profile.tagline}</p>
          <div className="hero-reveal flex flex-col gap-3 sm:flex-row">
            <MagneticButton className="border-0 px-6 py-4" href="#projects">
              <span className="absolute inset-0" style={{ background: theme.colors.accent }} />
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base" style={{ color: theme.colors.bg }}>
                View Projects <ArrowRight size={10} />
              </span>
            </MagneticButton>
            <div
              className="rounded-[999px] border border-white/15 bg-white/10 px-5 py-4 text-sm backdrop-blur-md md:text-base"
              style={{ fontFamily: theme.fonts.mono }}
            >
              Web Applications / Data Analytics / Generative AI
            </div>
          </div>
        </div>

        <div className="hero-reveal ml-auto w-full max-w-sm rounded-[2.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <img src="/wahab.png" alt="Abdul Wahab portrait" className="h-[28rem] w-full rounded-[2.1rem] object-cover object-center" />
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-xl font-bold">{profile.name}</div>
              <div className="text-sm text-white/60">{profile.location}</div>
            </div>
            <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono }}>
              Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState(featureCards.engineering);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-52">
      {cards.map((label, index) => (
        <div
          key={`${label}-${index}`}
          className="absolute inset-x-0 rounded-[1.5rem] border p-4 transition-all duration-700"
          style={{
            top: `${index * 18}px`,
            transform: `scale(${1 - index * 0.05})`,
            opacity: 1 - index * 0.18,
            background: theme.colors.bg,
            borderColor: theme.colors.border,
            boxShadow: '0 20px 45px rgba(17,17,17,0.07)',
            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="mt-3 text-lg font-bold">{label}</div>
          <div className="mt-2 text-sm text-black/55">Cross-functional builds across product, AI, and analytics.</div>
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const [text, setText] = useState('');
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = featureCards.delivery[msgIndex];
    let resetTimer;
    const timeout = setTimeout(() => {
      if (charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        resetTimer = setTimeout(() => {
          setCharIndex(0);
          setText('');
          setMsgIndex((m) => (m + 1) % featureCards.delivery.length);
        }, 900);
      }
    }, 45);

    return () => {
      clearTimeout(timeout);
      clearTimeout(resetTimer);
    };
  }, [charIndex, msgIndex]);

  return (
    <div className="flex h-52 flex-col justify-between rounded-[1.5rem] border p-4" style={{ borderColor: theme.colors.border }}>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono }}>
        <span className="inline-flex h-2.5 w-2.5 rounded-full animate-pulse" style={{ background: theme.colors.accent }} />
        Live Feed
      </div>
      <div className="rounded-[1.25rem] border bg-black px-4 py-5 text-sm md:text-base" style={{ borderColor: 'rgba(255,255,255,0.08)', fontFamily: theme.fonts.mono, color: '#f5f3ee' }}>
        {text}
        <span className="ml-0.5 inline-block h-5 w-2 animate-pulse align-middle" style={{ background: theme.colors.accent }} />
      </div>
      <div className="text-sm text-black/55">Commitment translated into reliable delivery and collaborative momentum.</div>
    </div>
  );
}

function CursorScheduler() {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      setActiveDay(featureCards.scheduleDays[idx]);
      setPhase(1);
      setTimeout(() => setPhase(2), 550);
      setTimeout(() => setPhase(0), 1200);
      idx = (idx + 1) % featureCards.scheduleDays.length;
    }, 2100);
    return () => clearInterval(timer);
  }, []);

  const cursorPos = useMemo(() => {
    const positions = {
      0: { x: 8, y: 12 },
      1: { x: 76, y: 76 },
      2: { x: 250, y: 144 },
    };
    if (phase === 2) return positions[2];
    if (activeDay != null) {
      const col = activeDay % 4;
      const row = Math.floor(activeDay / 4);
      return { x: 24 + col * 72, y: 44 + row * 62 };
    }
    return positions[0];
  }, [activeDay, phase]);

  return (
    <div className="rounded-[1.5rem] border p-4" style={{ borderColor: theme.colors.border }}>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
        {weekdays.map((day, i) => (
          <div
            key={`${day}-${i}`}
            className={`flex aspect-square items-center justify-center rounded-2xl border text-sm font-bold transition-all duration-300 ${activeDay === i ? 'scale-95' : ''}`}
            style={{
              borderColor: theme.colors.border,
              background: activeDay === i ? theme.colors.accent : 'rgba(17,17,17,0.02)',
              color: activeDay === i ? theme.colors.bg : theme.colors.dark,
            }}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">Consistency system</div>
          <div className="text-xs text-black/55">Train, ship, mentor, repeat.</div>
        </div>
        <button className="rounded-full px-4 py-2 text-sm font-semibold" style={{ background: theme.colors.dark, color: theme.colors.bg }}>
          Save
        </button>
      </div>
      <div className="pointer-events-none mt-2 h-0" aria-hidden="true">
        <div className="relative h-0 w-0" style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}>
          <svg width="22" height="22" viewBox="0 0 22 22" className="drop-shadow-md transition-all duration-500">
            <path d="M2 1 L17 11 L10 12 L13 20 L10 21 L7 13 L2 18 Z" fill={theme.colors.dark} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 72%' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            Functional artifacts
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ fontFamily: theme.fonts.heading }}>
            Driven by <span className="italic">quality</span>, powered by <span className="italic">commitment</span>, defined by <span className="italic">consistency</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="feature-card rounded-[2rem] border p-5 md:p-6" style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Quality</h3>
              <UserRound size={18} />
            </div>
            <p className="mb-5 text-sm text-black/60">Multi-domain engineering across AI products, web apps, and analytics systems.</p>
            <DiagnosticShuffler />
          </div>

          <div className="feature-card rounded-[2rem] border p-5 md:p-6" style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Commitment</h3>
              <Zap size={18} />
            </div>
            <p className="mb-5 text-sm text-black/60">Consistent execution in teaching, freelance delivery, and production engineering work.</p>
            <TelemetryTypewriter />
          </div>

          <div className="feature-card rounded-[2rem] border p-5 md:p-6" style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Consistency</h3>
              <CheckCircle2 size={18} />
            </div>
            <p className="mb-5 text-sm text-black/60">A repeatable delivery system shaped by years of shipping and mentoring.</p>
            <CursorScheduler />
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifest-word',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: { trigger: ref.current, start: 'top 72%' },
        }
      );
      gsap.to('.manifest-texture', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, scrub: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const words = 'I focus on practical software that solves real problems with measurable impact.'.split(' ');

  return (
    <section id="philosophy" ref={ref} className="relative overflow-hidden px-5 py-24 md:px-10 md:py-32" style={{ background: theme.colors.dark, color: theme.colors.bg }}>
      <img src={textureImage} alt="Industrial texture" className="manifest-texture absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="text-base text-white/65 md:text-2xl">
          Most software portfolios focus on: generic stacks, vague claims, and polished screenshots.
        </p>
        <div className="mt-6 max-w-5xl text-[11vw] leading-[0.9] tracking-[-0.05em] md:text-[5.5rem]">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="manifest-word mr-3 inline-block italic"
              style={{
                fontFamily: theme.fonts.drama,
                color: word.toLowerCase().includes('measurable') ? theme.colors.accent : theme.colors.bg,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotifOne() {
  return (
    <svg viewBox="0 0 200 200" className="h-40 w-40 md:h-56 md:w-56 animate-[spin_18s_linear_infinite]">
      <circle cx="100" cy="100" r="68" fill="none" stroke={theme.colors.accent} strokeWidth="2" />
      <circle cx="100" cy="100" r="42" fill="none" stroke={theme.colors.dark} strokeWidth="2" strokeDasharray="8 8" />
      <path d="M35 100C55 60 75 60 100 100C125 140 145 140 165 100" fill="none" stroke={theme.colors.dark} strokeWidth="3" />
      <path d="M35 112C55 72 75 72 100 112C125 152 145 152 165 112" fill="none" stroke={theme.colors.accent} strokeWidth="2" />
    </svg>
  );
}

function MotifTwo() {
  return (
    <div className="relative h-40 w-40 overflow-hidden rounded-[2rem] border md:h-56 md:w-56" style={{ borderColor: theme.colors.border }}>
      <div className="absolute inset-0 grid grid-cols-6 gap-3 p-4">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-2 w-2 rounded-full bg-black/25" />
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-10 animate-[scan_2.6s_ease-in-out_infinite]" style={{ background: `linear-gradient(180deg, transparent 0%, ${theme.colors.accent}55 50%, transparent 100%)` }} />
    </div>
  );
}

function MotifThree() {
  return (
    <svg viewBox="0 0 300 120" className="h-40 w-56 md:h-56 md:w-80">
      <path
        d="M0 70 L40 70 L55 40 L75 95 L100 20 L120 70 L160 70 L185 55 L210 85 L240 45 L265 70 L300 70"
        fill="none"
        stroke={theme.colors.accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="12 10"
        className="animate-[dash_2.2s_linear_infinite]"
      />
    </svg>
  );
}

function Protocol() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(20px)',
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top 65%',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      n: '01',
      title: 'Analyze the problem',
      desc: 'Break business or user needs into a clean technical plan using software fundamentals and practical architecture.',
      visual: <MotifOne />,
      images: [
        'https://picsum.photos/150/100?random=1',
        'https://picsum.photos/150/100?random=2',
        'https://picsum.photos/150/100?random=3',
      ],
    },
    {
      n: '02',
      title: 'Build with precision',
      desc: 'Develop reliable applications, AI workflows, or data tools using modern frameworks and maintainable logic.',
      visual: <MotifTwo />,
      images: [
        'https://picsum.photos/150/100?random=4',
        'https://picsum.photos/150/100?random=5',
        'https://picsum.photos/150/100?random=6',
      ],
    },
    {
      n: '03',
      title: 'Deploy and iterate',
      desc: 'Refine performance, improve usability, and evolve the solution through feedback and measurable outcomes.',
      visual: <MotifThree />,
      images: [
        'https://picsum.photos/150/100?random=7',
        'https://picsum.photos/150/100?random=8',
        'https://picsum.photos/150/100?random=9',
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            Delivery protocol
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ fontFamily: theme.fonts.heading }}>
            My process for shipping practical, production-ready software.
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="protocol-card sticky top-24 min-h-[78vh] rounded-[3rem] border p-6 md:p-10"
              style={{ background: theme.colors.bg, borderColor: theme.colors.border, boxShadow: '0 30px 80px rgba(17,17,17,0.08)' }}
            >
              <div className="flex h-full flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div className="max-w-2xl">
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
                    Step {step.n}
                  </div>
                  <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] md:text-6xl" style={{ fontFamily: theme.fonts.heading }}>
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base text-black/65 md:text-xl">{step.desc}</p>
                  {step.images && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {step.images.map((url, idx) => (
                        <img
                          key={idx}
                          src={url}
                          alt={`${step.title} ${idx + 1}`}
                          className="h-24 w-24 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">{step.visual}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {experiences.map((item) => (
            <div key={item.role} className="rounded-[2rem] border p-6" style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}>
              <div className="flex items-center justify-between gap-4">
                <Briefcase size={18} />
                <span className="text-xs uppercase tracking-[0.18em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
                  {item.mode}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold">{item.role}</h3>
              <div className="mt-1 text-sm text-black/55">{item.company}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em]" style={{ fontFamily: theme.fonts.mono }}>
                {item.time}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-black/70">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span style={{ color: theme.colors.accent }}>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.24em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            Selected work
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ fontFamily: theme.fonts.heading }}>
            Projects spanning AI assistants, dashboards, and applied data products.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-[1px]"
              style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
                  {project.stack}
                </div>
                <ExternalLink size={16} />
              </div>
              <h3 className="mt-4 text-2xl font-bold">{project.name}</h3>
              <p className="mt-3 text-sm text-black/65">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="px-5 py-20 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[3rem] border p-6 md:p-8" style={{ background: theme.colors.dark, borderColor: 'rgba(255,255,255,0.08)', color: theme.colors.bg }}>
          <div className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            Core stack
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[3rem] border p-6 md:p-8" style={{ background: theme.colors.surface, borderColor: theme.colors.border, boxShadow: '0 24px 60px rgba(17,17,17,0.06)' }}>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
            <GraduationCap size={16} />
            Education + certifications
          </div>
          <h3 className="mt-4 text-2xl font-bold">BE in Software Engineering</h3>
          <p className="mt-2 text-sm text-black/60">Mehran University of Engineering & Technology, Jamshoro, Pakistan · January 2011 — May 2015</p>
          <div className="mt-6 grid gap-3">
            {certifications.map((item) => (
              <div key={item} className="rounded-2xl border px-4 py-3 text-sm" style={{ borderColor: theme.colors.border }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl rounded-[3rem] border p-6 md:p-8" style={{ background: theme.colors.dark, borderColor: 'rgba(255,255,255,0.08)', color: theme.colors.bg }}>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>
              Get started
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] md:text-6xl" style={{ fontFamily: theme.fonts.heading }}>
              Let’s build software that is useful, scalable, and production-ready.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
              Available for freelance work, technical collaboration, AI tooling, data solutions, and software training engagements.
            </p>
          </div>
          <div className="grid gap-4">
            <a className="rounded-[2rem] border border-white/10 p-5" href={`mailto:${profile.email}`}>
              <div className="text-xs uppercase tracking-[0.2em] text-white/45" style={{ fontFamily: theme.fonts.mono }}>Email</div>
              <div className="mt-2 text-base font-semibold">{profile.email}</div>
            </a>
            <a className="rounded-[2rem] border border-white/10 p-5" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <div className="text-xs uppercase tracking-[0.2em] text-white/45" style={{ fontFamily: theme.fonts.mono }}>Phone</div>
              <div className="mt-2 text-base font-semibold">{profile.phone}</div>
            </a>
            <MagneticButton className="justify-center border px-5 py-4" href="https://drive.google.com/file/d/1o4maUSTeABXuo9C96QygvVOGmuDXKZtF/view?usp=sharing">
              <span className="absolute inset-0" style={{ background: theme.colors.accent }} />
              <span className="relative z-10 flex items-center justify-center gap-2" style={{ color: theme.colors.bg }}>
                Download Resume <ArrowRight size={16} />
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rounded-t-[4rem] px-5 py-14 md:px-10" style={{ background: theme.colors.dark, color: theme.colors.bg }}>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <div className="text-xl font-black tracking-[-0.04em]">ABDUL WAHAB</div>
          <p className="mt-3 text-sm text-white/60">Software Engineer crafting modern applications, AI tools, and data products.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white/50">Navigate</div>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition-transform duration-300 hover:-translate-y-[1px]">
                {item}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white/50">Profiles</div>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
            <a href="https://www.upwork.com/freelancers/~0140b71df2328be2c5?mp_source=share" target="_blank" rel="noreferrer">Upwork</a>
            <a href="https://www.linkedin.com/in/wahab5763/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/wahab5763/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://drive.google.com/drive/folders/1x4WCE3jvzziKUyF7KnHcIyvdwRx3_gNv" target="_blank" rel="noreferrer">Certifications</a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold text-white/50">Status</div>
          <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-white/10 px-4 py-2 text-sm" style={{ fontFamily: theme.fonts.mono }}>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
            System Operational
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/55">
            <Github size={15} /> Available for remote work
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Abdul Wahab — Software Engineer';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: theme.colors.bg, color: theme.colors.text, fontFamily: theme.fonts.heading }}>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Projects />
      <Protocol />
      <Credentials />
      <Contact />
      <Footer />
    </div>
  );
}
