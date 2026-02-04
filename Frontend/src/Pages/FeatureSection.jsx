import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiRefreshCw, FiUsers, FiFileText, FiArrowRight } from 'react-icons/fi';

const FeatureSection = () => {
  const blueColor = '#2b4bee';

  return (
    
    <section id="features" className="bg-black py-24 px-20 font-sans">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          From Code to <span style={{ color: blueColor }}>Clear Documentation</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Stop writing docs manually. Our AI parses your repository and generates production-ready wikis in seconds.
        </p>
      </motion.div>

      {/* Main Visual Element */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-32 mb-20 max-w-6xl mx-auto relative">
        {/* Left: Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-lg bg-[#1a1b26] rounded-2xl shadow-2xl overflow-hidden transform transition-transform md:-mr-8 md:rotate-[-1deg]"
        >
          <div className="bg-[#24283b] p-4 flex items-center justify-between border-b border-slate-700/50">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-xs font-medium text-white">api.ts — doc-ai-project</div>
            <div className="w-4" />
          </div>

          <div className="p-6 text-xs font-mono leading-loose text-slate-300">
            <p>
              <span className="text-purple-400">export</span>{' '}
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">handler</span> ={' '}
              <span className="text-purple-400">async</span> (req, res) = &#123;
            </p>
            <p className="pl-4">
              <span className="text-slate-500">// Verify session token</span>
            </p>
            <p className="pl-4">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">user</span> ={' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-blue-300">auth</span>.
              <span className="text-blue-300">verify</span>(req.token);
            </p>
            <p className="pl-4 mt-2">
              <span className="text-purple-400">if</span> (!
              <span className="text-blue-300">user</span>) &#123;
            </p>
            <p className="pl-8">
              <span className="text-purple-400">return</span> res.
              <span className="text-blue-300">status</span>(
              <span className="text-yellow-300">401</span>).
              <span className="text-blue-300">json</span>(&#123;
            </p>
            <p className="pl-12">
              <span className="text-red-400">error</span>:{' '}
              <span className="text-green-300">'Unauthorized'</span>
            </p>
            <p className="pl-8">&#125;);</p>
            <p className="pl-4">&#125;</p>
            <p className="pl-4 mt-2">
              <span className="text-purple-400">return</span> res.
              <span className="text-blue-300">json</span>(&#123;{' '}
              <span className="text-red-400">status</span>:{' '}
              <span className="text-green-300">'success'</span> &#125;);
            </p>
            <p>&#125;</p>
          </div>
        </motion.div>

        {/* Center Arrow */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140 }}
          className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:relative md:top-auto md:left-auto md:transform-none"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/30"
            style={{ backgroundColor: blueColor }}
          >
            <FiArrowRight className="text-2xl" />
          </div>
        </motion.div>

        {/* Right: Documentation Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 z-10 transform transition-transform md:-ml-8 md:rotate-[1deg] mt-8 md:mt-0"
        >
          <div className="flex items-center space-x-3 mb-6">
            <FiFileText className="text-3xl" style={{ color: blueColor }} />
            <h3 className="text-2xl font-bold text-slate-900">Authentication API</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100" style={{ color: blueColor }}>Node.js</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100" style={{ color: blueColor }}>Express</span>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100" style={{ color: blueColor }}>JWT Auth</span>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Project Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Handles user session management and OAuth2 integration. Automatically validates tokens and manages session state across secure endpoints.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              API Reference
            </h4>
            <div className="bg-slate-50 rounded-lg border border-slate-100 overflow-hidden">
              <div className="grid grid-cols-3 p-3 text-xs font-medium text-slate-500 bg-slate-100">
                <div>Method</div>
                <div className="col-span-2">Endpoint</div>
              </div>
              <div className="grid grid-cols-3 p-3 text-xs border-t border-slate-100 font-mono">
                <div className="font-bold" style={{ color: blueColor }}>GET</div>
                <div className="col-span-2 text-slate-700">/api/v1/auth/verify</div>
              </div>
              <div className="grid grid-cols-3 p-3 text-xs border-t border-slate-100 font-mono">
                <div className="font-bold text-yellow-600">POST</div>
                <div className="col-span-2 text-slate-700">/api/v1/auth/login</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Features */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-24"
      >
        {[
          {
            icon: FiCpu,
            title: 'Automated Discovery',
            desc: 'Automatically detects tech stacks, libraries, and architecture patterns in your code.',
          },
          {
            icon: FiRefreshCw,
            title: 'Always In Sync',
            desc: 'Documentation updates instantly whenever you push new code to Git. No more stale wikis.',
          },
          {
            icon: FiUsers,
            title: 'Team Collaborative',
            desc: 'Beautiful Notion-like interface designed for developers and PMs alike.',
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-xl bg-blue-100 mb-5 inline-flex">
              <f.icon className="text-1xl" style={{ color: blueColor }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
