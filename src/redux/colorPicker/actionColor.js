const pickColor = (e) => {
  return {
    type: 'PICK_COLOR',
    payload: e.target.value,
  };
};

const copy = () => {
  console.log(1244);
  return {
    type: 'COPY',
  };
};

export { copy, pickColor };
