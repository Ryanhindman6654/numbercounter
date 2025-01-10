class NumberCounter {
    constructor() {
        this.current = 0;
        this.mode = 'normal'; // 'normal', 'reverse', or 'multiply'
        this.step = 1; // Default step for normal and reverse
        this.multiplier = 2; // Default multiplier
        this.max = Infinity; // Max value for counting
    }

    setMode(mode) {
        if (!['normal', 'reverse', 'multiply'].includes(mode)) {
            throw new Error("Mode must be 'normal', 'reverse', or 'multiply'.");
        }
        this.mode = mode;
    }

    setStep(step) {
        if (typeof step !== 'number' || step <= 0) {
            throw new Error("Step must be a positive number.");
        }
        this.step = step;
    }

    setMultiplier(multiplier) {
        if (typeof multiplier !== 'number' || multiplier <= 0) {
            throw new Error("Multiplier must be a positive number.");
        }
        this.multiplier = multiplier;
    }

    setMax(max) {
        if (typeof max !== 'number' || max <= 0) {
            throw new Error("Max must be a positive number.");
        }
        this.max = max;
    }

    next() {
        switch (this.mode) {
            case 'normal':
                this.current += this.step;
                break;
            case 'reverse':
                this.current -= this.step;
                break;
            case 'multiply':
                this.current = this.current === 0 ? this.multiplier : this.current * this.multiplier;
                break;
            default:
                throw new Error('Invalid counting mode.');
        }

        if (this.current > this.max) {
            throw new Error('Count exceeded maximum value.');
        }

        return this.current;
    }

    reset() {
        this.current = 0;
    }
}

module.exports = NumberCounter;
