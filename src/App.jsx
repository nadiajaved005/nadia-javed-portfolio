
import { useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile.jpg";

const skills = [
  {
    icon: "▤",
    title: "Microsoft Office",
    description: "Word, Excel, PowerPoint, documents and spreadsheets.",
    tags: ["Word", "Excel", "PowerPoint"],
  },
  {
    icon: "</>",
    title: "Web Development",
    description: "Building websites with modern web technologies.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "⚛",
    title: "React.js",
    description: "Reusable components, hooks and responsive interfaces.",
    tags: ["React", "Hooks", "Vite"],
  },
  {
    icon: "▣",
    title: "React Native",
    description: "Learning to build mobile applications using React Native.",
    tags: ["Mobile UI", "Components"],
  },
  {
    icon: "☁",
    title: "Firebase",
    description: "Cloud services and database integration for applications.",
    tags: ["Firebase", "Firestore"],
  },
  {
    icon: "⌘",
    title: "Git & GitHub",
    description: "Version control and project source-code management.",
    tags: ["Git", "GitHub"],
  },
  {
    icon: "▧",
    title: "Office Administration",
    description: "Document preparation, data handling and record organization.",
    tags: ["Documentation", "Data Entry"],
  },
  {
    icon: "✦",
    title: "Professional Skills",
    description: "Communication, adaptability, teamwork and problem-solving.",
    tags: ["Learning", "Organization"],
  },
];

const projects = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Cake Corner Website",
    description:
      "A website project for a cake business, demonstrating practical website development and presentation skills.",
    technologies: ["React", "JavaScript", "CSS", "Firebase"],
    link: "https://cake-corner-bff88.web.app",
    linkLabel: "Visit Live Website",
    sourceLink:
      "https://github.com/nadiajaved005/cake-corner-website",
    symbol: "✿",
  },
  {
    number: "02",
    category: "RETAIL MANAGEMENT",
    title: "Super Store Management System",
    description:
      "A retail application project covering product management, billing, inventory, purchases and sales reports.",
    technologies: ["React", "Firebase", "Firestore"],
    link: "",
    linkLabel: "",
    sourceLink: "",
    symbol: "▦",
  },
  {
    number: "03",
    category: "OFFICE PRODUCTIVITY",
    title: "Office & Computer Skills",
    description:
      "A collection of practical skills relevant to office documentation, spreadsheet tasks and professional computer work.",
    technologies: ["MS Word", "Excel", "PowerPoint"],
    link: "",
    linkLabel: "",
    sourceLink: "",
    symbol: "▤",
  },
];

