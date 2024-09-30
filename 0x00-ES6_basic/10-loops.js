export default function appendToEachArrayValue(array, appendString) {
  const newArry = [...array];
  for (const [idx, value] of array.entries()) {
    newArry[idx] = appendString + value;
  }

  return newArry;
}
