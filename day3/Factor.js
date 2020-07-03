function isFactor(number, potentialFactor) {
    return number % potentialFactor === 0;
}

function factors(number) {
    const factorSet = new Set();
    for (let pod = 1; pod <= Math.sqrt(number); pod++) {
        if (isFactor(pod)) {
            factorSet.add(pod);
            factorSet.add(number/pod);
        }
    }
    return factorSet;
}

module.export = factors;