"use client";

import { useState } from "react";
import VisitorCount from "./VisitorCount";
import { LINKS } from "../config/links";
import { MdEmail, MdContentCopy, MdCheck } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "viveksubraveti@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Open to opportunities, collaborations, or just a friendly chat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              {copied ? (
                <>
                  <MdCheck className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                <>
                  <MdEmail className="w-5 h-5" />
                  Copy Email
                  <MdContentCopy className="w-3.5 h-3.5 opacity-60" />
                </>
              )}
            </button>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center flex-col sm:flex-row justify-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                <AiOutlineFilePdf className="w-5 h-5" />
                View Resume
              </span>
              <span className="text-xs opacity-50 font-normal">Updated Feb 2026</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-6">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          <VisitorCount />
        </div>
      </div>
    </section>
  );
}
