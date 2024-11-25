class NumberError {
  readonly #className = 'NumberError';
  constructor(public readonly message: string) {}
};

class StringError {
  readonly #className = 'StringError';
  constructor(public readonly message: string) {}
};

class IntegerError extends NumberError {
  readonly #className = 'IntegerError';
  constructor(public readonly message: string) { super(message); }
}

function someErr(val: number): number | NumberError {
  if (val < 0) {
    return new NumberError('test!');
  }
  return val;
}

function test(val: number): number {
  return val * 2;
}

const r = someErr(1);

if (r instanceof NumberError) {
  // Type Guardが効くのでpathにアクセスできる
  console.log('err is NotFoundError with path: ' + r.message);
} else {
  test(r);
}


