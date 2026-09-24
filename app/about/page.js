import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F8F7FC]">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#E0E7FF] bg-[#EEF2FF] px-4 py-2 text-sm font-medium text-[#4F46E5]">
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />
            About Trimm
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-[#1E1B4B] sm:text-5xl">
            Simple links.
            <span className="block text-[#6366F1]">Smarter sharing.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Trimm is a simple URL shortening platform designed to turn long and
            complicated URLs into short, clean and memorable links.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* About Card */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_10px_40px_rgba(30,27,75,0.06)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
              🔗
            </div>

            <h2 className="text-2xl font-bold text-[#1E1B4B]">
              What is Trimm?
            </h2>

            <p className="mt-4 leading-7 text-[#64748B]">
              Trimm makes sharing URLs easier. Instead of sending long links
              that are difficult to remember or share, you can create a short
              URL with a custom name of your choice.
            </p>

            <p className="mt-4 leading-7 text-[#64748B]">
              The platform is designed with simplicity in mind. There is no
              complicated setup and no login is required to create a shortened
              URL.
            </p>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_10px_40px_rgba(30,27,75,0.06)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
              ✨
            </div>

            <h2 className="text-2xl font-bold text-[#1E1B4B]">Our goal</h2>

            <p className="mt-4 leading-7 text-[#64748B]">
              Our goal is to provide a fast and straightforward way to create
              useful short links without unnecessary steps.
            </p>

            <p className="mt-4 leading-7 text-[#64748B]">
              Whether you're sharing a link with friends, adding it to a
              project, or simply making a URL easier to remember, Bitlinks keeps
              the process simple.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-[#E2E8F0] bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1E1B4B]">
              Built for simplicity
            </h2>

            <p className="mt-3 text-[#64748B]">
              Everything you need to create and share shorter links.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F7FC] p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
                ⚡
              </div>

              <h3 className="font-bold text-[#1E1B4B]">Fast</h3>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Generate shortened links quickly with a simple interface.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F7FC] p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
                🎯
              </div>

              <h3 className="font-bold text-[#1E1B4B]">Simple</h3>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                No complicated process. Paste your URL and create your link.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8F7FC] p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] text-xl">
                ✏️
              </div>

              <h3 className="font-bold text-[#1E1B4B]">Custom</h3>

              <p className="mt-2 text-sm leading-6 text-[#64748B]">
                Choose a memorable custom name for your shortened URL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1E1B4B] px-6 py-12 text-center shadow-xl sm:px-12">
          <h2 className="text-3xl font-bold text-white">
            Ready to shorten your URL?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[#C7D2FE]">
            Create a clean and memorable short link in just a few seconds.
          </p>

          <Link href="/shorten">
            <button className="mt-7 rounded-xl bg-[#6366F1] px-7 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#818CF8] active:scale-[0.98]">
              Create a Short URL →
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
