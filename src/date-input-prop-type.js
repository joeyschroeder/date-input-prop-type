const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;

export const DATE_INPUT_FORMAT = 'YYYY-MM-DD';

export const dateInputPropType = (props = {}, propName = '') => {
  const prop = props[propName];
  if (prop && !dateRegEx.test(prop)) {
    return new Error(`${propName} needs to be "${DATE_INPUT_FORMAT}" format.`);
  }
};
