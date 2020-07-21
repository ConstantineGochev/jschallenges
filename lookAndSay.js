function solution1(data,len) {
  function next(token) { return '' + token.length + token[0]; }
  function process() { return data = data.match(/(\d)\1*/g).map(next).join(''); }
  return Array.apply(0, Array(len)).map(process);
}


function solution2(number) {
  number = number + "";
  let ret = [];
  let char = number[0];
  let start = 0;
  for (var i=1; i<=number.length; i++) {
    if (number[i] !== char) {
      ret.push(i - start);
      ret.push(char)
      start = i;
      char = number[i];
    }
  }

  return Number(ret.join(''))
}


module.exports = {
  solution1,
  solution2
}
