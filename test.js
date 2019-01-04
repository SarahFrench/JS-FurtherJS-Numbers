m = '52 bits'
max_m_bit = 1111111111111111111111111111111111111111111111111111;
max_m_rough = 1.4503599627370495;

1.4503599627370495 * 2^52

// m
// 1.2
// 1.23534
// 1.3534645745
// 1.9
// 1.923423
// 1.4503599627370495
// 1.9007199254740991


e = '11 bits'
max_e_bit = 11111111111;
max_e_dec = 2047;

//decimal number = m*2^e

let max_dec_number = max_m_rough * (Math.pow(2,1023));

console.log(max_dec_number);
console.log(Math.pow(2,1023.99999999));
console.log(Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

// console.log(max_dec_number);
