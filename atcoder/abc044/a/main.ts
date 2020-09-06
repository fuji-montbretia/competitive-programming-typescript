import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf8').split(/\n/);

const calcPrice = (n: number, k: number, x: number, y: number) => {
  const price = Math.min(k, n) * x + Math.max(0, n - k) * y;
  return price;
};

console.log(calcPrice(+inputs[0], +inputs[1], +inputs[2], +inputs[3]));
