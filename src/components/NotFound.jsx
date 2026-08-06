import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section not-found">
      <p className="hero__eyebrow">
        <span className="hero__eyebrow-token">throw new</span>{' '}
        <span className="hero__eyebrow-string">Error('404: Not Found')</span>;
      </p>
      <h2 className="section__heading">Page not found</h2>
      <p className="section__body">
        The route you're looking for doesn't exist.
      </p>
      <Link className="not-found__link" to="/">
        ← Back to Home
      </Link>
    </section>
  );
}

export default NotFound;
