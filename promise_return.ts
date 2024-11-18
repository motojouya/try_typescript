// const ERROR_ZERO_DIVIDE = 'ZERO_DIVIDE' as const;
// type ErrorString = typeof ERROR_ZERO_DIVIDE;
// 
// function divide(left: number, right: number): Promise<number> {
//   if (left === 0) {
//     return Promise.reject(ERROR_ZERO_DIVIDE);
//   }
// 
//   return Promise.resolve(left / right);
// }
// 
// function test(val: string) {
//   console.log(val);
// }
// 
// function chain() {
//   const result = divide(12, 3);
// 
//   result
//     .then(calcResult => console.log(calcResult + 10))
//     .catch(err => {
//       test(err);
//       if (err === ERROR_ZERO_DIVIDE) {
//          console.log('zero divide!');
//       } else {
//          console.log('到達不能');
//       }
//     });
// }
// 
// async function tryCatch() {
//   const result = divide(12, 3);
// 
//   try {
//     const awaitedResult = await result;
//     console.log(awaitedResult + 10);
// 
//   } catch (e) {
//     test(e);
//     if (e === ERROR_ZERO_DIVIDE) {
//       console.log('zero divide!');
//     } else {
//       console.log('到達不能');
//     }
//   }
// }
