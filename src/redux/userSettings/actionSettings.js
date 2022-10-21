const generate = () => {
  return {
    type: 'GENERATE',
  };
};
const link = (e) => {
  return {
    type: 'LINK_TXT',
    payload: e.target.value,
  };
};

const bgColor = (e) => {
  return {
    type: 'BG_COLOR',
    payload: e.target.value,
  };
};
const fgColor = (e) => {
  return {
    type: 'FG_COLOR',
    payload: e.target.value,
  };
};

const size = (e) => {
  return {
    type: 'SIZE',
    payload: e.target.value,
  };
};

const level = (e) => {
  return {
    type: 'LEVEL',
    payload: e.target.value,
  };
};

const title = (e) => {
  return {
    type: 'TITLE',
    payload: e.target.value,
  };
};

export { link, bgColor, size, level, title, generate, fgColor };
