const { factors } = require('./Factor.js');

function PrimeAlpha(number) {
    this.number = number;
}

PrimeAlpha.prototype.isPrime = function() {
    let primeSet = [1, this.number];
    return this.number > 1 && this.equalSet(factors(this.number), primeSet);
}   

PrimeAlpha.prototype.equalSet = function (aset, bset) {
    if (aset.length!== bset.length) return false;
    for (var a of aset) if (!bset.includes(a)) return false;
    return true;
}

module.exports = { PrimeAlpha };