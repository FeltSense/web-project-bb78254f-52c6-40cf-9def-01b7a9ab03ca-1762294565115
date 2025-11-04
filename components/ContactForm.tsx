'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      {submitted ? (
        <div className="text-center text-green-600 text-lg">Thank you! We'll be in touch soon.</div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded px-4 py-2" required />
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-4 py-2" required />
          <textarea placeholder="Message" rows={5} className="w-full border border-gray-300 rounded px-4 py-2" required></textarea>
          <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">Send</button>
        </form>
      )}
    </section>
  );
}