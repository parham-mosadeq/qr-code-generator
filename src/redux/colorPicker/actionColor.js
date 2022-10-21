import { notify } from "../../functions/functions";

const pickColor = (e) => {
  return {
    type: 'PICK_COLOR',
    payload: e.target.value,
  };
};

const copy = () => {
  // notify('copied')
  return {
    type: 'COPY',
  };
};

export { copy, pickColor };
