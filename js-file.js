function typeWriter(element, txt, speed) {
  let i = 0;
  function type() {
    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

typeWriter(document.querySelector(".title"), document.querySelector(".title").dataset.text, 100);

document.querySelectorAll(".collapsible").forEach((button) => {
  button.addEventListener("click", () => {
    let dropdown = button.nextElementSibling;
    let dropdownstyle = window.getComputedStyle(dropdown);
    button.classList.toggle("active");
    if (dropdownstyle.maxHeight != "0px")
      dropdown.style.maxHeight = null; 
    else 
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      
  })
})
