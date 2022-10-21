import ShowMsg from '../../components/ShowMsg';

const initState = {
  pickedColor: '',
};

const colorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PICK_COLOR':
      return {
        ...state,
        pickedColor: action.payload,
      };

    case 'COPY':
      console.log(state.pickedColor);
      <ShowMsg msg='copied' type='suc' />;
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
