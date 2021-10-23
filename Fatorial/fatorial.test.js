const fatorial = require("./fatorial");

test('Fatorial de número normal', () => {
	expect(fatorial(4)).toBe(24);
});

test('Fatorial de número nulo', () => {
	expect(fatorial(0)).toBe(`0: Nulo ou negativo!`);
});

test('Fatorial de número negativo', () => {
	expect(fatorial(-5)).toBe(`-5: Nulo ou negativo!`);
});

test('Teste de número inválido', () => {
	expect(fatorial('a1')).toBe('Número inválido!');
});