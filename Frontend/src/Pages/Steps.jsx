import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section
     
      className="bg-black py-15 px-20"
    >
      <div className="max-w-7xl mx-auto mb-24">

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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm tracking-widest text-blue-500 mb-4"
        >
          ONBOARDING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
        >
          Setup your codebase <br /> documentation in seconds
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
        >

          {/* Step 01 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="px-10 py-24"
          >
            <div className="text-7xl font-light text-blue-500/40 mb-10">
              01
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Integrate your GitHub or GitLab repositories in a single click.
              We handle the permissions, you keep the control.
            </p>
          </motion.div>

          {/* Step 02 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="px-10 py-24 bg-gradient-to-b from-white/5 to-transparent relative"
          >
            <div className="text-7xl font-light text-blue-500/40 mb-10">
              02
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Analyze
            </h3>
            <div className="w-8 h-[2px] bg-blue-500 mb-6"></div>
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">
              Our AI engine maps your codebase architecture, identifying
              patterns and dependencies instantly with precision.
            </p>
          </motion.div>

          {/* Step 03 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="px-10 py-24"
          >
            <div className="text-7xl font-light text-blue-500/40 mb-10">
              03
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Sync
            </h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Automated documentation that stays updated with every commit.
              Your docs are never out of date again.
            </p>
          </motion.div>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 border border-white/10 bg-gradient-to-b from-white/5 to-transparent px-20 py-14"
        >
          <p className="text-xs tracking-widest text-white/40 mb-8">
            SUGGESTIONS FOR BETTER DOCUMENTATION
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Use Meaningful Folder Structure",
                desc: "Organize your backend, frontend, and configuration files clearly so the AI can accurately identify architectural boundaries."
              },
              {
                title: "Keep API Routes Explicit",
                desc: "Clearly defined REST or GraphQL endpoints help generate precise API references and request–response mappings."
              },
              {
                title: "Maintain Environment Configs",
                desc: "Proper use of environment variables and config files improves security insights and deployment documentation."
              },
              {
                title: "Write Descriptive Commits",
                desc: "Clear commit messages allow the system to track logic evolution and produce more accurate change summaries."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mt-20 px-20 mx-auto"
        >
          <div className="rounded-3xl bg-gradient-to-r from-white/5 to-white/0 p-12 text-center border border-white/10 backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Ready to automate your docs?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition">
                Get Started for Free
              </button>
              <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 transition">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Steps;
