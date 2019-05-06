function fac(n) {
  if (n <= 1) {
    //console.log('return 1');
    return 1;
  } else {
    //console.log(`${n} * fac(${n-1})`);
    return n * fac(n-1);
  }
}

function factorial(n, p=1) {
  if (n <= 1) {
    //console.log('return', p);
    return p;
  } else {
    const result = n * p;
    //console.log(`factorial(${n-1}, ${result})`);
    return factorial(n-1, result);
  }
}

function perform(f) {
  let t0 = performance.now();
  console.log(f());
  let t1 = performance.now();
  console.log(t1 - t0, "ms");
}

const N = 10;
// 11348; maximum. Uncaught RangeError: Maximum call stack size exceeded.
perform(() => factorial(N));
//perform(() => fac(N));
