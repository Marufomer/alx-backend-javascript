export default function signUpUser(firstName, lastName) {
  const myPromise = Promise.resolve({ firstName, lastName });
  return myPromise;
}
