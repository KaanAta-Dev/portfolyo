const themeButton = document.querySelector(".theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
