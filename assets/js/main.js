let toggler = document.querySelector("#toggler");
let aside = document.querySelector("aside");

toggler.addEventListener("click", () => {
  aside.classList.toggle("closed");
})