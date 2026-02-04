import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-20 py-20">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="text-2xl font-semibold text-white tracking-tight">
              NeuroDocs
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              AI that turns complex codebases into clear, maintainable
              documentation.
            </p>

            <div className="mt-5 flex gap-5 text-sm text-white/60">
              <a
                href="https://github.com/Rohitsharma050"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rohitsharma50/"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Product
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="hover:text-white transition duration-200">
                Capabilities
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                Documentation
              </a>
              <a href="#" className="hover:text-white transition duration-200">
                API Reference
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
             <Link to={'/about'} className="hover:text-white transition duration-200">
              About
             </Link>
                      <Link
                  to="/policy" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                 <Link
                  to="/terms" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Services
                </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>© 2026 NeuroDocs. All rights reserved.</span>
          <span>
            Built by <span className="text-white/60">Rohit Sharma</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
