// Generates items to be placed in DOM
import { ProjectBar } from './projectbar';
import { Modal } from './modal';
import "./style.css";

const header = document.createElement("h1");
header.textContent = "TodoList";

const modal = Modal();

const bodyContainer = document.createElement("div");
bodyContainer.classList.add("body-container");

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const projectBar = ProjectBar(modal, mainContainer).generateProjects();

bodyContainer.append(projectBar, mainContainer);
document.body.append(header, bodyContainer);