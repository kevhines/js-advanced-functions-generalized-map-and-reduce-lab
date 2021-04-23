// Add your functions here
function map(array, f) {
    const newArray = []
    array.forEach( element => {
        newArray.push(f(element))
    })
    return newArray
}

function reduce(array,f,start) {
    let result = (!!start) ? start : array[0]
    // if (start) {result = start; }
    array.forEach( element => {
        if (!start && element === array[0]) {} else {result = (f(element, result))}
    })
    return result

}