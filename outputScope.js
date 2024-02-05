for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

// var -> will be shared since function scope
// let -> each iteration will have it's own block-scoped variable