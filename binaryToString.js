function binaryToString(binary) {
    if (binary.length < 1) return ''
    return binary.match(/.{1,8}/g).map(function(bin) {
       return String.fromCharCode(parseInt(bin,2))
    }).join('')
}
