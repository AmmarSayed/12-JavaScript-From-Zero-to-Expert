//Coding Challenge #4

/*

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).
Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)

Hints:
§ Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§ Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.


GOOD LUCK 😃
*/

// test data

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//GOOD LUCK 😃
const recommendedFood = weight => Math.trunc(weight ** 0.75 * 28);

// 1 .
dogs.forEach(dog => {
  dog.recommendedFood = recommendedFood(dog.weight);
  const upperLimit = dog.recommendedFood * 1.1;
  const lowerLimit = dog.recommendedFood * 0.9;
  dog.okayAmount =
    dog.curFood === dog.recommendedFood
      ? 'exact'
      : dog.curFood < upperLimit && dog.curFood > lowerLimit
      ? 'okay'
      : dog.curFood < lowerLimit
      ? 'little'
      : 'much';
});

console.log(dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(`Sarah's Dog is eating too ${sarahsDog.okayAmount}`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.okayAmount == 'much').flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => dog.okayAmount == 'little').flatMap(dog => dog.owners);

// 4.
console.log(ownersEatTooMuch.join(' and ') + ' dogs eat too much!');
console.log(ownersEatTooLittle.join(' and ') + ' dogs eat too little!');

// 5.
console.log(dogs.some(dog => dog.okayAmount === 'exact'));

// 6.
console.log(dogs.some(dog => dog.okayAmount === 'okay'));

// 7.
const dogsOkayFood = dogs.filter(dog => dog.okayAmount === 'okay');

console.log(dogsOkayFood);

// 8.
const dogsSorted = dogs.slice().sort((dogA, dogB) => dogA.recommendedFood - dogB.recommendedFood);

console.log(dogsSorted);
