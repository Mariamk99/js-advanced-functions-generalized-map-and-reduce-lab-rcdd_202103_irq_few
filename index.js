// Add your functions here
<<<<<<< HEAD
function map(array, function1) {
    return array.map(element => function1(element))
}

function reduce(array, number1, start=0) {
    let newarray = (!!start) ? start : array[0] //existing equation 
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
      newarray = number1(array[i], newarray)
    }

    return newarray;
}
=======

var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[thisArg]);
>>>>>>> 56f3b0f74ee770d86df77dd8d0abf415bf30be71
