"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const COMMANDS: Record<string, string> = {
  help: `Available commands:
  about       - Who am I
  skills      - Technical skills
  experience  - Work history
  education   - Academic background
  contact     - Get in touch
  resume      - View my resume
  whoami      - Quick intro
  clear       - Clear terminal`,

  about: `Hi, I'm Vivek Subraveti — a Full Stack Developer with 5+ years
of experience building scalable applications end-to-end.

From React & Next.js frontends to Django & Node.js backends,
powered by AWS cloud infrastructure and DevOps automation.

7 industry certifications across AWS, Kubernetes & Terraform.`,

  skills: `Languages:    Python, TypeScript, JavaScript, Java, SQL
Frontend:     React, Next.js, Tailwind CSS
Backend:      Django, Node.js, REST APIs
Cloud:        AWS (SAA, AI, Cloud), Terraform
DevOps:       Docker, Kubernetes (CKA, CKAD, KCNA), CI/CD
Databases:    PostgreSQL, MySQL, MongoDB`,

  experience: `2021 - Present  │  Segula Technologies, Cologne
                │  Software Engineer
                │  Django · Python · Next.js · MySQL
                │
2019 - 2020     │  AVL Deutschland, Stuttgart
                │  Master Thesis Student
                │  Python · OpenCV · TensorFlow
                │
2015 - 2017     │  Changepond Technologies, Chennai
                │  Software Engineer
                │  Java · Struts · MSSQL`,

  education: `M.Sc. Automotive Software Engineering  │  TU Chemnitz                        │  2021
M.Sc. Software Engineering            │  Sri Ramakrishna Engineering College  │  2014`,

  contact: `Email:     viveksubraveti@gmail.com
GitHub:    github.com/viveksubraveti
LinkedIn:  linkedin.com/in/viveksubraveti`,

  whoami: `Vivek Subraveti — Full Stack Developer & Cloud Engineer`,
};

interface HistoryEntry {
  command: string;
  output: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "", output: 'Welcome! Type "help" to see available commands.' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "resume") {
      window.open(
        "https://drive.google.com/file/d/1cHYB5tLkmf8X24KVw75GykezH4xwBnwC/view?usp=sharing",
        "_blank"
      );
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: "Opening resume in a new tab..." },
      ]);
      return;
    }

    const output =
      COMMANDS[trimmed] ??
      `Command not found: ${trimmed}. Type "help" for available commands.`;

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input);
    setCommandHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700/50"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-800 border-b border-gray-700">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400 ml-2 font-mono">
          vivek@portfolio:~
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="bg-gray-900 dark:bg-gray-900 p-4 font-mono text-sm h-72 overflow-y-auto"
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-3">
            {entry.command && (
              <div className="flex gap-2">
                <span className="text-green-400 shrink-0">
                  vivek@portfolio:~$
                </span>
                <span className="text-gray-200">{entry.command}</span>
              </div>
            )}
            <pre className="text-gray-400 whitespace-pre-wrap mt-1 leading-relaxed">
              {entry.output}
            </pre>
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <span className="text-green-400 shrink-0">
            vivek@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-gray-200 outline-none caret-green-400"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </form>
      </div>
    </div>
  );
}
