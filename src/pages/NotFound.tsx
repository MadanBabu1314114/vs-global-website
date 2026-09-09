import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page not found | VS GLOBAL</title></Helmet>
      <section className="container-x section text-center max-w-xl">
        <p className="eyebrow justify-center">404</p>
        <h1 className="display mt-4">Page not found.</h1>
        <p className="body-lg mt-4" style={{ color: 'rgb(var(--muted))' }}>The link may be outdated. Start from Home or CONTACT us on WhatsApp.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/contact" className="btn-ghost">Contact</Link>
        </div>
      </section>
    </>
  );
}
