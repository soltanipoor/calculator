const buttons = document.querySelectorAll("#calculator button.number");
const result = document.querySelector("#calculator .result");

function handleNumbers() {
  if (result.textContent.trim() === "0") {
    result.textContent = this.textContent;
  } else {
    result.textContent = result.textContent + this.textContent;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", handleNumbers);
});
