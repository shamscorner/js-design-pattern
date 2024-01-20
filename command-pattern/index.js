class EmailManager {
  constructor() {
    this.emails = []; // queue***
  }

  sendEmail(email, id) {
    const { successful, message } = this.overflowEmail();

    if (!successful) return message;

    this.emails.push(id);
    return `You have successfully sent ${email} (${id})`;
  }

  trackEmail(id) {
    const isEmailExist = this.emails.find((emailId) => emailId === id);

    if (!isEmailExist)
      return {
        successful: false,
        message: `Your email with the id - ${id} is not found!`,
      };

    return {
      successful: true,
      message: `Your email had sent a while ago with the id - ${id}.`,
    };
  }

  dispatchEmail() {
    if (!this.emails.length) return `Your email queue is empty now.`;

    const dispatchedEmailId = this.emails.shift();
    return `Your email has been dispatched - ${dispatchedEmailId}`;
  }

  dispatchEmailById(id) {
    const { successful, message } = this.trackEmail(id);

    if (!successful) return message;

    this.emails = this.emails.filter((emailId) => emailId !== id);
    return `Your email has been dispatched - ${id}`;
  }

  overflowEmail() {
    // limit 10
    const emailLimit = 5;

    if (this.emails.length >= emailLimit)
      return {
        successful: false,
        message: "Email queue is full at this moment. Please try later...",
      };

    return {
      successful: true,
    };
  }
}

// For testing
const manager = new EmailManager();

console.log(manager.emails);

console.log(manager.sendEmail("Hi! I am John.", "123"));
console.log(manager.sendEmail("Hi! I am Alex.", "124"));
console.log(manager.sendEmail("Hi! I am Macy.", "125"));
console.log(manager.sendEmail("Hi! I am Liza.", "126"));
console.log(manager.sendEmail("Hi! I am Sharif.", "127"));
console.log(manager.sendEmail("Hi! I am Masud.", "128"));
console.log(manager.sendEmail("Hi! I am Masud.", "128"));
console.log(manager.sendEmail("Hi! I am Masud.", "128"));
console.log(manager.sendEmail("Hi! I am Masud.", "128"));

console.log(manager.emails);

// console.log(manager.trackEmail("123"));

// console.log(manager.trackEmail("1234"));

// console.log(manager.dispatchEmail());

// console.log(manager.dispatchEmailById("124234234"));

// console.log(manager.emails);

// take way:
// - stack vs queue
// - push, pop, shift, length
// - object destructuring & re-assign
// - liner js programming - do not use nested conditions
