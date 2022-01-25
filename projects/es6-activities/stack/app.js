import Stack from "./stack.js";
import { Add, Times } from "./operation.js";

class OpsStack {
  constructor() {
    this.value = 0;
    this.operations = new Stack();
  }

  add(op) {
    this.value = op.apply(this.value);
    this.operations.add(op);
  }

  undo() {
    if (this.operations.isEmpty()) return false;
    this.value = this.operations.pop().undo(this.value);
  }
}

let s = new OpsStack();

s.add(new Add(1));
s.add(new Add(1));
s.add(new Times(2));
console.log("Current Value", s.value);
