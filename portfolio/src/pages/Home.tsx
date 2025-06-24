import React, { useRef, useState } from "react";
import "./Home.css";

const projects = [
  {
    title: "Tea Time",
    description:
      "A tea-themed web app to explore different types of tea, brew them, and share thoughts about them on a social forum! (please be patient with loading times as this is hosted with a live server on render",
    link: "https://teatime-wcue.onrender.com/",
  },
  {
    title: "Poképort",
    description:
      "A web app that allows you to view average market card prices for Pokémon TCG cards, and with account creation, allows you to track progress of completion on any given set of cards!",
    link: "https://www.pokeport.org/",
  },
  {
    title: "In Progress",
    description: "Still Working on this one! Check back later for updates.",
    link: "#",
  },
];

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdoqzqzv";

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
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
          <h1 className="persona-title">Eldrish Ramos</h1>
          <p className="persona-subtitle">
            Frontend Developer <span className="persona-dot" /> Bootstrap Enjoyer{" "}
            <span className="persona-dot" /> Lifelong Learner
          </p>
          <div className="persona-links">
            <a
              href="https://github.com/Eldrish-Ramos"
              className="persona-btn github"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
            {/* You can add more links here if needed */}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="persona-about-card">
        <h2 className="persona-section-title">About Me</h2>
        <p className="persona-about-text">
          I am a recent full-stack Web Developer with my 1 year of experienece in
          the field. I am a bootcamp graduate of a full-stack web development
          course (six month term) offered by the University of Minnesota.
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
                <a
                  href={project.link}
                  className="persona-project-link"
                  target="_blank"
                  rel="noopener"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="persona-contact-section">
        <h2 className="persona-section-title">Contact Me</h2>
        <form
          className="persona-contact-form"
          ref={formRef}
          onSubmit={handleSubmit}
          method="POST"
          autoComplete="off"
        >
          <div className="persona-form-row">
            <input
              className="persona-input"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
          </div>
          <div className="persona-form-row">
            <textarea
              className="persona-input persona-textarea"
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              autoComplete="off"
            />
          </div>
          <button
            className="persona-btn persona-contact-btn"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Sent!"
              : "Send"}
          </button>
          {status === "error" && (
            <div className="persona-form-error">
              Something went wrong. Please try again later.
            </div>
          )}
          {status === "sent" && (
            <div className="persona-form-success">
              Thank you! Your message has been sent.
            </div>
          )}
        </form>
        <div className="persona-contact-note">
          This form will send your message to{" "}
          <b>Eldrish.ramosperez@gmail.com</b>
        </div>
      </section>
    </main>
  );
}