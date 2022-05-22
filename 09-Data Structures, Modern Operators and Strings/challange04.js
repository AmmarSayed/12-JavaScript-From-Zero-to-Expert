//Coding Challenge #4
/*

LWrite a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):

underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase   ✅
firstName        ✅✅
someVariable     ✅✅✅
calculateAge     ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data


GOOD LUCK 😃
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// 1
document.querySelector('button').addEventListener('click', function () {
  convertCase(document.querySelector('textarea').value);
});

function convertCase(text) {
  const importedData = text.split('\n');
  const newArr = [];
  let longestString = 0;

  for (const variable of importedData) {
    let newStr = '';

    for (const [i, l] of [...variable.toLowerCase().trim()].entries()) {
      //if litter == "_" skip
      if (l === '_') continue;
      // if the previouse litter == "_" , convert the litter and push it to thenew string
      if (variable[i - 1] === '_') newStr += l.toUpperCase();
      else newStr += l.toLowerCase();
    }
    if (newStr === '') continue;
    if (newStr.length > longestString) longestString = newStr.length;
    newArr.push(newStr);
  }

  for (const [i, val] of newArr.entries()) {
    console.log(`${val.padEnd(longestString + 2)} ${'✅'.repeat(i + 1)}`);
  }
}
