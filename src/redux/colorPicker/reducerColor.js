const initState = {
  pickedColor: '',
  showMsgs: false,
};

const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PICK_COLOR':
      return {
        ...state,
        pickedColor: action.payload,
      };

    case 'COPY':
      return {
        ...state,
        copy: navigator.clipboard.writeText(state.pickedColor),
        showMsgs: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default colorReducer;
