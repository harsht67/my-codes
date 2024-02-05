Array.prototype.myreduce = function(cb, initVal) {

    let acc = initVal;

    for(let i=0; i<this.length; ++i) {
        acc = cb(acc, this[i], i, this);
    }

    return acc;
}

const arr = [1,2,3,4,5];

// const res = arr.reduce((sum, x) => x+sum, 0);

const res = arr.myreduce((sum, x) => sum+x, 0);

console.log(res);