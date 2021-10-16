const Todo = (t, des, dat) => {
  let title = t;
  let desc = des;
  let date = dat;

  const getTitle = () => {
    return title;
  }

  const getDesc = () => {
    return desc !== null ? desc : "";
  }
  
  const getDate = () => {
    return date !== null ? date : "";
  }

  return {getTitle, getDesc, getDate};
};

const Event = (title, desc = null, at = null) => {

  const prototype = Todo(title, desc, at);
  const getDateType = () => {
    return "start";
  }

  const getStringRep = () => {
    return `${title}: ${desc} at ${at}`;
  }

  return Object.assign({}, prototype, {getDateType, getStringRep});
}

const Deadline = (title, desc = null, by = null) => {

  const prototype = Todo(title, desc, by);
  const getDateType = () => {
    return "end";
  }

  const getStringRep = () => {
    return `${title}: ${desc} by ${by}`;
  }

  const toObj = () => {
    return {title, desc, by}
  }

  return Object.assign({}, prototype, {getDateType, getStringRep, toObj});
}

export {Event, Deadline};