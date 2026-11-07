import React, { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { projects, imageUrl } from './projects.js';



function Arrow({ diagonal = false }) {
  return <svg className="arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header wrap"><a className="wordmark" href="#inicio" aria-label="Ariana Mercado, inicio">am<span>.</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? 'Cerrar −' : 'Menú +'}</button><nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Navegación principal"><a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a><a href="#sobre-mi" onClick={() => setOpen(false)}>Sobre mí</a><a className="nav-end" href="#intereses" onClick={() => setOpen(false)}>Lo que me mueve <Arrow diagonal /></a></nav></header>;
}

function HeroArtwork() {
  return <div className="hero-art system-art" aria-hidden="true"><svg viewBox="0 0 440 390" fill="none"><defs><pattern id="system-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#5d4655"/></pattern></defs><rect x="15" y="10" width="410" height="350" fill="url(#system-grid)"/><g stroke="#77536a" strokeWidth="1.2"><path d="M143 100h65v95h35M317 112v40h-74M118 285h90v-90M335 285h-45v-90h-47"/><path d="M55 195h115M270 40v38M360 195h55" strokeDasharray="3 6" opacity=".55"/></g><g fill="#211e25" stroke="#785469"><rect x="35" y="58" width="118" height="82" rx="7"/><rect x="260" y="55" width="145" height="73" rx="7"/><rect x="35" y="252" width="122" height="72" rx="7"/><rect x="282" y="252" width="123" height="72" rx="7"/></g><rect x="174" y="162" width="92" height="66" rx="8" fill="#32212e" stroke="#e16ca9"/><g fill="#f0a0c9" fontFamily="monospace" fontSize="23"><text x="54" y="95">&lt;/&gt;</text><text x="279" y="88">[x → y]</text><text x="55" y="285">&#123;…&#125;</text><text x="301" y="285">ƒ(x)</text><text x="193" y="202" fontSize="15">SISTEMA</text></g><g fill="#baa8b5" fontSize="9" fontFamily="sans-serif" letterSpacing="1.2"><text x="54" y="121">DESARROLLO</text><text x="279" y="112">DATOS / MODELOS</text><text x="55" y="308">SEGURIDAD</text><text x="301" y="308">IA</text></g><g fill="#fa53ab"><circle cx="208" cy="100" r="3"/><circle cx="317" cy="152" r="3"/><circle cx="208" cy="285" r="3"/><circle cx="290" cy="252" r="3"/></g><text x="35" y="366" fill="#9d8797" fontSize="8" letterSpacing="1.6">CÓDIGO · DATOS · CONEXIONES</text></svg></div>;
}

function Hero() {
  return <section className="hero" id="inicio"><Header/><div className="hero-main wrap"><div className="hero-copy"><p className="eyebrow"><span className="pink-dot"/> CIENCIAS DE LA COMPUTACIÓN · UNI</p><h1>Hola, soy<br/>Ariana <span>Mercado.</span></h1><p className="interests-line">Desarrollo tecnológico · Machine Learning · Ciberseguridad · IA</p><p className="intro">Me interesa explorar nuevas tecnologías, investigar problemas complejos y desarrollar soluciones que tengan una aplicación real.</p><div className="hero-actions"><a className="button primary" href="#proyectos">Explorar proyectos <Arrow/></a><a className="button secondary" href="#sobre-mi">Sobre mí <span aria-hidden="true">↘</span></a></div><LinkedInLink/></div><HeroArtwork/></div><div className="hero-bottom wrap"><span>TECNOLOGÍA CON CURIOSIDAD Y PROPÓSITO</span><a href="#proyectos">Sigue explorando <span aria-hidden="true">↓</span></a></div></section>;
}

function LinkedInLink({ label = 'LinkedIn' }) {
  return <a className="linkedin-link" href="https://www.linkedin.com/in/ariana-mercado-taype" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.4-.76 1.36-1.56 2.79-1.56 2.98 0 3.58 1.96 3.58 4.51v5.3Z"/></svg><span>{label}</span><Arrow diagonal/><span className="sr-only"> de Ariana Mercado (abre en otra pestaña)</span></a>;
}

