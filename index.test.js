const test = require('ava');
const { sayHola } = require('.');

test('transcational email controller should get cart', async t => {
  t.plan(2)

  const name = 'Elias';

  t.is(sayHola(name), `Hola ${name}`);
  t.not(sayHola(name), `Hola Fulano`);
});

