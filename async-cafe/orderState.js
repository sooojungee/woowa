const { Order } = require('./order');

class OrderState {
    constructor() {
        this.pending = [];
        this.production = [];
        this.complete = [];
    }

    pendingOrder(id, orders) {
        orders.split(', ').forEach((order) => {
            const [menu, count] = order.split(':');
            for (let i = 0; i < count; i++) {
                const order = new Order(id, menu);
                this.pending.push(order);
            }
        });
    }
    
}

const orderState = new OrderState();

module.exports = { orderState };