import { motion } from 'framer-motion';

const socials = [
  { label: 'GitHub', href: 'https://github.com/ElishaChristo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elisha-christo-523585380' },
];

const skills = ['Windows & Linux', 'Hardware Troubleshooting', 'Network Support', 'Cybersecurity Fundamentals', 'Active Directory', 'Help Desk Automation'];
const projects = [
  { title: 'Kali Linux Home Lab', description: 'Built a custom penetration testing lab with vulnerable targets and honeypots for hands-on practice.' },
  { title: 'TryHackMe Training', description: 'Completed security paths to strengthen practical skills in web and network defense.' },
  { title: 'PC Troubleshooting Practice', description: 'Fixed and optimized devices for friends and family while documenting repair steps.' },
];

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-inner"
        >
          <p className="eyebrow">Hello, I’m</p>
          <h1>Elisha JJ Christo</h1>
          <p className="hero-copy">
            IT Support & Cybersecurity Enthusiast from Ghana. I turn complex problems into reliable
            solutions and build practical systems that people can trust.
          </p>
          <div className="hero-actions">
            {socials.map((social) => (
              <a key={social.label} className="button" href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </header>

      <main className="content-grid">
        <section className="intro-card">
          <Card title="About Me">
            <p>
              I am a self-taught IT enthusiast focused on IT support and cybersecurity. I enjoy solving
              problems and building hands-on technical skills.
            </p>
          </Card>
        </section>

        <section className="skills-card">
          <Card title="Skills">
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="projects-card">
          <Card title="Projects">
            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title} className="project-item">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </Card>
        </section>

        <section className="contact-card">
          <Card title="Contact">
            <p>Email: <a href="mailto:elishajjchristo@gmail.com">elishajjchristo@gmail.com</a></p>
            <p>Ready to support your IT systems, secure your environment, and grow together.</p>
            <div className="hero-actions contact-actions">
              <a className="button" href="https://github.com/ElishaChristo" target="_blank" rel="noreferrer">GitHub</a>
              <a className="button" href="https://www.linkedin.com/in/elisha-christo-523585380" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
