const readline = require("readline");

const { orderState } = require('./orderState');

class Chashier {
    constructor() {
        this.count = 1;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    takeOrder(orders) {
        const that = this;
        this.rl.on('line', function (line) {
            orderState.pendingOrder(that.count, line);
            that.count += 1;
        })
        .on('close', function () {
            process.exit();
        });
    }
}

module.exports = { Chashier };