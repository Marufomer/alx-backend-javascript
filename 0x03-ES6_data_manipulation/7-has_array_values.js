// returns a boolean if all the elements in the array exist within the set.
export default function hasValuesFromArray(set, array) {
  return array.every((e) => set.has(e));
}
