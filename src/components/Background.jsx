export default function Background() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(138,43,226,0.8) 0%, rgba(138,43,226,0) 60%),
          radial-gradient(ellipse at 80% 50%, rgba(0,191,255,0.7) 0%, rgba(0,191,255,0) 70%),
          radial-gradient(ellipse at 50% 80%, rgba(50,205,50,0.6) 0%, rgba(50,205,50,0) 65%),
          linear-gradient(135deg, #000000 0%, #0a0520 100%)
        `,
        backgroundBlendMode: "overlay, screen, hard-light",
        animation: "aurora-drift 25s infinite alternate ease-in-out",
      }}
    >
      {/* Grid effect */}
      <div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
        style={{
          background: `
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.02) 0px,
              rgba(255,255,255,0.02) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255,255,255,0.03) 0px,
              rgba(255,255,255,0.03) 1px,
              transparent 1px,
              transparent 60px
            )
          `,
          animation: "grid-shift 20s linear infinite",
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 70%, rgba(10,5,32,0.9) 100%)",
          animation: "aurora-pulse 8s infinite alternate",
        }}
      />

      {/* Custom keyframes */}
      <style>
        {`
          @keyframes aurora-drift {
            0% {
              background-position: 0% 0%, 0% 0%, 0% 0%;
              filter: hue-rotate(0deg) brightness(1);
            }
            50% {
              background-position: -10% -5%, 5% 10%, 0% 15%;
              filter: hue-rotate(30deg) brightness(1.2);
            }
            100% {
              background-position: 5% 10%, -10% -5%, 15% 0%;
              filter: hue-rotate(60deg) brightness(1);
            }
          }

          @keyframes grid-shift {
            0% { transform: translate(0,0); }
            100% { transform: translate(-50%,-50%); }
          }

          @keyframes aurora-pulse {
            0%,100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.05); }
          }
        `}
      </style>
    </div>
  );
}
