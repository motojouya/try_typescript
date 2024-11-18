import type { Result } from 'neverthrow';
import { err, ok } from 'neverthrow';

function divide(right: number): (left: number) => Result<number, RangeError> {
  return function (left: number): Result<number, RangeError> {
    if (right === 0) {
      return err(new RangeError('zero divide!'))
    }

    return ok(left / right);
  }
}

function pow(right: number): (left: number) => Result<number, RangeError> {
  return function (left: number): Result<number, RangeError> {
    if (left < 0) {
      return err(new RangeError('imaginary number possible!'))
    }

    return ok(Math.pow(left, right));
  }
}

function callerFunc(val: number): Result<number, RangeError> {
  return ok(val + 10)
    .andThen(divide(2))
    .andThen(pow(0.5));
}

function bind<O extends object, E2, A, K extends string>(key: K, func: (data: O) => Result<A, E2>) {
  return function(beforeData: O): Result<O & { K: A }, E2> {
    return func(beforeData).map(a => ({
      ...beforeData,
      [key]: a,
    } as O & { K: A })); // 筆者ではうまいやり方がわからずasを利用
  }
}

function callerFunc2(val: number): Result<number, RangeError> {
  return ok({ val: val + 10 })
    .andThen(bind<{ val : number }, RangeError, number, 'divided'>('divided', ({ val }) => divide(2)(val)))
    .andThen(bind<{ val : number, divided: number }, RangeError, number, 'powed'>('powed', ({ val }) => pow(0.5)(val)))
    .map(({ divided, powed }) => (divided * powed));
}
