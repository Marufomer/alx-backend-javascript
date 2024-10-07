export default function getStudentsByLocation(array, text) {
  if (array instanceof Array) {
    return array.filter((e) => e.location === text);
  }
  return [];
}
