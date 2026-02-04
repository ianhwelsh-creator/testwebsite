import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email: form.email, name: 'Guest User' }));
    alert('Logged in! (Demo only)');
    navigate('/account/profile');
  };

  return (
    <div className="container-luxury py-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <button type="submit" className="btn-primary w-full">Sign In</button>
        </form>
        <p className="text-center mt-6 text-sm">
          Don't have an account? <Link to="/signup" className="underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
