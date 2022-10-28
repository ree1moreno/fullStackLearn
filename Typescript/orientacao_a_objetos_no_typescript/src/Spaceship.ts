class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    return this._name;
  }

  set name(name) {
    // ...
    this._name = name;
  }

  constructor(name: string, captain: string) {
    this.name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  public weapons: number;

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain);
    this.weapons = weapons;
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  erase() {
    this.name = "";
    this.captain = "";
  }
}

let ship = new Fighter("USS Enterprise", "James T. Kirk", 10);

ship.speed = 50;
ship.accelerate(50, 10);
ship.weapons = 20;
ship.name = "X-Wing";
