"use client";

import { useState } from "react";
import { FaqItem } from "@/types/catalog";

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(items[0]?.id ?? null);

  return (
    <section className="section-shell" id="faq">
      <div className="section-head">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before placing your fragrance or skincare order.</p>
      </div>

      <div className="faq-list">
        {items.map((faq) => {
          const isOpen = faq.id === openId;
          return (
            <article key={faq.id} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button type="button" onClick={() => setOpenId(isOpen ? null : faq.id)}>
                <span>{faq.question}</span>
                <span>{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && <p>{faq.answer}</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
