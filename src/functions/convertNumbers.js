function convertNumber(value, dec){
    const applyValue = value.toFixed(dec);
        return applyValue.toString().replace('.', ',');
    
}

export default convertNumber;