class UniFIO {
    constructor(pin, mode, options = {}) {
        console.log('\x1b[36m%s\x1b[0m', `[UniFIO] Using UniFIO on pin ${pin}`);
        this.pin = pin;
        this.mode = mode;
        this.isMock = true;
    }

    write(value) {
        console.log('\x1b[36m%s\x1b[0m', `[UniFIO] Writing value ${value} on pin ${this.pin}`);
    }

    close() {
        console.log('\x1b[36m%s\x1b[0m', `[UniFIO] Closing pin ${this.pin}`);
    }
}

module.exports = { UniFIO };