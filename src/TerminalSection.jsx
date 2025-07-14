import { useState, useEffect } from "react";

const TerminalSection = ({ command, lines, onComplete }) => {
  const [typedCommand, setTypedCommand] = useState("");
  const [typedLines, setTypedLines] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Animate command
  useEffect(() => {
    if (typedCommand.length < command.length) {
      const timeout = setTimeout(() => {
        setTypedCommand(command.slice(0, typedCommand.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [typedCommand, command]);

  // Animate lines
  useEffect(() => {
    if (typedCommand !== command || lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    const currentLine = typedLines[lineIndex] || "";

    const timeout = setTimeout(() => {
      const updated = [...typedLines];
      updated[lineIndex] = currentLine + line.charAt(charIndex);
      setTypedLines(updated);

      if (charIndex < line.length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    }, 10);

    if (lineIndex === lines.length - 1 && currentLine === line && onComplete) {
      setTimeout(onComplete, 1000);
    }

    return () => clearTimeout(timeout);
  }, [typedCommand, lines, lineIndex, charIndex, typedLines, onComplete]);

  return (
    <div className="text-green-400 font-mono whitespace-pre-wrap">
      <p className="mb-2">$ {typedCommand}<span className="animate-blink">█</span></p>
      {typedLines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};

export default TerminalSection;
