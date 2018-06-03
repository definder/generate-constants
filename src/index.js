const CONSTANT_NAMESPACE = process.env.CONSTANT_NAMESPACE || 'Main';
const CONSTANT_SEPARATOR = process.env.CONSTANT_SEPARATOR || '/';
const __DEV__ = process.env.NODE_ENV === 'development';

export default (...argv) => {

  if(__DEV__) {
    (require('./checkProperty').default)(argv)
  }

  let environment = {};

  if(Object.prototype.toString.call(argv[2]) === '[object Object]') {
    environment = argv[2]
  } else if(Object.prototype.toString.call(argv[1]) === '[object Object]'){
    environment = argv[1]
  }

  let namespace = environment.namespace || CONSTANT_NAMESPACE;
  let model = environment.model !== undefined ? `${environment.model}_` : '';

  let constant = `${namespace}${CONSTANT_SEPARATOR}${model}${argv[0]}`;

  if (Array.isArray(argv[1]) === true && argv[1].length > 0) {
    return argv[1].reduce((prev, next) => Object.assign({}, prev, {[next]: `${constant}_${next}`}), '');
  }

  return constant;

}
