function dnaComplement (dna) {
  let map = { 'A': 'T', 'C': 'G', 'T':'A', 'G': 'C' }
  return dna.split('').map( char => map[char]).join('');
}
