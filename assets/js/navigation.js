let openButton = document.querySelector(".circle__open");
let container = document.querySelector(".container");
let closeButton = document.querySelector(".circle__close");
openButton.addEventListener("click", (e) => {
  container.classList.add("show_nav");
  closeButton.style.display = "block";
  e.currentTarget.style.display = "none";
});
closeButton.addEventListener("click", (e) => {
  container.classList.remove("show_nav");
  //openButton.style.display="block";
  openButton.style.cssText = "display:block;transition: transform 5s;";
  container.style.cssText =
    " transform-origin: top left;transition: transform .5s linear;";
  e.currentTarget.style.cssText = "display:none;transition: top 5s";
});
