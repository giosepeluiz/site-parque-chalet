import convertNumber from "./convertNumbers";

function percentCalc(part: number, total: number, convert: boolean = true) {
  return convert ? convertNumber((part * 100) / total, 2) : (part * 100) / total;
}

export default percentCalc;
