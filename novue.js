const svgContainer = document.getElementById("progress-wrap");
// const sqSize = 200;
// let percentage = 0;
// const strokeWidth = 15;
const input = document.getElementById("progressInput");
class ProgressBar {
  constructor(sqSize, percentage, strokeWidth) {
    (this.sqSize = sqSize),
      (this.percentage = percentage),
      (this.strokeWidth = strokeWidth);
  }
  viewBod() {
    return `0 0 ${this.sqSize} ${this.sqSize}`;
  }
  radius() {
    return (this.sqSize - this.strokeWidth) / 2;
  }
  dashArray() {
    return this.radius * Math.PI * 2;
  }
  dashOffset() {
    return this.dashArray - (this.dashArray * (this.percentage / 2)) / 100;
  }
  rotate() {
    return `rotage(-180 ${this.sqSize / 2} ${this.sqSize / 2})`;
  }
  strokeWidthpx() {
    return this.strokeWidth + "px";
  }
  strokeDashArray() {
    return `stroke-dasharray: ${this.dashArray}; stroke-dashoffset: ${this.dashOffset}`;
  }
  svgGenerator() {
    return `<svg width="${this.sqSize}px" height="${this.sqSize}px" viewBox="${
      this.viewBox
    }">
        <circle class="circle-background" cx="${this.sqSize / 2}" cy="0" r="${
      this.radius
    }" transform="${this.rotate}" stroke-width="${this.strokeWidthpx}" />
        <circle class="circle-progress" cx="${this.sqSize / 2}" cy="0" r="${
      this.radius
    }" stroke-width="${this.strokeWidthpx}" transform="${this.rotate}" style="${
      this.strokeDashArray
    }" />

    </svg>
    <span class="circle-text">${this.percentage}%</span>`;
  }
}

svgContainer.innerHTML = new ProgressBar(200, 15, 15).svgGenerator();
// const viewBox = () => {
//   return `0 0 ${sqSize} ${sqSize}`;
// };

// const radius = () => {
//   return (sqSize - strokeWidth) / 2;
// };

// const dashArray = () => {
//   return radius() * Math.PI * 2;
// };

// const dashOffset = () => {
//   return dashArray() - (dashArray() * (percentage / 2)) / 100;
// };

// const rotate = () => {
//   return "rotate(-180 " + sqSize / 2 + " " + sqSize / 2 + ")";
// };

// const strokeWidthpx = () => {
//   return strokeWidth + "px";
// };

// const strokeDashArray = () => {
//   return `stroke-dasharray: ${dashArray()}; stroke-dashoffset: ${dashOffset()}`;
// };

// const svgGenerator = () => {
//   return (svgContainer.innerHTML = `<svg width="${sqSize}px" height="${sqSize}px" viewBox="${viewBox()}">
//         <circle class="circle-background" cx="${
//           sqSize / 2
//         }" cy="0" r="${radius()}" transform="${rotate()}" stroke-width="${strokeWidthpx()}" />
//         <circle class="circle-progress" cx="${
//           sqSize / 2
//         }" cy="0" r="${radius()}" stroke-width="${strokeWidthpx()}" transform="${rotate()}" style="${strokeDashArray()}" />

//     </svg>
//     <span class="circle-text">${percentage}%</span>`);
// };

// svgGenerator();

// input.addEventListener("change", (e) => {
//   percentage = e.target.value;
//   svgGenerator();
// });
