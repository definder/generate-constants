const CONSTANT_NAMESPACE = process.env.CONSTANT_NAMESPACE || 'Main';
const CONSTANT_SEPARATOR = process.env.CONSTANT_SEPARATOR || '/';
const __DEV__ = process.env.NODE_ENV === 'development';

class DefineConstant {

  _name = ''
  _model = undefined
  _namespace = CONSTANT_NAMESPACE

  constructor(name){
    this._name = name
  }

  setModel = (model) => {
    this._model = model
    return this
  }

  setNamespace = (namespace) => {
    this._namespace = namespace
    return this
  }

  get = () => {
    const model = this._model !== undefined ? `${this._model}_` : ''
    return `${this._namespace}${CONSTANT_SEPARATOR}${model}${this._name}`
  }

  getAsync = (cycles) => {
    const model = this._model !== undefined ? `${this._model}_` : ''
    const constant = `${this._namespace}${CONSTANT_SEPARATOR}${model}${this._name}`
    if(cycles === undefined){
      return {
        REQUEST: `${constant}_REQUEST`,
        SUCCESS: `${constant}_SUCCESS`,
        ERRORS: `${constant}_ERRORS`,
      }
    } else {
      return cycles.reduce((prev, next) => Object.assign({}, prev, {[next]: `${constant}_${next}`}), '')
    }
  }

}

export default (name) => {
  return new DefineConstant(name)
}
