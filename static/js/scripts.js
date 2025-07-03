/**
 * Light and Dark Mode
 */
// Select the dark/light mode button and its inner elements.
const colorModeToggle = document.querySelector(".color-mode-toggle");
const sun = colorModeToggle.querySelector(".sun");
const moon = colorModeToggle.querySelector(".moon");
const body = document.body;

// Set initial state based on localStorage.
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  sun.classList.remove("visible");
  moon.classList.add("visible");
} else {
  body.classList.remove("dark-mode");
  sun.classList.add("visible");
  moon.classList.remove("visible");
}

// Toggle dark/light mode when the button is clicked.
colorModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
    sun.classList.remove("visible");
    moon.classList.add("visible");
  } else {
    localStorage.setItem("darkMode", "disabled");
    sun.classList.add("visible");
    moon.classList.remove("visible");
  }
});

/**
 * Name and pronunciation
 */
const nameParts = document.querySelectorAll(".name-part");

const audioFiles = {
  "first-name": new Audio("static/data/first-name.mp3"),
  "last-name": new Audio("static/data/last-name.mp3"),
};

nameParts.forEach((part) => {
  part.addEventListener("click", () => {
    const audio = audioFiles[part.id];
    audio.currentTime = 0;
    audio.play();
  });
});

/**
 * Burger
 */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("show"); // for showing/hiding the menu
});


/**
 * Email Obfuscation (hopefully)
 */
function sendEmail() {
  // Obfuscated email parts
  const user = "rahulr12";
  const domain = "illinois";
  const tld = "edu";

  // Construct and open mailto link
  const email = user + "@" + domain + "." + tld;
  window.location.href = "mailto:" + email;
}

/**
 * Section toast
 */

// Function to copy section link to clipboard
function copyLink(event, sectionId) {
  event.preventDefault();

  // Create the full URL with anchor
  const url =
    window.location.origin + window.location.pathname + "#" + sectionId;

  // Copy to clipboard
  navigator.clipboard
    .writeText(url)
    .then(function () {
      // Show success toast
      showToast("Link copied to clipboard!");
    })
    .catch(function () {
      // Fallback for older browsers
      const tempInput = document.createElement("input");
      tempInput.value = url;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      showToast("Link copied to clipboard!");
    });
}

// Function to show toast notification
function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector(".copy-toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement("div");
  toast.className = "copy-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide toast after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2000);
}

// Make entire heading clickable
document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".section-heading h2");
  headings.forEach((heading) => {
    heading.addEventListener("click", function () {
      const sectionId = this.parentElement.id;
      copyLink(event, sectionId);
    });
  });
});
