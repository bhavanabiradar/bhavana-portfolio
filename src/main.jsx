import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, Github, Mail, Code2, Cpu, Sparkles,
  ExternalLink, Menu, Terminal, Layers3, Braces, Globe2
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "RealityOS",
    type: "Productivity platform",
    description: "A collaborative project exploring productivity workflows, planning, and AI-assisted experiences. My contributions focused on ideas, testing, and documentation.",
    tags: ["Project collaboration", "Testing", "Documentation"],
    link: "https://github.com/bhavanabiradar/realityos",
    linkLabel: "View repository"
  },
  {
    number: "02",
    title: "MochaTrade",
    type: "Virtual trading simulator",
    description: "A team project centered on an educational virtual-trading experience. Add the exact features you worked on as you refine the project details.",
    tags: ["Team project", "Web development"],
    link: "https://github.com/bhavanabiradar/Mochatrade-V",
    linkLabel: "View repository"
  },
  {
    number: "03",
    title: "Smart Blind Stick",
    type: "Assistive technology",
    description: "A collaborative assistive-technology project exploring obstacle detection and feedback to support mobility. Hardware and implementation details can be added once confirmed.",
    tags: ["Assistive tech", "ECE"],
    link: "",
    linkLabel: ""
  },
  {
    number: "04",
    title: "Weather Station Anomaly Detection",
    type: "SIH project",
    description: "A team project topic focused on AI/ML-based intelligent anomaly detection for Automatic Weather Station (AWS) data.",
    tags: ["AI/ML", "Weather data", "Team project"],
    link: "",
    linkLabel: ""
  },
  {
    number: "05",
    title: "e-Portal Case Management",
    type: "Communication systems research",
    description: "Researched communication requirements and future enhancements such as WebRTC-based virtual hearings, speech-to-text transcription, and multilingual voice interaction.",
    tags: ["WebRTC research", "Accessibility", "Future scope"],
    link: "https://github.com/bhavanabiradar/eportal-case-management-system",
    linkLabel: "View repository"
  }
];

const skills = [
  { icon: Code2, name: "C", detail: "Programming" },
  { icon: Braces, name: "Python", detail: "Programming" },
  { icon: Braces, name: "JavaScript", detail: "Programming" },
  { icon: Layers3, name: "React", detail: "Web development" },
  { icon: Terminal, name: "Node.js", detail: "Backend exposure" },
  { icon: Globe2, name: "MongoDB", detail: "Database exposure" },
  { icon: Github, name: "Git & GitHub", detail: "Version control" },
  { icon: Cpu, name: "ECE fundamentals", detail: "Academic background" }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">B.</span><span>bhavana<span className="muted">.dev</span></span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Menu size={20} /></button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="mailto:bhavanabiradar38@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE INTERNSHIPS</div>
            <h1>Building my path<br />in <span className="gradient-text">technology.</span></h1>
            <p className="hero-subtitle">Hey, I'm <strong>Bhavana Biradar</strong> — an Electronics & Communication Engineering student exploring software development, web technologies, and ideas that solve real problems.</p>
          
<div className="hero-actions">
  <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
  <a className="button button-ghost" href="https://github.com/bhavanabiradar" target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
  <a className="button button-ghost" href="/resume.pdf" download>Download Resume <ArrowDown size={17} /></a>
</div>

            <div className="hero-meta">
              <div><span className="meta-number">8.5/10</span><span className="meta-label">CGPA</span></div>
              <div className="meta-divider" />
              <div><span className="meta-number">ECE</span><span className="meta-label">RNSIT · Bengaluru</span></div>
              <div className="meta-divider" />
              <div><span className="meta-number">2029</span><span className="meta-label">Expected graduation</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="code-card">
              <div className="code-card-top"><div className="window-dots"><i /><i /><i /></div><span>about_bhavana.py</span><span className="code-chip">PY</span></div>
              <div className="code-lines">
                <p><span className="line-no">01</span><span className="syntax-purple">class</span> <span className="syntax-cyan">Bhavana</span>:</p>
                <p><span className="line-no">02</span>  role = <span className="syntax-green">"ECE Student"</span></p>
                <p><span className="line-no">03</span>  focus = [</p>
                <p><span className="line-no">04</span>    <span className="syntax-green">"Software"</span>,</p>
                <p><span className="line-no">05</span>    <span className="syntax-green">"Web Dev"</span>,</p>
                <p><span className="line-no">06</span>    <span className="syntax-green">"Problem Solving"</span></p>
                <p><span className="line-no">07</span>  ]</p>
                <p><span className="line-no">08</span>  <span className="syntax-purple">def</span> <span className="syntax-cyan">keep_learning</span>(self):</p>
                <p><span className="line-no">09</span>    <span className="syntax-purple">return</span> <span className="syntax-green">"always"</span><span className="cursor">▍</span></p>
              </div>
              <div className="code-card-bottom"><span><span className="status-dot" /> Available to learn</span><span>UTF-8&nbsp; · &nbsp;Python</span></div>
            </div>
            <div className="float-card float-card-top"><Sparkles size={16} /><span>Curious by nature</span></div>
            <div className="float-card float-card-bottom"><Code2 size={16} /><span>Learning by building</span></div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section container" id="about">
          <div className="section-heading"><span className="section-kicker">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid">
            <div className="about-lead"><span className="quote-mark">“</span><p>I enjoy exploring how technology can turn an idea into something useful.</p></div>
            <div className="about-body"><p>I'm a second-year Electronics and Communication Engineering student at RNS Institute of Technology, Bengaluru. Alongside my ECE studies, I'm developing my software skills through programming, collaborative projects, and hands-on experimentation.</p><p>I'm interested in software development internships where I can contribute, learn from a team, and strengthen my engineering fundamentals.</p><div className="about-pills"><span><Cpu size={14} /> ECE background</span><span><Code2 size={14} /> Software interests</span><span><Sparkles size={14} /> Growth mindset</span></div></div>
          </div>
        </section>

        <section className="section section-soft" id="skills">
          <div className="container">
            <div className="section-heading"><span className="section-kicker">02 / TOOLKIT</span><h2>Technologies I'm <span className="gradient-text">working with.</span></h2><p className="section-description">My current toolkit spans programming, web development, and version control.</p></div>
            <div className="skills-grid">{skills.map(({icon: Icon, name, detail}) => <div className="skill-card" key={name}><div className="skill-icon"><Icon size={19} /></div><div><h3>{name}</h3><p>{detail}</p></div><span className="skill-arrow"><ArrowUpRight size={15} /></span></div>)}</div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-heading project-heading"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Projects & <span className="gradient-text">explorations.</span></h2></div><a className="text-link" href="https://github.com/bhavanabiradar" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a></div>
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>{project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ExternalLink size={14} /></a> : <span className="project-link project-link-muted">Project details to be added</span>}</article>)}</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner"><span className="section-kicker">04 / GET IN TOUCH</span><h2>Have an opportunity<br />or an idea? <span className="gradient-text">Let's connect.</span></h2><p>I'm looking forward to learning, collaborating, and contributing to meaningful projects.</p><div className="contact-actions"><a className="button button-primary" href="mailto:bhavanabiradar38@gmail.com"><Mail size={17} /> bhavanabiradar38@gmail.com</a><a className="button button-ghost" href="https://github.com/bhavanabiradar" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a></div><div className="footer-line"><a className="brand" href="#home"><span className="brand-mark">B.</span><span>bhavana<span className="muted">.dev</span></span></a><span>Designed with curiosity · 2026</span><a href="#home">Back to top ↑</a></div></div>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
