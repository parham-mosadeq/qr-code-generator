export const initState = {
  generate: false,
  sizeState: '',
  titleState: '',
  bgColorState: '',
  fgColorState: '',
  valueState: '',
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GENERATE':
      return {
        ...state,
        generate: !state.generate,
      };
    case 'LINK_TXT':
      return {
        ...state,
        valueState: action.payload,
      };
    case 'BG_COLOR':
      return {
        ...state,
        bgColorState: action.payload,
      };
    case 'FG_COLOR':
      return {
        ...state,
        fgColorState: action.payload,
      };
    case 'SIZE':
      return {
        ...state,
        sizeState: action.payload,
      };
    case 'LEVEL':
      return {
        ...state,
        levelState: action.payload,
      };
    case 'TITLE':
      return {
        ...state,
        titleState: action.payload,
      };

    default:
      return state;
  }
};

export default settingsReducer;
