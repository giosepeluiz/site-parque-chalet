function convertNumber(value: number, dec = 2) {
  const applyValue = value.toFixed(dec);
  return applyValue.toString().replace(".", ",");
}

export default convertNumber;
