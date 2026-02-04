import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
const TermsOfService = () => {
  return (
    <div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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
          Terms of Service
        </h1>

        <p className="text-neutral-500 mt-3">
          Last Updated: January 2026
        </p>

        <div className="h-px w-full bg-neutral-800 mt-10 mb-14" />

        {/* 1. Acceptance of Terms */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          1. Acceptance of Terms
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          By accessing or using NeuroDocs, you agree to be bound by these Terms of
          Service and all applicable laws and regulations. If you do not agree
          with any part of these terms, you must not use the service.
        </p>

        {/* 2. Description of Service */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          2. Description of Service
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is an AI-powered code documentation generator designed to
          analyze codebases and generate structured, readable documentation.
          The service may evolve over time, and features may be added, modified,
          or removed without prior notice.
        </p>

        {/* 3. User Responsibilities */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          3. User Responsibilities
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-4">
          By using NeuroDocs, you agree that you will not:
        </p>

        <ul className="text-neutral-400 leading-relaxed space-y-3 mb-12 list-disc pl-6">
          <li>Use the service for unlawful or unauthorized purposes.</li>
          <li>Attempt to reverse engineer, disrupt, or misuse the platform.</li>
          <li>Upload or process content you do not have the legal right to use.</li>
          <li>Interfere with the security or performance of the service.</li>
        </ul>

        {/* 4. Intellectual Property */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          4. Intellectual Property
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          All content, branding, and software associated with NeuroDocs are the
          intellectual property of NeuroDocs or its licensors. You retain full
          ownership of your source code and repositories processed by the platform.
        </p>

        {/* 5. Limitation of Liability */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          5. Limitation of Liability
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          NeuroDocs is provided on an "as is" and "as available" basis. We do not
          guarantee that the service will be uninterrupted, error-free, or
          completely accurate. In no event shall NeuroDocs be liable for any
          indirect, incidental, or consequential damages arising from your use
          of the service.
        </p>

        {/* 6. Termination */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          6. Termination
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          We reserve the right to suspend or terminate your access to NeuroDocs
          at our discretion, without prior notice, if you violate these Terms
          or engage in harmful behavior.
        </p>

        {/* 7. Changes to Terms */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          7. Changes to These Terms
        </h2>

        <p className="text-neutral-400 leading-relaxed mb-12">
          We may update these Terms of Service from time to time. Continued use
          of NeuroDocs after changes are posted constitutes your acceptance of
          the updated terms.
        </p>

        {/* 8. Contact */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          8. Contact Us
        </h2>

        <p className="text-neutral-400 leading-relaxed">
          If you have any questions about these Terms of Service, please contact us at:
        </p>

        <div className="mt-6 inline-block rounded-xl border border-neutral-800 bg-neutral-900/60 px-6 py-4">
          <p className="text-white text-sm">
            NeuroDocs Support
            <br />
            <span className="text-neutral-400">
              support@neurodocs.com
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default TermsOfService
