function solution1(integers) {
  return integers.map((int, idx) => int << (8 * (idx))).reduce((a,c) => a + c,0);
}

function solution2(a) {
  return a.reduceRight((n, x) => (n << 8 | x) >>> 0, 0)
}
let solution3 = (a) => a.reduce((a, b, i) => a + (b << i*8) >>> 0);

module.exports = {
  solution1,
  solution2,
  solution3,
}
