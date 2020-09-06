import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf8').split(/\n/);

const calc = (a: number, b: number, h: number) => ((a + b) * h) / 2;

console.log(calc(+inputs[0], +inputs[1], +inputs[2]));
