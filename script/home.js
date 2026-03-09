const issueCount = document.getElementById("issue-count");

const allButton = document.getElementById("all-button");
const openButton = document.getElementById("open-button");
const closedButton = document.getElementById("closed-button");

const searchField = document.getElementById("search-field");

let loading = false;

allButton.addEventListener("click", () => {
  allButton.classList.add("active");
  openButton.classList.remove("active");
  closedButton.classList.remove("active");
  loadIssues();
});

openButton.addEventListener("click", () => {
  openButton.classList.add("active");
  allButton.classList.remove("active");
  closedButton.classList.remove("active");
  loadIssues();
});

closedButton.addEventListener("click", () => {
  closedButton.classList.add("active");
  allButton.classList.remove("active");
  openButton.classList.remove("active");
  loadIssues();
});

