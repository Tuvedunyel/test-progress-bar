const svgContainer = document.getElementById("progress-wrap");
class ProgressBar {
  constructor(sqSize, percentage, strokeWidth) {
    (this.sqSize = sqSize),
      (this.percentage = percentage),
      (this.strokeWidth = strokeWidth);
  }
  viewBox() {
    return `0 0 ${this.sqSize} ${this.sqSize}`;
  }
  radius() {
    return (this.sqSize - this.strokeWidth) / 2;
  }
  dashArray() {
    return this.radius() * Math.PI * 2;
  }
  dashOffset() {
    return this.dashArray() - (this.dashArray() * (this.percentage / 2)) / 100;
  }
  rotate() {
    return `rotate(-180 ${this.sqSize / 2} ${this.sqSize / 2})`;
  }
  strokeWidthpx() {
    return this.strokeWidth + "px";
  }
  strokeDashArray() {
    return `stroke-dasharray: ${this.dashArray()}; stroke-dashoffset: ${this.dashOffset()}`;
  }
  svgGenerator() {
    return `<svg width="${this.sqSize}px" height="${
      this.sqSize
    }px" viewBox="${this.viewBox()}">
        <circle class="circle-background" cx="${
          this.sqSize / 2
        }" cy="0" r="${this.radius()}" transform="${this.rotate()}" stroke-width="${this.strokeWidthpx()}" />
        <circle class="circle-progress" cx="${
          this.sqSize / 2
        }" cy="0" r="${this.radius()}" stroke-width="${this.strokeWidthpx()}" transform="${this.rotate()}" style="${this.strokeDashArray()}" />

    </svg>
    <span class="circle-text">${this.percentage}%</span>`;
  }
}
svgContainer.innerHTML = new ProgressBar(200, 0, 15).svgGenerator();
