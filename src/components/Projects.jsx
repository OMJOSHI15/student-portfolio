import { useEffect, useState, useCallback } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import { fetchGithubRepos, GITHUB_USERNAME } from '../utils/github';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const loadRepos = useCallback(() => {
    setLoading(true);
    setError(null);

    fetchGithubRepos(GITHUB_USERNAME)
      .then((data) => setRepos(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadRepos();
  }, [loadRepos]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <section className="section" id="projects">
      <h2 className="section__heading">Projects</h2>
      <p className="section__body section__body--intro">
        Live repositories pulled from{' '}
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">
          github.com/{GITHUB_USERNAME}
        </a>
        .
      </p>

      {!loading && !error && (
        <input
          type="search"
          className="contact-form__input projects-search"
          placeholder="Filter repositories by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter repositories by name"
        />
      )}

      {loading && <Spinner label="Fetching repositories…" />}

      {!loading && error && <ErrorMessage message={error} onRetry={loadRepos} />}

      {!loading && !error && (
        <div className="projects-grid">
          {filteredRepos.map((repo) => (
            <article className="project-card" key={repo.id}>
              <h3 className="project-card__title">{repo.name}</h3>
              <p className="project-card__desc">
                {repo.description || 'No description provided.'}
              </p>
              <div className="project-card__stack">
                {repo.language && <span className="chip">{repo.language}</span>}
                <span className="chip">★ {repo.stargazers_count}</span>
              </div>
              <a
                className="project-card__link"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </article>
          ))}

          {filteredRepos.length === 0 && (
            <p className="section__body">No repositories match "{query}".</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;
