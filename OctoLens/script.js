/* ------------------------------------------------------------------
   3. Username parsing (unchanged)
------------------------------------------------------------------- */
const USERNAME_PATTERN = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

function parseUsername(text) {
  const trimmed = text.trim();
  if (!trimmed) return null;

  const urlMatch = trimmed.match(/github\.com\/([^/?#\s]+)/i);
  const candidate = (urlMatch ? urlMatch[1] : trimmed).replace(/^@/, "");

  return USERNAME_PATTERN.test(candidate) ? candidate : null;
}

/* ------------------------------------------------------------------
   4. Avatar letter (unchanged)
------------------------------------------------------------------- */
input.addEventListener("input", () => {
  const letter = input.value.trim().replace(/^@/, "").charAt(0).toUpperCase();
  avatar.textContent = letter || "A";
});

/* ------------------------------------------------------------------
   5. Talking to the GitHub API
------------------------------------------------------------------- */
const PER_PAGE = 100; // GitHub's maximum per request
const MAX_PAGES = 10; // safety cap: at most 1000 repos

/** A custom error so the UI can show a friendly message. */
class GitHubError extends Error {}

/**
 * Fetch ALL public repos for a user (follows pagination).
 * `signal` lets us cancel the request if the user searches again.
 */
async function fetchRepos(username, signal) {
  const repos = [];

  for (let page = 1; page <= MAX_PAGES; page++) {
    const url =
      `https://api.github.com/users/${encodeURIComponent(username)}/repos` +
      `?per_page=${PER_PAGE}&page=${page}&sort=updated`;

    const response = await fetch(url, {
      signal,
      headers: { Accept: "application/vnd.github+json" },
    });

    if (response.status === 404) {
      throw new GitHubError(`User "${username}" was not found.`);
    }
    if (response.status === 403 || response.status === 429) {
      throw new GitHubError(
        "GitHub rate limit reached (60 requests/hour without a token). Try again later."
      );
    }
    if (!response.ok) {
      throw new GitHubError(`GitHub returned an error (${response.status}).`);
    }

    const batch = await response.json();
    if (!Array.isArray(batch)) {
      throw new GitHubError("Unexpected response from GitHub.");
    }

    repos.push(...batch);
    if (batch.length < PER_PAGE) break; // last page
  }

  return repos;
}

/* ------------------------------------------------------------------
   6. Rendering
   We build elements with createElement + textContent (never innerHTML)
   so repo names/descriptions can't inject HTML into the page.
------------------------------------------------------------------- */
function formatDate(isoString) {
  if (!isoString) return "—";
  return new Date(isoString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatSize(kb) {
  return kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`;
}

/** Small helper: make an element with optional class and text. */
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function createRepoCard(repo) {
  const card = el("li", "repo-card");

  // Title (link to the repo)
  const title = el("h3", "repo-title");
  const link = el("a", "", repo.name);
  link.href = repo.html_url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  title.append(link);
  card.append(title);

  // Badges
  const badges = el("p", "repo-badges");
  if (repo.fork) badges.append(el("span", "badge", "Fork"));
  if (repo.archived) badges.append(el("span", "badge", "Archived"));
  if (repo.private) badges.append(el("span", "badge", "Private"));
  if (badges.children.length) card.append(badges);

  // Description
  card.append(el("p", "repo-description", repo.description ?? "No description."));

  // Details: label -> value
  const details = [
    ["Language", repo.language ?? "—"],
    ["Stars", repo.stargazers_count],
    ["Forks", repo.forks_count],
    ["Watchers", repo.watchers_count],
    ["Open issues", repo.open_issues_count],
    ["License", repo.license?.spdx_id ?? "None"],
    ["Default branch", repo.default_branch],
    ["Size", formatSize(repo.size)],
    ["Created", formatDate(repo.created_at)],
    ["Last pushed", formatDate(repo.pushed_at)],
    ["Last updated", formatDate(repo.updated_at)],
  ];

  const dl = el("dl", "repo-details");
  for (const [label, value] of details) {
    dl.append(el("dt", "", label), el("dd", "", String(value)));
  }
  card.append(dl);

  // Topics
  if (repo.topics?.length) {
    const topics = el("p", "repo-topics");
    for (const topic of repo.topics) topics.append(el("span", "badge", topic));
    card.append(topics);
  }

  // Homepage (only allow http/https links)
  if (repo.homepage && /^https?:\/\//i.test(repo.homepage)) {
    const home = el("p", "repo-homepage");
    const homeLink = el("a", "", "Project homepage");
    homeLink.href = repo.homepage;
    homeLink.target = "_blank";
    homeLink.rel = "noopener noreferrer";
    home.append(homeLink);
    card.append(home);
  }

  return card;
}

function renderRepos(repos) {
  repoList.replaceChildren(...repos.map(createRepoCard));
}

/* ------------------------------------------------------------------
   7. UI helpers + form submit
------------------------------------------------------------------- */
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  input.setAttribute("aria-invalid", "true");
  statusMessage.hidden = true;
}

function clearError() {
  errorMessage.hidden = true;
  input.removeAttribute("aria-invalid");
}

function showStatus(message) {
  statusMessage.textContent = message;
  statusMessage.hidden = false;
}

let currentRequest = null; // lets us cancel an older search

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = parseUsername(input.value);
  if (!username) {
    showError("Enter a valid GitHub username or profile URL.");
    return;
  }

  clearError();
  repoList.replaceChildren();
  showStatus(`Looking up ${username}…`);

  // Cancel any search still in flight (prevents old results overwriting new ones)
  currentRequest?.abort();
  const controller = new AbortController();
  currentRequest = controller;
  submitButton.disabled = true;

  try {
    const repos = await fetchRepos(username, controller.signal);

    if (repos.length === 0) {
      showStatus(`${username} has no public repositories.`);
      return;
    }

    renderRepos(repos);
    showStatus(`${username} has ${repos.length} public ${repos.length === 1 ? "repository" : "repositories"}.`);
  } catch (error) {
    if (error.name === "AbortError") return; // replaced by a newer search

    if (error instanceof GitHubError) {
      showError(error.message);
    } else {
      console.error(error);
      showError("Network problem. Check your connection and try again.");
    }
  } finally {
    // Only re-enable if this is still the latest request
    if (currentRequest === controller) {
      submitButton.disabled = false;
      currentRequest = null;
    }
  }
});