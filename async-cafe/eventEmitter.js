const EventEmitter = require('events');
const Emitter = new EventEmitter();

class EventManager {
    constructor() {}

    on(name, callback) {
        Emitter.on(name, callback);
    }

    emit(name) {   
        return Emitter.emit(name);
    }
}

const eventEmitter = new EventManager();

module.exports = { eventEmitter };