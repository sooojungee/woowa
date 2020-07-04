const { menu } = require('./util');

class Order {
    constructor(id, menu_name) {
        this.id = id;
        this.menu = menu_name;
        this.time = menu[menu_name].time;
    }
}


module.exports = { Order };