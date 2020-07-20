const binarySwap = input => (
  input instanceof Function ? binarySwap(input())
  : Array.isArray(input) ? input.length < 2 ? binarySwap(input[0]) : input.map(binarySwap)
  : input ^ 1
)
