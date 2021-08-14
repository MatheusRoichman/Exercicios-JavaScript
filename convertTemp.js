function convertTemp(temperatura, escalaOrigem, escalaDesejada) {
	
  const escalas = ['celsius', 'fahrenheit', 'kelvin']
	
  if ((!temperatura && temperatura !== 0) || !escalaOrigem || !escalaDesejada)  {
	  return 'Informações inválidas!';
  } else if (!escalas.includes(escalaOrigem) || !escalas.includes(escalaDesejada)) {
  	return 'Escalas inválidas!'
  } else {
  	if (escalaOrigem === 'celsius' && escalaDesejada === 'fahrenheit') {
  			return temperatura * 1.8 + 32;
    }	else if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'celsius') {
  	  	return (temperatura - 32) / 1.8;
    } else if (escalaOrigem === 'celsius' && escalaDesejada === 'kelvin') {
  	  	return temperatura + 273.15;
  	} else if (escalaOrigem === 'kelvin' && escalaDesejada === 'celsius') {
  	    return temperatura - 273.15;
  	} else if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'kelvin') {
  		return (temperatura - 32) / 1.8 + 273.15;
  	} else { 
  		return (temperatura - 273.15) * 1.8 + 32;
  	};
  };
  
};

module.exports = convertTemp;