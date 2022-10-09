import convertNumber from "./convertNumbers";

function percentCalc(part, total){
    return convertNumber(((part*100)/total), 2);
} 

export default percentCalc;