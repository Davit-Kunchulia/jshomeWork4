// 1
let array = [5,25,89,120,36]

array.push("javascript","python")
array.unshift("html","css")

console.log(array);

array.pop()
array.shift()

console.log(array);


// 2
let fruit = ["ფორთოხალი","ბანანი","მსხალი"]

console.log(fruit);

fruit.push("ვაშლი","ანანასი")
fruit.unshift("საზამთრო")

console.log(fruit);

let fr = fruit.splice(0, 2)
let fr2 = fruit.splice(0, 4)

let mango = ["მანგო"]

let fruitFinal = fr.concat(mango,fr2)

console.log(fruitFinal);

fruitFinal.shift()
fruitFinal.pop()

console.log(fruitFinal);


// 3
let array2 =[1, 2, 3, 4, 5]

let array3 =['a', 'b', 'c']

let spl = array2.splice(0,3)
let spl2 = array2.splice(0,2)

console.log(spl.concat(array3,spl2));


// 4
let ar = [1, 2, 3, 4, 5];

let sum = ar.reduce((acc, elem) => {
    return acc + elem 
}, 0)

console.log(sum);


// 5
let ten=[2,15,10,24]

let  unten = ten.filter((elem) => elem !== 10)

console.log(unten);


// 6
let div = [12, 25, 3, 6, 8, 14, 7, 23];

let div3 = div.map((element) => element / 3)

console.log(div3);


// 9
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

console.log(arr1.concat(arr2, arr3))


// 10
let arr = [-1, -2, -3, 4];

let zero = arr.some((moreThanZero) => moreThanZero > 0)

console.log(zero);


// 11
let sort =[23,45,32,5,87,7,3,98]

sort.sort((a, b) => b - a)
sort.pop()

console.log(sort);