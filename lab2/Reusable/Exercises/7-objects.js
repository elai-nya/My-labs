"use strict";

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = {
    name: "Elaine",
  };
  let obj2 = {
    name: "Lilith",
  };
  obj1.name = "Julia";
  obj2.name = "Alice";

  obj1.name = "4";
  // return (obj1, obj2);
};

// console.log(fn());

/* It will return only the second object because the first object is constant */

module.exports = { fn };
