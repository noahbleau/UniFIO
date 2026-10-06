class WinFIO {
    constructor(pin, mode, options = {}) {
        console.log('\x1b[36m%s\x1b[0m', `[WinFIO] Using WinFIO on pin ${pin}`);
        this.pin = pin;
        this.mode = mode;
        this.isMock = true;
    }

    write(value) {
        console.log('\x1b[36m%s\x1b[0m', `[WinFIO] Writing value ${value} on pin ${this.pin}`);
    }

    close() {
        console.log('\x1b[36m%s\x1b[0m', `[WinFIO] Closing pin ${this.pin}`);
    }
}

module.exports = { WinFIO };