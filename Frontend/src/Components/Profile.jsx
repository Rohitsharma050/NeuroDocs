import { ChevronUp, LifeBuoy, LogOut } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 pb-4 border-t z-50 border-neutral-800">

      {/* EXPANDED CONTENT */}
      {open && (
        <div className="pt-4 pb-3">
          <p className="text-sm text-white font-medium">
            Rohit Sharma
          </p>
          <p className="text-xs text-neutral-400 mb-4">
            rohitsharmasa12011@gmail.com
          </p>

          <div className="space-y-2">
            <Link to='/support' className="w-full flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition">
              <LifeBuoy size={16} />
              Support
            </Link>

            <button className="w-full flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition">
              <LogOut size={16} />
              Log out
            </button>
          </div>
        </div>
      )}

      {/* PROFILE ROW (always visible) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-3 hover:bg-neutral-900 rounded-lg transition"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-black font-semibold">
            R
          </div>

          <div className="text-left">
            <p className="text-sm text-white">
              Rohit Sharma
            </p>
            <p className="text-xs text-neutral-400">
              Pro Plan
            </p>
          </div>
        </div>

        <ChevronUp
          size={16}
          className={`text-neutral-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default Profile;
