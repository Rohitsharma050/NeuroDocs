const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white px-12 py-40">
      {/* HERO SECTION */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Document your codebase
        </h1>

        <p className="text-neutral-400 text-sm mb-10">
          Connect your GitHub repository and let AI generate comprehensive,
          production-ready documentation for your team.
        </p>

        {/* INPUT + BUTTON */}
        <div className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-2">
          <input
            type="text"
            placeholder="https://github.com/username/repository"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-neutral-500 px-3"
          />

          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500 transition">
            Generate
            <span className="text-xs">✦</span>
          </button>
        </div>

        {/* TRUST BADGES */}
        <div className="flex items-center justify-center gap-6 mt-4 text-xs text-neutral-400">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Private repos supported
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Auto-updates
          </span>
        </div>
      </div>

      {/* HOW IT WORKS */}
      
    </div>
  );
};

export default Dashboard;
