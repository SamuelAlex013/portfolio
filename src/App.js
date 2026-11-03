import React, { useEffect, useRef, useState } from 'react';
import { categories, email, featured, github, projects } from './content';
import './App.css';

export function Icon({ name, size = 22, ...props }) {
  const paths = {
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6M15 18H9a3 3 0 0 1-3-3V9"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    layers: <><path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5"/></>,
    frames: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4m-6-4-4-3v6l4-3Z"/></>,
    hand: <><path d="M8 12V6a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v8-5a2 2 0 0 1 4 0v8c0 5-3 7-7 7-3 0-5-2-7-5l-3-4a2 2 0 0 1 3-2l2 1Z"/></>,
    chess: <><path d="M6 21h13M7 18h10l1-6-5-8H9L7 8l4 2-4 4v4ZM10 4V2M14 7h.01"/></>,
    file: <><path d="M14 3H5v18h14V8l-5-5ZM14 3v5h5M8 12h8M8 16h6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6"/>,
    external: <><path d="M14 3h7v7M21 3 11 13M10 5H4v15h15v-6"/></>,
    chevron: <path d="m9 5 7 7-7 7"/>,
    filter: <path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"/>,
    check: <path d="m5 12 4 4L20 5"/>,
    jobs: <><path d="M9 3h6l1 4 4 2v6l-4 2-1 4H9l-1-4-4-2V9l4-2 1-4Z"/><circle cx="12" cy="12" r="3"/></>,
    intake: <><path d="M4 3h12v5M4 3v18h16V11M9 7h3M8 12h5M8 16h8M16 3l5 5h-5V3Z"/></>,
    providers: <><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="13" width="7" height="7" rx="1"/><path d="M10 7h7v6M7 11v6h7"/></>,
    capture: <><path d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5"/><rect x="7" y="7" width="10" height="10" rx="1"/></>,
    chart: <><path d="M4 3v17h17M8 15v-4M13 15V7M18 15V5"/></>,
    message: <path d="M21 4H3v13h5v4l5-4h8V4ZM7 8h10M7 12h6"/>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></>,
    moon: <path d="M20.5 14.5A9 9 0 0 1 9.5 3.5a9 9 0 1 0 11 11Z"/>,
    menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
    close: <path d="m5 5 14 14M19 5 5 19"/>,
    code: <><path d="m8 6-6 6 6 6M16 6l6 6-6 6m-3-16-2 20"/></>,
    building: <><path d="M5 21V3h14v18M2 21h20M9 7h1M14 7h1M9 11h1M14 11h1M10 21v-5h4v5"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.file}</svg>;
}

