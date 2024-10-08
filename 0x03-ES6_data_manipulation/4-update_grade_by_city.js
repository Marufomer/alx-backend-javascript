export default function updateStudentGradeByCity(getListStudents, city, newGrade) {
  if (getListStudents instanceof Array) {
    return getListStudents
      .filter((e) => e.location === city)
      .map((e) => ({
        id: e.id,
        firstName: e.firstName,
        location: e.location,
        grade: (
          newGrade.filter((gr) => gr.studentId === e.id).pop() || {
            grade: 'N/A',
          }
        ).grade,
      }));
  }
  return [];
}
