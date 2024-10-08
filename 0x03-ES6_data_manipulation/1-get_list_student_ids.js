function getListStudentIds(List) {
  if (Array.isArray(List)) { // Check if list is an array
    return List.map((student) => student.id);
  }
  return []; // Return empty array 
}
export default getListStudentIds;
