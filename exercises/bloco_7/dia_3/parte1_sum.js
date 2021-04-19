const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4,5), 9, 'sum(4,5) = 9');

assert.strictEqual(sum(0,0), 0, 'sum(0,0) = 0');

/**
 * Dentro de assert.throws deve ser usado arrow function para evitar a execução da função que será testada.
*/

// Verifica se existe um erro
// assert.throws(() => sum(4,"5"));

// Verifica a mensagem de erro
assert.throws(() => sum(4,"5"), /^Error: parameters must be numbers$/);
