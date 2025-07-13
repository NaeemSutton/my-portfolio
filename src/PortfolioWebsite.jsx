// PortfolioWebsite.jsx
import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import FakeTerminal from "./FakeTerminal";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaDiscord, FaCube } from "react-icons/fa";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 shadow-md text-white bg-black">
    <h1 className="text-xl font-bold text-green-400">Naeem</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">About</Link>
      <Link to="/experience" className="hover:underline">Experience</Link>
      <Link to="/certs" className="hover:underline">Certifications</Link>
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
    "[+] Loading role: Cybersecurity Risk Analyst @ UMMH",
    "[+] Focus areas: Risk | HIPAA | SOC2 | Pen Testing",
    "[+] Background: CS Grad | Internships | OSINT",
    "[+] Mission: Secure. Comply. Defend.",
    "[✔] Console booted successfully.",
  ];

  useEffect(() => {
    if (bootText.length < bootPrompt.length) {
      const timeout = setTimeout(() => {
        setBootText((prev) => prev + bootPrompt[prev.length]);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowRest(true), 400);
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
    }, 25);

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
    </div>
  </div>
);


const Experience = () => (
  <div className="px-8 py-20 bg-black text-white font-mono min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-400 mb-10 border-l-4 border-green-400 pl-4 uppercase">
        Professional Experience
      </h2>
      <ul className="space-y-10 text-base">
        {/* Risk Analyst */}
        <li>
          <span className="font-bold text-white">
            Cybersecurity Risk Analyst Intern @ UMass Memorial Health
          </span>
          <ul className="list-disc ml-8 mt-2 text-gray-300 space-y-1">
            <li>Led 20+ third-party risk assessments for vendors, apps, and internal systems.</li>
            <li>Assessed HIPAA, HITRUST, SOC 2, and NIST 800-53 compliance.</li>
            <li>Documented remediation plans and automated tracking via ServiceNow.</li>
          </ul>
        </li>

        {/* Analyst Rotational */}
        <li>
          <span className="font-bold text-white">
            Cybersecurity Analyst Intern (Rotational Program) @ UMMH
          </span>
          <ul className="list-disc ml-8 mt-2 text-gray-300 space-y-1">
            <li>Rotated through CTIC, IAM, Risk, and Engineering teams.</li>
            <li>Used Tenable, Shodan, VirusTotal for vulnerability enrichment.</li>
            <li>Audited access controls with CyberArk, Varonis, Defender for Endpoint.</li>
          </ul>
        </li>

        {/* IT Support */}
        <li>
          <span className="font-bold text-white">
            IT Support Analyst @ UMMH
          </span>
          <ul className="list-disc ml-8 mt-2 text-gray-300 space-y-1">
            <li>Resolved 1,000+ tickets via ServiceNow, Ivanti Neurons, BeyondTrust.</li>
            <li>Reduced recurring issues by 40% through network diagnostics.</li>
            <li>Streamlined workflows to improve resolution time and reliability.</li>
          </ul>
        </li>

        {/* Research Assistant */}
        <li>
          <span className="font-bold text-white">
            AI/ML Research Assistant @ QCC
          </span>
          <ul className="list-disc ml-8 mt-2 text-gray-300 space-y-1">
            <li>Built autonomous mapping with LiDAR + ROS2 for robotics navigation.</li>
            <li>Presented findings to 400+ attendees, focused on AI-driven path planning.</li>
            <li>Published research and contributed to algorithm development.</li>
          </ul>
        </li>
      </ul>

      {/* SKILLS GRID */}
      <h2 className="text-2xl font-bold text-green-400 mt-16 mb-8 border-l-4 border-green-400 pl-4 uppercase">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-200 text-base">
        {/* Programming */}
        <div>
          <span className="font-bold text-white">Programming</span>
          <div className="mt-2">
            Python, Bash, PowerShell, JavaScript, SQL, HTML/CSS
          </div>
        </div>
        {/* Web Security */}
        <div>
          <span className="font-bold text-white">Web Security</span>
          <div className="mt-2">
            Burp Suite, OWASP ZAP, SSRF/IDOR, JWT, Recon tooling
          </div>
        </div>
        {/* Cloud & Infrastructure */}
        <div>
          <span className="font-bold text-white">Cloud & Infrastructure</span>
          <div className="mt-2">
            AWS, Azure, Docker, Kubernetes, GitHub Actions
          </div>
        </div>
        {/* Identity & Access */}
        <div>
          <span className="font-bold text-white">Identity & Access</span>
          <div className="mt-2">
            Azure AD, AWS IAM, Okta, Conditional Access, RBAC, JIT
          </div>
        </div>
        {/* Detection & Monitoring */}
        <div>
          <span className="font-bold text-white">Detection & Monitoring</span>
          <div className="mt-2">
            SIEM, EDR tuning, Threat Hunting, Log Engineering, Sysmon
          </div>
        </div>
        {/* Automation */}
        <div>
          <span className="font-bold text-white">Automation & CI/CD</span>
          <div className="mt-2">
            Python, Bash, PowerShell, GitHub Actions, Jenkins, REST APIs
          </div>
        </div>
        {/* Adversary Simulation */}
        <div>
          <span className="font-bold text-white">Adversary Simulation</span>
          <div className="mt-2">
            MITRE ATT&CK, Threat Modeling, Red/Blue Team Ops, TTP Validation
          </div>
        </div>
        {/* Compliance */}
        <div>
          <span className="font-bold text-white">Compliance & Frameworks</span>
          <div className="mt-2">
            NIST 800-53, SOC 2, Zero Trust (NIST 800-207), ISO 27001
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
