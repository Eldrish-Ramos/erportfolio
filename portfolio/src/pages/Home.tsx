import "./Home.css";

const projects = [
  {
    title: "Velvet Room App",
    description: "A stylish React app inspired by Persona menus. Features dynamic cards, animated transitions, and a mint blue palette.",
    link: "#",
  },
  {
    title: "Social Link Tracker",
    description: "Track your connections and progress, Persona-style. Built with TypeScript and custom SVG icons.",
    link: "#",
  },
  {
    title: "Shadow Gallery",
    description: "A gallery of creative works with layered, animated cards and a modern Persona-inspired UI.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="persona-main">
      {/* Persona-style angled header */}
      <header className="persona-header">
        <div className="persona-header-bg" />
        <div className="persona-avatar-wrap">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Profile"
            className="persona-avatar"
          />
        </div>
        <div className="persona-header-content">
          <h1 className="persona-title">Your Name</h1>
          <p className="persona-subtitle">
            Frontend Developer <span className="persona-dot" /> React Enthusiast <span className="persona-dot" /> Lifelong Learner
          </p>
          <div className="persona-links">
            <a href="mailto:your@email.com" className="persona-btn email">
              Email
            </a>
            <a href="https://github.com/yourusername" className="persona-btn github" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" className="persona-btn linkedin" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="persona-about-card">
        <h2 className="persona-section-title">About Me</h2>
        <p className="persona-about-text">
          I am a passionate developer with experience in building modern web applications using React, TypeScript, and other cutting-edge technologies. I love learning new things and collaborating on exciting projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className="persona-projects-section">
        <h2 className="persona-section-title">Projects</h2>
        <div className="persona-projects-grid">
          {projects.map((project, idx) => (
            <div className="persona-project-card" key={idx}>
              <div className="persona-project-accent" />
              <div className="persona-project-content">
                <h3 className="persona-project-title">{project.title}</h3>
                <p className="persona-project-desc">{project.description}</p>
                <a href={project.link} className="persona-project-link" target="_blank" rel="noopener">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}