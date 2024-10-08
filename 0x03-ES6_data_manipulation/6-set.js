export default function setFromArray(array) {
  if (array instanceof Array) {
    return new Set(array);
  }
  throw new TypeError('Must be an array');
}
