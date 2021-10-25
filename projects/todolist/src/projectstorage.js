const ProjectStorage = () => {
  const PROJECTLISTKEY = "project-keys";
  const PROJECTHOME = "home";
  let projects = window.localStorage.getItem(PROJECTLISTKEY) == null ? {home: PROJECTHOME} : JSON.parse(window.localStorage.getItem(PROJECTLISTKEY));
  window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));

  const getProjects = () => {
    return projects;
  }

  const addProject = (name) => {
    if (!(name in projects)) {
      projects[name] = name;
      saveChange();
      return true;
    }
    return false;
  }

  const removeProject = (name) => {
    delete projects[name];
    saveChange();
    localStorage.removeItem(name);
  }

  const validTitle = (name) => {
    if (name == "") {
      return false;
    }
    return true;
  }

  const saveChange = () => {
    window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));
  }

  const getProjectHome = () => {
    return PROJECTHOME;
  }

  return {getProjects, addProject, getProjectHome, validTitle, removeProject};

}

export {ProjectStorage,};