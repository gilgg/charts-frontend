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
      const newTypesArr = state.typesArr.map((doc) => {
        if (doc.type === action.newDoc.type) {
          return {
            type: doc.type,
            terms: doc.terms.concat(action.newDoc.terms),
          };
        }
        return doc;
      });

      return {
        typesArr: newTypesArr,
        currentTerms: getTypeTerms(newTypesArr, 1),
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
