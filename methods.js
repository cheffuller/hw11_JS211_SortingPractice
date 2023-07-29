const map = (arr, fn) => {
  const newArray = [];
  for (const el of arr) {
    newArray.push(fn(el));
  }
  return newArray;
};

const reduce = (array, callbackFn, initialValue) => {
  let i = 0;
  if (initialValue === undefined) {
    initialValue = array[0];
    i++;
  }
  let accumulator = initialValue;
  for (i; i < array.length; i++) {
    accumulator = callbackFn(accumulator, array[i]);
  }
  return accumulator;
};

const filter = (array, callbackFn) => {
  const newArray = [];
  for (let el of array) {
    if (callbackFn(el)) {
      newArray.push(el);
    }
  }
  return newArray;
};
