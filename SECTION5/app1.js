//arrays

const arr = [1,2,3,4]

arr.forEach(item => console.log(item))

const arr1 = arr.reduce((acc,item)=>{
    console.log(acc,item)
    return acc+item
})

console.log(arr1)