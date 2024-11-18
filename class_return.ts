// const ERROR_ZERO_DIVIDE = 'ZERO_DIVIDE' as const;
// type ErrorString = typeof ERROR_ZERO_DIVIDE;
// 
// class Result {}
// 
// class CustomError<E = unknown> extends Result {
//   constructor(public readonly error: E) { super() }
// }
// 
// class Success<A = unknown> extends Result {
//   constructor(public readonly data: A) { super() }
// }
// 
// function divide(left: number, right: number): Result {
//   if (left === 0) {
//     return new CustomError<ErrorString>(ERROR_ZERO_DIVIDE);
//   }
// 
//   const calcResult = left / right;
// 
//   return new Success<number>(calcResult);
// }
// 
// const result = divide(12, 3);
// if (result instanceof Success) {
//   test(result.data);
// }
// 
// function test(val: number) {
//   console.log(val + 10);
// }
// 
// const a: any = 'aaa';
// test(a);
