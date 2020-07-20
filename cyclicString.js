function cyclicString(s) {
  var i=1;
  while(!s.startsWith(s.slice(i)))
  {
    i++;
  }
  return i;
}
function cyclicString (str) {
  function getAllSubstrings(str) {
    var i, j, result = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }
  console.log(str);
  let substrings = getAllSubstrings(str);
  console.log(substrings);
  let min = Number.MAX_SAFE_INTEGER;
  substrings.map(ss => {
    //console.log("test substring ", ss)
    let test = ss.repeat( Math.round(str.length / ss.length) + 1)
    if (-1 != test.search(str)) {
      //console.log("new  for %s - %s -- %s-> %s", ss, str, min, ss.length)
      min = Math.min(min, ss.length);
    }
  })

  return min;
}
