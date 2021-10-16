// Generates items to be placed in DOM
import { ProjectBar } from './projectbar';
import { Modal } from './modal';
import "./style.css";

const modal = Modal();

const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

const projectBar = ProjectBar(modal, mainContainer).generateProjects();

document.body.append(projectBar, mainContainer);