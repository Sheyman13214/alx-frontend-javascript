function createInt8TypedArray(length, position, value) {
  const array = new ArrayBuffer(length);
  const valu = new DataView(array);

  try {
    valu.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return valu;
}
