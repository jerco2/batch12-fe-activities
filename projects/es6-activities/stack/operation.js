class Operation {
  constructor(val) {
    this.value = val;
  }
}

export class Add extends Operation {
  apply(value) {
    return value + this.value;
  }

  undot(value) {
    return value - this.value;
  }
}

export class Times extends Operation {
  apply(value) {
    return value * this.value;
  }
  undo(value) {
    return value / this.value;
  }
}
