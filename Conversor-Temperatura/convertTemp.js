function convertTemp(temperatura, escalaOrigem, escalaDesejada) {

	const command = {
		'celsius': {
			'fahrenheit': (temperatura) => temperatura * 1.8 + 32,
			'kelvin': (temperatura) => temperatura + 273.15,
		},
		'fahrenheit': {
			'celsius': (temperatura) => (temperatura - 32) / 1.8,
			'kelvin': (temperatura) => (temperatura - 32) / 1.8 + 273.15,
		},
		'kelvin': {
			'celsius': (temperatura) => temperatura - 273.15,
			'fahrenheit': (temperatura) =>(temperatura - 273.15) * 1.8 + 32,
		}
	}

	const convertToFunc = command[escalaOrigem]
	if(!convertToFunc)throw new Error('Escala de Origem Inválida')

	const converter = convertToFunc[escalaDesejada]
	if(!converter)throw new Error('Escala de Desejada Inválida')

	if(!temperatura && temperatura !== 0)throw new Error('Temperatura é requirida')
	return converter(temperatura)

};

module.exports = convertTemp;