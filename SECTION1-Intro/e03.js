//functions

function createNumber(upperLimit = 49){
    return Math.round(Math.random() * upperLimit)
}

var n1 = createNumber()
var n2 = createNumber()
var n3 = createNumber()
var n4 = createNumber()
var n5 = createNumber()
var n6 = createNumber()

console.log("Column : " + n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5 + " " + n6)

