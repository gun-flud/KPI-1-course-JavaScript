
const obj = { a: 1, b: 2, c: 3 };

function iterate(obj, callback){
    for (let i in obj){
        callback(i, obj[i]);
    }

};


iterate(obj, (key, value) => {
  console.log({ key, value });
});
