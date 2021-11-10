const navContainer = document.querySelector("nav-list");
const triggerOpens = document.querySelectorAll(".trigger-open");
const triggerCloses = document.querySelectorAll(".trigger-close");
const triggerToggle = document.querySelectorAll(".trigger-toggle");

triggerOpens.forEach((triggerOpen) => {
  triggerOpen.addEventListener("click", () => {
    toggleTrigger(navContainer);
  });
});
triggerCloses.forEach((triggerClose) => {
  triggerClose.addEventListener("click", () => {
    closeTrigger(navContainer);
  });
});

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
