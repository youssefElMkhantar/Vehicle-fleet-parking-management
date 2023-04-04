const FIZZ = 'Fizz';
const BUZZ = 'Buzz';
const FIZZBUZZ = 'FizzBuzz';

export const fizzbuzz = (n: number): string | (string | number)[] => {
  let arr: (string | number)[] = [];
  if (n < 1) {
    return 'please enter a number greater than 1';
  }
  if (n === 1) {
    return [1];
  }
  for (let i = 0; i < n; i++) {
    if ((i + 1) % 3 === 0 && !((i + 1) % 5 === 0)) {
      arr.push(FIZZ);
    } else if ((i + 1) % 5 === 0 && !((i + 1) % 3 === 0)) {
      arr.push(BUZZ);
    } else if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      arr.push(FIZZBUZZ);
    } else {
      arr.push(i + 1);
    }
  }
  return arr;
};
