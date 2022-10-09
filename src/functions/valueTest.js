function valueTest(value){
    const valid = (value < 0 || value > 100000) ? 0 : value;
    const currency = valid.toString().replace(',','.');
    return Number(currency);
}

export default valueTest;