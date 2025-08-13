import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

// Import project images
import teatimeImage from "../assets/teatime_optimized.png";
import pokeportImage from "../assets/pokeport_optimized.png";
import moportImage from "../assets/moport_optimized.png";
import pfpImage from "../assets/pfp.png";

const projects = [
  {
    title: "TeaTime",
    description: "Full-stack social forum for tea enthusiasts",
    image: teatimeImage,
    tags: ["React", "MongoDB", "Express", "Node.js"],
    tagColors: ["primary", "success", "info", "warning"],
    url: "https://teatime-wcue.onrender.com/",
  },
  {
    title: "PokePort",
    description: "Interactive Pokemon card collection app",
    image: pokeportImage,
    tags: ["Bootstrap", "PokeAPI", "React", "MongoDB"],
    tagColors: ["primary", "success", "info", "warning"],
    url: "https://www.pokeport.org/",
  },
  {
    title: "Mo Portfolio",
    description: "Portfolio for a Jazz Musician and Teacher",
    image: moportImage,
    tags: ["Bootstrap", "React", "CSS", "JS"],
    tagColors: ["primary", "success", "info", "warning"],
    url: "https://eldrish-ramos.github.io/mcjazzsite/",
  },
];

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvynqpj";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const form = formRef.current;
    if (!form) return;
    
    const data = new FormData(form);
    
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { 
          Accept: "application/json" 
        },
      });
      
      const result = await res.json();
      
      if (res.ok) {
        setStatus("sent");
        form.reset();
        console.log("Email sent successfully!");
      } else {
        console.error("Formspree error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    }
  }

  return (
    <div className="portfolio-body bg-dark">
      {/* Header Navigation */}
      <header className="header border-bottom border-danger">
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
          <div className="container">
            <a className="navbar-brand text-danger fs-4 fw-bold ms-3 navbar-brand-style" href="#">
              ER
            </a>
            <div className="navbar-nav ms-auto me-3">
              <a className="nav-link text-white me-4" href="#home">Home</a>
              <a className="nav-link text-white me-4" href="#about">About</a>
              <a className="nav-link text-white me-4" href="#projects">Projects</a>
              <a className="nav-link text-white me-4" href="#skills">Skills</a>
              <a className="nav-link text-white" href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 hero-overlay"></div>
          
          <div className="container h-100 position-relative">
            <div className="row align-items-center h-100 hero-row">
              <div className="col-lg-8">
                <div className="hero-content">
                  <span className="badge text-black px-4 py-2 mb-4 rounded-pill hero-badge">
                    Project Ready
                  </span>
                  
                  <h1 className="hero-title text-white mb-4">
                    ELDRISH<br />RAMOS
                  </h1>
                  
                  <p className="hero-subtitle text-white fs-4 fw-medium mb-4">
                    Web Developer | University of Minnesota Bootcamp Graduate
                  </p>
                  
                  <button className="btn btn-lg rounded-2 px-4 py-3 fw-bold hero-button"
                    onClick={() => {
                      const projectsSection = document.querySelector('#projects');
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}>
                    <i className="me-2"></i>VIEW PROJECTS
                  </button>
                </div>
              </div>
              
              <div className="col-lg-4 text-end">
                <img src="https://placehold.co/384x384" alt="Profile" 
                  className="img-fluid rounded-circle hero-profile-image" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5 about-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-white fw-normal mb-3 section-title">
                ABOUT ME
              </h2>
              <div className="mx-auto section-divider"></div>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image-card bg-black rounded-4 overflow-hidden">
                  <div className="p-4 d-flex justify-content-center">
                    <img src={pfpImage} alt="About me" 
                      className="img-fluid rounded-3 about-image" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-danger mb-2 about-title">
                      SoCal based dev
                    </h4>
                    <p className="text-warning about-text">
                      University of Minnesota Full-Stack Web Dev Bootcamp Graduate
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="about-cards h-100 d-flex flex-column gap-3">
                  <div className="card bg-primary text-white rounded-3 border-0 card-shadow">
                    <div className="card-body p-4">
                      <h4 className="card-title d-flex align-items-center mb-3 card-title-font">
                        <i className="me-3"></i>EDUCATION
                      </h4>
                      <p className="card-text card-text-font">
                        Graduated from the University of Minnesota Full Stack Web Development Bootcamp with a strong 
                        foundation in web development 
                        technologies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="card bg-success text-white rounded-3 border-0 card-shadow">
                    <div className="card-body p-4">
                      <h4 className="card-title d-flex align-items-center mb-3 card-title-font">
                        <i className="me-3"></i>PASSION
                      </h4>
                      <p className="card-text card-text-font">
                        Creating full-stack applications that both look and feel great to use
                      </p>
                    </div>
                  </div>
                  
                  <div className="card text-black rounded-3 border-0 mission-card">
                    <div className="card-body p-4">
                      <h4 className="card-title d-flex align-items-center mb-3 card-title-font">
                        <i className="me-3"></i>MISSION
                      </h4>
                      <p className="card-text card-text-font">
                        Work with whomever to achieve their desired end result product and create a postive impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-5 bg-dark">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-white fw-normal mb-4 section-title">
                PROJECT LIBRARY
              </h2>
              <div className="mx-auto section-divider"></div>
            </div>
            
            <div className="row g-4">
              {projects.map((project, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="card bg-black text-white h-100 rounded-4 border-0 overflow-hidden project-card">
                    <img src={project.image} className="card-img-top project-image" alt={project.title} />
                    <div className="card-body p-4 d-flex flex-column">
                      <h5 className="card-title text-danger mb-3 project-title">
                        {project.title}
                      </h5>
                      <p className="card-text text-light mb-4 project-description">
                        {project.description}
                      </p>
                      <div className="mb-4">
                        {project.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className={`badge bg-${project.tagColors[tagIdx]} me-2 px-3 py-1 rounded-pill project-tags`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button 
                        className="btn text-black fw-bold rounded-2 mt-auto project-visit-button"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <i className="me-2"></i>Visit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-5 skills-section">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-white fw-normal mb-3 section-title">
                SKILLS
              </h2>
              <div className="mx-auto section-divider"></div>
            </div>
            
            <div className="row g-4">
              <div className="col-lg-3 col-md-6">
                <div className="card text-white text-center h-100 rounded-3 border-0 skill-card-red">
                  <div className="card-body p-4">
                    <i className="mb-3 d-block skill-icon"></i>
                    <h3 className="card-title mb-3 skill-title">
                      FRONTEND
                    </h3>
                    <p className="card-text skill-text">
                      Bootstrap, Vite, React, HTML5, CSS3, JavaScript
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card text-white text-center h-100 rounded-3 border-0 skill-card-blue">
                  <div className="card-body p-4">
                    <i className="mb-3 d-block skill-icon"></i>
                    <h3 className="card-title mb-3 skill-title">
                      BACKEND
                    </h3>
                    <p className="card-text skill-text">
                      Node.js, MongoDB, MySQL
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card text-white text-center h-100 rounded-3 border-0 skill-card-green">
                  <div className="card-body p-4">
                    <i className="mb-3 d-block skill-icon"></i>
                    <h3 className="card-title mb-3 skill-title">
                      MOBILE
                    </h3>
                    <p className="card-text skill-text">
                      Bootstrap, React Native, iOS, Android
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-3 col-md-6">
                <div className="card text-black text-center h-100 rounded-3 border-0 skill-card-yellow">
                  <div className="card-body p-4">
                    <i className="mb-3 d-block skill-icon"></i>
                    <h3 className="card-title mb-3 skill-title">
                      TOOLS
                    </h3>
                    <p className="card-text skill-text">
                      Git, Figma, Photoshop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 contact-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white fw-normal mb-4 contact-title">
                  GOT AN IDEA?
                </h2>
                <p className="text-white fs-5 mb-5 contact-subtitle">
                  Let's create something amazing together. Send a message and lets get to work!
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="row justify-content-center mt-5">
              <div className="col-lg-6">
                <form
                  id="contact-form"
                  className="p-4 rounded-3 contact-form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  method="POST"
                  autoComplete="off"
                >
                  <div className="mb-3">
                    <input
                      className="form-control form-control-lg bg-secondary border-0 text-white"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-lg bg-secondary border-0 text-white"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={4}
                      autoComplete="off"
                    />
                  </div>
                  <div className="text-end">
                    <button
                      className="btn btn-lg fw-bold contact-button"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                        ? "Sent!"
                        : "Send"}
                    </button>
                  </div>
                  {status === "error" && (
                    <div className="text-danger mt-3 text-end">
                      Failed to send message. Please check the console for details or try again later.
                    </div>
                  )}
                  {status === "sent" && (
                    <div className="text-success mt-3 text-end">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  <div className="text-center text-light mt-3 contact-info">
                    This form will send your message to{" "}
                    <strong>Eldrish.ramosperez@gmail.com</strong>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-top border-danger py-4">
        <div className="container">
          <div className="text-center text-white footer-text">
            © 2025 Eldrish Ramos, aspiring web dev
          </div>
        </div>
      </footer>
    </div>
  );
}