const education = [
  {
    year: "2025",
    title: "Bachelor of Education (B.Ed)",
    institution: "The Islamia University of Bahawalpur",
    description: "Professional education qualification.",
  },
  {
    year: "2023",
    title: "BS Chemistry",
    institution:
      "Khwaja Fareed University of Engineering and Information Technology",
    description: "Undergraduate degree in Chemistry.",
  },
  {
    year: "2023",
    title: "Teaching Internship",
    institution: "Punjab Group of Colleges",
    description: "Teaching internship experience in an educational setting.",
  },
];

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="portfolio" id="home">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">NJ</span>
          <span className="brand-copy">
            <strong>Nadia Javed</strong>
            <small>Professional Portfolio</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([id, label]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact" onClick={closeMenu}>
          Let's Connect <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO SUITABLE OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Nadia <span>Javed.</span>
            </h1>

            <h2 className="hero-subtitle">
              Computer Skills, Administration & Web Development
            </h2>

            <p className="hero-description">
              A motivated graduate with a background in Chemistry and
              Education, computer skills, and an interest in technology,
              banking support and office administration. I am eager to
              contribute my skills, learn new things and grow professionally.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>2023</strong>
                <span>BS Chemistry</span>
              </div>
              <div>
                <strong>2025</strong>
                <span>B.Ed</span>
              </div>
              <div>
                <strong>8+</strong>
                <span>Skill Areas</span>
              </div>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="profile-card">
              <div className="profile-card-header">
                <span className="profile-label">
                  <span className="availability-dot" />
                  PROFESSIONAL PROFILE
                </span>
                <span className="profile-star">✦</span>
              </div>

              <div className="avatar">
                <div className="avatar-ring avatar-ring-one" />
                <div className="avatar-ring avatar-ring-two" />
                <img
                  src={profilePhoto}
                  alt="Nadia Javed"
                  className="profile-photo"
                />
              </div>

              <h3>Nadia Javed</h3>
              <p className="profile-subtitle">Graduate · Computer Skills</p>

              <div className="profile-divider" />

              <div className="profile-detail">
                <span className="detail-icon">&lt;/&gt;</span>
                <div>
                  <strong>Technical Skills</strong>
                  <span>React · JavaScript · Firebase</span>
                </div>
              </div>

              <div className="profile-detail">
                <span className="detail-icon">▤</span>
                <div>
                  <strong>Office Skills</strong>
                  <span>Word · Excel · PowerPoint</span>
                </div>
              </div>

              <a className="profile-discover" href="#about">
                Discover My Profile <span>→</span>
              </a>
            </div>

            <div className="floating-card float-growth">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Growth Mindset</strong>
                <span>Always learning</span>
              </div>
            </div>

            <div className="floating-card float-career">
              <span className="floating-icon">✓</span>
              <div>
                <strong>Career Focus</strong>
                <span>Ready to contribute</span>
              </div>
            </div>

            <div className="floating-card float-web">
              <span className="floating-icon">&lt;/&gt;</span>
              <div>
                <strong>Web Development</strong>
                <span>React · JavaScript</span>
              </div>
            </div>

            <div className="floating-card float-creative">
              <span className="floating-icon">✧</span>
              <div>
                <strong>Creative Thinking</strong>
                <span>Learning and solving</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-container" id="about">
          <div className="section-heading">
            <span className="eyebrow">GET TO KNOW ME</span>
            <h2>
              About <span>Me</span>
            </h2>
            <p>
              Combining academic knowledge, computer skills and a willingness
              to learn.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <span className="about-symbol">✦</span>
              <h3>My Professional Profile</h3>
              <p>
                I have completed a BS in Chemistry and a Bachelor of Education.
                My background includes a teaching internship and practical
                website projects.
              </p>
              <p>
                I am interested in suitable opportunities in computer
                operations, office administration, banking support and IT.
                I value accuracy, organization, teamwork and continuous
                professional development.
              </p>
            </article>

            <div className="strength-list">
              <article className="strength-card">
                <span>01</span>
                <div>
                  <h3>Computer & IT</h3>
                  <p>Website development and software tools.</p>
                </div>
              </article>

              <article className="strength-card">
                <span>02</span>
                <div>
                  <h3>Office & Administration</h3>
                  <p>Documents, spreadsheets and organized records.</p>
                </div>
              </article>

              <article className="strength-card">
                <span>03</span>
                <div>
                  <h3>Learning & Communication</h3>
                  <p>Adaptability, communication and problem-solving.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-container">
            <div className="section-heading">
              <span className="eyebrow">WHAT I BRING</span>
              <h2>
                Skills & <span>Expertise</span>
              </h2>
              <p>
                Technical, computer and professional skills for a range of
                suitable roles.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>

                  <div className="skill-tags">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section section-container" id="education">
          <div className="section-heading">
            <span className="eyebrow">MY BACKGROUND</span>
            <h2>
              Education & <span>Experience</span>
            </h2>
            <p>My academic qualifications and early experience.</p>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-container">
            <div className="section-heading">
              <span className="eyebrow">SELECTED WORK</span>
              <h2>
                Projects & <span>Practical Work</span>
              </h2>
              <p>
                Examples of web development and computer-related work.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-header">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <div className="project-art">
                    <span>{project.symbol}</span>
                    <div className="project-art-line" />
                    <div className="project-art-line short" />
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.link && (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkLabel} <span>↗</span>
                      </a>
                    )}

                    {project.sourceLink && (
                      <a
                        className="project-link"
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Source Code <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section-container" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">LET'S CONNECT</span>
              <h2>
                Ready for the <span>Next Opportunity?</span>
              </h2>
              <p>
                I welcome suitable opportunities in computer operations,
                office administration, banking support, IT and other
                professional roles where I can contribute and continue
                learning.
              </p>

              <div className="contact-actions">
                <a
                  className="btn btn-light"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nadiajaved005@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Me <span>↗</span>
                </a>

                <a
                  className="btn btn-contact-outline"
                                   href={`${import.meta.env.BASE_URL}Nadia_Javed_CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My CV <span>↗</span>
                </a>
              </div>

              <p className="contact-note">
                Contact me by email for suitable professional opportunities.
              </p>
            </div>

            <div className="contact-art">
              <div className="contact-orbit orbit-a" />
              <div className="contact-orbit orbit-b" />
              <div className="contact-monogram">NJ</div>
              <span className="contact-spark spark-a">✦</span>
              <span className="contact-spark spark-b">✧</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="footer-brand" href="#home">
          <span className="brand-mark">NJ</span>
          <strong>Nadia Javed</strong>
        </a>

        <p>Professional Portfolio · Built with React</p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
