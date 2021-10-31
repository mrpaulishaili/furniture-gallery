// FUNCTIONS
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", () => {
    alert("Modal requested: access to open account!");
  });
});
