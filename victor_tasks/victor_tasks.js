/*                                                        завдання від Віті                                                           */

/*
/!*Вирівняти багаторівневий масив в однорівневий
    [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
flat використовувати заборонено.*!/
let a=[];
function func(arr) {
     /!*  let a=[];*!/
        for (let elem of arr) {
            if (Array.isArray(elem)) {
                func(elem);
            } else {
                a.push(elem)
            }
        }
    return a
}
console.log(func([1, 3, [/!*'Hello', 'Wordd',*!/ [9, 6, 1]] /!*['oops']*!/, 9]));
*/

/*Точная степень двойки
Дано натуральное число N.
    Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
    Операцией возведения в степень пользоваться нельзя!


let powerOfTwo = (x) =>{return Math.log2(x) % 1 === 0;}
console.log(powerOfTwo(46))

const stepen = (number) => {
 do {
  if (number % 2 !== 0) {
   return "NO";
  }
  number /= 2;
 } while (number>=2)
 return "Yes";
}
console.log(stepen(32));*/


/*
/!*
Разложить число по разрядам и вывести в таком виде:
    300000 + 20000 + 1000 + 500 + 80 + 7 = 321587*!/


let numbers=(namber) => {
 let arrOne=[];
 let str=namber.toString().split("");
 let masuv=[1];
 for (let i=str.reverse().length-1;i>=0;i--){
  for (let k=0,j=0;k<masuv.length,j<10;k++,j++){
   masuv.push(masuv[j]*10);
   if(i===k){
    arrOne.push(str[i]*masuv[k])
   }
  }
 }
 return arrOne.join('+');
}
console.log(numbers(19532));
*/

/*
/!*
/!*Палиндром
Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
    При решении этой задачи*!/ нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.*!/
/!*
let a="okoe";
console.log(a)
let a1=a.split('');
console.log(a1);
let b=a1.reverse();    // це не до цього ))))))!!!! просто перевіряв
let b1=b.join('');
console.log(b1);*!/

function poli(a){
    return (a ===a.split('').reverse().join('') ? 'YES' : 'NO')
}
console.log(poli("PELE"))*/

/*
/!*
Знайти анаграму.
    Перевірити чи слово має в собі такі самі літери як і поеперднє слово.

    ANAGRAM | MGANRAA -> true
EXIT | AXET -> false
GOOD | DOGO -> true
*!/

let str="okoo";
let str1="kooo"

let a=str.split('')
let q=str1.split('');

let strSort=a.sort();
let str1Sort=q.sort();

let strNorm=strSort.join("");
let strNormOne=str1Sort.join("")

console.log(strNorm===strNormOne);*/

/*
/!*
Знайти набільший елемент в масиві за допомогою reduce
    [1,6,9,0,17,88,4,7] -> 88*!/

let a=[1000,6,9,0,17,88,94,4,744];

let maxNamber=a.reduce((ac ,namber)=>{
    if(ac<namber){
        ac=namber;
    }
    return ac
},0)
console.log(maxNamber)
*/

/*
/!*
Количество единиц
Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

2176491947586100 -> 3*!/
function count(namber){
    let namberOne=String(namber).split("00")[0].split("").reduce((ac,namber)=>{
        if (namber==="1") {
            ++ac
        }
        return ac;
    },0)
    return namberOne
}
console.log(count(2176419194758610021))*/


/*                                                       mentor                                 * /
/*

/!*!/!*написати прогу яка вибирає зі строки числа і виводить їх
так як вони написані
наприклад:
    const st = 'as 23 fdf25dg544 34s5 5'
23, 25,544, 34, 5,5              #вивело в консолі*!/!*!/

let st='as 23 fDf25dg544 434 545 34s5 5';
let st1=st.toLowerCase();
let str1=st1.replace(/[a-z]/g,' ')
let a=str1.split(" ");
console.log(a);
for (let i=0;i<a.length;i++){
    if(a[i] !==''){
        console.log(parseInt(a[i]))
    }
}

*/

/*

/!*
/ Найти пропущеную букву в массиве которые лежат
в алфавитном порядке ["a", "b", "c", "d", "f"] -> 'e'
*!/

let alphabet = [
    "a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u",
    "v","w","x","y","z"
];
let ret=["a", "b", "c", "d", "f"]

let b=[];
let se=ret.forEach((nam,index,l)=>{
   let a= nam.charCodeAt();
   b.push(a);
})
console.log(b);
console.log(String.fromCharCode(101));
*/

