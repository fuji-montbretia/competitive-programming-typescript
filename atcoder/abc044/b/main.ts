import * as fs from 'fs';

const inputs = fs.readFileSync('/dev/stdin', 'utf8').split(/\n/);

const isBeautifulString = (str: string): boolean => {
  const counts = {};
  Array.from(str).forEach((c) => {
    counts[c] = counts[c] === undefined ? 1 : counts[c] + 1;
  });
  return Object.values(counts).filter((v: number) => v % 2 === 1).length === 0;
};

if (isBeautifulString(inputs[0])) {
  console.log('Yes');
} else {
  console.log('No');
}
