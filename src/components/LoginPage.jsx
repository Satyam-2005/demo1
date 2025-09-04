// components/LoginPage.jsx
export default function LoginPage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-ping"></div>
      </div>

      {/* Login Box */}
      <form
        className="relative w-[360px] flex flex-col items-center justify-center
          bg-gradient-to-br from-gray-900/80 to-gray-800/60 
          p-10 shadow-[0_0_40px_rgba(56,255,127,0.4)] rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-md"
      >
        {/* Neon Border Animation */}
        <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border-glow"></div>

        {/* Heading */}
        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 my-4 z-10 tracking-wider">
          ASTRĀ Login
        </p>

        {/* Userid */}
        <div className="w-full relative flex items-center justify-center z-10">
          <svg
            className="absolute left-2 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input
            type="number"
            id="username"
            placeholder="User ID"
            className="w-full h-[50px] bg-transparent border-b-2 border-gray-600
              text-white text-base font-medium pl-10 placeholder:text-gray-400
              focus:outline-none focus:border-green-400 transition"
          />
        </div>

        {/* Password */}
        <div className="w-full relative flex items-center justify-center z-10 mt-4">
          <svg
            className="absolute left-2 text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full h-[50px] bg-transparent border-b-2 border-gray-600
              text-white text-base font-medium pl-10 placeholder:text-gray-400
              focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="z-10 relative w-full mt-6 h-[50px] rounded-md 
            bg-gradient-to-r from-green-500 to-blue-500 
            hover:from-blue-500 hover:to-green-500 
            text-white text-lg font-semibold tracking-wide
            shadow-[0_0_20px_rgba(56,255,127,0.6)] transition-all duration-300"
        >
          Access System
        </button>

      </form>

      {/* Extra keyframes */}
      <style>
        {`
          @keyframes border-glow {
            0% { border-color: rgba(56, 255, 127, 0.2); }
            50% { border-color: rgba(56, 255, 127, 0.8); }
            100% { border-color: rgba(56, 255, 127, 0.2); }
          }
          .animate-border-glow {
            animation: border-glow 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
