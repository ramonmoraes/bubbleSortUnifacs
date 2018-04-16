import BubbleSort from "./bubble-sort";
import CanvasGraphArray from "./canvas-graph-array";

const createArray = (arrayLength = 100) => {
  let newArr = [];
  for (let i = 0; i < arrayLength; i++) {
    newArr.push(Math.floor(Math.random() * 1000 + 1));
  }
  return newArr;
};

window.onload = () => {
  const array = createArray();
  const canvas = new CanvasGraphArray({
    wrapper: document.querySelector(".Canvas-Wrapper"),
    array
  });
  
  const requestAnimationCallback = (arg) => {
    canvas.drawArray(arg);
  };

  new BubbleSort({
    requestAnimationCallback,
    array 
    });

  // canvas.drawLine(25, 100);
  canvas.drawArray(array);
};
