"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getFAQSchema } from "@/lib/seo";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  enableSchema?: boolean;
}

export function FAQAccordion({ items, enableSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const schema = enableSchema ? getFAQSchema(items) : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          const buttonId = `faq-btn-${idx}`;
          const panelId = `faq-panel-${idx}`;

          return (
            <div
              key={idx}
              className="border border-[#DDD9D6] bg-[#BAAFA6] overflow-hidden transition-colors"
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-[#B4A99F]/50 transition-colors"
              >
                <span className="font-serif text-lg md:text-xl font-normal text-[#330505] pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#330505] flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-6 pt-1 text-sm md:text-base leading-relaxed text-[#330505]/90 border-t border-[#DDD9D6]/60"
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
