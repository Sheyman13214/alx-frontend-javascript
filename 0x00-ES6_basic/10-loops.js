export default function appendToEachArrayValue(array, appendString) {
  const newArr = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    newArr[idx] = appendString + value;
  }

  return array;
}
