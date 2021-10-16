// Generates items to be placed in DOM
import {Project} from './project';
import {Modal} from './modal';
import "./style.css"


const ProjectLoader = (title, mainContainer) => {

  let modal = Modal();
  let project = Project(title);
  const listContainer = document.createElement("div");
  mainContainer.appendChild(listContainer);

  const generateContents = () => {
    listContainer.textContent = "";
    let c = project.getContents();
    for (let i in c) {
      listContainer.appendChild(createDeadlineView(c[i]));
    }
    listContainer.appendChild(createDeadlineInput());
  }

  const createDeadlineInput = () => {
    const inputContainer = document.createElement("div");
    const title = document.createElement("input");
    title.classList.add("title");
    title.placeholder = "Title"
    const desc = document.createElement("input");
    desc.classList.add("desc");
    desc.placeholder = "Description"
    const date = document.createElement("input");
    date.type = "date";
    date.classList.add("date")
    const submit = document.createElement("button");
    submit.innerText = "Add";
    submit.addEventListener("click", () => {
      saveDeadline(inputContainer);
      generateContents();
    });
    inputContainer.append(title, desc, date, submit);
    return inputContainer;
  }

  // takes the input wrapper
  const saveDeadline = (container) => {
    const c = container.children;
    let title, desc, date = null;
    for (let i = 0; i < c.length; i++) {
      if (c[i].classList.contains("title")) {
        title = c[i].value;
      } else if (c[i].classList.contains("desc")) {
        desc = c[i].value;
      } else if (c[i].classList.contains("date")) {
        date = c[i].value;
      }
    }
    if (!(project.addTodo(title, desc, date))) {
      modal.setRepeatModal(title, desc, date);
      modal.showModal();
    };
  }

  const createDeadlineView = (obj) => {
    const singleTaskView = document.createElement("div");
    singleTaskView.classList.add("single-task-view");

    const headerTaskView = document.createElement("div");
    headerTaskView.classList.add("header-task-view");

    const title = document.createElement("div");
    title.innerText = obj["title"];
    const desc = document.createElement("div");
    desc.innerText = obj["desc"];
    const date = document.createElement("div");
    date.innerText = obj["by"] == undefined ? "": obj["by"];

    const del = document.createElement("button");
    del.innerText = "delete";
    del.addEventListener("click", () => {
      singleTaskView.remove();
      project.removeTodo(obj["title"], obj["desc"], obj["by"]);
    })

    headerTaskView.append(title, date, del);
    singleTaskView.append(headerTaskView, desc);
    return singleTaskView;
  }

  return {generateContents};
}

export {ProjectLoader};