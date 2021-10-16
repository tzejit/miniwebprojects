import {Deadline} from './todo';


const Project = (t, des = null) => {
  let projTitle = t;
  let todolist = JSON.parse(window.localStorage.getItem(projTitle)) == null ? {} : JSON.parse(window.localStorage.getItem(projTitle));
  let desc = des;
  window.localStorage.setItem(projTitle, JSON.stringify(todolist));

  const addTodo = (title, desc, by) => {
    let task = Deadline(title, desc, by);
    if (!(task.getStringRep() in todolist)) {
      todolist[task.getStringRep()] = task.toObj();
      saveChange(projTitle);
      return true;
    }
    return false;
  }

  const removeTodo = (title, desc, by) => {
    let task = Deadline(title, desc, by);
    delete todolist[task.getStringRep()];
    saveChange(projTitle);
  }

  const saveChange = (title) => {
    window.localStorage.setItem(title, JSON.stringify(todolist));
  }

  const getContents = () => {
    return todolist;
  }

  return {addTodo, removeTodo, getContents};
}

export {Project};