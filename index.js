const foo = [1, 2, 3];

/*
 * The problem.
 * After clicking on button there is the same result: 3.
 * Its because var `number` is hoisted and is moved to the top of his context (Window).
 */

/* Uncomment to check it
for (var i = 0; i < foo.length; i++) {
 var number = foo[i];
 document.getElementsByClassName('foo')[0].addEventListener('click', function () {
   console.log(number);
 });
}
*/

/*
 * Solution #1 - forEach.
 * forEach give us a argument of its current element, so we don't need to assign it into a any var.
 */
foo.forEach(number => {
  document.getElementsByClassName('foo')[0].addEventListener('click', () => console.log('#1', number));
})

/*
 * Solution #2 - let/const
 */

for (var i = 0; i < foo.length; i++) {
  let number = foo[i];
  const theSameNumber = number;
  document.getElementsByClassName('foo')[0].addEventListener('click', function (event) {
    console.log('#1', number);
    console.log('#2', theSameNumber);
  });
}

/*
 * Solution #3 - closure
 */
const clickHandler = number => {
  console.log('#3', number);
}

for (var i = 0; i < foo.length; i++) {
  var number = foo[i];
  document.getElementsByClassName('foo')[0].addEventListener('click', clickHandler.bind(null, number));
}

