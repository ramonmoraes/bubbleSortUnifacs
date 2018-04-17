import BubbleSort from "./bubble-sort";
import CanvasGraphArray from "./canvas-graph-array";
import css from "../style.css";

window.onload = () => {
  const createArray = (arrayLength = 200) => {
    let newArr = [];
    for (let i = 0; i < arrayLength; i++) {
      newArr.push(Math.floor(Math.random() * 1000 + 1));
    }
    return newArr;
  };
  const initButton = document.getElementById("canvas-init-button");

  initButton.addEventListener("click", () => {
    const numbersInArray = document.getElementById("canvas-input").value;
    const array = createArray(numbersInArray);
    console.log(array);
    const canvas = new CanvasGraphArray({
      wrapper: document.querySelector(".Canvas-Wrapper"),
      array
    });

    const requestAnimationCallback = arg => {
      canvas.drawArray(arg);
    };

    new BubbleSort({
      requestAnimationCallback,
      array
    });
  });
};
