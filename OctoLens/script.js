"use strict";

/* ------------------------------------------------------------------
   1. Grab the elements we need (once, at the top)
------------------------------------------------------------------- */
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const form = document.getElementById("search-form");
const input = document.getElementById("github-input");
const avatar = document.getElementById("search-avatar");
const errorMessage = document.getElementById("search-error");
const statusMessage = document.getElementById("search-status");

/* ------------------------------------------------------------------
   2. Theme toggle
   The <html data-theme="..."> attribute is the single source of truth.
   The CSS reads it; we just flip it and update the button's label.
------------------------------------------------------------------- */
function updateToggleLabel() {
  const isDark = root.dataset.theme === "dark";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
}

themeToggle.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { }
  updateToggleLabel();
});

updateToggleLabel();

/* ------------------------------------------------------------------
   3. Turn "whatever was typed" into a clean GitHub username
      "torvalds"                    -> "torvalds"
      "@torvalds"                   -> "torvalds"
      "https://github.com/torvalds" -> "torvalds"
      "   "                         -> null
   GitHub usernames: letters, digits, single hyphens, max 39 chars,
   can't start or end with a hyphen.
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
   Everything below belongs to the search form, which only exists
   on the homepage. On other pages `form` is null, so we skip it.
------------------------------------------------------------------- */
if (form && input && avatar) {

  /* ---- 4. The green circle ... (your existing code, unchanged) ---- */
  input.addEventListener("input", () => {
    const letter = input.value.trim().replace(/^@/, "").charAt(0).toUpperCase();
    avatar.textContent = letter || "A";
  });

  /* ---- 5. Handle the form submit ... (your existing code, unchanged) ---- */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const query = input.value.trim();

    if (!query) return;

    console.log("Searching for:", query);

    // Example: redirect to a search page
    window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
  });

} // end of search-form guard
/* ------------------------------------------------------------------
   4. The green circle shows the first letter typed (default "A")
------------------------------------------------------------------- */
input.addEventListener("input", () => {
  const letter = input.value.trim().replace(/^@/, "").charAt(0).toUpperCase();
  avatar.textContent = letter || "A";
});

/* ------------------------------------------------------------------
   5. Handle the form submit
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

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the browser reloading the page

  const username = parseUsername(input.value);

  if (!username) {
    showError("Enter a valid GitHub username or profile URL.");
    return;
  }

  clearError();

  // v1 placeholder. Next step: call the GitHub API here.
  // textContent (not innerHTML) keeps user input from being run as HTML.
  statusMessage.textContent = `Looking up ${username}… (results coming in v2)`;
  statusMessage.hidden = false;
});
