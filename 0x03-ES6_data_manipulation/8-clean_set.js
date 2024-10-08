export default function cleanSet(set, startString) {
  const array = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const val of set.values()) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      const valSubString = val.substring(startString.length);

      if (valSubString && valSubString !== val) {
        array.push(valSubString);
      }
    }
  }
  return array.join('-');
}
