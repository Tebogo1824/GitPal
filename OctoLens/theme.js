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
const repoList = document.getElementById("repo-list"); // NEW: <ul id="repo-list"></ul>
const submitButton = form.querySelector('button[type="submit"]');

/* ------------------------------------------------------------------
   2. Theme toggle (unchanged)
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
  updateToggleLabel();
});

updateToggleLabel();