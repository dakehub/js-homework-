/* 11.08.2022*/
/*домашка 1*/



/*============================================*/
/* Домашка 2
const num1 = Number(prompt());
const num2 = Number(prompt());
const num3 = Number(prompt());

if (num1 > num2 && num1 > num3) {
	alert(num1);
} else if (num1 < num2 && num2 > num3) {
	alert(num2);
} else if (num1 < num3 && num2 < num3) {
	alert(num3);
}
*/


/*============================================*/

/* Не доделал домашка 3*/
/*
const randomNum = Number(prompt());

const numRandom = Math.round(Math.random() * 3);

let times = (randomNum == numRandom)
	

for (times = 0; times < 3; times++){
	let times = (randomNum == numRandom)
	?
	alert('Поздравляю ты угадал')
	:
	alert('У тебя еще 3 попытки');
}
*/


/*============================================*/
/*домашка 4*/
/* сделал
const word = prompt("Введите слово");
for (let i of word) {
	console.log(i)
}
*/

/*============================================*/
/*домашка 5*/
/*
for (i = 50; i < 101; i++){
	console.log(i)
}
*/


/*домашка 6*/
/*  Не смог reverse
let n1 = prompt('Введите целое число: ');
let n_list = Array(n1);
n_list.reverse();

console.log(n_list)

/*домашка 7*/

/*
const asia = ["Japan", "Korea", "China"];

const europe = ["Austria", "Ireland"];

const africa = ["Egypt", "SA", "Cameroon", "Gabon"];

const america = ["USA", "Canada", "Brazil"];

while (true) {
	console.log();
	console.log('Command: add, display, delete, search , exit');
	const command = prompt('Enter command:');
	
	if (command === 'add') {
		console.log('continents: asia, europe, africa, america');
		const continent = prompt('Enter continent:');
		if (continent === 'asia') {
			const addCountry = prompt('Enter country');
			asia.push(addCountry);
		}
	}
}
*/

/*
const countries = ['Kazakhstan', 'Russia', 'Japan', 'UK'];
const capitals = ['Astana', 'Moscow', 'Tokyo', 'London'];

let total = 0;

for (let i = 0; i < countries.length; i++){
	console.log(countries[i]);
	const entCity = prompt('City: ');
	if (entCity === capitals[i]){
		total = total + 1;
	}
}

console.log('total', total);
*/
/*
const arr = [];

for (let i = 0; i < 5; i++) {
  let innerArr = [];
  for (let j = 0; j < 5; j++) {
	 if (i === 0 || i === 4) {
		innerArr.push("X");
	 } else if (j == 0 || j == 4) {
		innerArr.push("X");
	 } else {
		innerArr.push(" ");
	 }
  }
  arr.push(innerArr);
}

console.log(arr);
*/


/*
const food = [
	{
		product: 'potate',
		cost: 500,
	},
	{
		product: 'cake',
		cost: 800,
	},
	{
		product: 'tea',
		cost: 300,
	}
]



for (i = 0; i < food.length; i++);
console.log(food[i].product, food[i].cost);
*/



// const entFoods = prompt('Введите название продукта:');

// if (food.product === entFoods) {
// 	alert('Цена', food.cost);
// }



/*
23/08/2022

const person = {
	username: 'Daurenbek',
	city: 'Aktobe'
}

person.age = 33;

console.log(person);

const entPerson = prompt( 'How old are you Daurenbek?');

if (person.age == entPerson) {
	alert('Yes, its correct age, I am 33 years old!')
} else {
	alert('try again please')
}
*/


/*
const arr = [
	{
		username: 'Daurenbek'
	},
	{
		username: 'Terminator',
	},
	{
		username: 'Jackie Chan'
	}
]
console.log(arr);

delete arr[0].username;

console.log(arr);
*/







