/* function to handle toggle states */

function toggleTheme() {
  document.body.className = document.body.classList.contains("light-theme") ? "dark-theme" : "light-theme";
}

function handleToggle() {
  const toggle = document.querySelector("[data-toggle]");

  toggle.addEventListener("change", toggleTheme);
}

handleToggle();