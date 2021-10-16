import { ProjectStorage } from "./projectstorage";
import { ProjectLoader } from "./projectloader";

const ProjectBar = (modal, mainContainer) => {
  
  //initialization
  const storage = ProjectStorage();
  let currentActive = storage.getProjectHome();
  const projectBar  = document.createElement("div");
  projectBar.classList.add("project-bar");
  const projectList = document.createElement("ul");
  projectBar.appendChild(projectList);
  ProjectLoader(currentActive, mainContainer, modal).generateContents();

  const generateProjects = () => {
    projectList.textContent = "";
    for (let i in storage.getProjects()) {
      const projectItem = document.createElement("li");
      projectItem.innerText = i;
      projectItem.dataset.name = i;
      projectItem.classList.add(i);
      if (i == currentActive) {
        projectItem.classList.toggle("active");
      }
      projectItem.addEventListener("click", ()=> {
        ProjectLoader(i, mainContainer, modal).generateContents();
        document.querySelector(`.${currentActive}`).classList.toggle("active");
        currentActive = i;
        document.querySelector(`.${currentActive}`).classList.toggle("active");
      })
      projectList.appendChild(projectItem);
    }
    projectBar.appendChild(createProjectInput());
    ProjectLoader(currentActive, mainContainer, modal).generateContents();
    return projectBar;
  }

  const createProjectInput = () => {
    const inputContainer = document.createElement("div");
    const title = document.createElement("input");
    title.classList.add("project-name");
    title.placeholder = "Project name"
    const submit = document.createElement("button");
    submit.innerText = "Add";
    submit.addEventListener("click", () => {
      saveProject(inputContainer)
      inputContainer.remove();
      currentActive = inputContainer.firstChild.value.trim();
      generateProjects();
    });
    inputContainer.append(title, submit);
    return inputContainer;
  }

  const saveProject = (input) => {
    let title = input.firstChild.value.trim()
    if (!(storage.addProject(title))) {
      modal.setRepeatModal(title);
      modal.showModal();
    }
  }

  return { generateProjects, createProjectInput};
}

export {ProjectBar};