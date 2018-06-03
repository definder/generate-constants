'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONSTANT_NAMESPACE = process.env.CONSTANT_NAMESPACE || 'Main';
var CONSTANT_SEPARATOR = process.env.CONSTANT_SEPARATOR || '/';
var __DEV__ = process.env.NODE_ENV === 'development';

exports.default = function () {
  for (var _len = arguments.length, argv = Array(_len), _key = 0; _key < _len; _key++) {
    argv[_key] = arguments[_key];
  }

  if (__DEV__) {
    require('./checkProperty').default(argv);
  }

  var environment = {};

  if (Object.prototype.toString.call(argv[2]) === '[object Object]') {
    environment = argv[2];
  } else if (Object.prototype.toString.call(argv[1]) === '[object Object]') {
    environment = argv[1];
  }

  var namespace = environment.namespace || CONSTANT_NAMESPACE;
  var model = environment.model !== undefined ? environment.model + '_' : '';

  var constant = '' + namespace + CONSTANT_SEPARATOR + model + argv[0];

  if (Array.isArray(argv[1]) === true && argv[1].length > 0) {
    return argv[1].reduce(function (prev, next) {
      return Object.assign({}, prev, _defineProperty({}, next, constant + '_' + next));
    }, '');
  }

  return constant;
};