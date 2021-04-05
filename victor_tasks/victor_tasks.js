/*                                                        завдання від Віті                                                          */

/*
Вирівняти багаторівневий масив в однорівневий
    [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
flat використовувати заборонено.
let arry=[1,3, ['Hello','Wordd', [9,6,1]], ['oops'], 9];
let a=[];
function func(arr) {
    for (let elem of arr) {
        if ( typeof elem==='object') {
            func(elem);
        }
        else a.push(elem)
    }
}

func([1,3, ['Hello','Wordd', [9,6,1]], ['oops'], 9]);
console.log(a)
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
