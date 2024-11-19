import { pipe } from "fp-ts/function";
import { Either, left, right, bindW, map } from 'fp-ts/Either';

function divide(rightNum: number) {
  return function (leftNum: number): Either<RangeError, number> {
    if (rightNum === 0) {
      return left(new RangeError('zero divide!'))
    }

    return right(leftNum / rightNum);
  }
}

function pow(rightNum: number) {
  return function (leftNum: number): Either<RangeError, number> {
    if (leftNum < 0) {
      return left(new RangeError('Imaginary Number Possible!'))
    }

    return right(Math.pow(leftNum, rightNum));
  }
}

function callerFunc(val: number): Either<RangeError, number> {
  return pipe(
    bindW('divided', () => divide(2)(val)),
    bindW('powed', () => pow(0.5)(val)),
    map(({ divided, powed }) => (divided * powed)),
  );
}
