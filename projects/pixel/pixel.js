let container = document.querySelector(".grid-container");
let colour = document.querySelector(".colour-sel");
let bgcolour = document.querySelector(".bg-sel");
let grid = true;
let add = true;
let remove = false;
let darken = false;
let lighten = false;
let pressed = false;
let inputNum = document.querySelector(".input-size");
let submitBut = document.querySelector(".submit");
let addBut = document.querySelector(".add");
let darkenBut = document.querySelector(".darken");
let lightenBut = document.querySelector(".lighten");
let removeBut = document.querySelector(".remove");
let gridlineBut = document.querySelector(".remove-gridline");

function toggle(button) {
  switch(button.classList[0]) {
    case "add":
      add = true;
      remove = false;
      darken = false;
      lighten = false;
      addBut.classList.add("active");
      darkenBut.classList.remove("active");
      removeBut.classList.remove("active");
      lightenBut.classList.remove("active");
      break;
    case "remove":
      add = false;
      remove = true;
      darken = false;
      lighten = false;
      addBut.classList.remove("active");
      darkenBut.classList.remove("active");
      removeBut.classList.add("active");
      lightenBut.classList.remove("active");
      break;
    case "darken":
      add = false;
      remove = false;
      darken = true;
      lighten = false;
      addBut.classList.remove("active");
      darkenBut.classList.add("active");
      removeBut.classList.remove("active");
      lightenBut.classList.remove("active");
      break;
    case "lighten":
      add = false;
      remove = false;
      darken = false;
      lighten = true;
      addBut.classList.remove("active");
      darkenBut.classList.remove("active");
      removeBut.classList.remove("active");
      lightenBut.classList.add("active");
      break;
  }
}

function gridGenerator(num, container) {
  const modifyBox = (gridBox) => {
    if (add) {
        gridBox.classList.add("active");
        gridBox.style.backgroundColor = colour.value;
    } else if (darken) {
        if(gridBox.classList.contains("active")){
          if (gridBox.style.filter) {
            gridBox.style.filter = `brightness(${gridBox.style.filter.match(/[\d\.]+/)-0.05})`;
          } else {
            gridBox.style.filter = `brightness(0.95)`;
          }
        }
    } else if (lighten) {
      if(gridBox.classList.contains("active")){
        if (gridBox.style.filter) {
          gridBox.style.filter = `brightness(${+gridBox.style.filter.match(/[\d\.]+/)+0.05})`;
        } else {
          gridBox.style.filter = `brightness(1.05)`;
        }
      }
    } else if (remove) {
      gridBox.classList.remove("active");
      if (gridBox.style.border == 'none') {
        gridBox.style = ""; 
        gridBox.style.border = 'none';
      } else {
        gridBox.style = ""; 
      }
    }
  }

  for (let i = 0; i < num*num; i++ ) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridBox.addEventListener("mousedown", () => {
      pressed = true
      modifyBox(gridBox)
    })
    gridBox.addEventListener("mouseup", () => {
      pressed = false
    })
    gridBox.addEventListener("mouseenter", ()=>{
      if (pressed) {
        modifyBox(gridBox)
      }
      if (!gridBox.classList.contains("active")) {
        gridBox.style.backgroundColor = "rgb(214, 230, 245)"; 
      }
    })
    gridBox.addEventListener("mouseleave", ()=>{
      if (!gridBox.classList.contains("active")) {
        gridBox.style.backgroundColor = ""; 
      }
    })
    container.dataset.num = num;
    container.appendChild(gridBox);
  }

  container.style.gridTemplateColumns = `repeat(${num} ,auto)`;
  let h = document.documentElement.clientHeight > document.documentElement.clientWidth ? "vw" : "vh"
  document.documentElement.style.setProperty('--grid-size', 70/num + h);
  if (h == "vw") {
    document.documentElement.style.setProperty('--font-size', 0.02*document.documentElement.clientWidth+ "px")
  }
  else {
    document.documentElement.style.setProperty('--font-size', 0.02*document.documentElement.clientHeight + "px")
  }
}

gridGenerator(16, container);


window.addEventListener('resize', ()=> {
  let h = document.documentElement.clientHeight > document.documentElement.clientWidth ? "vw" : "vh"
  document.documentElement.style.setProperty('--grid-size', 70/container.dataset.num + h);
  if (h == "vw") {
    document.documentElement.style.setProperty('--font-size', 0.02*document.documentElement.clientWidth+ "px")
  }
  else {
    document.documentElement.style.setProperty('--font-size', 0.02*document.documentElement.clientHeight + "px")
  }

});

addBut.addEventListener("click", ()=> {
  toggle(addBut);
})

darkenBut.addEventListener("click", ()=> {
  toggle(darkenBut);
})

lightenBut.addEventListener("click", ()=> {
  toggle(lightenBut);
})

removeBut.addEventListener("click", ()=> {
  toggle(removeBut);
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

