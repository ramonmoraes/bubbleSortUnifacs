"use strict";

export default class BubbleSort {
  constructor(options = {}) {
    this.array = this.cleanArray(options.array);
    this.requestAnimationCallback = options.requestAnimationCallback;
    this.continuousLoop();
  }

  cleanArray(array = []) {
    return array.filter(number => typeof number === "number");
  }

  loopOver() {
    return new Promise((resolve, reject) => {
      const { array } = this;
      let swapped = false;
      setTimeout(() => {
        for (let i = 0; i < array.length; i++) {
          if (array[i] > array[i + 1]) {
            this.swapPositions(i);
            this.callAnimation(array);
            swapped = true;
          }
        }
        swapped ? resolve() : reject();
      }, 15);
    });
  }

  async continuousLoop() {
    let swapped = true;
    while (swapped) {
      try {
        await this.loopOver();
      } catch(err) {
        swapped = false;
        console.log(this.array);
      }
    }
  }

  swapPositions(posAnterior) {
    const { array } = this;
    let temp = array[posAnterior];
    array[posAnterior] = array[posAnterior + 1];
    array[posAnterior + 1] = temp;
  }

  callAnimation(array) {
    if (this.requestAnimationCallback) {
      this.requestAnimationCallback(array);
    }
  }
}
