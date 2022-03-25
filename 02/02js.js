let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "Bob",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// console.log(students.map(s=>s.name))
//
// console.log(students.filter(s=>s.scores>=100))
// console.log(myFilter(students, s=>s.scores>=100));

function myFilter(array, callback){
    const newArr=[];
    for (let i = 0; i < array.length; i++) {
        (callback(array[i])) && newArr.push(array[i]);

    }
    return newArr;
};

//
// console.log(students.find(s=>s.name==="Bob"))
// console.log(myFind(students, s=>s.name==="Bob"));

function myFind(array, callback){
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
            return array[i]
        }
    }
}

// console.log(students.forEach(f=> console.log(f.name+ '1')))
//
// console.log(myForEach(students,(f=> console.log(f.name+ '1') )))

function myForEach(array, callback){
    for (let item of array){
        callback(item)
    }
}

//console.log(students.reduce((sum, current) => sum + current.age, 0));

console.log(students.reduce((sum, current) => {
    if (current.isMarried) {
        sum.push(current)
    }
    return sum
}, []));

const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
    total.push(amount * 2);
    return total;
}, []);


//1. Функция принимает параметром массив чисел и возвращает максим значение
//   getMax1([1,4,6,8] => 8
//2 Функция принимает параметром массив чисел и возвращает массив с двумя макс значениями
//   getMax2([1,4,6,8] => [8,6]
//3 Функция принимает параметром массив чисел и кол-во макс, кот надо найти и возвращает массив макс значений
//   getMax3([1,4,6,8],3) => [8,6,4]
// math.max & sort не использовать

function getMax1(arr) {
    let a=arr[0];
    let resultArr =[];
    for (let i=0; i<arr.length; i++){
        if (arr[i]>a){
            a=arr[i];
        }
        resultArr.push(a)
    }
    return resultArr[resultArr.length-1];
}

console.log(getMax2([8,44,14,5]));

function getMax2(arr) {
    let max=arr[0];
    let min = arr[0];
    let resultArr =[];
    for (let i=0; i<arr.length; i++){
        console.log(resultArr)
        if (arr[i]<max){
            min=arr[i];
            resultArr.splice(i-1, 0, arr[i]);
        }
        if (arr[i]===max){
            max=arr[i]
            resultArr.push(arr[i])
        }
        if (arr[i]>max){
            max=arr[i]
            resultArr.push(arr[i])
        }
       }

    console.log(resultArr)
    return [resultArr[resultArr.length-1], resultArr[resultArr.length-2]]
}
