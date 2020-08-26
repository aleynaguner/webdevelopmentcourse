//loop demo

function createNumber(upperLimit = 49){
    return Math.round(Math.random() * upperLimit)
}

for (let i = 0; i < 6; i++) {
    console.log(i +". Column")
    for (let j = 0; j < 6; j++){
        console.log(createNumber())
    }
}