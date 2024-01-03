// task 3
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(
        photoResponse.body,
        userResponse.firstName,
        userResponse.lastName,
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

// task 4
export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName, });
  });
}