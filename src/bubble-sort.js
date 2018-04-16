"use strict";

export default class BubbleSort {
  constructor(options = {}) {
    this.array = this.cleanArray(options.array);
    this.requestAnimationCallback = options.requestAnimationCallback;
    this.continuousLoop();
    console.log(this.array);
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
        swapped ? resolve(swapped) : reject(swapped);
      }, 15);
    });
  }

  async continuousLoop() {
    let swapped = true;
    while(swapped) {
      swapped = this.loopOver();
      await swapped;
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

  isLastPosition(pos) {
    const { array } = this;
    return pos === array.length - 1;
  }

  isOrdered() {
    const { array } = this;
    for (let i in array) {
      if (i != array.lentgh && array[i] > array[i + 1]) return false;
    }
    return true;
  }
}
