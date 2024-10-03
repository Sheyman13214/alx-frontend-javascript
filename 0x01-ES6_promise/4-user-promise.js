function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}

// Export the function for external use
export default signUpUser;
