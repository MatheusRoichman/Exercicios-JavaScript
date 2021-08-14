const convertTemp = require('./convertTemp');

// Testes com Celsius
test('19 Celsius para Kelvin', () => {
	expect(convertTemp(19, 'celsius', 'kelvin')).toBe(292.15);
});

test('2 Celsius para Fahrenheit', () => {
	expect(convertTemp(2, 'celsius', 'fahrenheit')).toBe(35.6);
});

// Testes com Fahrenheit
test('95 Fahrenheit para Celsius', () => {
	expect(convertTemp(95, 'fahrenheit', 'celsius')).toBe(35);
});

test('1.4 Fahrenheit para Kelvin', () => {
	expect(convertTemp(1.4, 'fahrenheit', 'kelvin')).toBe(256.15);
});

// Testes com Kelvin
test('0 Kelvin para Celsius', () => {
	expect(convertTemp(0, 'kelvin', 'celsius')).toBe(-273.15);
});

test('13 Kelvin para Fahrenheit', () => {
	expect(convertTemp(13, 'kelvin', 'fahrenheit')).toBe(-436.27);
})

// Testes de falha
test('Detecção de erro: Faltando parâmetros', () => {
	expect(convertTemp(43, 'kelvin')).toBe('Informações inválidas!');
});

test('Detecção de erro: Escala inválida', () => {
	expect(convertTemp(32, 'celso', 'kelvin')).toBe('Escalas inválidas!');
});