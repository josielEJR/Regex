const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
console.log('foo.bar@gmail.com =>', emailRegex.test('foo.bar@gmail.com')) //true
console.log('foo.bar@gmail.com.br =>', emailRegex.test('foo.bar@gmail.com.br')) //true
console.log('foo.bar@gmail.com.br.br =>', emailRegex.test('foo.bar@gmail.com.br.br'))  //true
console.log('foo.bar@gmail. =>', emailRegex.test('foo.bar@gmail.')) //false
console.log('foo.bar@gmailcom =>', emailRegex.test('foo.bar@gmailcom')) //false
console.log('foo.bargmail.com =>', emailRegex.test('foo.bargmail.com')) //false
console.log('@gmail.com =>', emailRegex.test('@gmail.com')) //false

