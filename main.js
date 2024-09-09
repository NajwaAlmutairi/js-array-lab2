// Q1
console.log('Q1');

let numbers = [1, 5, 3, 8,4,6,7,9,10];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Q2
console.log('Q2');
let squarArray = numbers.map(element => element * element);
console.log(squarArray);

// Q3
console.log('Q3');
let maxNumber = numbers.find(element => element >25);
console.log(maxNumber);

// Q4
console.log('Q4');
numbers.forEach(element=>{
    console.log(element>5);
})

// Q5
console.log('Q5');
// تحقق مما إذا كانت المصفوفة تحتوي على الرقم 3.
console.log(numbers.includes(3));

// Q6
console.log('Q6');
let evenNumbers=numbers.filter(element =>{
     return (element % 2 === 0)
    } );
console.log(evenNumbers);

// Q7
console.log('Q7');
// قم بإزالة العنصرين الأوسطين من المصفوف
console.log(numbers);
let middlElement = Math.floor(numbers.length / 2);
if (numbers.length % 2 === 0) {
    numbers.splice(middlElement - 1, 2); 
} else {
   numbers.splice(middlElement, 2)
}
console.log(numbers);

// Q8
console.log('Q8');
// قم بحساب حاصل ضرب جميع الأرقام في المصفوفة
let count = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(count);

// Q9
console.log('Q9');
// قم بإزالة آخر عنصر من المصفوفة وطباعته
console.log(numbers.pop());

// Q10
console.log('Q10');
// قم بإضافة القيمة 100 إلى نهاية المصفوفة.
numbers.push(100);
console.log(numbers);

// *****************************************************************************************
let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// قم بـإرجاع المصفوفة التي تحتوي على الأسماء التي تحتوي على حرف `'a'`.
// Q1 

let arrayStartA=names.filter(element => {
        return element.startsWith('A')
})
console.log(arrayStartA);

// قم بتحويل المصفوفة إلى سلسلة نصية (string) مفصولة بـ `-`.
// Q2
let myString=names.join('-');
console.log(myString);


// ***********************************************************
let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];
// قم بالتحقق  مما إذا كانت المصفوفة تحتوي على اسم يبدأ  بحرف `'b'`
let arrayStartb=fruits.filter(element => {
    return element.startsWith('b')
})
console.log(arrayStartb.length);

// قم بإرجاع مصفوفة جديدة تحتوي على العناصر من العنصر الثاني إلى الرابع

// Q2
let newArray=fruits.slice(2,5);
console.log(newArray);


// قم بإضافة `'yellow'` إلى بداية المصفوفة

fruits.unshift('yellow');

console.log(fruits);
// ******************************************************************************
let words = ['hello', 'world', 'javascript', 'array', 'function'];
// قم بإنشاء مصفوفة جديدة تحتوي على طول كل كلمة في المصفوفة الأصلية

let wordsNewArray=words.map(element=>{
    return element.length
})
console.log(wordsNewArray);

// ابحث عن العنصر javascript في المصفوفة. إذا وُجد، اطبعه، وإذا لم يكن موجودًا اطبع رسالة بأنه غير موجود

if(words.includes('javascript')){
    let javas=words.find(element => {
       return element === 'javascript'
    })
    console.log(javas); 
}
else{
    console.log('there is not javascript');
    
}
