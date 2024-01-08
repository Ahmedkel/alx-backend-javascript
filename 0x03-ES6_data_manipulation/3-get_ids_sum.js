export default function getStudentIdsSum(students) {
  // (sum) previous value with current(student) value
  return students.reduce((sum, student) => sum + student.id, 0);
}
