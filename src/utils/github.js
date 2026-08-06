const GITHUB_USERNAME = 'OMJOSHI15';
const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches public repositories for the configured GitHub user.
 * Kept outside the component so the async logic stays separate from JSX.
 */
export async function fetchGithubRepos(username = GITHUB_USERNAME) {
  const res = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);

  if (!res.ok) {
    throw new Error(`GitHub API request failed (status ${res.status})`);
  }

  return res.json();
}

export { GITHUB_USERNAME };
