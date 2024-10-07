export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    const arrayId = array.map((e) => e.id);
    return arrayId.reduce((prev, next) => prev + next);
  }
  return [];
}
