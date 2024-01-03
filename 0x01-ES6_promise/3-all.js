import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(values[0].body, values[1].firstName, values[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}

// alternative solution
// import { uploadPhoto, createUser } from './utils';

// export default function handleProfileSignup() {
//   Promise.all([uploadPhoto(), createUser()])
//     .then(([photoResponse, userResponse]) => {
//       console.log(
//         photoResponse.body,
//         userResponse.firstName,
//         userResponse.lastName,
//       );
//     })
//     .catch(() => {
//       console.log('Signup system offline');
//     });
// }