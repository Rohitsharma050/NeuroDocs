import { useState } from "react";
export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="min-h-screen= bg-black flex items-center justify-center px-20 py-20">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0b1020] to-[#050505] shadow-2xl">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* LEFT SECTION */}
          <div className="relative p-10 md:p-12 flex flex-col justify-between">
            <div>
              {/* Logo */}
             <div className="flex mb-4 items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs">✦</span>
          </div>
          <h1 className="text-white font-bold text-lg tracking-tight">
            NeuroDocs
          </h1>
        </div>

              <h2 className="text-3xl font-bold text-white leading-tight">
                Automate your <br /> documentation.
              </h2>
              <p className="mt-4 text-white/60 max-w-sm">
                Your codebase, explained in minutes.
              </p>
            </div>

            {/* Decorative blocks */}
            <div className="mt-12 h-24 rounded-lg bg-white/5 flex overflow-hidden">
              <div className="w-1/3 bg-white/10" />
              <div className="w-1/3 bg-white/5" />
              <div className="w-1/3 bg-white/10" />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="p-10 md:p-12 bg-black/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white">
              Welcome back
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Login to your developer workspace
            </p>

            {/* Google Button */}
            <button className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-white text-black py-2.5 text-sm font-medium hover:bg-gray-100 transition">
              <span className="text-base">G</span>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3 text-xs text-white/30">
              <div className="flex-1 h-px bg-white/10" />
              OR CONTINUE WITH
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && <div>
                <label className="text-xs text-white/60">
                  Name
                </label>
                <input
                  type="name"
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                />
              </div> }
              <div>
                <label className="text-xs text-white/60">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <label className="text-xs text-white/60">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs text-blue-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition"
              >
                {isLogin?"Login":"Create account"}
              </button>
            </form>

            {/* Sign up link */}
            <p className="mt-6 text-center text-sm text-white/50">
              {isLogin?"Don't have an account? ":"Already have an account? "}
             <button onClick={()=>{setIsLogin(!isLogin)}} className="text-blue-400 hover:underline">
              {isLogin?"Sign up":"Sign in"}
             </button>
            </p>

            {/* Footer note */}
            <p className="mt-6 text-center text-xs text-white/30">
              Secured with OAuth 2.0
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
