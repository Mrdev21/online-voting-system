import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Can I vote more than once?",
    answer:
      "No. Each registered voter can cast only one vote. Once your vote is submitted, the system prevents duplicate voting.",
  },
  {
    question: "Is my vote secure?",
    answer:
      "Yes. The Online Voting System uses JWT authentication, encrypted passwords with BCrypt, and secure communication to protect your vote.",
  },
  {
    question: "Can I change my vote after submitting?",
    answer:
      "No. Once your vote has been successfully submitted, it cannot be modified or deleted.",
  },
  {
    question: "Who can create elections?",
    answer:
      "Only administrators have permission to create, manage, and publish elections within the system.",
  },
  {
    question: "When are election results available?",
    answer:
      "Election results become available after the election ends and are published by the administrator.",
  },
];

function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-12 text-white">

      {/* Background Glow */}

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl mt-18">

        <button
          onClick={() => navigate("/")}
          className="mb-10 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
        >
          ← Back to Home
        </button>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-12">

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-slate-300">
            Find answers to the most common questions about the Online Voting
            System.
          </p>

          <div className="mt-10 space-y-4">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-slate-900/60"
              >

                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>

                  {openIndex === index ? (
                    <FaChevronUp className="text-cyan-400" />
                  ) : (
                    <FaChevronDown className="text-cyan-400" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="border-t border-white/10 px-5 py-4 text-slate-300">
                    {faq.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;