import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="bg-black min-h-screen py-15 pl-20">
      <div className="max-w-5xl">

        {/* Back */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 py-10 text-neutral-400 hover:text-neutral-200 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <Link to="/" className="text-sm">
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <h1 className="text-2xl font-semibold text-white">
          About NeuroDocs
        </h1>

        <p className="text-neutral-500 mt-3">
          Last Updated: January 2026
        </p>

        <div className="h-px w-full bg-neutral-800 mt-10 mb-14" />

        {/* 1. Overview */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          1. Overview
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is a developer-focused SaaS platform designed to automatically
          transform source code into clear, structured, and production-ready
          documentation. The platform helps individuals and teams understand,
          maintain, and share technical knowledge without the overhead of manual
          documentation.
        </p>

        {/* 2. What We Do */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          2. What NeuroDocs Does
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          NeuroDocs analyzes your connected code repositories and generates
          documentation that reflects the real structure and behavior of your
          system. This includes:
        </p>

        <ul className="text-neutral-400 leading-relaxed space-y-3 mb-12 list-disc pl-6">
          <li>System and architecture overviews</li>
          <li>API and service documentation</li>
          <li>Component and module breakdowns</li>
          <li>Project summaries derived from source files and README content</li>
        </ul>

        {/* 3. How It Works */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          3. How It Works
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          After you connect a GitHub repository, NeuroDocs securely analyzes the
          repository’s structure, source code, comments, and configuration files.
          Our AI processes this information to generate documentation that follows
          industry best practices and is easy to explore, update, and share.
        </p>

        {/* 4. Efficiency */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          4. Efficiency and Automation
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is built to reduce time spent on repetitive documentation tasks.
          Documentation can be generated in seconds and refreshed whenever your
          codebase changes. This allows teams to stay aligned without slowing down
          development.
        </p>

        {/* 5. Who It's For */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          5. Who NeuroDocs Is For
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is designed for individual developers, startups, and engineering
          teams who need fast, reliable documentation for modern software systems.
          It is especially useful for onboarding, knowledge sharing, and maintaining
          complex or evolving codebases.
        </p>

        {/* 6. Vision */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          6. Our Vision
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          We believe documentation should be automatic, accurate, and effortless.
          NeuroDocs exists to remove friction from the documentation process and
          help developers focus on building high-quality software.
        </p>

        {/* 7. Contact */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          7. Contact
        </h2>

        <p className="text-neutral-400 leading-relaxed">
          If you would like to learn more about NeuroDocs or have questions about
          the platform, you can contact us at:
        </p>

        <div className="mt-8 inline-block rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4">
          <p className="text-white text-sm leading-relaxed">
            NeuroDocs Support
            <br />
            <span className="text-neutral-400 hover:text-white transition">
              support@neurodocs.com
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
