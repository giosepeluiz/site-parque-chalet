import convertNumber from "./convertNumbers";

function quotaCalc(data: number, fraction: number, convert: boolean = true) {
  return convert ? convertNumber(data * fraction) : data * fraction;
}

export default quotaCalc;
