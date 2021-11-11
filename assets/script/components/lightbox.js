const lightBoxBg = document.createElement("div");
lightBoxBg.id = "lightBoxBg";
document.body.appendChild(lightBoxBg);

const images = document.querySelectorAll(".zoom-img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightBoxBg.classList.add("active");
    const lightBoxImg = document.createElement("img");
    lightBoxImg.src = "/images/194648.jpg";
    lightBoxImg.id = "lightBoxImg";
    while (lightBoxBg.firstChild) {
      lightBox.removeChild(lightBoxBg.firstChild);
    }
    lightBoxBg.appendChild(lightBoxImg);
  });
});

lightBoxBg.addEventListener("click", (e) => {
  lightBoxBg.classList.remove("active");
});
