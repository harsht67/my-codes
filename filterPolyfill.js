Array.prototype.myfilter = function() {
    const res = [];
    for(let i of this) {
        if(i%2 === 0) {
            res.push(i);
        }
    }
    return res;
}

const arr = [1,2,3,4,5,6];

// const filteredArr = arr.filter(x => x%2); 

const filteredArr = arr.myfilter(x => x%2);

console.log(filteredArr);