function readRoute() {
  const [view, id] = window.location.hash.replace(/^#\/?/, '').split('/');
  return (view === 'project' || view === 'work') && id ? id : null;
}
function getTheme() {
  try { return localStorage.getItem('samuel-theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; }
}

export default function App() {
  const [selected, setSelected] = useState(readRoute);
  const [theme, setTheme] = useState(getTheme);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All areas');
  const [origin, setOrigin] = useState('All work');
  const mainRef = useRef(null);
  const project = projects.find(item => item.id === selected);
  const selectedWork = ['outreach-crm', 'archetype-video-description-and-search-optimization', 'hand-annotation'].map(id => projects.find(item => item.id === id));
  useEffect(() => {
    const sync = () => setSelected(readRoute());
    window.addEventListener('hashchange', sync); window.addEventListener('popstate', sync);
    return () => { window.removeEventListener('hashchange', sync); window.removeEventListener('popstate', sync); };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('samuel-theme', theme); } catch { /* Optional preference storage. */ }
  }, [theme]);
  useEffect(() => { document.title = project ? `${project.title} — Samuel Alexander` : 'Samuel Alexander — Backend & AI Engineering'; }, [project]);
  function go(event, destination) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0) return;
    event.preventDefault();
    const id = destination.startsWith('work/') ? destination.slice(5) : null;
    const target = id ? `#project/${id}` : `#${destination}`;
    window.history.pushState(null, '', target); setSelected(id);
    requestAnimationFrame(() => {
      if (id) { window.scrollTo({ top: 0, behavior: 'instant' }); mainRef.current?.focus({ preventScroll: true }); }
      else if (destination === 'home') window.scrollTo({ top: 0 });
      else document.getElementById(destination)?.scrollIntoView({ block: 'start' });
    });
  }
  const filtered = projects.filter(item => (category === 'All areas' || item.category === category) && (origin === 'All work' || item.origin === origin) && `${item.title} ${item.description} ${item.stack.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <div className="portfolio">
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); mainRef.current?.focus(); }}>Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Samuel Alexander home" onClick={event => go(event, 'home')}>sa<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#about" onClick={event => go(event, 'about')}>About</a><a href="#experience" onClick={event => go(event, 'experience')}>Experience</a><a href="#work" onClick={event => go(event, 'work')}>Work</a><a href="#contact" onClick={event => go(event, 'contact')}>Contact</a><a className="resume-nav" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></nav>
      <button className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18}/></button>
    </header>
    <main id="main" ref={mainRef} tabIndex={-1}>
      {selected ? <div className="case-page page-width"><a className="back-link" href="#work" onClick={event => go(event, 'work')}><Icon name="arrow" size={18}/>Back to selected work</a>{project ? <ProjectDetail key={project.id} project={project} go={go}/> : <section><h1>Project not found.</h1><p>Explore the work below to find another project.</p></section>}</div> : <>
        <section className="hero page-width" id="home">
          <h1>Samuel Alexander.</h1>
          <h2>I build reliable systems.</h2>
          <p>I’m a software engineer working across <strong>backend development</strong> and <strong>applied AI</strong>. During my internship at <a href="#experience" onClick={event => go(event, 'experience')}>VideoDB</a>, I built APIs, computer-use applications, and tools that make video useful.</p>
          <div className="hero-actions"><a className="outline-link" href="#work" onClick={event => go(event, 'work')}>Explore my work<Icon name="arrow" size={18}/></a><a className="quiet-link" href={github} target="_blank" rel="noreferrer">GitHub<Icon name="external" size={15}/></a></div>
          <div className="hero-scroll"><span>Former Engineering Intern at VideoDB</span><span>April – October 2026</span></div>
        </section>
        <section className="about-section reading-width" id="about"><h2 className="section-title">A little about me</h2><div className="about-content"><div><p>I like working on the parts of a product that have to hold up: an API that handles a retry safely, an automation that can recover, or a benchmark you can reproduce.</p><p>At <a href="#experience" onClick={event => go(event, 'experience')}>VideoDB</a>, my work spanned outreach systems, desktop agents, video understanding, and robotics data. I graduated from Graphic Era Hill University in 2026 with a B.Tech in Computer Science and Engineering.</p></div><div className="toolkit"><p>Some tools I work with:</p><ul>{['Python', 'TypeScript', 'NestJS / FastAPI', 'PostgreSQL', 'PyTorch / FAISS', 'Docker / Azure'].map(tool=><li key={tool}><Icon name="chevron" size={13}/>{tool}</li>)}</ul></div></div></section>
        <section className="experience-section reading-width" id="experience"><h2 className="section-title">Where I’ve worked</h2><div className="experience-row"><div className="company-marker">VideoDB</div><div className="experience-copy"><h3>Engineering Intern <span>@ VideoDB</span></h3><p className="role-date">23 April 2026 — 31 October 2026</p><ul><li>Built CRM APIs, campaign workflows, provider integrations, and durable background jobs with safe retries and recovery.</li><li>Developed a computer-use application with multiple model backends and output validation, supporting an enterprise deal.</li><li>Built Open Record Replay, an open-source MCP server that turns desktop demonstrations into reusable agent skills.</li><li>Built resumable retrieval evaluations across 100 hours, 2,835 videos and 11,369 queries.</li><li>Optimized robotics exports: 94.5% lower MCAP peak resident memory and 58.1% lower LeRobot CPU time on a local 30-second cached-media benchmark.</li></ul><div className="experience-links"><a href="#project/outreach-crm" onClick={event=>go(event,'work/outreach-crm')}>OutReach CRM<Icon name="external" size={14}/></a><a href="#project/computer-use-application" onClick={event=>go(event,'work/computer-use-application')}>Computer-use application<Icon name="external" size={14}/></a><a href="/resume.pdf" target="_blank" rel="noreferrer">Full resume<Icon name="external" size={14}/></a></div></div></div></section>
        <section className="work-section page-width" id="work">
          <h2 className="section-title">Some things I’ve built</h2>
          <div className="work-gallery">{selectedWork.map((item, index) => <article className={`work-item work-item-${index}`} key={item.id}>
            <a className={`work-cover cover-${index}`} href={`#project/${item.id}`} onClick={event => go(event, `work/${item.id}`)} aria-label={`Explore ${item.title}`}><ProjectArtwork project={item} index={index}/></a>
            <div className="work-copy"><h3><a href={`#project/${item.id}`} onClick={event => go(event, `work/${item.id}`)}>{item.title}</a></h3><div className="project-description"><p>{index === 0 ? 'A PostgreSQL-backed outreach platform. I built lead ingestion, campaign workflows, provider integrations, and the recovery paths that keep background jobs reliable.' : index === 1 ? 'A video analysis experiment and review dashboard. I built the pipeline to compare segment selection, model descriptions, retrieval quality, and API cost against preserved evidence.' : 'A video annotation tool for comparing hand-pose models on the same frames. I added 21-point tracking, 3D reconstruction, hosted vision endpoints, and recoverable runs.'}</p></div><ul className="project-tools">{item.stack.slice(0,4).map(tool=><li key={tool}>{tool}</li>)}</ul><a className="case-link" href={`#project/${item.id}`} onClick={event => go(event, `work/${item.id}`)}>View project<Icon name="arrow" size={17}/></a></div>
          </article>)}</div>
          <details className="project-archive"><summary>Explore all {projects.length} projects<Icon name="arrow" size={20}/></summary><div className="archive-content">
            <p className="archive-intro">Internship work and independent projects. Search for a topic or technology.</p>
            <div className="archive-controls"><label className="search-field"><Icon name="search" size={19}/><span className="sr-only">Search projects</span><input type="search" placeholder="Search projects…" value={query} onChange={event => setQuery(event.target.value)}/></label><label><span className="sr-only">Filter by area</span><select value={category} onChange={event => setCategory(event.target.value)}>{categories.map(item => <option key={item}>{item}</option>)}</select></label><label><span className="sr-only">Filter by project origin</span><select value={origin} onChange={event => setOrigin(event.target.value)}>{['All work', 'VideoDB', 'Independent'].map(item => <option key={item}>{item}</option>)}</select></label></div>
            <p className="result-count" role="status">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'} found</p>
            <div className="archive-list">{filtered.map(item => <a key={item.id} href={`#project/${item.id}`} onClick={event => go(event, `work/${item.id}`)}><span><strong>{item.title}</strong><small>{item.origin === 'VideoDB' ? 'VideoDB internship' : 'Independent'} · {item.category}</small></span><Icon name="arrow" size={20}/></a>)}{!filtered.length && <div className="empty-state"><p>No matching projects.</p><button onClick={() => { setQuery(''); setCategory('All areas'); setOrigin('All work'); }}>Clear filters</button></div>}</div>
          </div></details>
        </section>

      </>}
    </main>
    <footer className="site-footer reading-width" id="contact"><h2>Let’s build something useful.</h2><p>I’m interested in backend and AI engineering work. Have a role or a project in mind? I’d like to hear about it.</p><a className="outline-link" href={`mailto:${email}`}>Get in touch<Icon name="mail" size={18}/></a><a className="footer-email" href={`mailto:${email}`}>{email}</a><div className="footer-bottom"><a href={github} target="_blank" rel="noreferrer">GitHub<Icon name="external" size={14}/></a><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume<Icon name="external" size={14}/></a></div><p className="design-credit">Built by Samuel Alexander. Design inspired by <a href="https://v4.brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a>.</p></footer>
  </div>;
}

