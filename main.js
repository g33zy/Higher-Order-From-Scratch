// .map()

const mapMethod = (arr, callBack) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let param = callBack(arr[i])
        newArr.push(param)
        
    }
    return newArr
}

let myArr = [1, 2, 3, 4, 5];

const timesThree = num => num * 3
console.log(mapMethod(myArr, timesThree))
                            // num => num * 3    inline, no variable ln 15









// .Reduce()


const reduceNumbers = [1, 2, 3, 5, 10, 11, 77, 99, 500, 1000]
const myFunc = (acc, curr) => acc + curr

const reduceMethod = (array, callBack, initialValue) => {
    let accumulator = initialValue ? initialValue : 0
    for (let i = 0; i < array.length; i++) {
        accumulator = callBack(accumulator, array[i])

    }
    return accumulator
}


console.log(reduceMethod(reduceNumbers, myFunc))






  
  
  
  
//   Manny's Function

//   function reduceFromScratch(array, callback, initialValue) {
//     if (!initialValue) {
//       let acc = array[0]
//       for (let i=1; i < array.length; i++) {
//         acc = callback(acc, array[i])
//       }
//       return acc
//     } else {
//       acc = initialValue
//       for (let i=0; i < array.length; i++) {
//         acc = callback(acc, array[i])
//       }
//       return acc
//     }
//   }
  
//   const myFunc2 = (acc, curr) => acc + curr
//   console.log(reduceFromScratch(numbers, myFunc2, 5))






  
const filterNums = [3, 4, 6, 9, 12, 21, 99, 500]
const evenNums = (num => num % 2 === 0)


  function filterFromScratch(array, callback) {
    const newArr = []
    for (let i=0; i < array.length; i++) {
      if (callback(array[i])) {
        newArr.push(array[i])
      }
    }
    return newArr
  }

  console.log(filterFromScratch(filterNums, evenNums))















