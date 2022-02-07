export class StringBuilder {
  #value = "";

  constructor(str) {
    this.#value = `${str}`;
  }

  get value() {
    return this.#value;
  }

  append(str) {
    this.#value = `${this.#value}${str}`;
    return this;
  }

  prepend(str) {
    this.#value = `${str}${this.#value}`;
    return this;
  }

  pad(str) {
    this.#value = `${str}${this.#value}${str}`;
    return this;
  }
}
