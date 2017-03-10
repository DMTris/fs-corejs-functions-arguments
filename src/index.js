//in class practice
const something = (string = '', number = 'telephone') => string + number;
console.log(something('test'));

const hungry = (string = '', stringTwo ='fries') => `${string} and ${stringTwo} please!`;
console.log(hungry('hamburger'));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const menuPicker = (...food) => {
  let numOfFood = food.length;
  let menu = getRandomIntInclusive(0, numOfFood - 1);

  return food[menu];
}

for (let i = 0; i < 2; i++){
  console.log(menuPicker('Salad', 'Pumpkin Cranberry Muffin', 'left-over chicken', 'Hamburgers', 'other left-overs'));
}
/*notes function callbacks; function Hello(err), has to have the (err) as the first parameter
*/

//-----homework starts here--------
export default class Calculator {

//variadic add function using reduce
  add (...numbers) {
    return numbers.reduce((prev, current) => {
      return prev + current;
    }, 0);
  }

//arguments function
  introspect() {
    return arguments;
  }

}
