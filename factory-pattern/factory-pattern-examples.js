const createObjectFromArray = ([key, value]) => ({
  [key]: value,
});

console.log(createObjectFromArray(["name", "John"]));
