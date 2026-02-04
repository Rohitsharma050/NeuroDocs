import React from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const PrivacyPolicy = () => {
  return (
    <div
     
      className="bg-black min-h-screen py-15 pl-20"
    >
      <div className="max-w-5xl">
        
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
          Privacy Policy
        </h1>

        <p className="text-neutral-500 mt-3">
          Last Updated: January 2026
        </p>

        <div className="h-px w-full bg-neutral-800 mt-10 mb-14" />

        {/* 1. Introduction */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          1. Introduction
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs ("we", "us", or "our") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our AI-powered code documentation generator
          platform. By accessing or using NeuroDocs, you agree to the terms of this
          Privacy Policy.
        </p>

        {/* 2. Collection of Information */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          2. Collection of Information
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          We may collect information about you in a variety of ways. The information
          we may collect includes:
        </p>

        <ul className="text-neutral-400 leading-relaxed space-y-3 mb-12 list-disc pl-6">
          <li>
            <span className="text-white">Personal Data:</span> Name, email address,
            and account details you voluntarily provide when signing up or contacting support.
          </li>
          <li>
            <span className="text-white">Repository Data:</span> Metadata and structure
            of connected repositories (such as GitHub), used solely for documentation generation.
          </li>
          <li>
            <span className="text-white">Usage Data:</span> Information automatically
            collected such as IP address, browser type, device information, and usage patterns.
          </li>
        </ul>

        {/* 3. Use of Your Information */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          3. Use of Your Information
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          We use the collected information to:
        </p>

        <ul className="text-neutral-400 leading-relaxed space-y-3 mb-12 list-disc pl-6">
          <li>Create, manage, and secure your NeuroDocs account.</li>
          <li>Generate accurate and structured documentation from your codebase.</li>
          <li>Improve platform performance, reliability, and user experience.</li>
          <li>Communicate with you regarding updates, security alerts, or support requests.</li>
        </ul>

        {/* 4. Disclosure of Information */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          4. Disclosure of Your Information
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          We do not sell or trade your personal data. Your information may be shared only:
        </p>

        <ul className="text-neutral-400 leading-relaxed space-y-3 mb-12 list-disc pl-6">
          <li>To comply with legal obligations or lawful requests.</li>
          <li>With trusted third-party services used for hosting, analytics, or authentication.</li>
          <li>To protect the rights, safety, and integrity of NeuroDocs and its users.</li>
        </ul>

        {/* 5. Security */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          5. Security of Your Information
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          We implement industry-standard administrative, technical, and organizational
          measures to protect your data. However, no digital platform can guarantee
          absolute security, and you use NeuroDocs at your own risk.
        </p>

        {/* 6. Children Policy */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          6. Policy for Children
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is not intended for individuals under the age of 13. We do not
          knowingly collect personal information from children.
        </p>

        {/* 7. Contact */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          7. Contact Us
        </h2>

        <p className="text-neutral-400 leading-relaxed">
          If you have questions or concerns regarding this Privacy Policy, you can
          contact us at:
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

export default PrivacyPolicy
