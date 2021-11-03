const body = document.querySelector("body");
const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelectorAll(".modal");
const modalContent = [];
const modalOpens = document.querySelectorAll(".open-modal");
const modalCloses = document.querySelectorAll(".close-modal");

modalOpens.forEach((modalOpen) => {
  modalOpen.addEventListener("click", () => {
    openModal();
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    closeModal();
  });
});
console.log("sd");

/* ***** Functions ***** */

function openModal() {
  body.classList.add("modal-active");
  openTrigger(modalContainer);
}
function closeModal() {
  body.classList.remove("modal-active");
  closeTrigger(modalContainer);
}
function openTrigger(elem) {
  if (elem.classList.contains("close")) {
    elem.classList.remove("close");
  }
  elem.classList.add("open");
}

function closeTrigger(elem) {
  if (elem.classList.contains("open")) {
    elem.classList.remove("open");
  }
  elem.classList.add("close");
}

function toggleTrigger(elem) {
  if (elem.classList.contains("open")) {
    elem.classList.remove("open");
    elem.classList.add("close");
  } else {
    elem.classList.remove("close");
    elem.classList.add("open");
  }
}
