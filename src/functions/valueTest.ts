// Função para validação de entrada de número

function valueTest(value: number) {
  const isNumber = Number.isNaN(value) ? 0 : value;
  const isNotNull = isNumber !== null ? isNumber : 0; // Verifica se o campo não é nulo (padrão inicial)
  const isMinMaxNumber = isNotNull < 0 || isNotNull > 100000 ? 0 : isNotNull; // Verifica se o número está entre 0 e 100.000
  const currency: string = isMinMaxNumber.toString().replace(",", "."); // Substitui a virgula para ponto flutuante
  return Number(currency);
}

export default valueTest;
