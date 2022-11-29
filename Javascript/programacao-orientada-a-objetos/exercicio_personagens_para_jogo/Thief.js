const Character = require("./Character");

class Thief extends Character {
  attack(targetCharacter) {
    targetCharacter.lifePoints -=
      (this.attackPoints - targetCharacter.defensePoints) * 2;
  }
}

module.exports = Thief;
