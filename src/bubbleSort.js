"use strict";

export default class BubbleSort {
  constructor(options = {}) {
    this.array = options.array
      ? this.cleanArray(array)
      : this.generateRandomArray();
    this.requestAnimationCallback = options.requestAnimationCallback;

    this.loopOver();
  }

  cleanArray(array) {
    return array.filter(number => typeof number === "number");
  }

  loopOver() {
    const { array } = this;
    let swapped = true;

    while (swapped) {
      swapped = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          this.swapPositions(i);
          this.callAnimation(array);
          swapped = true;
        }
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
    if (this.requestAnimationCallback === undefined) {
    } else {
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

  generateRandomArray() {
    let newArr = [];
    for (let i = 0; i < 100; i++) {
      newArr.push(Math.floor(Math.random() * 1000 + 1));
    }
    return newArr;
  }
}
