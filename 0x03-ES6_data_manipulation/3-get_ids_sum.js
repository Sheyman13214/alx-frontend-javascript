function getStudentIdsSum(List) {
  const InitialValue = 0;
  return List.reduce((accumulator, student) => accumulator + student.id, InitialValue);
}
export default getStudentIdsSum;
