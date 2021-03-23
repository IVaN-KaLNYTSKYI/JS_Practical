/*-----------------------------CLASS---------------------------*/
/*TASK-1*/
/*
let str='Привіт';
let num=123;
let flag=true;
let  txt='true';

console.log( typeof str);
console.log( typeof num);
console.log( typeof flag);
console.log( typeof txt);*/

/*TASK-2*/

/*let a1=5+3;
let a2=5-3;
let a3=5*3;
let a4=5/3;
let a5=5%3;

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);*/

/*TASK-3*/
/*
let a6=5%3;
let a7=3%5;
let a8=5+'3';
let a9='5'-3;
let a10=75+'кг';

console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);*/
/*TASK-4*/
/*
let  height=23;
let wight=10;
let s=height*wight;
console.log(s);*/
/*TASK-5*/
/*let  heightC=10;
let dC=4;
let v=heightC**2*3;
console.log(v);*/
/*TASK-6*/
/*
let  n=3;
let m=4;
let k=3**2+4**2;
console.log(k);*/
/*TASK-7*/
/*let str='Hello World';
document.write(str);
alert(str);
console.log(str);*/
/*TASK-8*/
/*let proMy='ivan kalnytskyi';
let age=19;
let hobby='football';
alert(` 
My name is ${proMy}\n
I am ${age} years\n
My hobby ${hobby}
`);*/
/*TASK-9*/
/*let  str1='Хто';
let  str2='ти';
let  str3='такий?';
let concatenation= str1+' '+str2+' '+str3;
document.write(concatenation);*/
/*TASK-10*/
/*
10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>");///////зєднює ці дві змінні =205
document.write(str - a + "<br/>");////// 15 бо str перетворюється на number
document.write(str * "2" + "<br/>")/////40 бо str i a перетворюється на number
document.write(str / 2 + "<br/>")//////10 бо str перетворюється на number
/*TASK-11*/
/*
let a=parseInt("3.14")
let d=parseInt("-7.875")
let c=parseInt("435")
let b=parseInt("Вася")
console.log(a,d,c,b);*/
/*TASK-12*/
/*
let str = prompt("Enter something", "ho-ho")
console.log(str);*/
/*TASK-13*/
/*
let num1= +prompt("num1=");
let num2= +prompt("num2=");
let suma=num1+num2;
alert(suma);
*/
/*TASK-13*/
/*
let name= prompt("name");
let syrName= prompt("syrName");
let age= prompt("age");

alert(` 
Доброго вечера ${name} ${syrName},мои поздравления что вам ${age}
`);*/


/*
=====================
======ДОП============
=====================
*/


/*       1        */
/*let num1= +prompt("num1=");
let num2= +prompt("num2=");
let num3= +prompt("num3=");

if(num1>num2&&num1>num3&&num2>num3){
console.log(num3,num2,num1)
}else if(num1<num2&&num2>num3&&num3>num1){
console.log(num1,num3,num2)
}else if(num1<num2&&num2>num3&&num3<num1){
console.log(num3,num1,num2)
}else if(num3>num1&&num3>num2&&num2>num1){
console.log(num1,num2,num3)
}else if(num3>num1&&num3>num2&&num2<num1){
console.log(num2,num1,num3)
}else if(num1>num2&&num1>num2&&num2<num3){
console.log(num2,num3,num1)
}*/
/*       2        */
/*let str= prompt("str=");

if (str==="green"){
    console.log("йди");
}else if(str==="yellow"){
    console.log("подожди")
// }else if(str==="red"){
    console.log("стой")
}else {
    console.log("делай что хочешь")
}*/

/*       3        */
/*
let str= prompt("str=");
let active=confirm("машини нема");

if (str==="green"&&active===true){
    console.log("йди");
} else if(str==="green"&&active===false){
    console.log("подожди пока нарушители проедут")
}else if(str==="yellow"&&active===false){
    console.log("жди")
} else if(str==="yellow"&&active===true){
    console.log("все рано жди")
}else if(str==="red"&&active===true){
    console.log("стой все рано")
} else if(str==="red"&&active===false){
    console.log("стой и жди")
}else {
    console.log("делай что хочешь")
}*/
