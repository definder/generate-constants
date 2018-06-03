export default (argv) => {
  if(typeof argv[0] !== 'string'){
    console.warn(`Invalid prop \`first argument\` of value \`${argv[0]}\`, expected type of string`);
  } else if(argv[1] !== undefined){
    if (Array.isArray(argv[1]) === true){
      argv[1].forEach((constPrefix, key) => {
        if(typeof constPrefix !== 'string'){
          console.warn(`Invalid prop \`second argument in position ${key+1}\` of value \`${constPrefix}\`, expected type of string`);
        }
      });
      if(argv[2] !== undefined){
        if(argv[2] instanceof Object === false){
          console.warn(`Invalid prop \`third argument\` of value ${argv[2]}, expected of type \`Object\``)
        }
      }
    } else if(argv[1] instanceof Object === false){
      console.warn(`Invalid prop \`second argument\` of value ${argv[1]}, expected on of type [\`Array\`,\`Object\`]`)
    }
  }
}
