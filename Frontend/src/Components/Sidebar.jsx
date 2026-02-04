import { Plus, Search } from "lucide-react";
import Profile from "./Profile";

const Sidebar = () => {
  return (
    <aside className="h-screen w-72 bg-black border-r border-neutral-800 flex flex-col overflow-hidden">

      {/* Top: Logo */}
      <div className="px-6 py-6 border-b border-neutral-800">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs">✦</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">
                NeuroDocs
            </h1>
            <p className="text-xs text-neutral-400">
              Code → Documentation
            </p>
          </div>
        </div>
      </div>

      {/* Primary Action */}
      <div className="px-6 py-4">
        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white text-black py-2 font-medium hover:bg-neutral-200 transition">
          <Plus size={16} />
          New Repository
        </button>
      </div>

      {/* Search */}
      <div className="px-6 py-3">
        <div className="flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 border border-neutral-800">
          <Search size={14} className="text-neutral-400" />
          <input
            className="bg-transparent outline-none text-sm text-white placeholder-neutral-500 w-full"
            placeholder="Search repositories..."
          />
        </div>
      </div>

      {/* History */}
      <div className="px-6 py-4 flex-1 min-h-0 overflow-y-auto sidebar-scroll">
        <p className="text-xs text-neutral-500 mb-3 uppercase">
          Recent Repositories
        </p>

        <div className="space-y-2">
          {[
            "auth-service",
            "portfolio-site",
            "ecommerce-api",
          ].map((repo) => (
            <div
              key={repo}
              className="px-3 py-2 rounded-lg hover:bg-neutral-900 cursor-pointer"
            >
              <p className="text-sm text-neutral-200">
                {repo}
              </p>
              <p className="text-xs text-neutral-500">
                Analyzed recently
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* User */}
      <Profile/>

    </aside>
  );
};

export default Sidebar;
