// polyfill for JS map 

Array.prototype.mymap = function(cb) {
    const res = [];
    for(let i of this) {
        res.push(cb(i));
    }

    return res;
}

const arr = [1,2,3,4,5];

// const arr2x = arr.map(x => x*5);
const arr2x = arr.mymap(x => x*5);

console.log(arr2x);