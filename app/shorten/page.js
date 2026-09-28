"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shorturl,
        }),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${text}`);
      }

      const result = JSON.parse(text);

      alert(result.message);

      setGenerated(`${window.location.origin}/${shorturl}`);
      seturl("");
      setshorturl("");
    } catch (error) {
      console.error("Generate error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-16">
      <div className="mx-auto max-w-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FF]">
            <span className="text-2xl text-[#6366F1]">🔗</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#1E1B4B]">
            Shorten your URL
          </h1>

          <p className="mt-2 text-sm text-[#64748B]">
            Create a short, memorable link in seconds.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_40px_rgba(30,27,75,0.08)] sm:p-8">
          <div className="flex flex-col gap-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1E1B4B]">
                Original URL
              </label>

              <input
                type="text"
                value={url}
                placeholder="https://example.com/your-long-url"
                onChange={(e) => seturl(e.target.value)}
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#1E1B4B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#6366F1] focus:bg-white focus:ring-4 focus:ring-[#6366F1]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1E1B4B]">
                Custom short URL
              </label>

              <div className="flex overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] focus-within:border-[#6366F1] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#6366F1]/10">
                <span className="flex items-center border-r border-[#E2E8F0] px-3 text-sm text-[#64748B]">
                  {process.env.NEXT_PUBLIC_HOST}/
                </span>

                <input
                  type="text"
                  value={shorturl}
                  placeholder="my-link"
                  onChange={(e) => setshorturl(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#1E1B4B] outline-none placeholder:text-[#94A3B8]"
                />
              </div>
            </div>

            <button
              onClick={generate}
              className="mt-2 w-full rounded-xl bg-[#6366F1] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#6366F1]/20 transition hover:bg-[#4F46E5] active:scale-[0.98]"
            >
              Generate Short URL
            </button>
          </div>

          {generated && (
            <div className="mt-7 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-emerald-600">✓</span>

                <span className="font-semibold text-emerald-800">
                  Your shortened link is ready!
                </span>
              </div>

              <Link
                target="_blank"
                href={generated}
                className="block break-all rounded-lg border border-emerald-100 bg-white px-3 py-2 text-sm font-medium text-[#6366F1] hover:text-[#4F46E5] hover:underline"
              >
                {generated}
              </Link>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-[#94A3B8]">
          Create clean and memorable links for easy sharing.
        </p>
      </div>
    </main>
  );
};

export default Shorten;
