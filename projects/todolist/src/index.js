// Generates items to be placed in DOM
import { ProjectLoader } from './projectloader';
import "./style.css"

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const projectBar  = document.createElement("ul");
projectBar.classList.add("project-bar");
const projectItem = document.createElement("li");
projectItem.innerText = "Home";
projectItem.dataset.name = "default";
projectBar.appendChild(projectItem);

document.body.append(projectBar,mainContainer);

let p = ProjectLoader("default", mainContainer);
p.generateContents();