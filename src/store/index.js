import { createStore } from "redux";
import { getTypeTerms } from "../helpers/helpers";

const initState = {
  typesArr: [],
  currentTerms: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        typesArr: [...action.termsRaw],
        currentTerms: getTypeTerms(action.termsRaw, 1),
      };
    case "ADD":
      const newTypes = [...state.typesArr, action.newType];

      return {
        typesArr: newTypes,
        currentTerms: getTypeTerms(state.typesArr, 1),
      };
    case "CHANGE_SELECTED_TYPE":
      return {
        typesArr: state.typesArr,
        currentTerms: getTypeTerms(state.typesArr, action.selectedType),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
