const { factors } = require('./Factor.js');

function ClassifierAlpha(number = 0) {
    this.number = number;
}

ClassifierAlpha.prototype.isPerfect = function () {
    const currentFactor = factors(this.number);
    return (this.sum(currentFactor) - this.number) == this.number;
}

ClassifierAlpha.prototype.isAbundant = function() {
    const currentFactor = factors(this.number);
    return (this.sum(currentFactor) - this.number) > this.number 
}

ClassifierAlpha.prototype.isDeficient = function () {
    const currentFactor = factors(this.number);
    return (this.sum(currentFactor) - this.number) < this.number 
}

ClassifierAlpha.prototype.sum = function(factors) {
    return factors.reduce((total, factor) => total + factor, 0);
}


module.exports = { ClassifierAlpha };
