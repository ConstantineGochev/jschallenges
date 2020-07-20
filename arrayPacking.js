function arrayPacking(integers) {
  return integers.map((int, idx) => int << (8 * (idx))).reduce((a,c) => a + c,0);
}

function arrayPacking(a) {
  return a.reduceRight((n, x) => (n << 8 | x) >>> 0, 0)
}
let arrayPacking = (a) => a.reduce((a, b, i) => a + (b << i*8) >>> 0);
