function miiterador(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i], i);
    }
}
miiterador([1, 2, 3], function (a) { return console.log(a); });
miiterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function miiterador2(arr, callback) {
    for (var i = 0; i <= arr.length; i++) {
        callback(arr[i]);
    }
}
