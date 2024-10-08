function getStudentsByLocation(List, city) {
  return List.filter((student) => student.location === city);
}
export default getStudentsByLocation;
