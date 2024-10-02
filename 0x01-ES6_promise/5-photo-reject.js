export default function uploadPhoto(filename) {
  const myPromise = Promise.reject(Error(`${filename} cannot be processed`));
  return myPromise;
}
