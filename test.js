var test = new ComplexNumber(1, 2);
var foo = test.real;
foo[0]  = test.imag;
foo[1]  = test.length;
foo[2]  = test.toString();
foo[3]  = test.plus(new ComplexNumber(1, 3));
foo[4]  = test.plus(1);
foo[5]  = test.minus(new ComplexNumber(2, 3));
foo[6]  = test.minus(1);
foo[7]  = test.times(new ComplexNumber(3, 4));
foo[8]  = test.times(2);
foo[9]  = test.divide(new ComplexNumber(1, 2));
foo[10] = test.divide(3);
foo[11] = test.recip();
foo[12] = test.arg();
foo[13] = test.abs();
foo[14] = test.conj();
foo[15] = test.negate();
foo[16] = test.exp();
foo[17] = test.sin();
foo[18] = test.cos();
foo[19] = test.tan();
foo[20] = test.log();
foo[21] = test.sqrt();
foo[22] = test.sinh();
foo[23] = test.cosh();
foo[24] = test.tanh();
foo[25] = ComplexNumber.realToComplex(1);
foo[26] = ComplexNumber.imagToComplex(2);
