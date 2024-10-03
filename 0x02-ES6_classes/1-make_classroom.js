// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';
// Define the initializeRooms function
function initializeRooms() {
  // Create an array of ClassRoom objects with the sizes 19, 20, and 34
  const rooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
  // Return the array of ClassRoom objects
  return rooms;
}
// Export the initializeRooms function so it can be used in other files
export default initializeRooms;
