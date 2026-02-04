import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: form.email, name: form.name }));
    alert('Account created! (Demo only)');
    navigate('/account/profile');
  };

  return (
    <div className="container-luxury py-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center">Create Account</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            required
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
            placeholder="Full Name"
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
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            placeholder="Password"
            className="input"
          />
          <button type="submit" className="btn-primary w-full">Create Account</button>
        </form>
        <p className="text-center mt-6 text-sm">
          Already have an account? <Link to="/login" className="underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
