export const initialState = {
  currentStep: 1,
  data: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    newsletter: false,
    bio: ''
  },
  errors: {},
  touchedNext: false
};

export default function reducer(state, action){
  switch(action.type){
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value }
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1, touchedNext: false };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(1, state.currentStep - 1), touchedNext: false };
    case 'SET_STEP':
      return { ...state, currentStep: action.step };
    case 'MARK_TRIED_NEXT':
      return { ...state, touchedNext: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
