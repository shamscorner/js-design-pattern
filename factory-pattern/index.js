class User {
  // constructor(user) {
  //   this.firstName = user.firstName;
  //   this.lastName = user.lastName;
  //   this.email = user.email;
  // }

  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// test
const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
});
console.log(user1);
console.log(user1.fullName());

const user2 = new User({
  firstName: "Alex",
  lastName: "Dane",
  email: "alex@example.com",
});
console.log(user2);
