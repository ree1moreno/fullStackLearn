class Wallet {
  #amount;
  #username;

  constructor() {
    this.#amount = 100.99 * 100;
  }

  get amount() {
    return this.#amount / 100;
  }

  set username(newUsername) {
    if (typeof newUsername === "string") {
      this.#username = newUsername;
    } else {
      console.error(`username must be of type string.`);
    }
  }

  get username() {
    return this.#username;
  }
}

const myWallet = new Wallet();
console.log(myWallet.amount);

myWallet.username = "Isaac";
// myWallet.username = 1;
console.log(myWallet.username);

myWallet.username += " Pontes";
console.log(myWallet.username);
