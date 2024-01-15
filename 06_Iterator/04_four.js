// for each 
const coding=["js","py","cpp","java"]
// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// })
coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"JAvaScript",
        languageFile:"js"
    },
    {
        languageName:"Python",
        languageFile:"py"
    },
    {
        languageName:"Java",
        languageFile:"jv"
    },
]

myCoding.forEach((item)=>{
    // console.log(item.languageName);
    // console.log(item.languageFile);
})

// filter 
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.filter((num)=> {
   return num > 4
})
console.log(newNums);

const books=[
    {BookName: "Ramayen",BookType:"History"},
    {BookName: "Gita",BookType:"History"},
    {BookName: "Book light",BookType:"Science"},
];

const userbooks= books.filter( (bk)=> bk.BookType === 'History')
console.log(userbooks);