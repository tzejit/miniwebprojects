let container = document.querySelector(".grid-container");
let colour = document.querySelector(".colour-sel");
let bgcolour = document.querySelector(".bg-sel");
let grid = true;
let add = true;
let darken = false;
let lighten = false;
function gridGenerator(num, container) {
  for (let i = 0; i < num*num; i++ ) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.addEventListener("click", (e)=>{
      console.log(e.button);
      if (!gridBox.classList.contains("active")) {
        if (add) {
          gridBox.classList.toggle("active");
          gridBox.style.backgroundColor = colour.value;
        } 
      } else if (darken) {
        if (gridBox.style.filter) {
          gridBox.style.filter = `brightness(${gridBox.style.filter.match(/[\d\.]+/)-0.05})`;
        } else {
          gridBox.style.filter = `brightness(0.95)`;
        }
      } else if (lighten) {
        if (gridBox.style.filter) {
          gridBox.style.filter = `brightness(${+gridBox.style.filter.match(/[\d\.]+/)+0.05})`;
        } else {
          gridBox.style.filter = `brightness(1.05)`;
        }
      } else if (add) {
        gridBox.classList.toggle("active");
        gridBox.style = ""; 
      }
    })
    gridBox.addEventListener("mouseenter", ()=>{
      if (!gridBox.classList.contains("active")) {
        gridBox.style.backgroundColor = "rgb(214, 230, 245)"; 
      }
    })
    gridBox.addEventListener("mouseleave", ()=>{
      if (!gridBox.classList.contains("active")) {
        gridBox.style.backgroundColor = ""; 
      }
    })
    container.appendChild(gridBox);
  }
  container.style.gridTemplateColumns = `repeat(${num} ,auto)`;
  document.documentElement.style.setProperty('--grid-size', 80/num + "vh");
}

gridGenerator(16, container);
let inputNum = document.querySelector(".input-size");
let submitBut = document.querySelector(".submit");
let addBut = document.querySelector(".add");
let darkenBut = document.querySelector(".darken");
let lightenBut = document.querySelector(".lighten");
let gridlineBut = document.querySelector(".remove-gridline");

addBut.addEventListener("click", ()=> {
  darken = false;
  add = true;
  lighten = false;
  addBut.classList.add("active");
  darkenBut.classList.remove("active");
  lightenBut.classList.remove("active");
})

darkenBut.addEventListener("click", ()=> {
  darken = true;
  add = false;
  lighten = false;
  addBut.classList.remove("active");
  darkenBut.classList.add("active");
  lightenBut.classList.remove("active");
})

lightenBut.addEventListener("click", ()=> {
  darken = false;
  add = false;
  lighten = true;
  addBut.classList.remove("active");
  darkenBut.classList.remove("active");
  lightenBut.classList.add("active");
})

document.querySelector(".input-size").addEventListener("input", ()=>{
  submitBut.textContent = `Reset with ${inputNum.value}x${inputNum.value}`;
})

submitBut.addEventListener("click", ()=> {
  container.innerHTML = '';
  gridGenerator(inputNum.value, container);
})

gridlineBut.addEventListener("click", ()=> {
  grid = !grid;
  gridlineBut.classList.toggle("active");
  if (grid === true) {
    document.querySelectorAll(".grid-box").forEach((box)=> {
      box.style.border = "";
    })
  } else {
    document.querySelectorAll(".grid-box").forEach((box)=> {
      box.style.border = "none";
    })
  }
})

bgcolour.addEventListener("input", ()=> {
  document.documentElement.style.setProperty('--background-colour', bgcolour.value);
})

document.querySelector(".download").addEventListener("click", ()=> {
  html2canvas(document.querySelector(".grid-container")).then(canvas => {
    let link = document.createElement('a');
    link.download = 'pixels.png';
    link.href = canvas.toDataURL();
    link.click();
  });
})

