const {ClassifierAlpha} = require('./ClassifierAlpha');
const {PrimeAlpha} = require('./PrimeAlpha');

for (let i = 2; i < 10; i++) {
    const classifier = new ClassifierAlpha(i);
    const prime = new PrimeAlpha(i);
    let text = classifier.isPerfect() ? 'perfect' : '';
    text += classifier.isAbundant() ? 'abundant' : '';
    text += classifier.isDeficient() ? 'deficient' : '';
    text += prime.isPrime() ? ', prime': '';
    console.log(`${i} : ${text}`);
}