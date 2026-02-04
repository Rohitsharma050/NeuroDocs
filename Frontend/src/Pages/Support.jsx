import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'

const questions = [
  {
    q: "Can I export generated documentation as Markdown or PDF?",
    a: "Yes. You can export the generated documentation in Markdown and PDF formats for easy sharing and hosting."
  },
  {
    q: "Is my source code and repository data private?",
    a: "Absolutely. Your repositories are processed securely and are never shared or stored without permission."
  },
  {
    q: "Can I manually edit the AI-generated documentation?",
    a: "Yes. All generated documentation is fully editable so you can customize it as per your needs."
  },
  {
    q: "Does it support large and multi-module repositories?",
    a: "Yes. The system is designed to handle large codebases and multi-module architectures efficiently."
  }
]

const Support = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const backendUrl = 'http://localhost:4500'
  const [name,setName] = useState("")
    const [email,setEmail] = useState("")
      const [subject,setSubject] = useState("")
        const [message,setMessage] = useState("")

        const onSubmitHandler = async (e) => {
  e.preventDefault()

  try {
    const res = await axios.post(
      `${backendUrl}/api/sendMessage`,
      { name, email, subject, message }
    )

    if (res.data.success) {
      toast.success(res.data.message)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } else {
      toast.error(res.data.message)
    }

  } catch (error) {
    toast.error(
      error.response?.data?.message || "Something went wrong"
    )
  }
}


  return (
    <div
      
      className="bg-black min-h-screen py-15 pl-20"
    >
      {/* Back Button */}
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

      <div className="max-w-5xl">
        <h1 className="text-2xl font-semibold text-white">
          Help Center
        </h1>

        <h3 className="text-neutral-400 mt-2">
          How can we help you today?
        </h3>

        <div className="h-px w-full bg-neutral-800 mt-6 mb-12" />

        <h2 className="text-xl font-medium text-white mb-6">
          Common Questions
        </h2>

        {/* FAQ */}
        <div
        
        className="grid md:grid-cols-2 gap-6">
          {questions.map((item, i) => {
            const isOpen = activeIndex === i

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(isOpen ? null : i)}
                className="
                  px-6 py-5
                  rounded-xl
                  bg-neutral-900/70
                  border border-neutral-800
                  cursor-pointer
                  transition-all
                  hover:border-[#2b4bee]
                "
              >
                <div className="flex items-center justify-between text-neutral-300 hover:text-white">
                  <span className="text-sm md:text-base">
                    {item.q}
                  </span>

                  <ChevronRight
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isOpen ? "rotate-90 text-[#2b4bee]" : "text-neutral-500"
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-sm text-neutral-400 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div >

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-24 grid md:grid-cols-[1fr_1.5fr] gap-12"
        >
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Contact Support
            </h2>

            <p className="text-neutral-400 mt-4 leading-relaxed max-w-md">
              Facing an issue with the documentation? Our support team is available
              to assist with account recovery, bug reports, and feature request etc.
            </p>

            <div className="mt-8 p-6 rounded-xl border border-neutral-800 bg-neutral-900/60 w-fit">
              <div className="flex items-center gap-3 text-neutral-400 text-sm mb-2">
                <span>EMAIL</span>
              </div>
              <p className="text-white font-medium">
                support@neurodocs.com
              </p>
            </div>

            <div className="mt-8 h-px w-full bg-neutral-800 max-w-md" />

            <p className="text-sm text-neutral-500 mt-6">
              Typical response time:{" "}
              <span className="text-neutral-300">Within 24 hours</span>
            </p>
          </div>

          {/* Right Form */}
          <form action="" onSubmit={onSubmitHandler}>
            
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/60">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-neutral-400">Name</label>
                <input
                  type="text"
                  placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}
                  className="mt-2 w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white outline-none focus:border-[#2b4bee]"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-400">Email Address</label>
                <input
                  type="email"
                  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white outline-none focus:border-[#2b4bee]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm text-neutral-400">Subject</label>
              <select
                id="issueType" value={subject} onChange={(e)=>setSubject(e.target.value)}
                className="mt-2 w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white outline-none focus:border-[#2b4bee]"
              >
              <option value="Technical">Technical Support</option>
              <option value="Feedback">Bug / Feature</option>
              <option value="Account">Account Issues</option>
              <option value="Other">Others</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="text-sm text-neutral-400">Message</label>
              <textarea
                rows={6}
                placeholder="Describe your issue..." value={message} onChange={(e)=>setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg bg-black border border-neutral-800 px-4 py-3 text-white outline-none resize-none focus:border-[#2b4bee]"
              />
            </div>

            <button type='submit'
              className="
                mt-8 w-full rounded-xl py-4
                bg-white text-black font-medium
                hover:opacity-90 transition cursor-pointer
              "
            >
              Send Message
            </button>
          </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Support
