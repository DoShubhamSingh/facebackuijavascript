const faceEls = document.querySelectorAll(".face");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedFace = "";

faceEls.forEach((faceEl) => {
  faceEl.addEventListener("click", (event) => {
    removeActive();
    selectedFace =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedFace !== "") {
    containerEl.innerHTML = `
        <span>Thank you!</span>
        <br>
        <br>
        <span>Feedback: ${selectedFace}</span>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  faceEls.forEach((faceEl) => {
    faceEl.classList.remove("active");
  });
}