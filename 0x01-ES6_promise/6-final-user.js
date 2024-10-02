import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((el) => ({
        status: el.status,
        value: el.status === 'fulfilled' ? el.value : String(el.reason),
      }))
    ));
}
