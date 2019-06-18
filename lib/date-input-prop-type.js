"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateInputPropType = exports.DATE_INPUT_FORMAT = void 0;
var dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
var DATE_INPUT_FORMAT = 'YYYY-MM-DD';
exports.DATE_INPUT_FORMAT = DATE_INPUT_FORMAT;

var dateInputPropType = function dateInputPropType() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var prop = props[propName];

  if (prop && !dateRegEx.test(prop)) {
    return new Error("".concat(propName, " needs to be \"").concat(DATE_INPUT_FORMAT, "\" format."));
  }
};

exports.dateInputPropType = dateInputPropType;