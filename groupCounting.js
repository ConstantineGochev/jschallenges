function solution1 (s) {
  let ret = 0;
  s = s.split('');

  const count = (str, char) => {
    if (str.length < 1) return 0;
    for (var i=1, count=1; i<s.length; i++) {
      if (str[i] == str[0]) {
          count++;
        } else {
          break;
        }
     }
     return count;
  }

  while (s.length) {
      let left = s[0];
      let cntleft = count(s, s[0]);
      let cntright = count(s.slice(cntleft), Number(s[0])^1 )
      console.log(s, cntleft, cntright);
      if (cntright >= cntleft) ret++;
      s = s.slice(1);
      console.log(s, cntleft, cntright);
  }

  return ret;
}
module.exports = {solution1}
