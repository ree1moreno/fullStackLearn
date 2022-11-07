class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Logado com sucesso!");
    } else {
      console.log("Email ou senha incorretos.");
    }
  }
}

const user1 = new User("user1", "user1@email.com", "123");

console.log(user1);

user1.login("user1@email.com", "123");