function ImageViewer({ images, initialIndex, title, onClose }) {
  const dialog = useRef(null);
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  useEffect(() => {
    const el = dialog.current;
    el.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  const change = (step) => { setIndex(i => (i + step + images.length) % images.length); setZoomed(false); };
  const image = images[index];
  return <dialog ref={dialog} className="image-viewer" aria-label={title + ': galería de imágenes'} onClose={onClose} onClick={e => { if (e.target === dialog.current) dialog.current.close(); }}><div className="viewer-shell"><div className="viewer-toolbar"><span aria-live="polite">{index + 1} / {images.length}</span><button onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed}>{zoomed ? 'Ajustar imagen' : 'Tamaño original'}</button><button autoFocus onClick={() => dialog.current.close()} aria-label="Cerrar galería">Cerrar ×</button></div><div className={zoomed ? 'viewer-image zoomed' : 'viewer-image'} tabIndex={zoomed ? 0 : undefined} role={zoomed ? 'region' : undefined} aria-label={zoomed ? 'Imagen ampliada, desplázate para explorar' : undefined}><img src={imageUrl(image.file)} alt={image.alt}/></div><p className="viewer-caption" aria-live="polite">{image.caption}</p><div className="viewer-controls"><button onClick={() => change(-1)}>← Anterior</button><button onClick={() => change(1)}>Siguiente →</button></div></div></dialog>;
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [viewing, setViewing] = useState(null);
  const cover = project.images[0];
  return <article className={`project-card ${project.featured ? 'project-featured' : ''}`} aria-labelledby={`title-${project.id}`}>
    <div className="project-summary"><button className="project-cover" onClick={() => setViewing(0)} aria-label={`Ampliar imagen: ${project.title}`}><img src={imageUrl(cover.file)} alt={cover.alt} loading="lazy" decoding="async"/><span className="image-hint">Ampliar ↗</span></button><div className="project-body"><div className="project-meta"><span>{project.category}</span><span>/{String(index + 1).padStart(2, '0')}</span></div><h3 id={`title-${project.id}`}>{project.title}</h3><p className="project-description">{project.text}</p><div className="tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-footer"><span>{project.team}</span><button id={`toggle-${project.id}`} aria-expanded={expanded} aria-controls={`details-${project.id}`} onClick={() => setExpanded(!expanded)}>{expanded ? 'Cerrar detalles' : 'Ver detalles'} <span className={expanded ? 'detail-plus rotated' : 'detail-plus'} aria-hidden="true">+</span></button></div></div></div>
    <div id={`details-${project.id}`} role="region" aria-labelledby={`title-${project.id}`} className={expanded ? 'details-collapse expanded' : 'details-collapse'} inert={!expanded} aria-hidden={!expanded}><div className="details-overflow"><div className="project-details"><div className="detail-copy">{[['Problema',project.problem],['Solución',project.solution],['Resultados documentados',project.results]].map(([heading,text]) => <section key={heading}><h4>{heading}</h4><p>{text}</p></section>)}<section><h4>Tecnologías utilizadas</h4><p>{project.tech.join(' · ')}</p></section>{project.people && <p className="project-credits"><strong>{project.peopleLabel}:</strong> {project.people}</p>}{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Ver repositorio en GitHub <Arrow diagonal/><span className="sr-only"> (abre en otra pestaña)</span></a>}</div><section className="project-gallery" aria-label={`Galería: ${project.title}`}><h4>El proyecto en imágenes</h4><p className="gallery-help">Selecciona una imagen para ampliarla y consultar sus detalles.</p><div className="gallery-grid">{project.images.slice(1).map((image,i) => <figure key={image.file}><button onClick={() => setViewing(i+1)} aria-label={`Ampliar: ${image.caption}`}><img src={imageUrl(image.file)} alt={image.alt} loading={expanded ? 'eager' : 'lazy'} decoding="async"/><span className="image-hint">Ampliar ↗</span></button><figcaption>{image.caption}</figcaption></figure>)}</div></section></div></div></div>
    {viewing !== null && <ImageViewer images={project.images} initialIndex={viewing} title={project.title} onClose={() => setViewing(null)}/>}
  </article>;
}

function Projects() {
  return <section id="proyectos" className="projects section"><div className="wrap"><div className="section-heading"><div><p className="eyebrow">01 / PROYECTOS SELECCIONADOS</p><h2>Ideas que se convierten<br/>en <span>proyectos.</span></h2></div><p>Una selección de proyectos que reflejan mi experiencia e intereses en Machine Learning, ciberseguridad y robótica.</p></div><div className="projects-grid">{projects.map((p,i) => <ProjectCard key={p.id} project={p} index={i}/>)}</div></div></section>;
}

function About() {
  return <section id="sobre-mi" className="about section"><div className="wrap about-grid"><div><p className="eyebrow">02 / SOBRE MÍ</p><h2>La curiosidad es<br/>mi punto de <span>partida.</span></h2><div className="education"><span className="education-icon" aria-hidden="true">↗</span><div><strong>Ciencias de la Computación</strong><p>Universidad Nacional de Ingeniería</p><span>Perú</span><p className="academic-merit">Tercio superior académico</p></div></div></div><div className="about-copy"><p>Soy Ariana Mercado, estudiante de Ciencias de la Computación en la UNI. Me interesa entender cómo funcionan las tecnologías y explorar lo que podemos construir con ellas.</p><p>Mis proyectos recorren el Machine Learning, la ciberseguridad y la robótica: distintas formas de investigar problemas complejos y acercarlos a una aplicación real.</p><div id="intereses" className="interests"><h3>LO QUE ME MUEVE</h3>{['Desarrollo tecnológico','Machine Learning','Ciberseguridad','Inteligencia artificial'].map((s,i) => <div className="interest" key={s}><span>0{i+1}</span><p>{s}</p><span aria-hidden="true">↗</span></div>)}</div></div></div><div className="wrap linkedin-context"><p>También he participado en eventos, concursos y actividades de formación que complementan mi experiencia académica. Puedes conocer más sobre estas experiencias, mis certificaciones y reconocimientos en mi perfil de LinkedIn.</p><LinkedInLink label="Explorar mi trayectoria en LinkedIn"/></div></section>;
}

function App() {
  return <><a className="skip-link" href="#proyectos">Saltar al contenido</a><main><Hero/><Projects/><About/></main><footer className="footer"><div className="wrap footer-inner"><a className="wordmark" href="#inicio" aria-label="Volver al inicio">am<span>.</span></a><p>Ariana Mercado <span>·</span> Tecnología, investigación y curiosidad.</p><LinkedInLink/><a href="#inicio">Volver arriba ↑</a></div></footer></>;
}

createRoot(document.getElementById('root')).render(<App/>);
