const pickColor = (e) => {
  return {
    type: 'PICK_COLOR',
    payload: e.target.value,
  };
};

const copy = () => {
  return {
    type: 'COPY',
  };
};

export { copy, pickColor };
