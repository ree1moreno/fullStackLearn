class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
  }

  attack(targetCharacter) {
    targetCharacter.lifePoints -=
      this.attackPoints - targetCharacter.defensePoints;
  }
}

module.exports = Character;
