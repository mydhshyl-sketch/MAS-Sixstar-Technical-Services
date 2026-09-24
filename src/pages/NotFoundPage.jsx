import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | MAS Sixstar Technical Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container text-center">
        <h1 style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', margin: '16px 0 12px 0' }}>
          Page Not Found
        </h2>
        <p style={{ color: 'var(--color-slate)', maxWidth: '480px', margin: '0 auto 28px auto' }}>
          The page you are looking for doesn't exist or has been moved. Explore our home maintenance services or return to the homepage.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
          <Link to="/services" className="btn btn-outline">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
