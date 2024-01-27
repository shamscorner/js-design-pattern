// file: EmailManager.js
class EmailManager {
  constructor() {
    this.emails = []; // queue***
  }

  execute(command, ...args) {
    return command.execute(this.emails, ...args);
  }
}

// file: Command.js
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

// file: utils.js
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

// file: SendEmailCommand.js
function sendEmailCommand(email, id) {
  return new Command((emails) => {
    const { successful, message } = overflowEmail(emails.length);

    if (!successful) return message;

    emails.push(id);
    return `You have successfully sent ${email} (${id})`;
  });
}

// file: TrackEmailCommand.js
function trackEmailCommand(id) {
  return new Command((emails) => {
    const isEmailExist = emails.find((emailId) => emailId === id);

    if (!isEmailExist)
      return {
        successful: false,
        message: `Your email with the id - ${id} is not found!`,
      };

    return {
      successful: true,
      message: `Your email had sent a while ago with the id - ${id}.`,
    };
  });
}

// file: DispatchEmailCommand.js
function dispatchEmailCommand() {
  return new Command((emails) => {
    if (!emails.length) return `Your email queue is empty now.`;

    const dispatchedEmailId = emails.shift();
    return `Your email has been dispatched - ${dispatchedEmailId}`;
  });
}

// file: DispatchEmailCommand.js
function dispatchEmailByIdCommand(id, manager) {
  return new Command((emails) => {
    const { successful, message } = manager.execute(trackEmailCommand(id));

    if (!successful) return message;

    const index = emails.indexOf(id);
    emails.splice(index, 1);
    return `Your email has been dispatched - ${id}`;
  });
}

// file: CancelEmailCommand.js
// function cancelEmailCommand(id) {
// 	return new Command((emails) => {
// 		// cancel email implementation
// 	});
// }

// For testing
const manager = new EmailManager();

console.log(manager.emails);

console.log(manager.execute(sendEmailCommand("Hi! I am John.", "123")));
console.log(manager.execute(sendEmailCommand("Hi! I am Alex.", "124")));
console.log(manager.execute(sendEmailCommand("Hi! I am Macy.", "125")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Liza.", "126")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Sharif.", "127")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Masud.", "128")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Masud.", "128")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Masud.", "128")));
// console.log(manager.execute(sendEmailCommand("Hi! I am Masud.", "128")));

// console.log(manager.execute(trackEmailCommand("124")));
// console.log(manager.execute(trackEmailCommand("1244")));

console.log(manager.emails);

// console.log(manager.execute(dispatchEmailCommand()));
console.log(manager.execute(dispatchEmailByIdCommand("124", manager)));

console.log(manager.emails);

// take way:
// - shallow copy vs deep copy
// - function scope (global vs local)
// - array pass by value vs pass by reference
// - array -> splice, indexOf
