// Export the function for external use
export default function handleResponseFromAPI(promise) {
  const objresp = { status: 200, body: 'success' }
  return promise
    .then(() => objresp)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
