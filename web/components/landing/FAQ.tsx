"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Market1 AI?",
    answer:
      "Market1 AI is an all-in-one AI platform that helps you create songs, lyrics, vocals, beats, music videos, album covers and more using advanced AI models.",
  },
  {
    question: "Can I use generated songs commercially?",
    answer:
      "Yes. Paid plans include commercial usage rights. Always review the licensing terms for your selected plan.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Market1 AI supports more than 100 languages including English, Telugu, Hindi, Tamil, Kannada, Malayalam, Spanish, French, Japanese and many more.",
  },
  {
    question: "Does it support voice cloning?",
    answer:
      "Yes. You can clone voices, generate AI singers and create custom voice models depending on your subscription.",
  },
  {
    question: "Can I upload my own audio?",
    answer:
      "Yes. Upload your own music for remixing, mastering, vocal separation and AI enhancement.",
  },
  {
    question: "Which export formats are available?",
    answer:
      "MP3, WAV, FLAC and additional export options will be available depending on the selected tool.",
  },
  {
    question: "Is there an API?",
    answer:
      "Yes. Developers and Enterprise customers can integrate Market1 AI through secure REST APIs.",
  },
  {
    question: "Do I need music experience?",
    answer:
      "No. Simply describe what you want, and the AI generates professional-quality results for you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Everything you need to know before using Market1 AI.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="border-t border-white/10 px-8 py-6 leading-8 text-muted-foreground">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
