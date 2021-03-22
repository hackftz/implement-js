const A = 1 << 0; // 0b00000001
const B = 1 << 1; // 0b00000010
const C = 1 << 2; // 0b00000100

const ABC = A | B | C; // 0b00000111

const AB = ABC & ~C; // 0b00000111 & 0b11111011 = 0b00000011

const AB_HAS_B = (AB & B) === B; // (0b00000011 & 0b00000010)

const D = 3 << 0; // 0b00000011
console.log('🚀 ~ file: bit-operation.js ~ line 12 ~ D', D);
const E = 3 << 2; // 0b00001100
console.log('🚀 ~ file: bit-operation.js ~ line 13 ~ E', E);
const F = 3 << 4; // // 0b00110000
console.log('🚀 ~ file: bit-operation.js ~ line 16 ~ F', F);

const DEF = D | E | F;
console.log('🚀 ~ file: bit-operation.js ~ line 16 ~ DEF', DEF);
