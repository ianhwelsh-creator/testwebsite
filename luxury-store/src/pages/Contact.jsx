import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo only)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="container-luxury py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            placeholder="Name"
            className="input"
          />
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            placeholder="Email"
            className="input"
          />
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
            placeholder="Message"
            rows="6"
            className="input"
          />
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
