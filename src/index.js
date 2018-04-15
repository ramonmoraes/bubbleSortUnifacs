import BubbleSort from './bubble-sort';
import CanvasGraphArray from './canvas-graph-array';

let arr = [1,2,3,4,5];

window.onload = ()=> {
    let bubble = new BubbleSort();
    let canvas = new CanvasGraphArray({
        wrapper: document.querySelector('.Canvas-Wrapper'),
        baseArray: arr,
    });

    // canvas.drawLine(25, 100);
    canvas.drawArray(arr);
}