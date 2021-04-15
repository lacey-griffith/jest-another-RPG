const { TestScheduler } = require('@jest/core');
const Enemy = require('../lib/Enemy.js');
const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion.js');

test('create enemy object', () => {
    const enemy = new Enemy('Frank', 'sword')

    expect(enemy.name).toBe('Frank')
    expect(enemy.weapon).toBe('sword')
    expect(enemy.health).toEqual(expect.any(Number))
    expect(enemy.strength).toEqual(expect.any(Number))
    expect(enemy.agility).toEqual(expect.any(Number))
    expect(enemy.potion).toEqual(expect.any(Object))
})