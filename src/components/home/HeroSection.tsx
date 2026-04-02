export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80')",
        }}
      />
      {/* Gradient overlay: dark charcoal→deep navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/80 via-[#1a2e3b]/70 to-[#0d1b2a]/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Small caps subtitle */}
        <p
          className="text-sm tracking-[0.25em] uppercase text-[#C8B99A] mb-6 font-body"
          aria-label="Date"
        >
          November 2026
        </p>

        {/* Main title */}
        <h1
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Swishers Go Down Under
        </h1>

        {/* Tagline */}
        <p
          className="font-body text-lg sm:text-xl text-white/75 font-light tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          An Australian Adventure
        </p>

        {/* Divider */}
        <div className="mt-8 w-16 h-px bg-[#C8B99A]/50" />

        {/* Trip dates */}
        <p className="mt-4 text-sm text-white/50 font-body tracking-widest uppercase">
          17 Days &bull; 4 Chapters &bull; One of a Lifetime
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <p className="text-[#C8B99A]/80 text-xs tracking-[0.2em] uppercase font-body">
          Begin Your Journey
        </p>
        {/* Bouncing arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-[#C8B99A] animate-bounce"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
