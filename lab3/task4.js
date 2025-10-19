const fun = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};
// [
//   ['m1', 1],
//   ['m2', 2],
//   ['m3', 3]
// ]
function arr(functional){
    let definitions = [];
    for ( i in functional){
        if (typeof functional[i] === 'function'){
           definitions.push(([ i,  functional[i].length])); 
        }
      
        
    };
     console.log(definitions);
};

arr(fun);