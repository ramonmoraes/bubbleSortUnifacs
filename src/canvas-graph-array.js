import { start } from "pretty-error";

("use strict");

export default class CanvasGraphArray {
  constructor(options = {}) {
    this.wrapper = options.wrapper;

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.baseArray = options.baseArray;

    this.setUpCanvas();
    this.setSpaceBetweenLines();
    this.setHeightPercent();
  }

  setUpCanvas() {
    const { wrapper, canvas } = this;
    canvas.id = "canvas";
    canvas.height = wrapper.clientHeight;
    canvas.width = wrapper.clientWidth;
    wrapper.appendChild(canvas);
  }

  setSpaceBetweenLines() {
    const { canvas } = this;
    this.spaceBetween = (canvas.clientWidth - 20) / this.baseArray.length;
  }

  setHeightPercent() {
    const { canvas } = this;
    const max = Math.max(... this.baseArray);
    this.heightPercent = max / canvas.clientHeight;
  }

  drawArray(array) {
    let posX = 5;

    this.clearCanvas();
    array.forEach(number => {
      this.drawLine(posX, number / this.heightPercent);
      posX += this.spaceBetween;
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  drawLine(xPos, height) {
    const { ctx, canvas } = this;
    const startHeight = canvas.clientHeight - 5;
    ctx.beginPath();
    ctx.moveTo(xPos, startHeight);
    ctx.lineTo(xPos, startHeight - height);
    ctx.stroke();
  }
}
