const ProjectStorage = () => {
  const PROJECTLISTKEY = "project-keys";
  const PROJECTHOME = "home"
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
  }

  const saveChange = () => {
    window.localStorage.setItem(PROJECTLISTKEY, JSON.stringify(projects));
  }

  const getProjectHome = () => {
    return PROJECTHOME;
  }

  return {getProjects, addProject, getProjectHome};

}

export {ProjectStorage};