const todoListID_1="45hfj-87bfh"
const todoListID_2="25hfj-8=37bfh"


const todoList = [
    {
        id:todoListID_1,
        title: "What to learn",
        filter: 'all',
        // tasks:[
        //     {id:'01fd', title:"HTML", isDone:true},
        //     {id:'02fd', title:"CSS", isDone:true},
        //     {id:'03fd', title:"React", isDone:true},
        // ]
    },
    {
        id:todoListID_2,
        title: "What to buy",
        filter: 'all',
        // tasks:[
        //     {id:'01fd', title:"Meat", isDone:true},
        //     {id:'02fd', title:"Milk", isDone:true},
        //     {id:'03fd', title:"Bread", isDone:true},
        // ]
    },
];

const tasks = {
    [todoListID_1] : [
        {id:'01fd', title:"HTML", isDone:true},
        {id:'02fd', title:"CSS", isDone:true},
        {id:'03fd', title:"React", isDone:true},
    ],
    [todoListID_2] : [
        {id:'01fd', title:"Meat", isDone:true},
        {id:'02fd', title:"Milk", isDone:true},
        {id:'03fd', title:"Bread", isDone:true},
    ]
}

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
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

console.log(students.sort((a,b)=>a.age-b.age))

