type Result<A, E> = [null, A] | [E, null];

function execute<A, E>(func: () => Result<A, E>): E | A {
  const [err, data] = func();
  if (err) {
    return err;
  } else {
    return data;
  }
}
// Type 'A | null' is not assignable to type 'A | E'.
//   Type 'null' is not assignable to type 'A | E'.
