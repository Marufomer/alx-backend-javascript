export default function getFullResponseFromAPI(success) {
  const mypromise = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });

  return mypromise;
}
