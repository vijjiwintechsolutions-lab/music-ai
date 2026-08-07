"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Market1 AI?",
    answer:
      "Market1 AI is an all-in-one AI music platform for generating songs, lyrics, vocals, music videos, album covers and much more.",
  },
  {
    question: "Can I use generated songs commercially?",
    answer:
      "Yes. Depending on your subscription plan, you can use generated content for commercial purposes under our licensing terms.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Market1 AI supports more than 100 languages including English, Telugu, Hindi, Tamil, Kannada, Malayalam, Japanese, Korean, Spanish, French and many more.",
  },
  {
    question: "Does it support voice cloning?",
    answer:
      "Yes. You can create AI voice clones, generate singing voices and customize vocal styles using advanced AI models.",
  },
  {
    question: "Can I upload my own music?",
    answer:
      "Yes. Upload your own audio for remixing, mastering, vocal removal, enhancement and AI-assisted editing.",
  },
  {
    question: "Which audio formats are supported?",
    answer:
      "MP3, WAV, FLAC, OGG, AAC and many other common audio formats are supported.",
  },
  {
    question: "Do I need music production experience?",
    answer:
      "No. Simply describe what you want and Market1 AI handles the music generation process.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes. Enterprise customers can integrate Market1 AI directly into their own applications using secure APIs.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-500">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about Market1 AI.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border bg-card"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-muted-foreground leading-8">
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
