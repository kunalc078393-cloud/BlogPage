import React, { useState } from 'react';

const ContactUs = () => {
  const [status, setStatus] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="bg-[var(--lightPink)]/50 min-h-screen p-6 flex flex-col items-center font-sans text-[var(--primaryDark)]">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Email: hello@example.com | Phone: +91 9xxxxxxxxx</p>
        <p>Address: thergaon pune</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">

        {status === 'success' && (
          <div className="bg-[var(--ice)] text-[var(--primaryDark)] p-3 mb-6 rounded border border-[var(--primary)]">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="block text-sm font-bold mb-1">Name</label>
            <input type="text" required placeholder="Your Name" className="w-full p-2 border border-[var(--softPink)] rounded focus:outline-[var(--primary)]" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Email</label>
            <input type="email" required placeholder="email@example.com" className="w-full p-2 border border-[var(--softPink)] rounded focus:outline-[var(--primary)]" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Enquiry Type</label>
            <select required className="w-full p-2 border border-[var(--softPink)] rounded focus:outline-[var(--primary)]">
              <option value="general">General</option>
              <option value="support">Support</option>
              <option value="collaboration">Collaboration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Subject</label>
            <input type="text" required placeholder="Topic" className="w-full p-2 border border-[var(--softPink)] rounded focus:outline-[var(--primary)]" />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Message</label>
            <textarea required rows="4" placeholder="How can we help?" className="w-full p-2 border border-[var(--softPink)] rounded focus:outline-[var(--primary)] resize-none"></textarea>
          </div>

          <button type="submit" className="bg-[var(--primary)] text-[var(--ice)] py-3 rounded font-bold hover:bg-[var(--primaryDark)] transition-colors">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;