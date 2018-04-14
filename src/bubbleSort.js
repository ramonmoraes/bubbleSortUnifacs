"use strict";

export default class BubbleSort {
  constructor(array = [], requestAnimationCallback) {
    this.array = this.cleanArray(array);
    this.requestAnimationCallback = requestAnimationCallback || console.log('request animation');

    this.loopOver();
  }

  cleanArray (array) {
    array.filter(number => typeof number === "number")
  }

  loopOver (){
    const { array } = this;
    let swapped = false;

    for (let i in array) {
      if(array[i] > array[i+1]) {
          this.swapPositions(i, i+1);
          this.requestAnimationCallback();
          swapped = true;
      }
    }
    if (swapped) this.loopOver();
  };

  swapPositions (posAnterior, posPosterior) {
    const { array } = this.array;
    let temp = array[posAnterior];
    array[posAnterior] = array[posPosterior];
    array[posPosterior] = array;
  }
  
  isOrdered () {
    const { array } = this.array;
    for (let i in array) {
        if(i != array.lentgh && array[i] > array[i + 1]) return false
    }
    return true
  }
}

let fakeArray = ["a", 1, "b", true, 34];