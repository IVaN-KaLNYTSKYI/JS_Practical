/*                                                        завдання від Віті                                                          */

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

/*console.log(a)*/
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