/*
const users = [
    {name: 'Max', age: 13,citi:"lviv"},
    {name: 'Kira', age: 12,citi:"qqq"},
    {name: 'Oleh', age: 16,citi:"www"},
    {name: 'Karina', age: 16,citi:"eee"},
    {name: 'Kokos', age: 13,citi:"rrr"},
    {name: 'Max', age: 16,citi:"ttt"},
]

function filtr(mac,o){
    const filt = mac.filter((v)=>{
        let s=Object.keys(o);
        if(s.length<=1){
            Object.values(v).forEach((q)=>{
                Object.values(o).forEach((i)=>{
                    if(q===i){
                        console.log(v)
                    }
                })
            })
        }else if(s.length>1){
           if(Object.values(v).join("").includes(Object.values(o).join(""))){
               console.log(v)
           }
        }
    })
   return filt
}
console.log(filtr(users,{name:"Max",age:16}))


const filter = (arr, obj) => arr.filter(value => Object.keys(obj).every(e => obj[e] === value[e]));
console.log(filter(users, {age: 16}));*/


/*
/!*
/!*function cal (a,b,dani){
    console.log(dani(a, b));
}
cal(2,3,(a,b)=>a+b)*!/

/!*

function sum(a,b){
    console.log(a)
    console.log(b)
    setTimeout(()=>{
        if(a>b){
            console.log(a-b);
        }else console.log(b-a);
    },1000)
}
sum(2,7)*!/

/!*
function orderTour(taskWhenReady) {
  console.log('Дякую, що звернулися до нас');
  console.log('Tour in progres ......');
  setTimeout(() => {
    console.log('DONE');
    taskWhenReady();
  }, 2000);
}


orderTour(() => {
  console.log('УРА. Лутимо на моря');
});*!/


function orderTour(money, taskWhenReady) {
  console.log('Дякую, що звернулися до нас');
  console.log('Tour in progres ......');
  setTimeout(() => {
    console.log('DONE');
    if (money < 500) {
      taskWhenReady('вам треба більше грошей', null);
      return;
    }
    taskWhenReady(null, 'Єгипет');
  }, 2000);
}


function prepareToTour(cb) {
  setTimeout(() => {
    console.log('Я забраввся!')
    cb(null, 'Полетіли НАРЕШТІ !!!!');
  }, 1000)
}

function doPhoto(cb) {
  cb(null, 'ЩОЛК ЩОЛК')
}


orderTour(400, (err, tour) => {
  if (err) {
    console.log('Мала, треба їсти макарони');
    console.log('В агенстві сказали що', err);
    return;
  }
  console.log(`УРА. Лутимо в ${tour}`);
  prepareToTour((err, data) => {
    if (err) {
      console.log('Бліне. Нема купальника (((');
      return;
    }
    console.log(data);
    doPhoto((err, data) => {
      if (err) {
        return
      }
      console.log(data);
    })
  })*!/
});*/

/*
const del = (e,a,f)=> {
    e.remove();
    f.remove();
    localStorage.removeItem(a);
};
const setData= ()=>{
    let form = document.forms.form;
    let elem1 = form.elements.FIO.value;
    let elem2 = form.elements.number.value;
    let elem3 = form.elements.EMail.value;
    let elem4 = form.elements.galera.value;
    let elem5 = form.elements.part.value;
    let elem6 = form.elements.birth.value;
    const data = {
        FIO: elem1,
        number: elem2,
        EMail: elem3,
        galera: elem4,
        part: elem5,
        birth: elem6
    };
    localStorage.setItem(`${data.FIO}`, JSON.stringify(data));
    let newDiv=document.createElement('div');
    newDiv.innerHTML=(`
  <p>Name: ${ data.FIO} </p>
  <p>Number: ${ data.number} </p>
  <p>Mail: ${ data.EMail} </p>
  <p>galera: ${ data.galera} </p>
  <p>Part: ${ data.part} </p>
  <p>BirthDay: ${ data.birth} </p>
  `);
    let btn = document.createElement('button');
    btn.addEventListener('click', function () {
        del(newDiv,elem1,btn)
    });
    btn.label='del';
    document.body.appendChild(newDiv);
    document.body.appendChild(btn);
    newDiv.classList.add('border');
};*/




/*Реалізувати друкарську машинку.
    У вас є текст "Hello World".
    Ваша функція має друкувати цей текст по 1 симоволу в браузері.
    КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
    Цим самим ви маєте симулювати написання даного тексту юзером.
    Приклад: "Hello"
Затримки:
    H (затримка 0.6)
e (затримка 0.1)
l (затримка 0.3)
l (затримка 0.7)
о (затримка 1)*/
let a = "hello"
const arr = a.split("");
console.log(arr)

function liter(arr) {
    for (let i of arr) {
        setTimeout(() => {
            document.write(`${i}<br>`)
        }, Math.floor(Math.random() * 1000)+100)
    }
}
liter(arr)