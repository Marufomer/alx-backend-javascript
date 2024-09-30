export default function appendToEachArrayValue(array, appendString) {
  const newArry = [];
  for (const value of array) {
    newArry.push(appendString + value);
  }

  return newArry;
}
