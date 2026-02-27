"use client";

import Image from "next/image";
import { LINKS } from "../config/links";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import RotatingText from "./RotatingText";

const certifications = [
  { logo: "/tf.png", link: LINKS.certifications.terraform, alt: "Terraform Associate" },
  { logo: "/cka.png", link: LINKS.certifications.cka, alt: "CKA" },
  { logo: "/kcna_new.png", link: LINKS.certifications.kcna, alt: "KCNA" },
  { logo: "/ckad.png", link: LINKS.certifications.ckad, alt: "CKAD" },
  { logo: "/saa.png", link: LINKS.certifications.saa, alt: "AWS SAA" },
  { logo: "/aws-ai.png", link: LINKS.certifications.awsAi, alt: "AWS AI Practitioner" },
  { logo: "/aws-cloud.png", link: LINKS.certifications.awsCloud, alt: "AWS Cloud Practitioner" },
];

const stats = [
  { label: "Certifications", value: "7" },
  { label: "Years Experience", value: "5+" },
  { label: "Companies", value: "3" },
];

export default function HeroSection() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Main hero content */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left - Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3 text-sm tracking-wide uppercase">
            <RotatingText />
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Vivek</span>.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Full stack developer building scalable applications end-to-end
            &mdash; from React and Next.js frontends to Django and Node.js backends,
            powered by AWS cloud infrastructure and DevOps automation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right - Profile image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full opacity-25 blur-3xl" />
            <Image
              src="/me.jpg"
              alt="Vivek Subraveti"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-white dark:border-gray-800 shadow-2xl w-[200px] h-[200px]"
              style={{ imageRendering: "auto" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Certification trust bar */}
      <div className="mt-12 pt-10 border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-5 text-center lg:text-left">
          Certified by
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={cert.logo}
                alt={cert.alt}
                width={56}
                height={56}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
