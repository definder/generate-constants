'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CONSTANT_NAMESPACE = process.env.CONSTANT_NAMESPACE || 'Main';
var CONSTANT_SEPARATOR = process.env.CONSTANT_SEPARATOR || '/';
var __DEV__ = process.env.NODE_ENV === 'development';

var DefineConstant = function DefineConstant(name) {
  var _this = this;

  _classCallCheck(this, DefineConstant);

  this._name = '';
  this._model = undefined;
  this._namespace = CONSTANT_NAMESPACE;

  this.setModel = function (model) {
    _this._model = model;
    return _this;
  };

  this.setNamespace = function (namespace) {
    _this._namespace = namespace;
    return _this;
  };

  this.get = function () {
    var model = _this._model !== undefined ? _this._model + '_' : '';
    return '' + _this._namespace + CONSTANT_SEPARATOR + model + _this._name;
  };

  this.getAsync = function (cycles) {
    var model = _this._model !== undefined ? _this._model + '_' : '';
    var constant = '' + _this._namespace + CONSTANT_SEPARATOR + model + _this._name;
    if (cycles === undefined) {
      return {
        REQUEST: constant + '_REQUEST',
        SUCCESS: constant + '_SUCCESS',
        ERRORS: constant + '_ERRORS'
      };
    } else {
      return cycles.reduce(function (prev, next) {
        return Object.assign({}, prev, _defineProperty({}, next, constant + '_' + next));
      }, '');
    }
  };

  this._name = name;
};

exports.default = function (name) {
  return new DefineConstant(name);
};