function ProjectArtwork({ index }) {
  if(index === 1) return <figure><img src="/projects/archetype-dashboard.png" alt="Video analysis experiment dashboard with model results and review controls" loading="lazy"/><figcaption>Experiment dashboard · actual project</figcaption></figure>;
  if(index === 2) return <figure><img src="/projects/hand-annotation-preview.jpg" alt="Hand annotation output with predicted hand landmarks overlaid on a video frame" loading="lazy"/><figcaption>Hand tracking output · actual project</figcaption></figure>;
  return <div className="source-preview"><div className="source-file"><Icon name="code" size={17}/><span>lead-ingestion.ts</span><small>TypeScript</small></div><pre><code><span className="code-comment">{'// One identity policy across every lead source'}</span>{'\n\n'}<span className="code-purple">export type</span> <span className="code-blue">LeadOrigin</span> ={'\n'}  <span className="code-green">'inbound'</span> | <span className="code-green">'outbound'</span> | <span className="code-green">'manual'</span>;{'\n\n'}<span className="code-purple">export interface</span> <span className="code-blue">IngestedLead</span> {'{'}{'\n'}  id: <span className="code-blue">string</span>;{'\n'}  accountId: <span className="code-blue">string</span> | <span className="code-purple">null</span>;{'\n'}  created: <span className="code-blue">boolean</span>;{'\n'}  name: <span className="code-blue">string</span>;{'\n'}  email: <span className="code-blue">string</span>;{'\n'}{'}'}</code></pre><span className="source-caption">A small excerpt from my ingestion module.</span></div>;
}

