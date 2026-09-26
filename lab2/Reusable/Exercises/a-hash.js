"use strict";

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
  Kris: "+380790879984",
  Susie: "+380790284047",
};

const findPhoneByName = (name) => {
  return phonebook[name] || console.error("Number not found");
};

// console.log(findPhoneByName("Kris"));
// console.log(findPhoneByName("Asriel"));

module.exports = { phonebook, findPhoneByName };
