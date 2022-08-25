// // // // // // 220816
// // // // // Text = "hello" must use [""]
// // // // // "hello" + "My name is Lucas"
// // // // // String = From begining to end all Text
// // // // //220817

// // // // console.log(134);
// // // // console.log("hello");
// // // // console.log(5+2);
// // // // // 자바스크립트는 위에서 아래로 읽는다.
// // // // console.log(5*2);
// // // // // 계산기 만들기 Variable = 값을 저정하거나 유지하는 역할
// // // // // const = 변하지 않는 것
// // // // const a = 5;
// // // // const b = 2;
// // // // let myName = "lucas";
// // // // // myName = camel case
// // // // console.log(a + b);
// // // // console.log(a * b);
// // // // console.log(a / b);
// // // // console.log("hello " + myName);

// // // // //const * let / let = 변할 수 있는 값
// // // // //const와 let 만 보고 '의도'를 파악할 수 있다.
// // // // //Always const Sometimes let Never var

// // // // myName = "Dong Jae";
// // // // console.log("Your New Name is " + myName);

// // // // //boolean = true or false
// // // // //null = 아무것도 없다. 여기엔 값이 없다라는 걸 알려주려는 것
// // // // //false = 틸린 것
// // // // //아예 아무것도 넣지 않으면 undefined 컴퓨터 메모리 안에는 존재하는데 데이터는 없는 것

// // // // const amIFat = true;
// // // // let something;
// // // // console.log(amIFat);
// // // // console.log(something);

// // // // //array 데이터를 정리하는 방법 [] 안에 넣으면 됨
// // // // //필요한 자료는 0에서부터 세어서 가져온다.
// // // // //array에 데이터를 추가하기 위해서는 .push("?"); 해주면 됨

// // // // const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// // // // const fuckMe = ["Lucas", "Fuck", "Shit"];

// // // // console.log (daysOfWeek[0]);
// // // // daysOfWeek.push("sex");
// // // // console.log (daysOfWeek);

// // // // //object
// // // // const playerName = "Lucas";
// // // // const playerAge = 36;
// // // // const playerFat = true;

// // // // //object 만들 때 = {}
// // // // const player = {
// // // //     name: "Lucas",
// // // //     age: 36,
// // // //     fat: true,
// // // // };

// // // // console.log(player);
// // // // console.log(player.name);
// // // // //update object

// // // // player.fat = false;
// // // // console.log(player);
// // // // player.lastName = "Kang";
// // // // console.log(player);
// // // // player.points = 100;
// // // // console.log(player);
// // // // player.points = player.points + 1000;
// // // // console.log(player);

// // // // //220818 [function]

// // // // function sayHello(nameOfPerson, age){
// // // //     console.log("Hello my name is" + nameOfPerson + "I'm" + age + "years old");
// // // // }

// // // // sayHello("lucas", 36)
// // // // sayHello("Fuck", 11)
// // // // sayHello("Damn", 22)
// // // // sayHello("Shit", 33)

// // // // function plus(a,b){
// // // //     console.log(a+b);
// // // // }

// // // // plus(8,9)

// // // const player = {
// // //   name: "Lucas",
// // //   sayHello: function(otherPersonsName) {
// // //     console.log("Hello!" + otherPersonsName + " nice to meet you");
// // //   }
// // // };

// // // console.log(player.name);
// // // player.sayHello("lucas");

// // // //Returns
// // // const age = 96;
// // // function caculateKrAge(ageOfForeigner){
// // //     return ageOfForeigner+2;
// // // }

// // // const krAge = caculateKrAge(age);
// // // console.log (krAge);

// // // 220822 Condtional

// // const age = parseInt(prompt("How old are you?"))

// // if(isNaN(age) || age < 0){
// //     prompt("Please write a real Number")
// // }else if(age < 18) {
// //     prompt("You are too Young")
// // }else if (age===100) {
// //     prompt("You are Wise")
// // }else if(age >= 18 && age <= 50){
// //     prompt("You can drink")
// // }else if (age > 80) {
// //     prompt("You are toooo old")
// // }else if (age !== 100) 

// // // 220823 The Document Object
// // Events

// const title = document.querySelector(".hello h1")

// function handleTitleClick(){
//     const currentColor = title.style.color;
//     let newColor;
//     if (currentColor === "yellow") {
//         newColor = "blue"
//     }else {
//         newColor = "yellow"
//     }
//     title.style.color = newColor;
// }


// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);


// 220824 eventListner

// const paragraph = document.querySelector(".bye h2")
// const wifi = document.querySelector(".wifi h3")


// function handleMouseClick(){
//     if(paragraph.style.color === "blue") {
//         paragraph.style.color = "tomato";
//     }else {
//         paragraph.style.color = "blue"
//     }
// }

// function hadnleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function hadnleWindowCopy(){
//     alert("Copier!")
// }

// function handleWindowOffline(){
//     alert("Sorry No Connect")
//     wifi.ineerText = "nnnnnnn"
// }

// function handleWindowOnline(){
//     alert("FUCK!")
//     wifi.innerText = "yyyyy"
// }


// paragraph.addEventListener("click", handleMouseClick)

// window.addEventListener("resize", hadnleWindowResize);
// window.addEventListener("copy", hadnleWindowCopy)
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

//220825 js & css

const h1 = document.querySelector(".jsh1")
console.log(h1)

function handleH1Click() {
    if (h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleH1Click);

const h2 = document.querySelector(".jsh2")

function handleH2Click() {
    if (h2.innerText === "사랑해!") {
        h2.innerText = "경선아 클릭해줘"
    } else {
        h2.innerText = "사랑해!"
    }
}

h2.addEventListener("click", handleH2Click)

const h3 = document.querySelector(".jsh3")
const body = document.querySelector("body")
function handleH3Click() {
    body.classList.toggle("night")
    }

function handleH4Click() {
    if (h3.innerText === "낮이 되었습니다.") {
        h3.innerText = "밤이 되었습니다."
    } else {
        h3.innerText = "낮이 되었습니다."
    }
}

h3.addEventListener("click", handleH3Click)
h3.addEventListener("click", handleH4Click)