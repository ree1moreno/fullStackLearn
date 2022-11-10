class Account {
  // usar # para deixar o atributo privado
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return `Saldo: ${this.#balance}`;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "isaac@email.com",
  password: "123456",
};

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance("isaac@email.com", "123456"));

// myAccount.#password = "888888"; // Property '#password' is not accessible outside class 'Account' because it has a private identifier.
// console.log(myAccount);
