const getTypeTerms = (typesArr, selectedType) => {
  let selectedTypeTerms = null;

  for (let i = 0; i < typesArr.length; i++) {
    if (typesArr[i].type === selectedType) {
      selectedTypeTerms = typesArr[i].terms;
      break;
    }
  }

  let termsObj = {};
  selectedTypeTerms.forEach((term) => {
    if (termsObj[term]) {
      termsObj[term]++;
    } else {
      termsObj[term] = 1;
    }
  });

  return getTermsForChart(termsObj);
};

const getTermsForChart = (termsObj) => {
  const termsWithCount = Object.entries(termsObj).map((term) => {
    return {
      name: term[0],
      values: term[1],
    };
  });

  return termsWithCount;
};

export { getTypeTerms, getTermsForChart };
