class Calculator {
    constructor(value) {
      this.value = value;
    }
  
    add(num) {
      this.value += num;
      return this;
    }
  
    sub(num) {
      this.value -= num;
      return this;
    }
  
    result() {
      return this.value;
    }
  }

  function Calculate(initialValue) {
    return new Calculator(initialValue);
  }
  console.log(' Output :',Calculate(10).add(4).sub(2).result())