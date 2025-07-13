import React, { useState } from "react";

export default function FakeTerminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const trimmed = command.trim().toLowerCase();
      let result = "";

      switch (trimmed) {
        case "whoami":
          result = "security nerd | mentor | very cool guy";
          break;
        case "help":
          result = "Available commands: whoami, clear";
          break;
        case "clear":
          setOutput([]);
          setCommand("");
          return;
        default:
          result = `command not found: ${trimmed}`;
      }

      setOutput((prev) => [...prev, `$ ${command}`, result]);
      setCommand("");
    }
  };

  return (
    <div className="bg-[#0e1011] text-green-400 font-mono rounded-md overflow-hidden border border-gray-700 max-w-xl mx-auto shadow-lg">
      {/* Fake window header */}
      <div className="bg-[#1f2937] px-4 py-2 flex items-center space-x-2">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal body */}
      <div className="p-4 min-h-[200px] text-sm">
        <p>Linux naeem 6.6.9-amd64 x86_64 GNU/Linux</p>
        <p>
          Type <span className="text-white">whoami</span> to start or{" "}
          <span className="text-white">help</span> for commands
        </p>
        {output.map((line, idx) => (
          <p key={idx} className="text-green-400 whitespace-pre-wrap">
            {line}
          </p>
        ))}
        <div className="flex">
          <span className="text-green-400">naeem@terminal:~$</span>
          <input
            type="text"
            className="bg-transparent text-green-400 outline-none ml-2 w-full"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
