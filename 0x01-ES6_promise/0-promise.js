export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    resolve('success');
    reject(Error('fail'));
  });

  return myPromise;
}
