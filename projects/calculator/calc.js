let total = 0;
const disp = document.querySelector(".display");

function addDisplay(x) {
  total = total * 10 + parseInt(x);
  disp.innerText = total;
}

document.querySelectorAll(".num").forEach(but => {
  but.addEventListener("click", () => addDisplay(but.innerText))
})

document.addEventListener("keypress", (k) => {
  if (parseInt(k.key) >=0 && parseInt(k.key) <= 9) {
    addDisplay(k.key)
  } 
})
