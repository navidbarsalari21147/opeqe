import faIR from './fa-ir';

const languages = {
  [faIR.locale]: faIR
};

let activeLanguage = null;

const localize = (key, params = {}) => {
  let result = activeLanguage.strings[key];

  for (const param in params) {
    let val = params[param];
    if (val === undefined || val === null) {
      val = `'خالی'`;
    }
    result = result.replace(`{${param}}`, val);
  }

  return result;
};

const setActiveLanguage = locale => {
  activeLanguage = languages[locale];
};

export default {
  localize,
  setActiveLanguage
};
