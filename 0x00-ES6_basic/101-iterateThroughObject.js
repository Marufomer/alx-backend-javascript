export default function iterateThroughObject(reportWithIterator) {
  let name = '';
  for (const [index, value] of reportWithIterator.entries()) {
    name += index + 1 !== reportWithIterator.length ? `${value} | ` : `${value}`;
  }
  return name;
}
