import { notify } from '../../functions/functions';

const initState = {
  pickedColor: '',
  copy: '#000',
};

const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PICK_COLOR':
      return {
        ...state,
        pickedColor: action.payload,
      };

    case 'COPY':
      notify('copied', 'success');
      return {
        ...state,
        copy: navigator.clipboard.writeText(state.pickedColor),
      };

    default:
      return {
        ...state,
      };
  }
};

export default colorReducer;
