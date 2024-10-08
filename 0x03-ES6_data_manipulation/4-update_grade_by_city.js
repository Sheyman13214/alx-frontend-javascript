function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter to get students in the specified city
  const studentCity = studentList.filter((student) => student.location === city);
  // Update grades using map
  const updatedStudents = studentCity.map((student) => {
    // Find grade object for student in newgrades array
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // Update N/A if grade is not found
    const updatedGrade = gradeObj ? gradeObj.grade : 'N/A';
    // Return new object with grade updated
    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}
export default updateStudentGradeByCity;
