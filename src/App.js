import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Header Component
const Header = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>Samuel Alexander</h2>
        </div>
        <nav className="nav">
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Samuel Alexander</h1>
          <h2>Aspiring Backend Developer & AI Enthusiast</h2>
          <p className="tagline">"Turning Ideas into Code"</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/Resume_improvised.pdf" download className="btn btn-secondary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am currently pursuing my B.Tech in Computer Science at Graphic Era Hill University. 
            I'm passionate about backend development and AI, and I have built multiple projects that 
            showcase these skills. I'm also an active problem-solver and participant in hackathons 
            and coding events.
          </p>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title:"Reddit Persona Generator",
      description: "AI-powered Reddit persona generator using Python and LLMs.",
      github: "https://github.com/SamuelAlex013/reddit-persona-generator.git"
    },
    {
      title: "AI Booking Agent",
      description: "Intelligent calendar assistant using LangChain, FastAPI, Streamlit.",
      github: "https://github.com/SamuelAlex013/AI-booking-agent",
      demo: "https://ai-booking-agent.streamlit.app/"
    },
    {
      title: "DB Manager",
      description: "Full-stack CRUD app with Clerk authentication using Next.js, FastAPI, SQLAlchemy.",
      github: "https://github.com/SamuelAlex013/DB_Manager",
      demo: null
    },
    {
      title: "Stock Market Prediction",
      description: "LSTM/GRU-based forecasting model with TensorFlow and Scikit-learn.",
      github: "https://github.com/SamuelAlex013/Stock-Market-prediction",
      demo: null
    },
    {
      title: "E-commerce Web App",
      description: "Full-stack web store using React, Express.js, MongoDB.",
      github: "https://github.com/SamuelAlex013/E-commerce",
      demo: null
    },
    {
      title: "Mini OS",
      description: "Custom OS with C, Assembly, GRUB bootloader.",
      github: "https://github.com/SamuelAlex013/PBL-OS",
      demo: null // OS projects typically don't have live demos
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small">GitHub</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-small btn-secondary">Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React", "Next.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "AI/ML Tools",
      skills: ["Scikit-learn", "Pandas", "TensorFlow", "Keras", "LangChain", "Neural Networks (LSTM, GRU, biLSTM)"]
    },
    {
      category: "Other Tools",
      skills: ["GitHub", "Docker", "REST API"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Achievements Section Component
const AchievementsSection = () => {
  const achievements = [
    "Won multiple inter-school chess competitions",
    "Solved 150+ coding problems on LeetCode",
    "Led teams in various hackathons",
    "Served as CR (Class Representative)",
    "Participated in debates, quizzes, and hackathons (2022, 2023)"
  ];

  return (
    <section className="achievements">
      <div className="container">
        <h2>Achievements & Extra-Curricular</h2>
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <p>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content-simple">
          <div className="contact-info-centered">
            <h3>Let's Connect</h3>
            <div className="contact-links">
              <a href="https://github.com/SamuelAlex013" target="_blank" rel="noopener noreferrer">
                📱 GitHub
              </a>
              <a href="mailto:samuelalexander0021@gmail.com">
                ✉️ samuelalexander0021@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Samuel Alexander. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default App;