function ProjectDetail({ project, go }) {
  const next = featured[(featured.findIndex(item => item.id === project.id) + 1) % featured.length];
  return <article className="project-detail">
    <div className="project-heading"><h1>{project.title}</h1><p className="project-lead">{project.intro || project.summary}</p><div className="project-meta"><span>{project.origin === 'VideoDB' ? 'VideoDB internship' : 'Independent project'}</span><span>{project.category}</span>{project.github && <a href={project.github} target="_blank" rel="noreferrer">View source<Icon name="external" size={14}/></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo<Icon name="external" size={14}/></a>}</div></div>
    {project.flow && <SystemFlow flow={project.flow}/>}
    {project.contributions ? <div className="case-columns"><section className="contributions"><h2>What I built</h2><ul>{project.contributions.map(text => <li key={text}>{text}</li>)}</ul></section>{project.notes && <section className="engineering-notes"><h2>Engineering decisions</h2>{project.notes.map(([title, text]) => <div className="engineering-note" key={title}><h3>{title}</h3><p>{text}</p></div>)}</section>}</div> : <section className="archive-description"><h2>My contribution</h2><p>{project.description}</p></section>}
    {project.result && <section className="result-note"><Icon name="chart" size={23}/><div><h2>{project.resultLabel || 'Measured result'}</h2><p>{project.result}</p><small>{project.resultNote}</small></div></section>}
    {project.stack.length > 0 && <section className="mobile-stack"><h2>Built with</h2><p>{project.stack.join(' · ')}</p></section>}
    <footer className="project-bottom"><p>{project.origin === 'VideoDB' ? 'Contribution summary from my internship at VideoDB.' : 'An independent project from my portfolio.'}</p><a href={`#work/${next.id}`} onClick={event => go(event, `work/${next.id}`)}><span>Explore next</span>{next.title}<Icon name="arrow" size={20}/></a></footer>
  </article>;
}

function SystemFlow({ flow }) {
  const [active, setActive] = useState(0);
  return <section className="system-overview" aria-label="Interactive system overview">
    <div className="system-title"><h2>How it fits together</h2><span>Select a step to explore</span></div>
    <div className="flow-track">{flow.map(([icon, title, subtitle], index) => <React.Fragment key={title}><button className={`flow-node ${active === index ? 'flow-active' : ''}`} aria-pressed={active === index} onClick={() => setActive(index)}><Icon name={icon} size={29}/><strong>{title}</strong><small>{subtitle}</small></button>{index < flow.length - 1 && <div className="flow-connector"><Icon name="arrow" size={23}/></div>}</React.Fragment>)}</div>
    <div className="flow-explanation" aria-live="polite"><span className="flow-indicator"/><p>{flow[active][3]}</p></div>
  </section>;
}
