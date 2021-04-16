const Potion = require('./Potion');

class Enemy {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);
    }
    getHealth() {
        return `The ${this.name}'s health is now ${this.health}!`;
    }
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }
    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    }
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }
    getDescription() {
        return `A ${this.name} has appeared holding a ${this.weapon}!`;
    }
}






module.exports = Enemy