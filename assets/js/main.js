let toggler = document.querySelector("#toggler");
let aside = document.querySelector("aside");

toggler.addEventListener("click", () => {
  aside.classList.toggle("closed");
})

let themebtn = document.querySelector("#theme");

themebtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})