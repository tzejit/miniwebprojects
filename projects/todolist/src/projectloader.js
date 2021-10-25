// Generates project items to be placed in DOM
import {Project} from './project';
import "./style.css"


const ProjectLoader = (title, mainContainer, modal) => {

  let project = Project(title);
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");
  const doneContainer = document.createElement("div");
  doneContainer.classList.add("done-container");
  mainContainer.innerText = "";
  mainContainer.append(listContainer, doneContainer);

  const generateContents = () => {
    listContainer.textContent = "";
    doneContainer.textContent = "";
    let c = project.getContents();
    for (let i in c) {
      if (!c[i]["done"]) {
        listContainer.appendChild(createDeadlineView(c[i]));
      } else {
        doneContainer.appendChild(createDeadlineView(c[i]));
      }
    }
    listContainer.appendChild(createDeadlineButton());
  }

  const createDeadlineButton = () => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("new-task");
    const but = document.createElement("button");
    but.innerText = "Add a new task";
    but.classList.add("add-button");

    but.addEventListener("click", () => {
      inputContainer.innerText = "";
      inputContainer.appendChild(createDeadlineInput());
    })
    inputContainer.appendChild(but);
    return inputContainer;
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
      inputContainer.remove();
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
        title = c[i].value.trim();
      } else if (c[i].classList.contains("desc")) {
        desc = c[i].value.trim();
      } else if (c[i].classList.contains("date")) {
        date = c[i].value.trim();
      }
    }
    if (!(project.checkValidInput(title, desc, date))) {
      modal.setEmptyModal("Task title");
      modal.showModal();
      return
    }
    if (!(project.addTodo(title, desc, date))) {
      modal.setRepeatTaskModal(title, desc, date);
      modal.showModal();
      return
    };
  }

  const createDeadlineView = (obj) => {
    const singleTaskView = document.createElement("div");
    singleTaskView.classList.add("single-task-view");

    const headerTaskView = document.createElement("div");
    headerTaskView.classList.add("header-task-view");

    const done = document.createElement("input");
    done.type = "checkbox";
    done.classList.add("toggle-status");
    done.checked = obj["done"];
    if (obj["done"]) {
      singleTaskView.classList.add("done");
    }
    const title = document.createElement("div");
    title.innerText = obj["title"];
    title.classList.add("title-label");
    const desc = document.createElement("div");
    desc.innerText = obj["desc"];
    desc.classList.add("desc-task-view");
    const date = document.createElement("div");
    date.innerText = obj["by"] == "" ? "": `Due by: ${obj["by"]}`;
    date.classList.add("date-label");

    const del = document.createElement("button");
    del.innerText = "delete";
    del.addEventListener("click", () => {
      singleTaskView.remove();
      project.removeTodo(obj["title"], obj["desc"], obj["by"]);
    })

    done.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        project.toggleTodo(obj["title"], obj["desc"], obj["by"], true);
      } else {
        project.toggleTodo(obj["title"], obj["desc"], obj["by"], false);
      }
      generateContents();
    })

    singleTaskView.addEventListener("click", (e) => {
      let em = parseFloat(getComputedStyle(desc.parentElement).fontSize);
      let scrHeight = desc.scrollHeight/em + 2 + "em"
      if (desc.innerText != "" && !e.target.classList.contains("toggle-status")) {
        if (window.getComputedStyle(desc).maxHeight != "0px") {
          desc.style.maxHeight = null; 
        } else { 
          desc.style.maxHeight = scrHeight;
        }
        singleTaskView.classList.toggle("visible");
      }
    })

    headerTaskView.append(done, title, date, del);
    singleTaskView.append(headerTaskView, desc);
    return singleTaskView;
  }

  return {generateContents};
}

export {ProjectLoader};