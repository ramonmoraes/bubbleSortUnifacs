"use strict";

export default class CanvasGraphArray {
  constructor(options = {}) {
    this.wrapper = options.wrapper;

    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.array = options.array;

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
    const { canvas, array } = this;
    this.spaceBetween = (canvas.clientWidth - 20) / array.length;
  }

  setHeightPercent() {
    const { canvas, array } = this;
    const max = Math.max(...array);
    this.heightPercent = max / canvas.clientHeight;
  }

  drawArray(array) {
    return new Promise((resolve, reject) => {
      const { heightPercent, spaceBetween } = this;
      let posX = 5;
      this.clearCanvas();
      array.forEach(number => {
        this.drawLine(posX, number / heightPercent);
        posX += spaceBetween;
      });
    });
  }

  clearCanvas() {
    const { ctx } = this;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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
