const Todo = (t, des, dat, stat = false) => {
  let title = t;
  let desc = des;
  let date = dat;
  let done = stat;

  const getTitle = () => {
    return title;
  }

  const getDesc = () => {
    return desc !== null ? desc : "";
  }
  
  const getDate = () => {
    return date !== null ? date : "";
  }

  const getStatus = () => {
    return done;
  }

  return {getTitle, getDesc, getDate, getStatus};
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

const Deadline = (title, desc = null, by = null, done = false) => {

  const prototype = Todo(title, desc, by, done);
  const getDateType = () => {
    return "end";
  }

  const getStringRep = () => {
    return `${title}: ${desc} by ${by}`;
  }

  const toObj = () => {
    return {title, desc, by, done}
  }

  const toggleStatus = () => {
    if (done) {
      done = false;
    } else {
      done = true;
    }
  }

  return Object.assign({}, prototype, {getDateType, getStringRep, toObj, toggleStatus});
}

export {Event, Deadline};