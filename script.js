class Calculator {
  constructor(previousOutputTextElement, currentOutputTextElement) {
    this.previousOutputTextElement = previousOutputTextElement;
    this.currentOutputTextElement = currentOutputTextElement;
    this.clear();
  }

  clear() {
    this.currentOutput = "";
    this.previousOutput = "";
    this.operation = undefined;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOutputTextElement = document.querySelector(
  "[data-previous-output]"
);
const currentOutputTextElement = document.querySelector(
  "[data-current-output]"
);
