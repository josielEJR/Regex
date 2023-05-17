const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
console.log('foo.bar@gmail.com =>', emailRegex.test('foo.bar@gmail.com'))
console.log('foo.bar@gmail.com.br =>', emailRegex.test('foo.bar@gmail.com.br'))
console.log('foo.bar@gmail.com.br.br =>', emailRegex.test('foo.bar@gmail.com.br.br'))
console.log('foo.bar@gmail. =>', emailRegex.test('foo.bar@gmail.'))
console.log('foo.bar@gmailcom =>', emailRegex.test('foo.bar@gmailcom'))
console.log('foo.bargmail.com =>', emailRegex.test('foo.bargmail.com'))
console.log('@gmail.com =>', emailRegex.test('@gmail.com'))

