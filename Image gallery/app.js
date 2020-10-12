const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelectorAll(".thumb-bar");

const btn = document.querySelector("#dark");
const btn2 = document.querySelector("#flip");
const overlay = document.querySelector(".overlay");

/* Looping through images */

/* Wiring up the Darken/Lighten button */
thumbBar.forEach((imgs) => {
  imgs.onclick = function (e) {
    displayedImage.src = e.target.src;
  };
});
btn.onclick = function () {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
};
btn2.onclick = function () {
  const btn2class = btn2.getAttribute("class");
  if (btn2class === "flip") {
    displayedImage.style.transform = "rotate(180deg)";
    btn2.textContent = "Fliped";
    btn2.setAttribute("class", "Fliped");
  } else {
    btn2.textContent = "Flip";
    displayedImage.style.transform = "rotate(360deg)";
    btn2.setAttribute("class", "flip");
  }
};
