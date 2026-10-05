"use strict";

// Wrapped in a function so its variable names don't clash with script.js
// when both files are loaded on the same page.
(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // No toggle button on this page? Nothing to do.
  if (!themeToggle) return;

  function updateToggleLabel() {
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  themeToggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    updateToggleLabel();

    // Remember the choice so every page (and the next visit) uses it.
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (e.g. some private modes); the toggle still works.
    }
  });

  updateToggleLabel();
})();