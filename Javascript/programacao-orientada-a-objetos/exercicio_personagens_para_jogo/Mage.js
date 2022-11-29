const Character = require("./Character");

class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  attack(targetCharacter) {
    targetCharacter.lifePoints -=
      this.attackPoints + this.magicPoints - targetCharacter.defensePoints;
  }

  heal(targetCharacter) {
    targetCharacter.lifePoints += this.magicPoints * 2;
  }
}

module.exports = Mage;
