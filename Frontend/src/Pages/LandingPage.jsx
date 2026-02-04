import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ban, Sparkles, GitBranch, RefreshCw, Users } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate()
  const [token,setToken] = useState()
  return (
    <>
      {/* Hero section */}
      <section id="home">

      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Your codebase, <br />
            <span className="text-[#2b4bee]">
              translated into humans.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            NeuroDocs uses advanced machine learning to turn complex code into
            beautiful, readable documentation in seconds. Stop wasting time
            writing docs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex justify-center gap-4"
          >
            <button onClick={()=>{token? navigate('/dashboard'): navigate('/login') }} className="px-6 py-3 rounded-full bg-[#2b4bee] font-semibold hover:bg-[#1f3dd9] transition">
              Generate Documentation
            </button>

            <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition">
              View Demo
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* What is the Problem */}
      <div className="bg-black py-24 px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#2b4bee] uppercase tracking-widest text-sm font-semibold mb-4">
              The Challenge
            </p>

            <h1 className="text-3xl md:text-3xl font-extrabold text-white mb-14">
              Stop drowning in technical debt
            </h1>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b0b0b] rounded-2xl p-5 border border-transparent hover:border-[#2b4bee] transition duration-800"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <Ban className="text-red-500" size={22} />
              </div>

              <h1 className="text-xl font-semibold text-white mb-4">
                Technical Debt
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Undocumented legacy code builds up like interest. Stop manual
                documentation and focus on building features.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b0b0b] rounded-2xl p-5 border border-transparent hover:border-[#2b4bee] transition duration-800"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Users className="text-yellow-400" size={22} />
              </div>

              <h1 className="text-xl font-semibold text-white mb-4">
                Onboarding Friction
              </h1>
              <p className="text-gray-400 leading-relaxed">
                New engineers spend weeks trying to understand the architecture.
                Get them up to speed in hours, not months.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b0b0b] rounded-2xl p-5 border border-transparent hover:border-[#2b4bee] transition duration-800"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <RefreshCw className="text-blue-400" size={22} />
              </div>

              <h1 className="text-xl font-semibold text-white mb-4">
                Maintenance Hell
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Documentation is always out of date the moment it’s written.
                Keep your docs in sync with every single commit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
};

export default LandingPage;
