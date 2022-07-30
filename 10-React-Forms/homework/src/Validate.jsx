export default function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password must have a number';
  }
  return errors;
};
