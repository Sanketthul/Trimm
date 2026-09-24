import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7FC]">
      {/* Hero Section */}
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-12">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E0E7FF] bg-[#EEF2FF] px-4 py-2 text-sm font-medium text-[#4F46E5]">
            <span className="h-2 w-2 rounded-full bg-[#6366F1]"></span>
            Simple. Fast. Free.
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-[#1E1B4B] sm:text-5xl lg:text-6xl">
            Shorten your links.
            <span className="block text-[#6366F1]">Share them easily.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-7 text-[#64748B] sm:text-lg">
            Create short, clean and memorable URLs in seconds. No login
            required. Just paste your link and get started.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shorten">
              <button className="w-full rounded-xl bg-[#6366F1] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#6366F1]/20 transition duration-200 hover:bg-[#4F46E5] hover:shadow-xl hover:shadow-[#6366F1]/25 active:scale-[0.98] sm:w-auto">
                Try It Now →
              </button>
            </Link>

            <Link href="https://github.com/Sanketthul?tab=repositories">
              <button className="w-full rounded-xl border border-[#E2E8F0] bg-white px-7 py-3.5 font-semibold text-[#1E1B4B] shadow-sm transition duration-200 hover:border-[#C7D2FE] hover:bg-[#EEF2FF] sm:w-auto">
                View on GitHub
              </button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-[#64748B] md:justify-start">
            <span className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              No registration
            </span>

            <span className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Fast & simple
            </span>

            <span className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Custom URLs
            </span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#C7D2FE]/40 blur-3xl"></div>

          {/* Image Card */}
          <div className="relative h-[320px] w-full max-w-lg overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-3 shadow-[0_20px_60px_rgba(30,27,75,0.12)] sm:h-[400px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#EEF2FF]">
              <Image
                alt="URL shortener illustration"
                src="/vector.jpg"
                fill
                className="object-cover mix-blend-darken"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Feature Section */}
      <section className="border-t border-[#E2E8F0] bg-white px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
          <div>
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl text-[#6366F1]">
              🔗
            </div>
            <h3 className="font-bold text-[#1E1B4B]">Easy to Use</h3>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Paste your long URL and create a short link instantly.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl text-[#6366F1]">
              ⚡
            </div>
            <h3 className="font-bold text-[#1E1B4B]">Lightning Fast</h3>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Generate short URLs quickly without unnecessary steps.
            </p>
          </div>

          <div>
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl text-[#6366F1]">
              ✨
            </div>
            <h3 className="font-bold text-[#1E1B4B]">Custom Links</h3>
            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Choose a memorable custom name for your shortened URL.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
