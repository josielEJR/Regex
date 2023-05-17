const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
console.log('Josiel.br@gmail.com =>', emailRegex.test('Josiel.br@gmail.com'))//true
console.log('Josiel.br@gmail.com.br =>', emailRegex.test('Josiel.br@gmail.com.br'))//true
console.log('Josiel.br@gmail.com.br.br =>', emailRegex.test('Josiel.br@gmail.com.br.br'))//true
console.log('Josiel.br@gmail. =>', emailRegex.test('Josiel.br@gmail.')) //false
console.log('Josiel.br@gmailcom =>', emailRegex.test('Josiel.br@gmailcom')) //false
console.log('Josiel.brgmail.com =>', emailRegex.test('Josiel.brgmail.com')) //false
console.log('@gmail.com =>', emailRegex.test('@gmail.com')) //false
