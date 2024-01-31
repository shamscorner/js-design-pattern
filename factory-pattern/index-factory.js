// function createUser({ firstName, lastName, email }) {
//   return {
//     firstName,
//     lastName,
//     email,
//   };
// }

const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${firstName} ${lastName}`;
  },
});

const createUser2 = ({ firstName, lastName, email }) => ({
  firstName: `Eng. ${firstName}`,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user2 = createUser2({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
});
console.log(user2);
console.log(user2.fullName());
