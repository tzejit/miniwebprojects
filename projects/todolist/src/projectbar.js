import { ProjectStorage } from "./projectstorage";
import { ProjectLoader } from "./projectloader";

const ProjectBar = (modal, mainContainer) => {
  
  //initialization
  const storage = ProjectStorage();
  const NUMBERINPUT = "%NUM%";
  const SPACEINPUT = "%SPACE%"
  let currentActive = storage.getProjectHome();
  const projectBar  = document.createElement("div");
  projectBar.classList.add("project-bar");
  ProjectLoader(currentActive, mainContainer, modal).generateContents();

  const generateProjects = () => {
    projectBar.textContent = "";
    const projectList = document.createElement("div");
    projectList.classList.add("project-list");
    for (let i in storage.getProjects()) {
      const projectWrapper = document.createElement("div");
      projectWrapper.classList.add("project-wrapper");
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerText = i.replaceAll(SPACEINPUT, " ").replaceAll(NUMBERINPUT,"");
      projectWrapper.dataset.name = i;
      projectWrapper.classList.add(i);
      if (i == currentActive) {
        projectWrapper.classList.toggle("active");
      }
      projectItem.addEventListener("click", ()=> {
        ProjectLoader(i, mainContainer, modal).generateContents();
        document.querySelector(`.${currentActive}`).classList.toggle("active");
        currentActive = i;
        document.querySelector(`.${currentActive}`).classList.toggle("active");
      })
      if (i == storage.getProjectHome()) {
        projectWrapper.append(projectItem);
      } else {
        projectWrapper.append(projectItem, createProjectRemoveButton(projectWrapper));
      }
      projectList.append(projectWrapper);
    }
    projectBar.append(projectList, createProjectButton());
    ProjectLoader(currentActive, mainContainer, modal).generateContents();
    return projectBar;
  }

  const createProjectRemoveButton =(wrapper) => {
    const projectRemoveButton = document.createElement("span");
    projectRemoveButton.innerHTML = "X";
    projectRemoveButton.classList.add("remove-project");
    projectRemoveButton.addEventListener("click", () => {
      wrapper.remove();
      storage.removeProject(wrapper.dataset.name);
      if (currentActive == wrapper.dataset.name) {
        currentActive = storage.getProjectHome();
        generateProjects();
      }
    })
    return projectRemoveButton;
  }

  const createProjectButton = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("new-project");
    const but = document.createElement("button");
    but.innerText = "Add a new project";
    but.classList.add("add-button");

    but.addEventListener("click", () => {
      inputContainer.innerText = "";
      inputContainer.appendChild(createProjectInput());
    })
    inputContainer.appendChild(but);
    return inputContainer;
  }

  const createProjectInput = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");
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
    let title = input.firstChild.value.trim().replace(/\s/g, SPACEINPUT);//.replace(/(\d+)/, NUMBERINPUT + "$1" + NUMBERINPUT )
    if (title.match(/\d/)) {
      title = title + NUMBERINPUT;
    }
    if (!(storage.validTitle(title))) {
      modal.setEmptyModal("Project title");
      modal.showModal();
      return
    }
    if (!(storage.addProject(title))) {
      modal.setRepeatProjectModal(title);
      modal.showModal();
      return
    }
  }

  return { generateProjects, createProjectInput};
}

export {ProjectBar};