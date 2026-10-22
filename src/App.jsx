import "./App.css";
import profilePhoto from "./assets/profile.jpg";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Firebase",
    "MS Word",
    "MS Excel",
    "MS PowerPoint",
    "Computer Skills",
  ];

  const projects = [
    {
      number: "01",
      title: "Cake Corner Website",
      category: "Web Development",
      description:
        "A website project built to present a cake business and its products through a clean, user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      liveLink: "https://cake-corner-bff88.web.app",
      githubLink: "https://github.com/nadiajaved005/cake-corner-website",
    },
    {
      number: "02",
      title: "Portfolio Website",
      category: "Personal Portfolio",
      description:
        "A professional portfolio showcasing my education, technical skills, projects, and experience.",
      technologies: ["React", "CSS", "JavaScript"],
      liveLink: "https://nadiajaved005.github.io/nadia-javed-portfolio/",
      githubLink: "https://github.com/nadiajaved005/nadia-javed-portfolio",
    },
    {
      number: "03",
      title: "Super Store Application",
      category: "Application Development",
      description:
        "A store management project focused on organizing products and presenting information in a structured interface.",
      technologies: ["React", "JavaScript", "Firebase"],
      liveLink: "",
      githubLink: "",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a className="brand" href="#home">
          Nadia<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hello, I'm <span>Nadia Javed</span>
            </h1>

            <h2>Graduate | Web Development Learner | Computer Professional</h2>

            <p className="hero-description">
              I have an academic background in Chemistry and Education, along
              with computer skills and an interest in web development. I am
              eager to learn, contribute, and grow in a professional
              environment.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a
                className="btn btn-outline"
                href={`${import.meta.env.BASE_URL}Nadia_Javed_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View My CV <span>↗</span>
              </a>
            </div>

            <div className="intro-strip">
              <div>
                <strong>2023</strong>
                <span>BS Chemistry</span>
              </div>

              <div>
                <strong>2025</strong>
                <span>B.Ed</span>
              </div>

              <div>
                <strong>Web</strong>
                <span>Development Projects</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="profile-image-wrapper">
                <img
                  src={profilePhoto}
                  alt="Nadia Javed"
                  className="profile-photo"
                />
              </div>

              <p className="profile-label">ASPIRING PROFESSIONAL</p>
              <h3>Nadia Javed</h3>
              <p>Zahir Pir, Punjab, Pakistan</p>

              <div className="profile-tags">
                <span>Learning</span>
                <span>Creating</span>
                <span>Growing</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about-section" id="about">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>About Me</h2>
              <p>
                A combination of academic knowledge, computer skills, and a
                willingness to learn.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-content">
                <h3>Learning today, building for tomorrow.</h3>

                <p>
                  I am Nadia Javed, a graduate with a BS in Chemistry and a
                  Bachelor of Education. My background has helped me develop
                  analytical thinking, communication, and organizational
                  skills.
                </p>

                <p>
                  I am also developing my technical skills in web development
                  and building practical projects using modern web
                  technologies. I am interested in suitable opportunities
                  where I can apply my abilities, gain experience, and
                  continue learning.
                </p>

                <p>
                  I am open to suitable opportunities in computer-related
                  work, administration, education, and other professional
                  fields that match my qualifications and skills.
                </p>

                <a className="text-link" href="#contact">
                  Let's Connect <span>→</span>
                </a>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <span className="highlight-icon">🎓</span>
                  <h4>Academic Background</h4>
                  <p>BS Chemistry and B.Ed</p>
                </div>

                <div className="highlight-card">
                  <span className="highlight-icon">💻</span>
                  <h4>Technical Skills</h4>
                  <p>Office tools and web technologies</p>
                </div>

                <div className="highlight-card">
                  <span className="highlight-icon">📚</span>
                  <h4>Continuous Learning</h4>
                  <p>Improving knowledge through practical work</p>
                </div>

                <div className="highlight-card">
                  <span className="highlight-icon">🤝</span>
                  <h4>Professional Growth</h4>
                  <p>Ready to learn and contribute</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section" id="skills">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">WHAT I CAN DO</p>
              <h2>My Skills</h2>
              <p>
                Skills developed through learning, practice, and project work.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education and experience */}
        <section className="education-section" id="education">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">MY BACKGROUND</p>
              <h2>Education & Experience</h2>
              <p>A summary of my academic journey and practical experience.</p>
            </div>

            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">2025</span>
                  <h3>Bachelor of Education (B.Ed)</h3>
                  <h4>The Islamia University of Bahawalpur (IUB)</h4>
                  <p>
                    Completed a professional education qualification focused
                    on teaching and learning.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">2023</span>
                  <h3>BS Chemistry</h3>
                  <h4>
                    Khawaja Fareed University of Engineering and Information
                    Technology
                  </h4>
                  <p>
                    Completed an undergraduate degree in Chemistry, building
                    analytical and problem-solving skills.
                  </p>
                </div>
              </article>

              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">2023</span>
                  <h3>Teaching Internship</h3>
                  <h4>Punjab Group of Colleges</h4>
                  <p>
                    Gained practical exposure to an educational environment
                    through a teaching internship.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="projects-section" id="projects">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">MY RECENT WORK</p>
              <h2>Featured Projects</h2>
              <p>
                Practical work that demonstrates my learning and technical
                interests.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Website ↗
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code ↗
                      </a>
                    )}

                    {!project.liveLink && !project.githubLink && (
                      <span>Project details available on request</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section" id="contact">
          <div className="section-container">
            <div className="contact-panel">
              <p className="eyebrow">LET'S TALK</p>
              <h2>Let's Build Something Great Together</h2>

              <p>
                I am interested in suitable job opportunities, professional
                collaboration, and opportunities to learn and grow. Feel free
                to explore my CV and portfolio.
              </p>

              <div className="contact-actions">
                <a
                  className="btn btn-primary"
                  href="https://github.com/nadiajaved005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit My GitHub ↗
                </a>

                <a
                  className="btn btn-contact-outline"
                  href={`${import.meta.env.BASE_URL}Nadia_Javed_CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My CV ↗
                </a>
              </div>

              <p className="contact-location">
                <span>📍</span> Zahir Pir, Punjab, Pakistan
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a className="brand" href="#home">
          Nadia<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Nadia Javed. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
