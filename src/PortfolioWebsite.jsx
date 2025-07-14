// PortfolioWebsite.jsx
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import FakeTerminal from "./FakeTerminal";
import { motion } from "framer-motion";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaDiscord, FaCube } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import TerminalSection from "./TerminalSection";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md text-white bg-black">
    <h1 className="text-xl font-bold text-green-400">Naeem</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/experience" className="hover:underline">Experience</Link>
      <Link to="/certs" className="hover:underline">Certifications</Link>
      <Link to="/projects" className="hover:underline">Projects</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </div>
  </nav>
);


// 🔥 Terminal-style animated Home section
const bootLines = [
  "$ ./yourname.sh --init",
  "[+] Initializing security console...",
  "[+] Loading role: Cybersecurity Risk Analyst Intern @ UMMH",
  "[+] Focus areas: Risk | HIPAA | SOC2 | Pen Testing",
  "[+] Background: CS Grad | Internships | OSINT",
  "[+] Mission: Secure. Comply. Defend.",
  "[✔] Console booted successfully.",
];

const Home = () => {
  const [bootText, setBootText] = useState("");
  const [showRest, setShowRest] = useState(false);
  const [lines, setLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const bootPrompt = "$ booting security console";
  const bootLines = [
    "[+] Initializing security console...",
    "[+] Loading role: Cybersecurity Risk Analyst Intern @ UMMH",
    "[+] Focus areas: Risk | HIPAA | SOC2 | Pen Testing",
    "[+] Background: CS Grad | Internships | OSINT",
    "[+] Mission: Secure. Comply. Defend.",
    "[✔] Console booted successfully.",
  ];

  useEffect(() => {
    if (bootText.length < bootPrompt.length) {
      const timeout = setTimeout(() => {
        setBootText((prev) => prev + bootPrompt[prev.length]);
      }, 20); // was 40
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowRest(true), 200); // was 400
    }
  }, [bootText]);

  useEffect(() => {
    if (!showRest || lineIndex >= bootLines.length) return;

    const line = bootLines[lineIndex];
    const currentLine = lines[lineIndex] || "";

    const timeout = setTimeout(() => {
      const updated = [...lines];
      updated[lineIndex] = currentLine + line.charAt(charIndex);
      setLines(updated);

      if (charIndex < line.length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, 12); // was 25

    return () => clearTimeout(timeout);
  }, [showRest, lineIndex, charIndex, lines]);

  return (
    <div className="bg-black text-green-400 min-h-screen flex flex-col items-center px-4 pt-32 font-mono text-base">
      <h1 className="text-6xl font-bold text-white mb-6 tracking-wider">Naeem</h1>

      <p className="whitespace-pre mb-2 text-lg">
        {bootText}
        {bootText.length < bootPrompt.length && <span className="animate-blink">█</span>}
      </p>

      <p className="text-gray-400 text-sm mb-6">
        status: <span className="text-green-400">active</span> // Last updated:{" "}
        {new Date().toLocaleString()}
      </p>

      <div className="space-y-2 text-[1.05rem] leading-relaxed">
        {lines.map((line, i) => (
          <p key={i} className="whitespace-pre">{line}</p>
        ))}
      </div>

      <p className="text-gray-600 mt-12 text-sm">// naeemsec.dev</p>
    </div>
  );
};


const About = () => (
  <div className="px-8 py-20 bg-black text-white font-mono">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
      {/* Left Column */}
      <div>
        <div className="mb-10">
          <h2 className="text-green-400 font-bold uppercase text-lg border-l-4 border-green-400 pl-3 mb-2">
            Current Role
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            Cybersecurity Risk Analyst Intern @ UMMH — conducting HIPAA, SOC 2, and pen test risk assessments. I specialize in identifying vulnerabilities, automating security processes, and collaborating with cross-functional teams to strengthen compliance and posture.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-green-400 font-bold uppercase text-lg border-l-4 border-green-400 pl-3 mb-2">
            Background
          </h2>
          <p className="text-base leading-relaxed text-gray-300">
            CS graduate with experience in healthcare security, internal audits, and OSINT. Strong understanding of threat modeling, blue/red teaming, and stakeholder reporting. Comfortable in both hands-on technical roles and GRC-focused environments.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-200 mb-10">
          <div className="bg-[#1f2937] py-3 rounded-md">
            <p className="text-xl font-bold text-white">1+</p>
            <p>Years Full-Time</p>
          </div>
          <div className="bg-[#1f2937] py-3 rounded-md">
            <p className="text-xl font-bold text-white">10+</p>
            <p>CTFs Played</p>
          </div>
          <div className="bg-[#1f2937] py-3 rounded-md">
            <p className="text-xl font-bold text-white">4+</p>
            <p>Certifications</p>
          </div>
          <div className="bg-[#1f2937] py-3 rounded-md">
            <p className="text-xl font-bold text-white">6+</p>
            <p>Trainings</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-green-400 font-bold uppercase text-lg border-l-4 border-green-400 pl-3 mb-2">
            Awards
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
            <li>
              <span className="text-white font-semibold">Dean's List</span> – Earned for maintaining a GPA above 3.7 and demonstrating strong academic performance.
            </li>
            <li>
              <span className="text-white font-semibold">4x Honor Roll</span> – Recognized for consistent academic excellence over multiple semesters.
            </li>
            <li>
              <span className="text-white font-semibold">UMass Undergraduate Research Conference</span> – Published and presented original cybersecurity research to an audience of over 300 attendees. Abstract published.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-green-400 font-bold uppercase text-lg border-l-4 border-green-400 pl-3 mb-2">
            Leadership & Mentorship
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-base">
            <li>Mentor to cybersecurity students and peers.</li>
            <li>Resume reviewer and career guidance coach.</li>
            <li>Active in online forums and learning communities.</li>
          </ul>
        </div>
      </div>

      {/* Right Column */}
      <div>
        <FakeTerminal />

        <div className="mt-10">
          <h2 className="text-green-400 font-bold uppercase text-lg border-l-4 border-green-400 pl-3 mb-2">
            Core Skills
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-base">
            <li>Cloud Security (AWS / Azure)</li>
            <li>IAM, MFA, Zero Trust</li>
            <li>Python, Bash, PowerShell</li>
            <li>Incident Response, SOC, EDR</li>
            <li>Threat Intel, CTFs, Red/Blue Teaming</li>
            <li>HIPAA, NIST 800-53, SOC 2</li>
          </ul>
        </div>
        
      </div>
     <div className="mt-6 text-terminalGreen">[EOF]</div>
    </div>
    
  </div>
);

const Experience = () => {
  const [typedExpCmd, setTypedExpCmd] = useState("");
  const [typedSkillCmd, setTypedSkillCmd] = useState("");
  const [showExperience, setShowExperience] = useState(false);
  const [showSkillCmd, setShowSkillCmd] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const expCmd = "$ cat experience.txt";
  const skillCmd = "$ cat skills.txt";

  useEffect(() => {
    if (typedExpCmd.length < expCmd.length) {
      const timeout = setTimeout(() => {
        setTypedExpCmd(expCmd.slice(0, typedExpCmd.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setShowExperience(true);
        setTimeout(() => setShowSkillCmd(true), 800);
      }, 400);
    }
  }, [typedExpCmd]);

  useEffect(() => {
    if (!showSkillCmd) return;
    if (typedSkillCmd.length < skillCmd.length) {
      const timeout = setTimeout(() => {
        setTypedSkillCmd(skillCmd.slice(0, typedSkillCmd.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowSkills(true), 400);
    }
  }, [typedSkillCmd, showSkillCmd]);

  return (
    <div className="bg-black text-terminalGreen font-mono min-h-screen px-4 py-20 text-[17px] lg:text-lg flex justify-center">
        <div className="w-full max-w-4xl pl-6 md:pl-20">

        <div>
          {typedExpCmd}
          {typedExpCmd.length < expCmd.length && <span className="animate-blink">█</span>}
        </div>

        {showExperience && (
          <div className="mt-4 text-terminalText animate-fade-in delay-200 whitespace-pre-wrap">
            <div>
              <span className="text-terminalGreen">[+] UMASS MEMORIAL HEALTH</span>
              {`
Cybersecurity Risk Analyst Intern | 2025–Present  
└─ Conducted 20+ third-party risk assessments across vendors, SaaS platforms, and internal systems  
└─ Assessed HIPAA, HITRUST, SOC 2, and NIST 800-53 controls to evaluate compliance and risk posture     
└─ Delivered risk reports and executive summaries to leadership and decision-makers  
`}
            </div>

            <div className="mt-4">
              <span className="text-terminalGreen">[+] UMASS MEMORIAL HEALTH</span>
              {`
Cybersecurity Analyst Intern | 2024–2025  
└─ Rotated across IAM, CTIC, Risk, and Engineering teams for cross-functional exposure  
└─ Performed reconnaissance using Shodan, Tenable, and VirusTotal for asset discovery  
└─ Authored standard operating procedures (SOPs) and automated detection logic  
`}
            </div>

            <div className="mt-4">
              <span className="text-terminalGreen">[+] UMASS MEMORIAL HEALTH</span>
              {`
IT Support Analyst | 2023–2024 
└─ Resolved 1,000+ technical tickets using ServiceNow, Ivanti, and BeyondTrust with 97% satisfaction  
└─ Identified and mitigated root causes of recurring incidents, reducing ticket volume by 40%  
└─ Created technical documentation and onboarding guides to streamline team training  
`}
            </div>

           
          </div>
        )}

        {showSkillCmd && (
          <div className="mt-8">
            {typedSkillCmd}
            {typedSkillCmd.length < skillCmd.length && <span className="animate-blink">█</span>}
          </div>
        )}

       {showSkills && (
  <div className="mt-4 text-terminalText animate-fade-in delay-500">
    <div className="text-[18px] md:text-[20px] font-bold mb-6">TECHNICAL SKILLS</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-[16px] md:text-[17px]">
      <div>
        <div className="font-bold text-terminalGreen">PROGRAMMING</div>
        <div>Python, Bash, PowerShell, JavaScript, SQL, HTML/CSS</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">WEB SECURITY</div>
        <div>Burp Suite, OWASP ZAP, SSRF/IDOR, JWT manipulation, Recon tooling</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">CLOUD & INFRASTRUCTURE</div>
        <div>AWS, Azure, GCP, Docker, Kubernetes, GitHub Actions, Terraform</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">IDENTITY & ACCESS</div>
        <div>Azure AD, AWS IAM, Okta, Entra ID, SAML, SCIM, RBAC, JIT</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">DETECTION & MONITORING</div>
        <div>SIEM, EDR tuning, Threat Hunting, Detection-as-Code, Log Engineering, Sysmon</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">AUTOMATION & CI/CD</div>
        <div>Python, PowerShell, Bash, GitHub Actions, Jenkins, REST APIs</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">ADVERSARY SIMULATION</div>
        <div>MITRE ATT&CK, Threat Modeling, Red/Blue Team Ops, TTP Validation</div>
      </div>
      <div>
        <div className="font-bold text-terminalGreen">COMPLIANCE & FRAMEWORKS</div>
        <div>Zero Trust (NIST 800-207), NIST 800-53, ISO 27001, FedRAMP, SOC 2</div>
      </div>
    </div>
    <div className="mt-6 text-terminalGreen">[EOF]</div>
  </div>
)}


      </div>
    </div>
  );
};






const Certs = () => (
  <div className="px-8 py-20 bg-black text-white font-mono min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-8 border-l-4 border-green-400 pl-4 uppercase">
        Certifications
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-16">
        <a
          href="https://www.comptia.org/certifications/security"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaCertificate className="text-green-400 text-lg" />
          <div>
            <span className="text-green-400 font-bold block glitch">Security+</span>
            <span className="text-gray-300 text-xs">CompTIA Security+</span>
          </div>
        </a>
        <a
          href="https://www.isc2.org/certifications/cc"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaCertificate className="text-green-400 text-lg" />
          <div>
            <span className="text-green-400 font-bold block glitch">ISC2 CC</span>
            <span className="text-gray-300 text-xs">Certified in Cybersecurity</span>
          </div>
        </a>
        <a
          href="https://learn.microsoft.com/en-us/certifications/exams/az-900/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaCertificate className="text-green-400 text-lg" />
          <div>
            <span className="text-green-400 font-bold block glitch">AZ-900</span>
            <span className="text-gray-300 text-xs">Microsoft Azure Fundamentals</span>
          </div>
        </a>
        <a
          href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaCertificate className="text-green-400 text-lg" />
          <div>
            <span className="text-green-400 font-bold block glitch">AWS CCP</span>
            <span className="text-gray-300 text-xs">Cloud Practitioner (in progress)</span>
          </div>
        </a>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-8 border-l-4 border-green-400 pl-4 uppercase">
        Trainings
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        <a
          href="https://www.udemy.com/course/the-complete-hands-on-cybersecurity-analyst-course/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaGraduationCap className="text-blue-400 text-lg" />
          <span className="text-green-400 font-bold block glitch">
            Complete Hands-on Cybersecurity Analyst
          </span>
        </a>
        <a
          href="https://www.udemy.com/course/x86-assembly-programming-from-ground-uptm/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaGraduationCap className="text-blue-400 text-lg" />
          <span className="text-green-400 font-bold block glitch">
            x86 Assembly Programming
          </span>
        </a>
        <a
          href="https://www.udemy.com/course/the-web-developer-bootcamp/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaGraduationCap className="text-blue-400 text-lg" />
          <span className="text-green-400 font-bold block glitch">
            Web Developer Bootcamp
          </span>
        </a>
        <a
          href="https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#232b36] border border-[#23272e] rounded-lg p-5 flex items-center gap-3 hover:bg-[#1f2937] transition-all duration-200"
        >
          <FaGraduationCap className="text-blue-400 text-lg" />
          <span className="text-green-400 font-bold block glitch">
            Complete Ethical Hacking Bootcamp
          </span>
        </a>
      </div>
      <div className="mt-6 text-terminalGreen">[EOF]</div>
    </div>
  </div>
);


const Projects = () => (
  <div className="px-8 py-20 bg-black text-white font-mono min-h-screen">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-400 mb-10 border-l-4 border-green-400 pl-4 uppercase animate-fade-up">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {[
          {
            title: "Enterprise Cybersecurity Homelab",
            desc: "Built a full homelab using pfSense, Windows Server, Splunk, and Kali Linux. Ran realistic cyberattacks, simulated blue team detections, ingested logs, and tuned SIEM alerts for detection.",
            link: "https://github.com/NaeemSutton/Malware-Analysis",
          },
          {
            title: "Vulnerability Assessment Lab",
            desc: "Simulated a security ops team using Tenable Nessus, Windows 10, and VirtualBox. Ran scans, used CVSS for risk, and created professional PDF reports on findings and remediation.",
            link: "https://github.com/NaeemSutton/Software-Testing-and-Quality-Assurance-Portfolio-Submission",
          },
          {
            title: "Malware Analysis Portfolio",
            desc: "Analyzed malware samples, performed static/dynamic analysis, and documented findings. Tools used: PE Studio, VirusTotal, IDA Free, Cuckoo Sandbox, etc.",
            link: "https://github.com/NaeemSutton/Malware-Analysis",
          },
          {
            title: "Phishing Awareness Training",
            desc: "Created a phishing simulation toolkit and awareness campaign to train users on social engineering and email attack prevention.",
            link: "https://github.com/NaeemSutton/Phishing",
          },
          {
            title: "Password Manager",
            desc: "Developed a secure password manager app (Python, SQLite, Tkinter) with encryption and local vault storage.",
            link: "https://github.com/NaeemSutton/Password-Manager",
          },
          {
            title: "CS330 Final Project: 3D Desk Scene",
            desc: "Built a realistic 3D computer desk scene in C++/OpenGL, with custom meshes, textures, and lighting.",
            link: "https://github.com/NaeemSutton/cs330-final-project",
          },
          {
            title: "Lunar Landing Simulator",
            desc: "Physics-based lunar lander simulation. Implemented motion controls and landing logic using C++.",
            link: "https://github.com/NaeemSutton/LunarLanding",
          },
          {
            title: "Hilbert Curve for ROS2 Robots",
            desc: "Implemented Hilbert curve pathing in Python/ROS2 for robotic mapping, navigation, and path optimization.",
            link: "https://github.com/NaeemSutton/Hilbert-Curve-for-ROS-2-Robots",
          },
          {
            title: "Software Testing & QA Portfolio",
            desc: "Portfolio of testing artifacts, automated test scripts, and QA docs for full-stack software projects.",
            link: "https://github.com/NaeemSutton/Software-Testing-and-Quality-Assurance-Portfolio-Submission",
          },
          {
            title: "Cybersecurity Portfolio Website",
            desc: "This site! React + Tailwind CSS, with animated terminal and mobile-first design. Deployed via GitHub Pages.",
            link: "https://github.com/NaeemSutton/my-portfolio",
            extra: "https://naeemsutton.github.io/my-portfolio",
          },
        ].map((project, i) => (
          <div
            key={i}
            className="bg-terminalSoft border border-[#23272e] rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
          >
            <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub link for ${project.title}`}
              className="inline-block text-green-400 underline text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-green-400"
            >
              GitHub
            </a>

            {project.extra && (
              <>
                <span className="mx-2 text-gray-600">|</span>
                <a
                  href={project.extra}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live site for ${project.title}`}
                  className="inline-block text-green-400 underline text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-green-400"
                >
                  Live Site
                </a>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-terminalGreen">[EOF]</div>
    </div>
    
  </div>
);





const Contact = () => (
  <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center px-2 py-4 -mt-32">
    <div className="max-w-xl mx-auto w-full">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-400 mb-8 border-l-4 border-green-400 pl-4 uppercase tracking-wide">
        Get In Touch
      </h2>
      <p className="text-gray-300 mb-5 text-lg leading-relaxed">
        I'm always open to new opportunities, interesting projects, or just a good security conversation.<br />
        Feel free to reach out via any of the platforms below:
      </p>
      <div className="border-l-2 border-green-400 pl-6 space-y-6">
        <div className="flex items-center gap-4">
          <FaGithub className="text-gray-300 text-xl" />
          <a
            href="https://github.com/naeemsutton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-lg"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaLinkedin className="text-blue-500 text-xl" />
          <a
            href="https://linkedin.com/in/naeem-sutton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline text-lg"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaDiscord className="text-indigo-400 text-xl" />
          <span className="text-green-400 text-lg">jayvalorant</span>
        </div>
      </div>
      <p className="mt-12 text-green-400 text-base">[EOF]</p>
    </div>
  </div>
);




export default function PortfolioWebsite() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certs" element={<Certs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
