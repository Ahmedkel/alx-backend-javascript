export default function updateStudentGradeByCity(students, city, newGrades) {
  // First, filter the students living in the specified city
  const studentsInCity = students.filter(
    (student) => student.location === city,
  );

  // Then, map over the filtered students and update their grades
  return studentsInCity.map((student) => {
    // Find the new grade for the student in the newGrades array
    const newGradeObj = newGrades.find(
      (gradeObj) => gradeObj.studentId === student.id,
    );

    // If a new grade is found, update the student's grade
    // Otherwise, set the grade to 'N/A'
    const updatedStudent = { ...student };
    if (newGradeObj) {
      updatedStudent.grade = newGradeObj.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });
}
