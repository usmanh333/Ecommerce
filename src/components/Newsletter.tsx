"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <section className="section-shell">
      <div className="newsletter-card">
        <h2>Join the Beauty Circle</h2>
        <p>Get early access to exclusive launches, limited fragrance drops, and skincare offers.</p>

        <form onSubmit={onSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button className="luxury-btn" type="submit">
            Subscribe
          </button>
        </form>

        {done && <small>Thank you. You are subscribed to our latest updates.</small>}
      </div>
    </section>
  );
}
