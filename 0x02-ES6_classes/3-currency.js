export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string' || typeof code != 'string')
      throw new TypeError('Invalid attribute type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  // Getter for 'code'
  get name() {
    return this._code;
  }
  // Setter for 'name'
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = value;
  }
  // Getter for 'name'
  get name() {
    return this._name;
  }
  // Setter for 'name'
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = newName;
  }
  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
