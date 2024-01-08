"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "How does the app determine which emails to summarize?",
    answer: <div className="space-y-2 leading-relaxed">The app fetches your unread emails from the past week in your Primary Inbox Label.</div>,
  },
  {
    question: " Is my email data secure?",
    answer: (
      <p>
        Yes, your email data is handled with the utmost security and privacy. We take data protection seriously, and all your email information is encrypted and stored securely. We do not share your data with third parties.
      </p>
    ),
  },
  {
    question: "Will I need to use my own OpenAI API key?",
    answer: (
      <p>
        Yes for the time being. Rest assured your key will be encrypted and will be only for your account itself. We are working towards better token usage so in due time, this will be optional and will not be required. Although this will come with pricing restructure.
      </p>
    ),
  },
  {
    question: "What email providers does the app support?",
    answer: (
      <div className="space-y-2 leading-relaxed">At the moment we support only Gmail accounts. But on user request, be rest assured, we will look into integrating other providers.</div>
    ),
  },
  {
    question: "Can I customize the summarization settings?",
    answer: (
      <div className="space-y-2 leading-relaxed">At the moment the Summarization settings including which folders, particular senders, length of summary etc are fixed. But we will be working towards more customizability.</div>
    ),
  },
  {
    question: "Is there a limit to the number of emails I can summarize?",
    answer: (
      <div className="space-y-2 leading-relaxed">We offer different plans with varying limits on the number of emails you can summarize. The limits depend on the plan you choose.</div>
    ),
  },
  {
    question: "Do you support multiple email accounts?",
    answer: (
      <div className="space-y-2 leading-relaxed">For the moment the summaries which you see are for only 1 account. For another account you would need to log out and log in. But we will be working towards integrating multiple accounts.</div>
    ),
  },
  {
    question: "How often does the app summarize my emails?",
    answer: (
      <div className="space-y-2 leading-relaxed">The Email Summaries will be fetched on a period on 2-3 days. Each fetch will retrieve the new unread emails from the past week. For the time being this is fixed for the beta, but on request we will be adding more customizability options.</div>
    ),
  },
  
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
