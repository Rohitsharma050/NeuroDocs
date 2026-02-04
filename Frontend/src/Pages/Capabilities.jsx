import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Capabilities = () => {
  const navigate = useNavigate()
  const [token,setToken] = useState(true)
  return (
    <section id="capability" className="bg-black py-28 px-20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={cardVariant}
          className=" mb-20"
        >
          <div>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Everything you need to ship faster
          </h2>
          <p className="text-gray-400 max-w-2xl  text-lg">
            Documentation shouldn't be a bottleneck. Our AI tools turn complex
            codebases into clarity.
          </p>
          </div>
         
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative col-span-1 md:col-span-2 rounded-2xl bg-gradient-to-br from-[#0b0b0b] to-[#050505] border border-white/10 hover:border-white transition-all duration-300 p-8 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-16 w-48 h-48 bg-indigo-500/20 blur-2xl rounded-full" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Architecture & Logic Maps
              </h3>

              <p className="text-gray-400 max-w-xl leading-relaxed">
                Automatically generate system architecture diagrams and
                visualize complex business logic flows that stay perfectly
                aligned with your evolving codebase.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-400">
                <span>• Component Relationships</span>
                <span>• Execution Flowcharts</span>
                <span>• Auto-Updated Diagrams</span>
              </div>
            </div>
          </motion.div>

          {[
            {
              title: "Database Schema",
              desc: "AI-derived ER diagrams and data dictionaries generated directly from your ORM models or SQL files.",
              glow: "top-12 right-10 w-32 h-32 bg-blue-500/20"
            },
            {
              title: "Commit Summaries",
              desc: "Every pull request gets a clear, human-readable explanation of what changed and why it matters.",
              glow: "bottom-10 left-10 w-28 h-28 bg-indigo-500/20"
            },
            {
              title: "AI Semantic Search",
              desc: "Ask questions like “Where is auth handled?” and jump straight to the exact files that matter.",
              glow: "top-0 left-1/2 w-44 h-44 bg-blue-600/20 -translate-x-1/2"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-[#0b0b0b] border border-white/10 hover:border-white transition-all duration-800 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className={`absolute ${item.glow} blur-2xl rounded-full`} />
              </div>

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

       <div className="relative max-w-5xl mx-auto mt-30 rounded-3xl overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#050505] to-[#0b1020]" />

        {/* Glow effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />

        {/* Content */}
        <div className="relative z-10 text-center px-8 py-24 border border-white/10 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
            Ready to fix your <br /> documentation forever?
          </h2>

          <div className="flex justify-center gap-4 mb-6">
            <button onClick={()=>{token? navigate('/dashboard'): navigate('/login') }} className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition duration-300">
              Start for Free
            </button>

            <button onClick={()=>{navigate('/about')}} className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition duration-300">
              Learn More
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Powered by AI • Built for modern codebases
          </p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
