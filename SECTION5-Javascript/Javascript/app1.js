//arrays

const arr = [1,2,3,4]

arr.forEach(item => console.log(item))

const arr1 = arr.map(item => item*3)

console.log(arr1)

const arr2 = arr.filter(item=>item>2)

console.log(arr2)

const arr3 = arr.reduce((acc,item)=>{
    console.log(acc,item)
    return acc+item
})

console.log(arr3)