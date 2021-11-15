const fatorial = require("./fatorial");

test('Fatorial de número normal', () => {
	expect(fatorial(4)).toBe(24);
});

test('Fatorial de número string', () => {
	expect(fatorial("4")).toBe(24);
});

test('Fatorial de 0', () => {
	expect(fatorial(0)).toBe(1);
});

test('Fatorial de 1', () => {
	expect(fatorial(1)).toBe(1);
});

test('Fatorial de número negativo', () => {
	expect(fatorial(-5)).toBe(`Valor inválido!`);
});

test('Teste de número inválido', () => {
	expect(fatorial('a1')).toBe('Valor inválido!');
});