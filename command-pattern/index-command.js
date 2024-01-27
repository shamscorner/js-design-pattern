class EmailManager {
  constructor() {
    this.emails = []; // queue***
  }

  execute(command, ...args) {
    return command.execute(this.emails, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function overflowEmail(length) {
  // limit 10
  const emailLimit = 5;

  if (length >= emailLimit)
    return {
      successful: false,
      message: "Email queue is full at this moment. Please try later...",
    };

  return {
    successful: true,
  };
}

function SendEmailCommand(email, id) {
  return new Command((emails) => {
    const { successful, message } = overflowEmail(emails.length);

    if (!successful) return message;

    emails.push(id);
    return `You have successfully sent ${email} (${id})`;
  });
}

// For testing
const manager = new EmailManager();

console.log(manager.emails);

console.log(manager.execute(SendEmailCommand("Hi! I am John.", "123")));
console.log(manager.execute(SendEmailCommand("Hi! I am Alex.", "124")));
console.log(manager.execute(SendEmailCommand("Hi! I am Macy.", "125")));
console.log(manager.execute(SendEmailCommand("Hi! I am Liza.", "126")));
console.log(manager.execute(SendEmailCommand("Hi! I am Sharif.", "127")));
console.log(manager.execute(SendEmailCommand("Hi! I am Masud.", "128")));
console.log(manager.execute(SendEmailCommand("Hi! I am Masud.", "128")));
console.log(manager.execute(SendEmailCommand("Hi! I am Masud.", "128")));
console.log(manager.execute(SendEmailCommand("Hi! I am Masud.", "128")));

console.log(manager.emails);
