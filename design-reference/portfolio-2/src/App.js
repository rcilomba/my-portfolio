import React, { useEffect, useRef, useState } from 'react';
import { projects, otherProjects, skillGroups } from './data';

const navigation = [
  ['Home', 'home'], ['Work', 'work'], ['About', 'about'], ['Skills', 'skills'], ['Contact', 'contact'],
];
const github = 'https://github.com/rcilomba';
const linkedin = 'https://www.linkedin.com/in/ramadan-cilomba/';

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function ExternalLink({ href, children, label }) {
  return <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>;
}

function CvLink({ onClick }) {
  return <a className="cv-placeholder" href="/cv/ramadan-cilomba-cv.pdf" target="_blank" rel="noopener noreferrer" onClick={onClick} aria-label="Open Ramadan Cilomba’s CV (PDF)">CV <span>PDF</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      menuRef.current?.querySelector('a')?.focus();
      wasOpen.current = true;
    } else if (wasOpen.current) {
      toggleRef.current?.focus();
      wasOpen.current = false;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => { if (window.innerWidth >= 768) { wasOpen.current = false; setOpen(false); } };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Ramadan Cilomba, home"><span className="brand-mark">RC<span>.</span></span><span className="brand-name">Ramadan Cilomba</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
          <CvLink />
        </nav>
        <button className="menu-toggle" type="button" ref={toggleRef} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      </div>
      {open && <nav className="mobile-nav" id="mobile-menu" ref={menuRef} aria-label="Mobile navigation">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => { wasOpen.current = false; setOpen(false); }}>{label}</a>)}
        <CvLink onClick={() => { wasOpen.current = false; setOpen(false); }} />
      </nav>}
    </header>
  </>;
}

function ProjectCard({ project }) {
  return <article className={`project-card min-w-0${project.featured ? ' featured' : ''}`}>
    <div className="project-visual">
      {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <div className="project-empty" role="img" aria-label={`${project.name} project screenshot coming soon`}><strong>{project.name}<span>.</span></strong><span>In development</span><small>Project screenshot coming soon</small></div>}
    </div>
    <div className="project-content">
      <div className="project-heading">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        {project.inDevelopment && <p className="status">In development</p>}
      </div>
      <div className="project-summary">
        <p className="project-description">{project.description}</p>
        <ul className="tags" aria-label={`${project.name} technologies`}>{project.technologies.map(item => <li key={item}>{item}</li>)}</ul>
        <div className="project-links">
          {project.live && <ExternalLink href={project.live}>View {project.name}</ExternalLink>}
          {project.github && <ExternalLink href={project.github} label={`View ${project.name} source on GitHub`}>GitHub source</ExternalLink>}
        </div>
      </div>
    </div>
  </article>;
}

function App() {
  return <>
    <Header />
    <main id="main" tabIndex="-1">
      <section className="hero wrap" id="home" aria-labelledby="hero-heading">
        <div className="hero-content">
          <p className="availability"><span className="dot" aria-hidden="true" />Open to opportunities</p>
          <h1 id="hero-heading">Hi, I’m <span>Ramadan.</span></h1>
          <p className="hero-role">Technical Professional.</p>
          <p className="lead">I build accessible, responsive and maintainable digital experiences. With a background in web development, CMS and technical support, I enjoy turning complex problems into practical solutions.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore my work</a><a className="button secondary" href="#contact">Get in touch</a></div>
          <div className="social-links"><ExternalLink href={github}>GitHub</ExternalLink><ExternalLink href={linkedin}>LinkedIn</ExternalLink></div>
        </div>
        <div className="portrait-composition"><div className="portrait-frame"><img src="/images/linkedin-photo.jpeg" alt="Portrait of Ramadan Cilomba" width="1122" height="1402" /></div><p className="portrait-caption">Copenhagen, Denmark</p></div>
      </section>
      <section className="section wrap work" id="work" aria-labelledby="work-heading">
        <SectionLabel>Selected work</SectionLabel>
        <div className="section-intro"><h2 id="work-heading">Projects with <em>purpose.</em></h2><p>A selection of client projects and web applications that reflect my approach to development, problem-solving and user experience.</p></div>
        <div className="project-grid">{projects.map(project => <ProjectCard key={project.name} project={project} />)}</div>
        <div className="other-work">
          <h3>Other projects</h3>
          {otherProjects.map(project => <article className="other-project" key={project.name}>
            <div className="other-project-name"><h4>{project.name}</h4><p>{project.category}</p></div>
            <div className="other-project-detail">
              <p>{project.description}</p>
              <div className="other-links">
                {project.live && <ExternalLink href={project.live} label={`View ${project.name}`}>View project</ExternalLink>}
                {project.github && <ExternalLink href={project.github} label={`View ${project.name} source on GitHub`}>GitHub</ExternalLink>}
                {!project.live && !project.github && <span>Private source</span>}
              </div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="section band" id="about" aria-labelledby="about-heading"><div className="wrap">
        <SectionLabel>About me</SectionLabel><h2 id="about-heading">Curious by nature.<br /><em>Technical by choice.</em></h2>
        <div className="about-layout"><p className="about-lead">I’m a technical professional with experience in frontend development, CMS and technical support.</p><div className="about-copy"><p>I’m particularly interested in building accessible, responsive and maintainable websites that provide real value to users.</p><p>I’m developing my backend skills to better understand the systems behind the solutions I build.</p><div className="about-meta"><span>Copenhagen, Denmark</span><CvLink /></div></div></div>
      </div></section>

      <section className="skills-section wrap" id="skills" aria-labelledby="skills-heading"><h2 className="section-label" id="skills-heading">Technical skills</h2><div className="skill-grid">{skillGroups.map(group => <div className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.skills.join(' · ')}</p></div>)}</div></section>

      <section className="section band contact" id="contact" aria-labelledby="contact-heading"><div className="wrap contact-grid"><div><SectionLabel>Contact</SectionLabel><h2 id="contact-heading">Let’s build something <em>meaningful.</em></h2><p>I’m open to opportunities in frontend development, web development, CMS and related technical roles. Feel free to get in touch.</p></div><div className="contact-actions"><a className="button primary email-button" href="mailto:rcilomba@outlook.com">Email me: rcilomba@outlook.com</a><div className="social-links"><ExternalLink href={github}>GitHub</ExternalLink><ExternalLink href={linkedin}>LinkedIn</ExternalLink></div></div></div></section>
    </main>
    <footer className="site-footer"><div className="wrap footer-inner"><div><a className="brand-mark" href="#home" aria-label="Ramadan Cilomba, back to top">RC<span>.</span></a><p>Ramadan Cilomba · © {new Date().getFullYear()}</p></div><nav aria-label="Footer navigation"><ExternalLink href={github}>GitHub</ExternalLink><ExternalLink href={linkedin}>LinkedIn</ExternalLink><a href="#home">Back to top ↑</a></nav></div></footer>
  </>;
}

export default App;
