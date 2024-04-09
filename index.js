function map(collection, callback) {
    // Convert object to array if collection is an object
    const values = Array.isArray(collection) ? collection : Object.values(collection);
  
    // Process the collection using the callback function
    const mappedArray = values.map(callback);
  
    return mappedArray;
  }
  
  // Test with an array
  const array = [1, 2, 3];
  const mappedArray = map(array, (num) => num * 2);
  console.log(mappedArray); // Output: [2, 4, 6]
  
  // Test with an object
  const object = { a: 1, b: 2, c: 3 };
  const mappedObject = map(object, (num) => num * 2);
  console.log(mappedObject); // Output: [2, 4, 6]

  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Example usage:
  const obj = { one: 1, two: 2, three: 3 };
  console.log(myKeys(obj)); // ["one", "two", "three"]

  function myFlatten(array, shallow, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && !shallow) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  // Example usage:
  const nestedArray = [1, [2], [3, [[4]]]];
  console.log(myFlatten(nestedArray)); // [1, 2, 3, 4]
  console.log(myFlatten(nestedArray, true)); // [1, 2, 3, [[4]]]

  