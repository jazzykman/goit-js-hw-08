const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();
  outputEl.textContent = inputValue ? inputValue : "Anonymous";
});
